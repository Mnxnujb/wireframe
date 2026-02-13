"use client"
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header(){
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    //DETECT SCOLL

    useEffect(()=>{
        const handleScroll =()=>{
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)
        return()=> window.removeEventListener("scroll", handleScroll)
    })

    const links = [
    ["HOME", "/"],
    ["SHOP", "/shop"],
    ["COLLECTIONS", "/collections"],
    ["BEST SELLERS", "/best-sellers"],
    ["GIFT CARDS", "/gift-cards"],
    ["HERITAGE", "/heritage"],
    ["LOOKBOOK", "lookbook"],
    ["CONTACT", "contact"],
];

    return (
        <header 
            className={`
                fixed top-0 left-0 w-full z-50
                transition-all duration-300
                ${scrolled ? "bg-white shadow-md" : "bg-gray-300"}  
            `}
        >
            <div className="max-w-8xl mx-auto px-4 h-14 flex justify-between items-center">
                {/* <h1 className="font-semibold text-lg">ITUEN BASI</h1> */}
                <img src={"/IBL logo.png"} className="h-21"/>


                {/*DESKTOP MODE*/}
                <nav className="hidden md:flex gap-6">
                    {links.map(([name, href]) =>(
                        <Link key={name} href={href} className="text-black hover:text-gray-300">
                            {name}
                        </Link>
                    )
                )}
                </nav>

                {/**MOBILE BUTTON*/}
                <button className="md:hidden text-xl text-black"
                    onClick={()=> setOpen(!open)}
                >
                    ☰
                </button>
            </div>
                {/**MOBILE MENU*/}
                {open && (
                    <div className="md-hidden px-4 pb-4 space-y-4 ">
                        {links.map(([name, href]) =>(
                            <Link
                                key={name}
                                href={href}
                                className="block text-black hover:text-gray-300"
                                onClick={()=> setOpen(false)}
                            >
                                {name}
                            </Link>
                        ))}

                    </div>
                )}
        </header>
    )
}

