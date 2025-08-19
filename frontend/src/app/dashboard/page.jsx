// app/dashboard/page.jsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/ui/Header";
import SensorConfig from "@/components/dashboard/SensorConfig";
import ConfigForm from "@/components/auth/ConfigForm";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SensorConfig />
      </main>
    </div>
  );
}