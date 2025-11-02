"use client"

import { Button } from "@/components/ui/button"

interface WelcomePageProps {
  onStart: () => void
}

export function WelcomePage({ onStart }: WelcomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center px-4">
      {/* Content */}
      <div className="text-center space-y-8 max-w-2xl">
        {/* Main Title */}
        <h1 className="text-7xl md:text-8xl font-bold text-blue-600">Campus Hub</h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 font-light">Système de Gestion des Étudiants</p>

        {/* CTA Button */}
        <Button
          onClick={onStart}
          size="lg"
          className="px-10 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-green-500 text-white hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-lg"
        >
          Cliquez pour commencer
        </Button>
      </div>
    </div>
  )
}
