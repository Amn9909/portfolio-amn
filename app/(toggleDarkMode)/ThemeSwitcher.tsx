'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  // Only set mounted to true after the component is mounted to avoid SSR issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a loading spinner or nothing while the component is mounted
    return null
  }

  // Render the appropriate icon based on the current theme
  return (
    <button 
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
    >
      {resolvedTheme === 'dark' ? (
        <FiSun size={24} />
      ) : (
        <FiMoon size={24} />
      )}
    </button>
  )
}
