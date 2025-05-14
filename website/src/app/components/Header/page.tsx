'use client'
import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next"; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation('common'); 

  // Function to handle language change
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang); 
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">MyShop</Link>

        <div className="hidden md:flex space-x-6">
           <Link href="/" className="text-white hover:text-gray-400">home</Link>
          <Link href="/" className="text-white hover:text-gray-400">products</Link>
          <Link href="/" className="text-white hover:text-gray-400">about</Link>
          <Link href="/" className="text-white hover:text-gray-400">contact</Link>
        </div>

        {/* Language switcher */}
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link href="/" className="text-white hover:text-gray-400">home</Link>
          <Link href="/" className="text-white hover:text-gray-400">products</Link>
          <Link href="/" className="text-white hover:text-gray-400">about</Link>
          <Link href="/" className="text-white hover:text-gray-400">contact</Link>
        </div>
      )}

  
    </nav>
  );
};

export default Navbar;
