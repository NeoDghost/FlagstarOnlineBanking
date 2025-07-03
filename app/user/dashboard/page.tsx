"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, LogOut } from "lucide-react"

export default function UserDashboardPage() {
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isLoggedIn = localStorage.getItem("isLoggedIn")
      if (!isLoggedIn) {
        router.push("/user/login")
      }
    }
  }, [router])

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("isLoggedIn")
      localStorage.removeItem("userEmail")
    }
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-75 rounded-full blur-sm"></div>
          </div>
          <span className="text-2xl font-bold text-white">flagstar</span>
        </div>
        <Button
          variant="ghost"
          onClick={handleLogout}
          className="text-white hover:text-red-400 flex items-center space-x-2"
        >
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </Button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <Card className="mb-8 bg-white/10 backdrop-blur-sm border-yellow-400/20">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Welcome, Kathleen Mary Theresa</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-400">Account Number</p>
                <p className="text-xl font-semibold text-white">1130506678</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Account Balance</p>
                <p className="text-2xl font-bold text-green-500">$5,748,085,179.09</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="cursor-pointer transition-all hover:scale-105 bg-white/5 backdrop-blur-sm border-yellow-400/20 hover:border-yellow-400/40">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-lg font-semibold text-white">Fund Account</h3>
              <p className="text-sm text-gray-400">Add money to your account</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer transition-all hover:scale-105 bg-white/5 backdrop-blur-sm border-orange-500/20 hover:border-orange-500/40">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-lg font-semibold text-white">Make Transfer</h3>
              <p className="text-sm text-gray-400">Send money to others</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer transition-all hover:scale-105 bg-white/5 backdrop-blur-sm border-yellow-400/20 hover:border-yellow-400/40">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-white">Check History</h3>
              <p className="text-sm text-gray-400">View transaction history</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer transition-all hover:scale-105 bg-white/5 backdrop-blur-sm border-orange-500/20 hover:border-orange-500/40">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold text-white">Apply for Loan</h3>
              <p className="text-sm text-gray-400">Get a loan with ease</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
