"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#CBE4E8] to-[#F8F9FA]">
            {/* Login Card */}
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl">
                {/* Left Side - Image */}
                <div className="hidden md:flex md:w-1/2 bg-[#CBE4E8] items-center justify-center p-6">
                    <Image
                        src="/images/signup-image.png"
                        alt="Shopping Cart with Phone"
                        width={400}
                        height={400}
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-8">
                    <div className="mb-6 text-center">
                        <h1 className="text-3xl font-semibold text-gray-800">
                            Welcome Back 👋
                        </h1>
                        <p className="text-gray-600 mt-2">Log in to continue</p>
                    </div>

                    {/* Login Form */}
                    <form className="space-y-6">
                        {/* Email Input */}
                        <div className="relative">
                            <Mail className="absolute left-4 top-3.5 text-gray-500" />
                            <Input
                                type="text"
                                placeholder="Email or Phone Number"
                                className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-3 focus:ring-2 focus:ring-[#DB4444] focus:outline-none"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <Lock className="absolute left-4 top-3.5 text-gray-500" />
                            <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="w-full border border-gray-300 rounded-md pl-10 pr-10 py-3 focus:ring-2 focus:ring-[#DB4444] focus:outline-none"
                            />
                            <button
                                type="button"
                                className="absolute right-4 top-3.5 text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff /> : <Eye />}
                            </button>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="accent-[#DB4444]" />
                                <span>Remember me</span>
                            </label>
                            <Link href="/forgot-password" className="text-[#DB4444] hover:underline">
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Login Button */}
                        <Button
                            type="submit"
                            className="w-full bg-[#DB4444] hover:bg-[#B83232] text-white font-medium py-3 rounded-md"
                        >
                            Log In
                        </Button>

                        {/* Sign Up Link */}
                        <p className="text-center text-sm text-gray-600">
                            Don't have an account?{" "}
                            <Link href="/signup" className="text-[#DB4444] font-medium hover:underline">
                                Sign Up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
