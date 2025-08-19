'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect, useCallback } from 'react';
// import CalendlyModal from '../calendly/CalendlyModal';
import Image from 'next/image';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [solutions, setSolutions] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [products, setProducts] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false)

    const pathname = usePathname();

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
                        <div
                            className="relative"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <Link
                                href={'/products'}
                                title="Products Bluecompute"
                                className={`cursor-pointer relative uppercase group py-2 px-3 transition-all duration-200 ${pathname === '/products' ? 'underline underline-offset-8 text-white font-semibold' : 'text-white'
                                    }`}
                            >
                                Products
                            </Link>

                            {isDropdownOpen && (
                                <div className="absolute top-7 left-0 z-50  bg-gray-900 text-white shadow-lg w-auto min-w-56 rounded-b-lg">
                                    <ul className="py-2">
                                        <li className="px-4 py-1 hover:text-blue-300 ">
                                            <a
                                                href="https://revealnext.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block text-white"
                                            >
                                                RevealNext
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* <Link href='/contact/' title='Contact Bluecompute'
                            className={`cursor-pointer uppercase relative   group py-2 px-3 transition-all duration-200 ${pathname === '/contact/' ? 'underline underline-offset-8 text-white font-semibold ' : 'text-white'
                                }`}
                        >
                            Contact

                        </Link> */}
                    </div>
                    {/* <CalendlyModal /> */}
                    <Link href={'/contact/'} title="Contact Bluecompute" onClick={closeMobileMenu}
                        className="border border-blue-300 md:py-2 md:px-4 py-1 px-2 text-white cursor-pointer bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 rounded-full "
                    >

                        Contact
                    </Link>
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

                            <Link href={'/'} title="Home Bluecompute" onClick={closeMobileMenu}>
                                <div className={`group px-6 py-4 rounded-2xl transition-all duration-300 
                                flex items-center hover:shadow-lg hover:scale-[1.02] 
                                ${pathname === '/' ? 'bg-violet-100/70 text-blue-700 shadow-md' : 'text-gray-100'
                                    }`}>
                                    <div className="flex items-center justify-center w-10 h-10 rounded-xl 
                                    bg-gradient-to-br from-[#1a1a2e] to-[#0f0f23] text-white mr-4 
                                     group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-md">Home</div>
                                        <div className={`text-sm text-gray-300`}>Main dashboard</div>
                                    </div>
                                    {pathname === '/' && (
                                        <div className="ml-auto w-2 h-2 bg-[#1a1a2e] rounded-full animate-pulse"></div>
                                    )}
                                </div>
                            </Link>

                            <Link href={'/about-us/'} title="About Bluecompute" onClick={closeMobileMenu}>
                                <div className={`group px-6 py-4 rounded-2xl transition-all duration-300 
                                flex items-center hover:shadow-lg hover:scale-[1.02] 
                                ${pathname === '/about-us/' ? 'bg-violet-100/70 text-blue-700 shadow-md' : 'text-gray-100'
                                    }`}>
                                    <div className="flex items-center justify-center w-10 h-10 rounded-xl 
                                    bg-gradient-to-br from-[#1a1a2e] to-[#0f0f23] text-white mr-4 
                                     group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-md">About Us</div>
                                        <div className={`text-sm text-gray-300`}>Learn our story</div>
                                    </div>
                                    {pathname === '/about-us/' && (
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
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
                            <div
                                onClick={() => setProductsOpen(!productsOpen)}
                                className={`group px-6 py-4 rounded-2xl transition-all duration-300 
                                    flex items-center hover:shadow-lg hover:scale-[1.02] cursor-pointer
                                    ${pathname === '/products/' ? 'bg-violet-100/70 text-blue-700 shadow-md' : 'text-gray-100'}
                                `}
                            >
                                <div
                                    className="flex items-center justify-center w-10 h-10 rounded-xl 
                                    bg-gradient-to-br from-[#1a1a2e] to-[#0f0f23] text-white mr-4 
                                    group-hover:scale-110 transition-transform duration-300"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div className='w-full'>
                                    <div className="font-semibold text-md flex justify-between w-full">
                                        <span>Products</span>
                                        <span
                                            className={` transition-transform duration-300 ease-in-out ${productsOpen ? "rotate-180" : ''}`}
                                        >
                                            &#129171;
                                        </span>
                                    </div>
                                    <div className="text-sm text-gray-300">Intelligent. Integrated. Future-Ready.</div>
                                </div>
                                {pathname === '/products/' && (
                                    <div className="ml-auto w-2 h-2 bg-[#1a1a2e] rounded-full animate-pulse"></div>
                                )}
                            </div>

                            {/* Submenu */}
                            <div
                                className={`px-4 flex flex-col overflow-hidden transition-all duration-500 ease-in-out 
                                ${productsOpen ? 'max-h-52 overflow-y-auto opacity-100' : 'max-h-0 opacity-0'}
                                  ${pathname === '/products/' ? 'bg-violet-100/70 text-blue-700 shadow-md' : 'text-gray-100'}
                                  `}
                            >
                                <ul className="px-4 py-2">
                                    {/* Internal link */}

                                    {/* External link */}
                                    <li className="pl-10 py-4 ">
                                        <a
                                            href="https://revealnext.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-eavsbrown-800 hover:text-blue-400 pr-4"
                                            onClick={() => setShowMenu(false)}
                                        >
                                            <span>RevealNext</span>
                                            <Image
                                                src="/external-link-symbol.png"
                                                width={10}
                                                height={10}
                                                alt="external link"
                                                className="w-5 h-5 filter invert brightness-0"
                                            />
                                        </a>

                                    </li>
                                </ul>
                            </div>
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
                        </div>
                        <div className="pt-6 mt-6 border-t border-gray-200/50">
                            <div className="bg-gradient-to-r from-violet-50 to-indigo-50 rounded-2xl p-6 border border-violet-100">
                                <div className="text-center mb-4">
                                    {/* <h3 className="text-lg font-semibold text-gray-800 mb-2">Ready to get started?</h3> */}
                                    <p className="text-sm text-gray-600">Our ability to partner to create new approaches and deliver what we promise with proven and reliable services.</p>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    {/* <span>Mail us</span> */}
                                    <span>sales@bluecompute.com</span>
                                    <span>408-242-0283</span>
                                    {/* <Link href={'/contact/'} title="Contact Bluecompute" onClick={closeMobileMenu}
                                        className="border border-blue-300 md:py-2 md:px-4 py-1 px-2 text-white cursor-pointer bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 rounded-full "
                                    >
                                        Contact
                                    </Link> */}
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