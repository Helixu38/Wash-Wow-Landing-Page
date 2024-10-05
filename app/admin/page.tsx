import dynamic from "next/dynamic";
import React from "react";

const LoginForm = dynamic(() => import("@/components/admin/login/page"), {
  ssr: false,
});

export default function LoginPage() {
  return <LoginForm />;
}
