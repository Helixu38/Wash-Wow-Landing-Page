import Dashboard from "@/components/admin/dashboard/page";
import AdminNavbar from "@/components/navigation/adminnavbar";
import React from "react";

export default function page() {
  return (
    <>
      <AdminNavbar />
      <Dashboard></Dashboard>
    </>
  );
}
