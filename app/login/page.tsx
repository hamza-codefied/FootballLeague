"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useMutation } from "@tanstack/react-query";
// import { login as loginApi } from "@/lib/auth";
import toast from "react-hot-toast";
// import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // const { login, user } = useAuth();

  // Commented out API integration code for later use
  /*
  const { mutate, isPending } = useMutation({
    mutationFn: () => loginApi({ email, password }),
    onSuccess: (data) => {
      console.log("Login success data:", data);
      login(data.user, data.token);
      toast.success("Login successful!");
      if (data.user.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/player");
      }
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Login failed.");
    },
  });
  */

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if email contains "admin" (case-insensitive)
    if (email.toLowerCase().includes("admin")) {
      toast.success("Login successful! Redirecting to admin dashboard...");
      router.push("/admin");
    } else {
      toast.success("Login successful! Redirecting to player dashboard...");
      router.push("/player");
    }
    // mutate(); // Uncomment when API is re-enabled
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-8 relative">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-64 h-64 sm:w-80 sm:h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-64 h-64 sm:w-80 sm:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <motion.div
        className="w-full max-w-xs sm:max-w-md relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="bg-gray-800 border-gray-700 shadow-2xl px-4 py-6 sm:px-8 sm:py-10">
          <CardHeader className="text-center pb-6 sm:pb-8">
            <motion.div
              className="flex justify-center mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center p-2">
                <img
                  src="/images/logo.png"
                  alt="Luton Sylhet Division Cup"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>
            <CardTitle className="text-xl sm:text-2xl font-bold text-white">
              Welcome Back
            </CardTitle>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Sign in to your account
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300 text-sm">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 text-sm h-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300 text-sm">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 text-sm h-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 text-red-600 bg-gray-700 border-gray-600 rounded focus:ring-red-500"
                  />
                  <Label htmlFor="remember" className="text-sm text-gray-300">
                    Remember me
                  </Label>
                </div>
                <Link
                  href="#"
                  className="text-sm text-red-400 hover:text-red-300 text-right"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-sm"
                // disabled={isPending} // Uncomment when API is re-enabled
              >
                {/* {isPending ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Signing in...</span>
              </div>
            ) : (
              "Sign In"
            )} */}
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="text-red-400 hover:text-red-300 font-medium"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
