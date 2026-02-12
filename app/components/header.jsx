"use client"
import { useState } from "react";
import Link from "next/link";

export default function Header(){
    const [open, setOpen] = useState(false);

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
        <header className="border-b bg-white">
            <div className="max-w-8xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* <h1 className="font-semibold text-lg">ITUEN BASI</h1> */}
                <img src={"/IBL logo.png"}/>


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
                <button className="md:hidden text-xl"
                    onClick={()=> setOpen(!open)}
                >

                </button>
                {/**MOBILE MENU*/}
                {open && (
                    <div className="md-hidden px-4 pb-4 space-y-4">
                        {links.map(([name, href]) =>(
                            <Link
                                key={name}
                                href={href}
                                className="block"
                                onClick={()=> setOpen(false)}
                            >
                                {name}
                            </Link>
                        ))}

                    </div>
                )}
            </div>
        </header>
    )
}

