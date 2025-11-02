"use client"

import { useState } from "react"
import { Users, Search, Plus, Edit2, Trash2, Mail, BookOpen, TrendingUp, Eye, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

interface Student {
  id: string
  firstName: string
  lastName: string
  email: string
  university: string
  enrolledCourses: number
}

export function StudentDashboard() {
  const [students, setStudents] = useState<Student[]>([
    {
      id: "1",
      firstName: "Ahmed",
      lastName: "Benmessaoud",
      email: "ahmed@univ.edu",
      university: "Abdelhamid Mehri",
      enrolledCourses: 4,
    },
    {
      id: "2",
      firstName: "Fatima",
      lastName: "Zahra",
      email: "fatima@univ.edu",
      university: "Abdelhamid Mehri",
      enrolledCourses: 3,
    },
    {
      id: "3",
      firstName: "Mohamed",
      lastName: "Ali",
      email: "mohamed@univ.edu",
      university: "Abdelhamid Mehri",
      enrolledCourses: 5,
    },
  ])
  const [searchTerm, setSearchTerm] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", university: "" })
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
  const [editingStudent, setEditingStudent] = useState<Student | null>(null)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)

  const filteredStudents = students.filter(
    (student) =>
      `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleAddStudent = () => {
    if (formData.firstName && formData.lastName && formData.email) {
      const newStudent: Student = {
        id: Date.now().toString(),
        ...formData,
        enrolledCourses: 0,
      }
      setStudents([...students, newStudent])
      setFormData({ firstName: "", lastName: "", email: "", university: "" })
      setShowForm(false)
    }
  }

  const handleDeleteStudent = (id: string) => {
    setStudents(students.filter((s) => s.id !== id))
  }

  const handleViewDetails = (student: Student) => {
    setSelectedStudent(student)
    setShowDetailsModal(true)
  }

  const handleEditStudent = (student: Student) => {
    setEditingStudent({ ...student })
    setShowEditModal(true)
  }

  const handleSaveEdit = () => {
    if (editingStudent) {
      setStudents(students.map((s) => (s.id === editingStudent.id ? editingStudent : s)))
      setShowEditModal(false)
      setEditingStudent(null)
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8 animate-fade-in">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Users className="w-7 h-7 text-white" />
          </div>
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Student Management
            </h2>
            <p className="text-slate-600">Add, update, and manage student records</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500" />
          <Input
            placeholder="Search students by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-slate-50 border-slate-300 focus:border-blue-400 focus:bg-white"
          />
        </div>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20 hover:from-blue-600 hover:to-cyan-500"
        >
          <Plus className="w-4 h-4" />
          Add Student
        </Button>
      </div>

      {/* Add Form */}
      {showForm && (
        <Card className="mb-8 p-6 border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Add New Student</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="bg-white border-slate-300"
            />
            <Input
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="bg-white border-slate-300"
            />
            <Input
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-white border-slate-300"
            />
            <Input
              placeholder="University"
              value={formData.university}
              onChange={(e) => setFormData({ ...formData, university: e.target.value })}
              className="bg-white border-slate-300"
            />
          </div>
          <div className="flex gap-2">
            <Button
              onClick={handleAddStudent}
              className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white"
            >
              Save Student
            </Button>
            <Button variant="outline" onClick={() => setShowForm(false)}>
              Cancel
            </Button>
          </div>
        </Card>
      )}

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <Card
            key={student.id}
            className="p-6 hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-blue-300 bg-gradient-to-br from-white to-slate-50/50"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-2xl font-bold text-white">
                  {student.firstName[0]}
                  {student.lastName[0]}
                </span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-blue-100 text-blue-600"
                  onClick={() => handleEditStudent(student)}
                >
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-red-100 text-red-600"
                  onClick={() => handleDeleteStudent(student.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <h3 className="font-bold text-lg text-slate-900 mb-1">
              {student.firstName} {student.lastName}
            </h3>
            <p className="text-sm text-slate-600 mb-4 font-medium">{student.university}</p>

            <div className="space-y-3 mb-4 text-sm">
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="text-slate-600">{student.email}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <BookOpen className="w-4 h-4 text-cyan-500" />
                <span className="text-slate-600">{student.enrolledCourses} courses enrolled</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <Button
                variant="outline"
                className="w-full text-sm bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 border-blue-200 text-blue-600"
                size="sm"
                onClick={() => handleViewDetails(student)}
              >
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <p className="text-muted-foreground text-lg">No students found</p>
        </div>
      )}

      {/* Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 border-blue-300/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm mb-1 font-medium">Total Students</p>
              <p className="text-4xl font-bold text-blue-600">{students.length}</p>
            </div>
            <Users className="w-10 h-10 text-blue-400/30" />
          </div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-400/10 border-cyan-300/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm mb-1 font-medium">Avg Enrollment</p>
              <p className="text-4xl font-bold text-cyan-600">
                {(students.reduce((acc, s) => acc + s.enrolledCourses, 0) / students.length).toFixed(1)}
              </p>
            </div>
            <TrendingUp className="w-10 h-10 text-cyan-400/30" />
          </div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-slate-500/10 to-slate-400/10 border-slate-300/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm mb-1 font-medium">Institution</p>
              <p className="text-4xl font-bold text-slate-700">1</p>
            </div>
            <div className="w-10 h-10 bg-slate-300/20 rounded-lg" />
          </div>
        </Card>
      </div>

      {showDetailsModal && selectedStudent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="bg-white max-w-md w-full p-6 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900">Student Details</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowDetailsModal(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-600 font-medium">Full Name</p>
                <p className="text-slate-900 font-semibold">
                  {selectedStudent.firstName} {selectedStudent.lastName}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-600 font-medium">Email</p>
                <p className="text-slate-900 font-semibold">{selectedStudent.email}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 font-medium">University</p>
                <p className="text-slate-900 font-semibold">{selectedStudent.university}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 font-medium">Enrolled Courses</p>
                <p className="text-slate-900 font-semibold">{selectedStudent.enrolledCourses}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 font-medium">Student ID</p>
                <p className="text-slate-900 font-semibold">{selectedStudent.id}</p>
              </div>
            </div>
            <Button
              onClick={() => setShowDetailsModal(false)}
              className="w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:from-blue-600 hover:to-cyan-500"
            >
              Close
            </Button>
          </Card>
        </div>
      )}

      {showEditModal && editingStudent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="bg-white max-w-md w-full p-6 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900">Edit Student</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowEditModal(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-3">
              <Input
                placeholder="First Name"
                value={editingStudent.firstName}
                onChange={(e) => setEditingStudent({ ...editingStudent, firstName: e.target.value })}
                className="bg-slate-50 border-slate-300"
              />
              <Input
                placeholder="Last Name"
                value={editingStudent.lastName}
                onChange={(e) => setEditingStudent({ ...editingStudent, lastName: e.target.value })}
                className="bg-slate-50 border-slate-300"
              />
              <Input
                placeholder="Email"
                type="email"
                value={editingStudent.email}
                onChange={(e) => setEditingStudent({ ...editingStudent, email: e.target.value })}
                className="bg-slate-50 border-slate-300"
              />
              <Input
                placeholder="University"
                value={editingStudent.university}
                onChange={(e) => setEditingStudent({ ...editingStudent, university: e.target.value })}
                className="bg-slate-50 border-slate-300"
              />
            </div>
            <div className="flex gap-2 mt-6">
              <Button
                onClick={handleSaveEdit}
                className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:from-blue-600 hover:to-cyan-500"
              >
                Save Changes
              </Button>
              <Button variant="outline" onClick={() => setShowEditModal(false)} className="flex-1">
                Cancel
              </Button>
            </div>
          </Card>
        </div>
      )}
    </section>
  )
}
