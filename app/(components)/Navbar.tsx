'use client';

import Link from 'next/link';
import ThemeSwitcher from '../(toggleDarkMode)/ThemeSwitcher';
import { useTheme } from 'next-themes';
import clsx from 'clsx';

const Navbar = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <nav className={theme ==='dark' ? 'bg-gray-950 text-white border-white-500' : 'bg-white text-black border-black-500'}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <div className="flex items-center  h-16">
                    {/* Home Link */}
                    <Link
                        href="/home"
                        className={clsx(
                            'text-2xl font-bold',
                            isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                        )}
                    >
                        LOGO
                    </Link>
                    <Link
                        href="/home"
                        className={clsx(
                            'text-2xl font-bold ml-4',
                            isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
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
