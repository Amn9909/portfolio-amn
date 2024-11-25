'use client';
import Link from 'next/link';
import ThemeSwitcher from '../(toggleDarkMode)/ThemeSwitcher';
import { useTheme } from 'next-themes';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const { theme } = useTheme()
    return (
        <nav 
        className={`${theme === 'dark' ? `bg-black text-white` :`bg-white text-black` }`}
        // className={`border-black-500 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <div className="flex items-center  h-16">
                    {/* Home Link */}
                    <Link
                        href="/home"
                        className={clsx(
                            'text-2xl font-bold',
                            theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                        )}
                    >
                        LOGO
                    </Link>
                    <Link
                        href="/home"
                        className={clsx(
                            'text-2xl font-bold ml-4',
                            theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                        )}
                    >
                        Home
                    </Link>

                    {/* Theme Switcher */}
                </div>
                <div>
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
