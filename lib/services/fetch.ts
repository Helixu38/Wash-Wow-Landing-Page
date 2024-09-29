const baseUrl = "https://localhost:7276";

export interface FormFieldValue {
  fieldValue: string;
  formTemplateContentID: number;
  content: string;
}

export interface FormImage {
  url: string; // Add a new interface for the form image
}

export interface Form {
  id: string;
  status: string;
  formTemplateID: number;
  title: string;
  fieldValues: FormFieldValue[];
  formImages: FormImage[]; // Include the formImages field
}

export interface FetchFormResponse {
  value: Form[];
}

export async function fetchForm(): Promise<FetchFormResponse | null> {
  try {
    const response = await fetch(`${baseUrl}/forms`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data: FetchFormResponse = await response.json();
    return data; // Return the response data
  } catch (error) {
    console.error("Error fetching forms:", error);
    return null;
  }
}
