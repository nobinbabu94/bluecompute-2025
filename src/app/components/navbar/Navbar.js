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

    // Handle dropdown with proper mouse events
    const handleDropdownMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleDropdownMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-black">
            <nav
                className={`w-full mx-auto h-20 md:h-20  transition-all duration-500 ease-out font-mono text-gray-700`}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="w-full h-full flex items-center justify-between px-4 sm:px-6 lg:px-8 relative">

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
                    <div className="hidden lg:flex items-center space-x-6 z-20 h-full">
                        <Link href='/' title='Home Bluecompute'
                            className={`cursor-pointer relative uppercase h-full flex items-center group  px-3 transition-all duration-200 ${pathname === '/' ? 'underline underline-offset-8 text-white font-semibold ' : 'text-white'
                                }`}
                        >
                            Home

                        </Link>


                        <Link href='/about-us/' title='About Bluecompute'
                            className={`cursor-pointer relative h-full flex items-center  uppercase group  px-3 transition-all duration-200 ${pathname === '/about-us/' ? 'underline underline-offset-8 text-white font-semibold ' : 'text-white'
                                }`}
                        >
                            About us

                        </Link>
                        <Link href={'/services'} title="About us Bluecompute"
                            className={`cursor-pointer relative h-full flex items-center uppercase group  px-3 transition-all duration-200 ${pathname === '/services/' ? 'underline underline-offset-8 text-white font-semibold ' : 'text-white'}`}>

                            Services

                        </Link>

                        {/* Products dropdown container - this wraps both the link and dropdown */}
                        <div
                            className="relative h-full"
                            onMouseEnter={handleDropdownMouseEnter}
                            onMouseLeave={handleDropdownMouseLeave}
                        >
                            <Link
                                href={'/products'}
                                title="Products Bluecompute"
                                className={`flex items-center h-full gap-2 cursor-pointer relative uppercase group px-3 transition-all duration-200 
                                    ${pathname === '/products'
                                        ? 'underline underline-offset-8 text-white font-semibold'
                                        : 'text-white'
                                    }`}
                            >
                                Products
                                <Image
                                    src={"/arrow-down-sign-to-navigate.svg"}
                                    height={5}
                                    width={5}
                                    alt="arrow-down-sign-to-navigate.svg"
                                    className={`w-2 h-2 transition-transform duration-300 ease-in-out ${isDropdownOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </Link>

                            {/* Full-width Dropdown menu */}
                            <div
                                className={`fixed top-20 left-0 w-full z-40 
                                bg-gray-900 text-white shadow-2xl transform transition-all duration-300 ease-out border-t border-gray-700
                                    ${isDropdownOpen
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 -translate-y-4 pointer-events-none'
                                    }`}
                            >
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">

                                        {/* Featured Products */}
                                        <div>
                                            <h3 className="text-lg font-semibold mb-4 text-blue-300">Featured Products</h3>
                                            <div className="flex space-x-3">
                                                <a
                                                    href="https://revealnext.com/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors group"
                                                >
                                                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                                        </svg>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center space-x-2">
                                                            <span className="font-medium group-hover:text-blue-300">RevealNext</span>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="w-3 h-3"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <p className="text-sm text-gray-400">Advanced analytics platform</p>
                                                    </div>
                                                </a>

                                                {/* <div className="p-3 rounded-lg hover:bg-gray-800 transition-colors group cursor-pointer">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                                                            <svg
                                                                className="w-5 h-5"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                role="img"
                                                                aria-hidden="false"
                                                            >
                                                                <rect x="3" y="4" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                <circle cx="9" cy="9" r="0.9" fill="currentColor" />
                                                                <circle cx="15" cy="9" r="0.9" fill="currentColor" />
                                                                <path d="M8 15h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M3 10v2a5 5 0 005 5h0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M21 10v2a5 5 0 01-5 5h0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                <circle cx="7" cy="2.8" r="0.9" fill="currentColor" />
                                                            </svg>

                                                        </div>
                                                        <div>
                                                            <div className="font-medium group-hover:text-blue-300">AI Merchandising Assistant</div>
                                                            <p className="text-sm text-gray-400">Get answers from your store data</p>
                                                        </div>
                                                    </div>
                                                </div> */}

                                                {/* <div className="p-3 rounded-lg hover:bg-gray-800 transition-colors group cursor-pointer">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <div className="font-medium group-hover:text-blue-300">SecureVault</div>
                                                            <p className="text-sm text-gray-400">Enterprise security suite</p>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>

                                    </div>

                                    {/* Bottom CTA Section */}
                                    <div className="mt-8 pt-8 border-t border-gray-700">
                                        <div className="flex flex-col md:flex-row items-center justify-between">
                                            <div>
                                                <h4 className="text-lg font-semibold mb-2">Ready to get started?</h4>
                                                <p className="text-gray-400">Explore our full range of products and solutions.</p>
                                            </div>
                                            <div className="flex space-x-4 mt-4 md:mt-0">
                                                <Link
                                                onClick={()=>setIsDropdownOpen(false)}
                                                    href="/products"
                                                    className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-colors"
                                                >
                                                    View All Products
                                                </Link>
                                                {/* <Link
                                                    href="/contact"
                                                    className="border border-gray-600 hover:border-gray-500 px-6 py-2 rounded-lg font-medium transition-colors"
                                                >
                                                    Get Demo
                                                </Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

                <div
                    className={`lg:hidden bg-gray-600 mobile-menu-container rounded-b-xl transition-all duration-500 ease-out 
    ${showMenu ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"} 
    overflow-hidden relative`}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/50 to-black/90 backdrop-blur-xl z-0"></div>

                    <div className="relative z-10 border-t border-gray-200/50 pt-6 pb-8 px-4 space-y-3">
                        <div className="space-y-2">
                            <Link href={"/"} title="Home Bluecompute" onClick={closeMobileMenu}>
                                <div
                                    className={`group px-6 py-4 rounded-2xl transition-all duration-300 flex items-center 
            hover:shadow-lg hover:scale-[1.02] 
            ${pathname === "/" ? "bg-violet-100/70 text-blue-700 shadow-md" : "text-gray-100"}`}
                                >
                                    <div
                                        className="flex items-center justify-center w-10 h-10 rounded-xl 
              bg-gradient-to-br from-[#1a1a2e] to-[#0f0f23] text-white mr-4 
              group-hover:scale-110 transition-transform duration-300"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-md">Home</div>
                                        <div className="text-sm text-gray-300">Main dashboard</div>
                                    </div>
                                    {pathname === "/" && (
                                        <div className="ml-auto w-2 h-2 bg-[#1a1a2e] rounded-full animate-pulse"></div>
                                    )}
                                </div>
                            </Link>
                            <Link href={"/about-us/"} title="About Bluecompute" onClick={closeMobileMenu}>
                                <div
                                    className={`group px-6 py-4 rounded-2xl transition-all duration-300 flex items-center 
            hover:shadow-lg hover:scale-[1.02] 
            ${pathname === "/about-us/" ? "bg-violet-100/70 text-blue-700 shadow-md" : "text-gray-100"}`}
                                >
                                    <div
                                        className="flex items-center justify-center w-10 h-10 rounded-xl 
              bg-gradient-to-br from-[#1a1a2e] to-[#0f0f23] text-white mr-4 
              group-hover:scale-110 transition-transform duration-300"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-md">About Us</div>
                                        <div className="text-sm text-gray-300">Learn our story</div>
                                    </div>
                                    {pathname === "/about-us/" && (
                                        <div className="ml-auto w-2 h-2 bg-[#1a1a2e] rounded-full animate-pulse"></div>
                                    )}
                                </div>
                            </Link>
                            <Link href={"/services/"} title="Services of Bluecompute" onClick={closeMobileMenu}>
                                <div
                                    className={`group px-6 py-4 rounded-2xl transition-all duration-300 flex items-center 
            hover:shadow-lg hover:scale-[1.02] 
            ${pathname === "/services/" ? "bg-violet-100/70 text-blue-700 shadow-md" : "text-gray-100"}`}
                                >
                                    <div
                                        className="flex items-center justify-center w-10 h-10 rounded-xl 
              bg-gradient-to-br from-[#1a1a2e] to-[#0f0f23] text-white mr-4 
              group-hover:scale-110 transition-transform duration-300"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.89 
                  3.31.877 2.42 2.42a1.724 1.724 0 001.065 2.572c1.757.426 
                  1.757 2.924 0 3.35a1.724 1.724 0 00-1.066 
                  2.573c.89 1.543-.877 3.31-2.42 2.42a1.724 
                  1.724 0 00-2.572 1.065c-.426 1.757-2.924 
                  1.757-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.89-3.31-.877-2.42-2.42a1.724 
                  1.724 0 00-1.065-2.572c-1.757-.426-1.757-2.924 
                  0-3.35a1.724 1.724 0 001.066-2.573c-.89-1.543.877-3.31 
                  2.42-2.42.996.574 2.248-.16 2.573-1.066z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-md">Services</div>
                                        <div className="text-sm text-gray-300">Smart. Scalable. Reliable.</div>
                                    </div>
                                    {pathname === "/services/" && (
                                        <div className="ml-auto w-2 h-2 bg-[#1a1a2e] rounded-full animate-pulse"></div>
                                    )}
                                </div>
                            </Link>
                            <div
                                onClick={() => setProductsOpen(!productsOpen)}
                                className={`group px-6 py-4 rounded-2xl transition-all duration-300 flex items-center 
          hover:shadow-lg hover:scale-[1.02] cursor-pointer 
          ${pathname === "/products/" ? "bg-violet-100/70 text-blue-700 shadow-md" : "text-gray-100"}`}
                            >
                                <div
                                    className="flex items-center justify-center w-10 h-10 rounded-xl 
            bg-gradient-to-br from-[#1a1a2e] to-[#0f0f23] text-white mr-4 
            group-hover:scale-110 transition-transform duration-300"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h4v4H4V6zm6 0h4v4h-4V6zm6 0h4v4h-4V6zM4 
                                            12h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 
                                            18h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"
                                        />
                                    </svg>
                                </div>
                                <div className="w-full">
                                    <div className="font-semibold text-md flex justify-between w-full items-center">
                                        <span>Products</span>
                                        <Image
                                            src={"/arrow-down-sign-to-navigate.svg"}
                                            height={5}
                                            width={5}
                                            alt="arrow-down-sign-to-navigate.svg"
                                            className={`w-3 h-3 transition-transform duration-300 ease-in-out ${productsOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </div>
                                    <div className="text-sm text-gray-300">
                                        Intelligent. Integrated. Future-Ready.
                                    </div>
                                </div>
                                {pathname === "/products/" && (
                                    <div className="ml-auto w-2 h-2 bg-[#1a1a2e] rounded-full animate-pulse"></div>
                                )}
                            </div>
                            <div
                                className={`px-4 flex flex-col transition-all duration-500 ease-in-out overflow-hidden 
          ${productsOpen ? "max-h-52 opacity-100" : "max-h-0 opacity-0"} 
          ${pathname === "/products/" ? "bg-violet-100/70 text-blue-700 shadow-md" : "text-gray-100"}`}
                            >
                                <ul className="px-4 py-2">
                                    <li className="pl-10 py-4">
                                        <a
                                            href="https://revealnext.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-eavsbrown-800 hover:text-blue-400 pr-4"
                                            onClick={() => setShowMenu(false)}
                                        >
                                            <span>RevealNext</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-3 h-3 "
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <Link href={"/contact/"} title="Contact Bluecompute" onClick={closeMobileMenu}>
                                <div
                                    className={`group px-6 py-4 rounded-2xl transition-all duration-300 flex items-center 
            hover:shadow-lg hover:scale-[1.02] 
            ${pathname === "/contact/" ? "bg-violet-100/70 text-blue-700 shadow-md" : "text-gray-100"}`}
                                >
                                    <div
                                        className="flex items-center justify-center w-10 h-10 rounded-xl 
              bg-gradient-to-br from-[#1a1a2e] to-[#0f0f23] text-white mr-4 
              group-hover:scale-110 transition-transform duration-300"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 
                  002-2V7a2 2 0 00-2-2H5a2 2 0 
                  00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-md">Contact</div>
                                        <div className="text-sm text-gray-300">Get in touch</div>
                                    </div>
                                    {pathname === "/contact/" && (
                                        <div className="ml-auto w-2 h-2 bg-[#1a1a2e] rounded-full animate-pulse"></div>
                                    )}
                                </div>
                            </Link>
                        </div>
                        <div className="pt-6 mt-6 border-t border-gray-200/50">
                            <div className="bg-gradient-to-r from-violet-50 to-indigo-50 rounded-2xl p-6 border border-violet-100">
                                <div className="flex flex-col items-center justify-center">
                                    <span>sales@bluecompute.com</span>
                                    <span>408-242-0283</span>
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