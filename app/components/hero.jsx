import Link from "next/link";

export default function Hero(){
    return (
        <section className="text-center py-28 px-4 bg-gray-300 text-black">
            <h2 className="text-sm tracking-widest mb-4">
                NEW COLLECTION
            </h2>
            <h1 className="text-5xl font-semibold mb-6">
                TIMELESS ELEGANCE, REIMAGINED
            </h1>
            <p className="text-sm mb-6">
                Where heritage meets contemporary luxury
            </p>
            <div className="flex justify-center gap-4 ">
                <Link
                    href="/shop"
                    className="px-6 py-3 bg-white text-black border-2 border-black hover:bg-black hover:text-white "
                >
                    SHOP THE COLLECTION
                </Link>
                <Link 
                    href="/heritage"
                    className= "px-6 py-3 hover:border-2 hover:border-black"
                >
                    EXPLORE HERITAGE
                </Link>
            </div>
        </section>
    )
}