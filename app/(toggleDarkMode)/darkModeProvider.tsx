'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode, useEffect, useState } from 'react'
import { Progress } from "@/components/ui/progress"


interface DarkThemeChildrent {
    children: ReactNode
}

const DarkModeProvider: React.FC<DarkThemeChildrent> = ({ children }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // Ensures this component waits until client-side hydration is complete.
    }, []);

    if (!mounted) {
        return <div className='text-white flex justify-center items-center'>
            <Progress value={33} />
        </div>; // Render nothing or a fallback (e.g., a loader) until hydration completes.
    }

    return (
        <div>
            <ThemeProvider
                attribute="class" // Adds `dark` class to the <html> tag
                defaultTheme="dark" // Default theme is dark
                enableSystem={false} // Disable system theme syncing
                disableTransitionOnChange // Avoid transitions when changing themes
            >
                {children}
            </ThemeProvider>
        </div>
    )
}

export default DarkModeProvider