'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect, useCallback } from 'react';
import CalendlyModal from '../calendly/CalendlyModal';
import Image from 'next/image';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [solutions, setSolutions] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [products, setProducts] = useState(false);

    const pathname = usePathname();

    console.log(pathname);


    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 50);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showMenu && !event.target.closest('.mobile-menu-container')) {
                setShowMenu(false);
                setProducts(false);
                setSolutions(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [showMenu]);

    useEffect(() => {
        setShowMenu(false);
        setProducts(false);
        setSolutions(false);
    }, [pathname]);

    // Can't scroll over menu dropdown
    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showMenu]);

    const toggleMobileMenu = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
        if (!showMenu) {
            setProducts(false);
            setSolutions(false);
        }
    };

    const closeMobileMenu = () => {
        setShowMenu(false);
        setProducts(false);
        setSolutions(false);
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-black">
            <nav
                className={`w-full mx-auto transition-all duration-500 ease-out font-mono text-gray-700`}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="flex items-center justify-between h-20 md:h-20 px-4 sm:px-6 lg:px-8 relative">

                    <div className="flex items-center relative z-10">
                        <Link href="/" className="transition-transform duration-300 hover:scale-105">
                            <Image
                                width={500}
                                height={500}
                                src="/BlueCompute_large-logo.png"
                                alt="Bluecompute Logo"
                                className={`transition-all duration-500 w-40 md:w-40 lg:w-64 ${isScrolled ?
                                    '' :
                                    ''
                                    }`}
                            />
                        </Link>
                    </div>
                    <div className="hidden lg:flex items-center space-x-6 z-20">
                        <Link href='/' title='Home Bluecompute'
                            className={`cursor-pointer relative uppercase  group py-2 px-3 transition-all duration-200 ${pathname === '/' ? 'underline underline-offset-8 text-white font-semibold ' : 'text-white'
                                }`}
                        >
                            Home

                        </Link>

                        <Link href='/contact/' title='Contact Bluecompute'
                            className={`cursor-pointer uppercase relative   group py-2 px-3 transition-all duration-200 ${pathname === '/contact/' ? 'underline underline-offset-8 text-white font-semibold ' : 'text-white'
                                }`}
                        >
                            Contact

                        </Link>
                        <Link href='/about-us/' title='About Bluecompute'
                            className={`cursor-pointer relative  uppercase group py-2 px-3 transition-all duration-200 ${pathname === '/about-us/' ? 'underline underline-offset-8 text-white font-semibold ' : 'text-white'
                                }`}
                        >
                            About us

                        </Link>
                        <Link href={'/services'} title="About us Bluecompute"
                            className={`cursor-pointer relative  uppercase group py-2 px-3 transition-all duration-200 ${pathname === '/services/' ? 'underline underline-offset-8 text-white font-semibold ' : 'text-white'}`}>

                            Services

                        </Link>
                    </div>
                    <CalendlyModal />
                    <div className="lg:hidden z-50 mobile-menu-container">
                        <button
                            onClick={toggleMobileMenu}
                            className={`flex items-center justify-center p-3 cursor-pointer
                                 text-gray-400 focus:outline-none rounded-xl transition-all duration-300
                                  ${showMenu ? 'text-white ' : ''
                                }`}
                            aria-label="Toggle menu"
                            aria-expanded={showMenu}
                        >
                            <div className="relative w-6 h-6">
                                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${showMenu ? 'rotate-45 top-3' : 'top-1'
                                    }`}></span>
                                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 top-3 ${showMenu ? 'opacity-0' : 'opacity-100'
                                    }`}></span>
                                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${showMenu ? '-rotate-45 top-3' : 'top-5'
                                    }`}></span>
                            </div>
                        </button>
                    </div>
                </div>
                <div className={`lg:hidden bg-gray-600 mobile-menu-container rounded-b-xl transition-all duration-500 ease-out ${showMenu
                    ? 'max-h-screen opacity-100 visible'
                    : 'max-h-0 opacity-0 invisible'
                    } overflow-hidden`}>

                    <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/50 to-black/90 backdrop-blur-xl"></div>

                    <div className="relative border-t border-gray-200/50 pt-6 pb-8 px-4 space-y-3">

                        <div className="space-y-2">
                            <Link href='/' title='Home Bluecomputee' onClick={closeMobileMenu}>
                                <div className={`group px-6 py-4 rounded-2xl transition-all duration-300 
                                flex items-center  hover:shadow-lg hover:scale-[1.02] 
                                ${pathname === '/' ? 'bg-violet-100/70 text-blue-700 shadow-md' : 'text-gray-700'
                                    }`}>
                                    <div className="flex items-center justify-center w-10 h-10 rounded-xl 
                                    bg-gradient-to-tr from-[#10101d] to-[#0f0f23] text-white mr-4 
                                    group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-md">Home</div>
                                        <div className="text-sm text-gray-600">Main dashboard</div>
                                    </div>
                                    {pathname === '/' && (
                                        <div className="ml-auto w-2 h-2 bg-[#1a1a2e] rounded-full animate-pulse"></div>
                                    )}
                                </div>
                            </Link>
                            <Link href={'/about-us'} title="About us Bluecompute" onClick={closeMobileMenu}>
                                <div className={`group px-6 py-4 rounded-2xl transition-all duration-300 
                                flex items-center hover:shadow-lg hover:scale-[1.02] 
                                ${pathname === '/about-us' ? 'bg-violet-100/70 text-blue-700 shadow-md' : 'text-gray-100'
                                    }`}>
                                    <div className="flex items-center justify-center w-10 h-10 rounded-xl 
                                    bg-gradient-to-br from-[#1a1a2e] to-[#0f0f23] text-white mr-4 
                                    group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-lg">About Us</div>
                                        <div className="text-sm text-gray-500">Learn our story</div>
                                    </div>
                                    {pathname === '/about-us' && (
                                        <div className="ml-auto w-2 h-2 bg-[#1a1a2e] rounded-full animate-pulse"></div>
                                    )}
                                </div>
                            </Link>
                            <Link href={'/contact/'} title="Contact Bluecompute" onClick={closeMobileMenu}>
                                <div className={`group px-6 py-4 rounded-2xl transition-all duration-300 
                                flex items-center hover:shadow-lg hover:scale-[1.02] 
                                ${pathname === '/contact/' ? 'bg-violet-100/70 text-blue-700 shadow-md' : 'text-gray-100'
                                    }`}>
                                    <div className="flex items-center justify-center w-10 h-10 rounded-xl 
                                    bg-gradient-to-br from-[#1a1a2e] to-[#0f0f23] text-white mr-4 
                                     group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-md">Contact</div>
                                        <div className={`text-sm text-gray-300`}>Get in touch</div>
                                    </div>
                                    {pathname === '/contact/' && (
                                        <div className="ml-auto w-2 h-2 bg-[#1a1a2e] rounded-full animate-pulse"></div>
                                    )}
                                </div>
                            </Link>
                            <Link href={'/services/'} title="Services of Bluecompute" onClick={closeMobileMenu}>
                                <div className={`group px-6 py-4 rounded-2xl transition-all duration-300 
                                flex items-center hover:shadow-lg hover:scale-[1.02] 
                                ${pathname === '/services/' ? 'bg-violet-100/70 text-blue-700 shadow-md' : 'text-gray-100'
                                    }`}>
                                    <div className="flex items-center justify-center w-10 h-10 rounded-xl 
                                    bg-gradient-to-br from-[#1a1a2e] to-[#0f0f23] text-white mr-4 
                                     group-hover:scale-110 transition-transform duration-300">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 text-blue-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.591 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.592c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.591c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.592 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.591-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.592c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.591c-.94-1.543.826-3.31 2.37-2.37.996.608 2.285.07 2.591-1.065z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-md">Services</div>
                                        <div className={`text-sm text-gray-300`}>Smart. Scalable. Reliable.</div>
                                    </div>
                                    {pathname === '/services/' && (
                                        <div className="ml-auto w-2 h-2 bg-[#1a1a2e] rounded-full animate-pulse"></div>
                                    )}
                                </div>
                            </Link>
                        </div>
                        <div className="pt-6 mt-6 border-t border-gray-200/50">
                            <div className="bg-gradient-to-r from-violet-50 to-indigo-50 rounded-2xl p-6 border border-violet-100">
                                <div className="text-center mb-4">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Ready to get started?</h3>
                                    <p className="text-sm text-gray-600">Schedule a demo and see RevealNext in action</p>
                                </div>
                                <div className="flex justify-center">
                                    <CalendlyModal />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-violet-200/30 to-indigo-200/30 rounded-full blur-xl"></div>
                        <div className="absolute bottom-8 left-4 w-16 h-16 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-xl"></div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;