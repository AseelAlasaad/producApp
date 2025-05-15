'use client'

import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next"; 
import i18n  from '../../../i18n/i18n'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  const { t } = useTranslation("common");

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang).then(() => {  
      setCurrentLang(lang);
      if (typeof document !== "undefined") {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      }
    });
  };


  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
           My Shop
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-400">{t("home")}</Link>
          <Link href="/" className="text-white hover:text-gray-400">{t("products")}</Link>
          <Link href="/" className="text-white hover:text-gray-400">{t("about")}</Link>
          <Link href="/" className="text-white hover:text-gray-400">{t("contact")}</Link>
        </div>

        {/* Language switcher */}
        <div className="flex space-x-4 items-center">
          <button
            className={`text-white ${currentLang === "en" ? "underline" : ""}`}
            onClick={() => handleLanguageChange("en")}
          >
            English
          </button>
          <button
            className={`text-white ${currentLang === "ar" ? "underline" : ""}`}
            onClick={() => handleLanguageChange("ar")}
          >
            العربية
          </button>

          <div className="md:hidden">
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link href="/" className="text-white hover:text-gray-400">{t("home")}</Link>
          <Link href="/" className="text-white hover:text-gray-400">{t("products")}</Link>
          <Link href="/" className="text-white hover:text-gray-400">{t("about")}</Link>
          <Link href="/" className="text-white hover:text-gray-400">{t("contact")}</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
