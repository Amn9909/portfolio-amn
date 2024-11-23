'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ThemeSwitcher from '../(toggleDarkMode)/ThemeSwitcher';
import { useTheme } from 'next-themes';

const Navbar = () => {

    const links = ["Home"]
    const [isOpen, setIsOpen] = useState(false);
    const [currTheme, setcurrTheme] = useState("dark");

    const { theme } = useTheme()

    useEffect(() => {
        setcurrTheme(theme ?? 'dark')
    }, [theme])

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={currTheme === 'dark' ? "bg-gray-950 text-white border-y border-white-500 mb-2" : "bg-white-800 text-black border-y border-black-500 mb-2"}>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Hamburger Icon */}
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen ? 'true' : 'false'}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-2xl font-bold">
                                Logo
                            </Link>
                        </div>
                        <div className="w-full hidden sm:block sm:ml-6">
                            <div className="flex justify-between items-center space-x-4">
                                <div>
                                    {
                                        links.map((link) =>
                                            <Link
                                                key={link}
                                                href={link.toLowerCase()}
                                                className={currTheme === 'dark' ? " text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" : " text-gray-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium"}
                                            >
                                                {link}
                                            </Link>)
                                    }
                                </div>
                                <div>
                                    <ThemeSwitcher />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link
                            href="/home"
                            className=" hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className=" hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            About
                        </Link>
                        <Link
                            href="/services"
                            className=" hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Services
                        </Link>
                        <Link
                            href="/contact"
                            className=" hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
