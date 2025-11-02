"use client"

import { Users, BookOpen, MessageSquare, Home, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  currentPage: "home" | "students" | "courses" | "chatbot"
  onNavigate: (page: "home" | "students" | "courses" | "chatbot") => void
  onLogout?: () => void
}

export function Navigation({ currentPage, onNavigate, onLogout }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 border-b border-slate-700/50 backdrop-blur-md z-50 shadow-lg shadow-blue-500/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-3 font-bold text-xl hover:opacity-80 transition-opacity group"
        >
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <span className="bg-gradient-to-r from-blue-200 to-cyan-300 bg-clip-text text-transparent hidden sm:inline">
            Campus
          </span>
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { id: "home" as const, label: "Home", icon: Home },
            { id: "students" as const, label: "Students", icon: Users },
            { id: "courses" as const, label: "Courses", icon: BookOpen },
            { id: "chatbot" as const, label: "Chatbot", icon: MessageSquare },
          ].map(({ id, label, icon: Icon }) => (
            <Button
              key={id}
              variant={currentPage === id ? "default" : "ghost"}
              size="sm"
              onClick={() => onNavigate(id)}
              className={`gap-2 ${
                currentPage === id
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-300 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Button>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-1">
          {[
            { id: "home" as const, icon: Home },
            { id: "students" as const, icon: Users },
            { id: "courses" as const, icon: BookOpen },
            { id: "chatbot" as const, icon: MessageSquare },
          ].map(({ id, icon: Icon }) => (
            <Button
              key={id}
              variant={currentPage === id ? "default" : "ghost"}
              size="icon"
              onClick={() => onNavigate(id)}
              className={currentPage === id ? "bg-gradient-to-r from-blue-500 to-cyan-400" : "text-slate-300"}
            >
              <Icon className="w-4 h-4" />
            </Button>
          ))}
        </div>

        {onLogout && (
          <Button
            onClick={onLogout}
            variant="ghost"
            size="sm"
            className="gap-2 text-slate-400 hover:text-red-400 hover:bg-red-950/30"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        )}
      </div>
    </nav>
  )
}
