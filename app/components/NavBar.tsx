"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import localFont from 'next/font/local';

const argumentumRegular = localFont({ src: "../fonts/argentum-sans/ArgentumSans-Regular.ttf" });

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`absolute w-screen py-4 md:py-4 top-0 z-50 shadow ${isScrolled ? "sticky bg-white shadow-lg" : "bg-transparent"} transition-all duration-300`}>
            <nav className="w-[90vw] mx-auto flex items-center justify-between">
                <Link href={"/"}>
                    <Image
                        src={"/logo.png"}
                        alt=''
                        width={80}
                        height={35}
                        priority
                        unoptimized
                        loader={({ src }) => src}
                    />
                </Link>

                <ul className={"hidden md:flex flex-1 justify-end items-center gap-12 uppercase"}>
                    <li className="cursor-pointer hover:scale-110">
                        <Link href={"#gallery"} className={`${argumentumRegular.className}`}>
                            GALLERY
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:scale-110">
                        <Link href={"#about"} className={`${argumentumRegular.className}`}>About Us</Link>
                    </li>
                    <li className="cursor-pointer hover:scale-110">
                        <Link href={"#footer"} className={`${argumentumRegular.className}`}>
                            Contact Us
                        </Link>
                    </li>
                </ul>

                <div className="hamburger-menu flex flex-col items-end md:hidden flex-1 justify-end">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={() => setMobile(!mobile)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </nav>

            <div className={`${mobile ? "" : "hidden"} w-full absolute z-10 bg-white md:hidden`}>
                <ul className='flex flex-col md:block flex-1 justify-end items-start text-mb-text-blue uppercase font-bold pb-4 w-[90vw] mx-auto'>
                    <li className='block w-full cursor-pointer border-b py-2 border-slate-300 md:hover:scale-110'>
                        <Link href="#gallery" className={`${argumentumRegular.className}`}>
                            GALLERY
                        </Link>
                    </li>
                    <li className='block w-full cursor-pointer border-b py-2 border-slate-300 md:hover:scale-110'>
                        <Link href="#about" className={`${argumentumRegular.className}`}>
                            ABOUT US
                        </Link>
                    </li>
                    <li className="flex items-center w-full border-b py-2 border-slate-300">
                        <Link href="#footer" className={`${argumentumRegular.className}`}>
                            CONTACT US
                        </Link>
                    </li>
                </ul>
            </div>
        </ header >
    )
};