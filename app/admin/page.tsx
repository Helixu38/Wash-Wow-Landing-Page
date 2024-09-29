import LoginForm from "@/components/admin/login/page";
import AdminNavbar from "@/components/navigation/adminnavbar";
import React from "react";

export default function page() {
  return (
    <>
      <AdminNavbar />
      <LoginForm></LoginForm>
    </>
  );
}
