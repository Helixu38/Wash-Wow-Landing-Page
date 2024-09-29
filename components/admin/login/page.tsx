"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for Next.js app directory
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "@/lib/services/auth_services"; // Ensure the path is correct

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter(); // Initialize the router

  const handleLogin = async () => {
    setLoading(true); // Set loading state to true
    setError(""); // Reset error message

    const role = await login(email, password); // Call the login function

    if (role) {
      console.log("Login successful, role:", role);
      if (role != null) {
        router.push("/admin/dashboard"); // Redirect to the admin dashboard
      }
    } else {
      setError("Login failed. Please check your credentials."); // Show error if login fails
    }

    setLoading(false); // Set loading state to false
  };

  return (
    <div className="w-full h-full flex flex-col px-4 md:px-[58px] font-extrabold text-3xl text-primary gap-y-[39px] pt-[17px]">
      <h2>Log in</h2>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="text-xl font-medium" htmlFor="username">
          Username
        </Label>
        <Input
          type="text"
          id="username"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="text-xl font-medium" htmlFor="password">
          Password
        </Label>
        <Input
          type="password"
          id="password"
          placeholder=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex justify-end w-full max-w-sm">
        <Label
          className="font-normal italic text-xs"
          htmlFor="request-password"
        >
          Request New Password
        </Label>
      </div>
      <div className="flex w-full max-w-sm">
        <Button
          className="bg-primary font-medium text-white text-xl"
          onClick={handleLogin} // Call handleLogin on button click
          disabled={loading} // Disable button when loading
        >
          {loading ? "Logging in..." : "Login"}{" "}
          {/* Change button text based on loading state */}
        </Button>
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}{" "}
      {/* Show error message */}
    </div>
  );
}
