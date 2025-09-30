'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, X } from 'lucide-react'

export default function ShutdownCountdown() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
  } | null>(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // September 30th, 2025 at 11:59 PM EDT (end of fiscal year)
    const shutdownDate = new Date('2025-09-30T23:59:59-04:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = shutdownDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible || !timeLeft) return null

  const isUrgent = timeLeft.days === 0 && timeLeft.hours < 24

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
          isUrgent 
            ? 'bg-gradient-to-br from-red-600 via-red-700 to-red-900' 
            : 'bg-gradient-to-br from-orange-600 via-red-600 to-red-800'
        } text-white`}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 py-16 max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6"
            >
              <AlertTriangle className="w-10 h-10 text-yellow-300" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              {isUrgent ? '🚨 CRITICAL ALERT 🚨' : '⚠️ GOVERNMENT SHUTDOWN WARNING ⚠️'}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
              {isUrgent 
                ? 'Fiscal year ends in HOURS - Government shutdown imminent!' 
                : 'Potential US Government shutdown countdown to September 30th, 2025'
              }
            </p>
          </motion.div>

          {/* Large Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12"
          >
            {timeLeft.days > 0 && (
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/20">
                <motion.div
                  key={timeLeft.days}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2"
                >
                  {timeLeft.days}
                </motion.div>
                <div className="text-lg md:text-xl opacity-75 font-medium">DAYS</div>
              </div>
            )}
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/20">
              <motion.div
                key={timeLeft.hours}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2"
              >
                {timeLeft.hours.toString().padStart(2, '0')}
              </motion.div>
              <div className="text-lg md:text-xl opacity-75 font-medium">HOURS</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/20">
              <motion.div
                key={timeLeft.minutes}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2"
              >
                {timeLeft.minutes.toString().padStart(2, '0')}
              </motion.div>
              <div className="text-lg md:text-xl opacity-75 font-medium">MINUTES</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/20">
              <motion.div
                key={timeLeft.seconds}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-2 ${isUrgent ? 'text-yellow-300' : ''}`}
              >
                {timeLeft.seconds.toString().padStart(2, '0')}
              </motion.div>
              <div className="text-lg md:text-xl opacity-75 font-medium">SECONDS</div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => setIsVisible(false)}
              className="px-8 py-4 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50 font-medium text-lg"
            >
              Continue to SchoolBridge
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-3 hover:bg-white/20 rounded-full transition-colors"
              title="Dismiss warning"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </div>

        {/* Urgent pulsing effect */}
        {isUrgent && (
          <motion.div
            className="absolute inset-0 bg-red-500 opacity-20"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  )
}
