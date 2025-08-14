
"use client";
import LoginForm from "@/components/auth/LoginForm";
import Link from 'next/link';

export default function LoginPage() {
  return (
  <div className="relative flex-1 flex items-center justify-center bg-gray-100">
      <div className="absolute inset-0 z-0">
        <div id="particles-js" className="w-full h-full"></div>
      </div>
      <LoginForm />
    </div>
  );
}