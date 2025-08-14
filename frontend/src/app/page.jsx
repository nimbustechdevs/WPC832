// src/app/page.jsx
// src/app/page.jsx
"use client";
import LoginForm from '@/components/auth/LoginForm';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#FAF9EE] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div id="particles-js" className="w-full h-full"></div>
      </div>
      <LoginForm />
    </div>
  );
}