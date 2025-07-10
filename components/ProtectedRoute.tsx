"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading } = useAuth(); // ✅ we’ll add isLoading to AuthContext
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.push("/login");
      } else if (user.role !== "admin") {
        router.push("/dashboard");
      }
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    // ✅ Show loading state while auth is initializing
    return <div className="text-white text-center py-20">Loading...</div>;
  }

  return (
    <>{user?.role === "admin" || user?.role === "user" ? children : null}</>
  );
}
