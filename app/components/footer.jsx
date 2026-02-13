export default function Footer(){
    return(
        <footer className="bg-gray-100 mt-16">
            <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-black">
                <div>
                    <h3 className="font-semibold mb-2">NEWSLETTER</h3>
                    <input className="w-full px-3 py-3 border" 
                            placeholder="Your Email"
                    />
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Legal</h3>
                    <ul className="space-y-1 text-sm">
                        <li>Privacy Policy</li>
                        <li>Refund Policy</li>
                        <li>Shipping Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Connect</h3>
                    <p className="text-sm">+234 903 719 8414</p>
                    <p className="text-sm">ask@ituenbasi.com</p>
                </div>
            </div>
        </footer>
    )
}