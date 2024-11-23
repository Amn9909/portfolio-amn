'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

interface DarkThemeChildrent {
    children: ReactNode
}

const DarkModeProvider: React.FC<DarkThemeChildrent> = ({ children }) => {
    return (
        <div>
            <ThemeProvider attribute="class" defaultTheme="system">
                {children }
            </ThemeProvider>
        </div>
    )
}

export default DarkModeProvider