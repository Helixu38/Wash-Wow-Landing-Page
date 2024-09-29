"use client";
import React, { useEffect, useState } from "react";
import { fetchForm, Form, FormFieldValue } from "@/lib/services/fetch";
import { Button } from "@/components/ui/button";
import { updateFormStatus } from "@/lib/services/form";
import { updateUserRole } from "@/lib/services/form"; // Import the updateUserRole function
import Image from "next/image";

export default function Dashboard() {
  const [forms, setForms] = useState<Form[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const loadForms = async () => {
    const response = await fetchForm();
    if (response) {
      setForms(response.value);
    } else {
      setError("Failed to load forms.");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadForms();
  }, []);

  const handleApprove = async (formID: string) => {
    const userID = "ab5f9c9ef6c2410cadd126e027caef06"; // Hard-coded user ID
    const result = await updateFormStatus(formID, "APPROVED");
    if (result) {
      console.log("Form approved:", result);
      const roleUpdateResult = await updateUserRole(userID, "SHOP_OWNER"); // Change the role to SHOP_OWNER
      if (roleUpdateResult) {
        console.log("User role updated to SHOP_OWNER:", roleUpdateResult);
      } else {
        setError("Failed to update user role.");
      }
      await loadForms(); // Refetch forms after update
    } else {
      setError("Failed to approve form.");
    }
  };

  const handleReject = async (formID: string) => {
    const userID = "ab5f9c9ef6c2410cadd126e027caef06"; // Hard-coded user ID
    const result = await updateFormStatus(formID, "REJECTED");
    if (result) {
      console.log("Form rejected:", result);
      const roleUpdateResult = await updateUserRole(userID, "CUSTOMER"); // Change the role to CUSTOMER
      if (roleUpdateResult) {
        console.log("User role updated to CUSTOMER:", roleUpdateResult);
      } else {
        setError("Failed to update user role.");
      }
      await loadForms(); // Refetch forms after update
    } else {
      setError("Failed to reject form.");
    }
  };

  return (
    <div className="w-full h-full flex flex-col px-4 md:px-[58px] font-extrabold text-3xl text-primary gap-y-[39px] pt-[17px]">
      <h2>Applications</h2>
      {loading && <p>Loading forms...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {forms.length > 0 ? (
        forms.map((form) => (
          <div
            key={form.id}
            className="bg-white shadow-md rounded-lg p-6 mt-6 flex flex-col gap-4"
          >
            <h3 className="text-2xl font-bold">{form.status}</h3>
            <div className="grid grid-cols-2 gap-4">
              {form.fieldValues.map((field: FormFieldValue) => (
                <div
                  key={field.formTemplateContentID}
                  className="flex flex-col"
                >
                  <label className="font-medium text-lg">{field.content}</label>
                  <span className="border border-gray-300 rounded p-2 bg-gray-50">
                    {field.fieldValue}
                  </span>
                </div>
              ))}
              <div className="flex flex-col">
                <label className="font-medium text-lg">Shop Picture</label>
                <div className="border border-gray-300 rounded h-32 bg-gray-100 flex items-center justify-center">
                  {form.formImages && form.formImages.length > 0 ? (
                    <Image
                      width={300}
                      height={300}
                      src={form.formImages[0].url}
                      alt="Shop"
                      className="h-full w-full object-cover rounded"
                      unoptimized={true}
                    />
                  ) : (
                    <span className="text-gray-500">No image available</span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex w-full max-w-sm gap-10">
              <Button
                className="bg-primary font-medium text-white text-xl"
                onClick={() => handleApprove(form.id)} // Call handleApprove with the form ID
              >
                Approve
              </Button>
              <Button
                className="bg-red-500 font-medium text-white text-xl"
                onClick={() => handleReject(form.id)}
              >
                Reject
              </Button>
            </div>
          </div>
        ))
      ) : (
        <p>No forms available.</p>
      )}
    </div>
  );
}
