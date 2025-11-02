"use client"

import { useState } from "react"
import { WelcomePage } from "@/components/welcome-page"
import { LoginPage } from "@/components/login-page"
import { Navigation } from "@/components/navigation"
import { HomePage } from "@/components/home-page"
import { StudentDashboard } from "@/components/student-dashboard"
import { CourseDashboard } from "@/components/course-dashboard"
import { StudentCourseView } from "@/components/student-course-view"
import { ChatbotInterface } from "@/components/chatbot-interface"

export default function Page() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentPage, setCurrentPage] = useState<"home" | "students" | "courses" | "student-courses" | "chatbot">(
    "home",
  )

  if (showWelcome) {
    return <WelcomePage onStart={() => setShowWelcome(false)} />
  }

  if (!isAuthenticated) {
    return <LoginPage onLoginSuccess={() => setIsAuthenticated(true)} />
  }

  const renderPage = () => {
    switch (currentPage) {
      case "students":
        return <StudentDashboard />
      case "courses":
        return <CourseDashboard />
      case "student-courses":
        return <StudentCourseView />
      case "chatbot":
        return <ChatbotInterface />
      default:
        return <HomePage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} onLogout={() => setIsAuthenticated(false)} />
      <main className="pt-20">{renderPage()}</main>
    </div>
  )
}
