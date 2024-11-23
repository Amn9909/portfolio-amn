'use client'
import { useTheme } from 'next-themes'
import React from 'react'

const TestCompo = () => {
    const { setTheme, resolvedTheme } = useTheme()
  return (
    <div
      className={`h-20 w-20 ${
        resolvedTheme === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`} // Apply dark or light background based on the theme
    >
        TEST : {resolvedTheme}
    </div>
  )
}

export default TestCompo