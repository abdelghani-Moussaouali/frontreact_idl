"use client"

import { GraduationCap, BookOpen, MessageSquare, Users } from "lucide-react"

export function HomePage({
  onNavigate,
}: { onNavigate: (page: "students" | "courses" | "student-courses" | "chatbot") => void }) {
  return (
    <section className="min-h-[calc(100vh-5rem)] px-4 py-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6 py-12">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full text-primary font-bold text-sm border border-primary/30">
              Abdelhamid Mehri University – Constantine 2
            </span>
          </div>
          <h1 className="text-7xl font-bold gradient-text text-pretty">Campus Management System</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Manage students, organize courses, and leverage AI for intelligent assistance.
          </p>
        </div>

        {/* Main Feature Cards - CHANGED: Removed Microservices and High Performance cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Student Management */}
          <div className="glass rounded-2xl p-8 cursor-pointer card-hover group" onClick={() => onNavigate("students")}>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center group-hover:from-primary/40 group-hover:to-primary/20 transition-all">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Student Management</h3>
              <p className="text-muted-foreground leading-relaxed">
                Add, update, delete, and search students. Manage enrollments and associate students with universities.
              </p>
              <div className="pt-2 flex items-center text-primary font-semibold text-sm">
                Explore <span className="ml-2">→</span>
              </div>
            </div>
          </div>

          {/* Course Management */}
          <div className="glass rounded-2xl p-8 cursor-pointer card-hover group" onClick={() => onNavigate("courses")}>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl flex items-center justify-center group-hover:from-secondary/40 group-hover:to-secondary/20 transition-all">
                <BookOpen className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Course Management</h3>
              <p className="text-muted-foreground leading-relaxed">
                Create and manage courses, organize schedules, and handle student enrollments across multiple
                categories.
              </p>
              <div className="pt-2 flex items-center text-secondary font-semibold text-sm">
                Explore <span className="ml-2">→</span>
              </div>
            </div>
          </div>

          {/* Student-Courses */}
          <div
            className="glass rounded-2xl p-8 cursor-pointer card-hover group"
            onClick={() => onNavigate("student-courses")}
          >
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-accent/10 rounded-xl flex items-center justify-center group-hover:from-accent/40 group-hover:to-accent/20 transition-all">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Student-Courses</h3>
              <p className="text-muted-foreground leading-relaxed">
                View student enrollments with detailed course relationships in real-time.
              </p>
              <div className="pt-2 flex items-center text-accent font-semibold text-sm">
                Explore <span className="ml-2">→</span>
              </div>
            </div>
          </div>

          {/* AI Chatbot */}
          <div className="glass rounded-2xl p-8 cursor-pointer card-hover group" onClick={() => onNavigate("chatbot")}>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/30 to-cyan-400/10 rounded-xl flex items-center justify-center group-hover:from-cyan-400/40 group-hover:to-cyan-400/20 transition-all">
                <MessageSquare className="w-8 h-8 text-cyan-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">AI Chatbot</h3>
              <p className="text-muted-foreground leading-relaxed">
                Text translation and summarization powered by AI. Real-time student assistance.
              </p>
              <div className="pt-2 flex items-center text-cyan-500 font-semibold text-sm">
                Explore <span className="ml-2">→</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center text-sm text-muted-foreground border-t border-border pt-8">
          <p className="font-semibold">Master 1 - Data Science and Intelligent Systems</p>
          <p className="mt-2">NTIC Faculty | Mini-Project: Campus Student Management</p>
        </div>
      </div>
    </section>
  )
}
