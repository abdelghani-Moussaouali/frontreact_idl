"use client"

import { useState } from "react"
import { BookOpen, Search, Clock, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

interface StudentCourse {
  id: string
  courseId: string
  courseName: string
  instructor: string
  category: string
  schedule: string
  grade: string
  progress: number
  credits: number
}

export function StudentCourseView() {
  const [courses, setCourses] = useState<StudentCourse[]>([
    {
      id: "1",
      courseId: "c1",
      courseName: "Machine Learning Basics",
      instructor: "Dr. Karim",
      category: "AI",
      schedule: "Mon-Wed 10:00 AM",
      grade: "A",
      progress: 85,
      credits: 3,
    },
    {
      id: "2",
      courseId: "c2",
      courseName: "Data Science Fundamentals",
      instructor: "Prof. Sarah",
      category: "Data Science",
      schedule: "Tue-Thu 2:00 PM",
      grade: "B+",
      progress: 72,
      credits: 4,
    },
    {
      id: "3",
      courseId: "c3",
      courseName: "Web Development",
      instructor: "Eng. Mohamed",
      category: "Web",
      schedule: "Wed-Fri 9:00 AM",
      grade: "A-",
      progress: 90,
      credits: 3,
    },
  ])
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCourses = courses.filter(
    (course) =>
      course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getGradeColor = (grade: string) => {
    if (grade.startsWith("A")) return "text-green-600 bg-green-50"
    if (grade.startsWith("B")) return "text-blue-600 bg-blue-50"
    if (grade.startsWith("C")) return "text-yellow-600 bg-yellow-50"
    return "text-orange-600 bg-orange-50"
  }

  const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
    AI: { bg: "bg-blue-500/10", text: "text-blue-700", border: "border-blue-300" },
    "Data Science": { bg: "bg-purple-500/10", text: "text-purple-700", border: "border-purple-300" },
    Web: { bg: "bg-emerald-500/10", text: "text-emerald-700", border: "border-emerald-300" },
    Databases: { bg: "bg-orange-500/10", text: "text-orange-700", border: "border-orange-300" },
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8 animate-fade-in">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <BookOpen className="w-7 h-7 text-white" />
          </div>
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-500 bg-clip-text text-transparent">
              My Courses
            </h2>
            <p className="text-slate-600">View your enrolled courses and track progress</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500" />
          <Input
            placeholder="Search courses by name, instructor, or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-slate-50 border-slate-300 focus:border-emerald-400"
          />
        </div>
      </div>

      {/* Courses List */}
      <div className="space-y-6 mb-8">
        {filteredCourses.map((course) => {
          const colors = categoryColors[course.category] || categoryColors["AI"]
          return (
            <Card
              key={course.id}
              className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-500 bg-gradient-to-br from-white to-slate-50/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                {/* Course Info */}
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${colors.bg} ${colors.text}`}>
                      {course.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{course.courseName}</h3>
                  <p className="text-sm text-slate-600 mb-3">👨‍🏫 {course.instructor}</p>
                  <div className="flex items-center gap-2 text-sm text-slate-700 mb-2">
                    <Clock className="w-4 h-4 text-emerald-500" />
                    <span>{course.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <Award className="w-4 h-4 text-cyan-500" />
                    <span>{course.credits} credits</span>
                  </div>
                </div>

                {/* Progress */}
                <div className="md:col-span-1">
                  <p className="text-sm font-medium text-slate-600 mb-2">Progress</p>
                  <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-2 rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-600">{course.progress}% complete</p>
                </div>

                {/* Grade */}
                <div className="md:col-span-1">
                  <p className="text-sm font-medium text-slate-600 mb-2">Grade</p>
                  <div
                    className={`inline-block px-4 py-2 rounded-lg font-bold text-center min-w-16 ${getGradeColor(course.grade)}`}
                  >
                    {course.grade}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 text-sm bg-gradient-to-r from-emerald-50 to-cyan-50 hover:from-emerald-100 hover:to-cyan-100 border-emerald-200 text-emerald-600"
                  size="sm"
                >
                  View Details
                </Button>
                <Button variant="outline" className="flex-1 text-sm bg-transparent" size="sm">
                  Submit Assignment
                </Button>
              </div>
            </Card>
          )
        })}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <p className="text-muted-foreground text-lg">No courses found</p>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-gradient-to-br from-emerald-500/10 to-cyan-400/10 border-emerald-300/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm mb-1 font-medium">Enrolled Courses</p>
              <p className="text-4xl font-bold text-emerald-600">{courses.length}</p>
            </div>
            <BookOpen className="w-10 h-10 text-emerald-400/30" />
          </div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-400/10 border-cyan-300/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm mb-1 font-medium">Avg Progress</p>
              <p className="text-4xl font-bold text-cyan-600">
                {(courses.reduce((acc, c) => acc + c.progress, 0) / courses.length).toFixed(0)}%
              </p>
            </div>
            <TrendingUp className="w-10 h-10 text-cyan-400/30" />
          </div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-400/10 border-purple-300/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm mb-1 font-medium">Total Credits</p>
              <p className="text-4xl font-bold text-purple-600">{courses.reduce((acc, c) => acc + c.credits, 0)}</p>
            </div>
            <Award className="w-10 h-10 text-purple-400/30" />
          </div>
        </Card>
      </div>
    </section>
  )
}
