// app/(auth)/register/page.jsx
"use client";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <RegisterForm />
    </div>
  );
}