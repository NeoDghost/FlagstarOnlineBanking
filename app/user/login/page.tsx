"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Star } from "lucide-react"

export default function UserLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (email === "Katiedubay0@gmail.com" && password === "Katiedub1783") {
      if (typeof window !== "undefined") {
        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("userEmail", email)
      }
      router.push("/user/dashboard")
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-6">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-sm border-yellow-400/20">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="relative">
              <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-75 rounded-full blur-sm"></div>
            </div>
            <span className="text-2xl font-bold text-white">flagstar</span>
          </div>
          <CardTitle className="text-2xl text-white">Login to Your Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="text-white block mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="text-white block mb-2">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
              Login
            </Button>
          </form>

          <div className="text-center">
            <span className="text-gray-400">Don&apos;t have an account? </span>
            <Link href="/user/signup" className="text-yellow-400 hover:text-yellow-300">
              Sign up here
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
