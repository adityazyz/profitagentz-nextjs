'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  Sun,
  Moon,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  const isContactPage = pathname === "/contact";

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "AI Agents", path: "/ai-agents" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-2 py-3 sm:px-4 sm:py-4 md:py-5 transition-all duration-300">
      {/* FIXED: Removed backdrop blur and opaque effect for dark mode */}
      <div className={`mx-auto max-w-7xl border shadow-xl rounded-xl sm:rounded-2xl ${
        isDark 
          ? "bg-navy-900 border-white/10"  // Solid dark background
          : "bg-white/70 backdrop-blur-xl border-slate-200/60"  // Glassy only for light mode
      }`}>
        <div className="flex h-14 md:h-16 items-center justify-between px-3 sm:px-5 md:px-6">
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5">
            <img
              src="/logo.svg"
              alt="ProfitAgentz Logo"
              className="size-7 sm:size-8 md:size-9 object-contain rounded-lg"
            />
            {/* FIXED: Consistent logo color in both themes - purple first, dark second */}
            <span className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight">
              <span className="text-purple-600 dark:text-purple-400">Profit</span>{" "}
              <span className="text-slate-800 dark:text-white">Agentz</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative text-sm font-semibold transition-all duration-300 after:absolute after:inset-x-0 after:-bottom-[3px] after:h-0.5 after:transition-all after:duration-300 ${
                  pathname === link.path
                    ? `${isDark ? "text-gray-300 hover:text-purple-500 after:bg-purple-600" : "text-slate-700 hover:text-purple-600 after:bg-purple-600"} after:w-full`
                    : `${isDark ? "text-gray-300 hover:text-purple-500 after:bg-purple-600" : "text-slate-700 hover:text-purple-600 after:bg-purple-600"} after:w-0 hover:after:w-full`
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center gap-4 lg:gap-6 border-l border-slate-200 dark:border-white/10 pl-4 lg:pl-6">
              <button
                onClick={toggleTheme}
                className="rounded-xl p-2 lg:p-2.5 transition-all duration-200 hover:bg-slate-100 dark:hover:bg-white/10"
                aria-label="Toggle Theme"
              >
                {isDark ? (
                  <Sun className="size-5 text-yellow-400" />
                ) : (
                  <Moon className="size-5 text-slate-700" />
                )}
              </button>

              {/* FIXED: Consistent button color in both themes - vibrant purple */}
              {!isContactPage && (
                <Link
                  href="/contact"
                  className="group relative overflow-hidden text-sm px-4 lg:px-6 py-2 lg:py-2.5 rounded-full font-semibold text-white transition-all duration-300 hover:scale-[1.04] active:scale-95 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300 rounded-full" />
                  <span className="relative flex items-center gap-2">
                    Get Custom Agent
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile UI */}
          <div className="flex items-center gap-2 sm:gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="rounded-xl p-2 transition-colors hover:bg-slate-100 dark:hover:bg-white/10"
            >
              {isDark ? (
                <Sun className="size-5 text-yellow-400" />
              ) : (
                <Moon className="size-5 text-slate-700" />
              )}
            </button>

            <button
              className="rounded-xl p-2 transition-colors hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`animate-in fade-in-50 slide-in-from-top-5 space-y-4 border-t px-4 py-6 sm:space-y-6 sm:px-6 sm:py-8 md:hidden rounded-b-xl shadow-2xl sm:rounded-b-2xl ${
            isDark 
              ? "border-white/10 bg-navy-900" 
              : "border-slate-200/60 bg-white"
          }`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-base sm:text-lg font-semibold transition-colors ${
                  pathname === link.path
                    ? (isDark ? "text-purple-400" : "text-purple-600")
                    : (isDark ? "text-gray-200 hover:text-purple-400" : "text-slate-700 hover:text-purple-600")
                }`}
              >
                {link.name}
              </Link>
            ))}

            {!isContactPage && (
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg text-white transition-all duration-300 hover:shadow-xl active:scale-95 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40"
              >
                Get Custom Agent →
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;