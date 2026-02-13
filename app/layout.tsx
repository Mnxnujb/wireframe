import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="flex flex-col min-h-screen bg-white"
      >
        <Header />
        <main className="flex-grow pt-16 sm:pt-20">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
