'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Linkedin, Sparkles } from 'lucide-react';

const Footer = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check theme on component mount - same as Navbar
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  // Also listen for theme changes
  useEffect(() => {
    const handleThemeChange = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    // Listen for changes to the document class
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-white dark:bg-navy-900 border-t border-slate-200 dark:border-white/10 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand Section - Larger */}
          <div className="col-span-1 md:col-span-5">
            <div className="flex items-center space-x-2.5 mb-5">
              <img
                src="/logo.svg"
                alt="ProfitAgentz Logo"
                className="w-9 h-9 object-contain rounded-lg"
              />
              <span className="text-2xl font-bold tracking-tight">
                <span className={isDark ? "text-purple-light" : "text-purple"}>Profit</span>
                <span className={isDark ? "text-white" : "text-slate-900"}>Agentz</span>
              </span>
            </div>
            <p className={`text-base leading-relaxed max-w-md mb-8 ${
              isDark ? "text-gray-400" : "text-slate-700"
            }`}>
              The world's first profit-first AI agency. Engineering high-impact
              autonomous growth through intelligent automation.
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="https://www.linkedin.com/company/profit-agentz/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl transition-all duration-300 border hover:scale-105 ${
                  isDark 
                    ? "bg-white/5 border-white/10 hover:bg-purple/20 hover:border-purple/50" 
                    : "bg-slate-100 border-slate-200 hover:bg-purple/10 hover:border-purple/50"
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin className={`w-5 h-5 ${
                  isDark ? "text-gray-300" : "text-slate-800"
                }`} />
              </a>
              <a
                href="https://www.instagram.com/profitagentz"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl transition-all duration-300 border hover:scale-105 ${
                  isDark 
                    ? "bg-white/5 border-white/10 hover:bg-purple/20 hover:border-purple/50" 
                    : "bg-slate-100 border-slate-200 hover:bg-purple/10 hover:border-purple/50"
                }`}
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={isDark ? "text-gray-300" : "text-slate-800"}
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-3">
            <h4 className={`font-bold mb-5 text-base ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className={`transition-colors text-sm font-medium inline-flex items-center group ${
                    isDark 
                      ? "text-gray-400 hover:text-purple-light" 
                      : "text-slate-700 hover:text-purple"
                  }`}
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-agents"
                  className={`transition-colors text-sm font-medium inline-flex items-center group ${
                    isDark 
                      ? "text-gray-400 hover:text-purple-light" 
                      : "text-slate-700 hover:text-purple"
                  }`}
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Our Agents
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`transition-colors text-sm font-medium inline-flex items-center group ${
                    isDark 
                      ? "text-gray-400 hover:text-purple-light" 
                      : "text-slate-700 hover:text-purple"
                  }`}
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`transition-colors text-sm font-medium inline-flex items-center group ${
                    isDark 
                      ? "text-gray-400 hover:text-purple-light" 
                      : "text-slate-700 hover:text-purple"
                  }`}
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1 md:col-span-4">
            <h4 className={`font-bold mb-5 text-base ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className={`p-2 rounded-lg mt-0.5 transition-colors ${
                  isDark 
                    ? "bg-white/5 group-hover:bg-purple/20" 
                    : "bg-slate-100 group-hover:bg-purple/10"
                }`}>
                  <svg
                    className={`w-4 h-4 ${
                      isDark ? "text-gray-300" : "text-slate-800"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className={`text-xs font-semibold mb-1 ${
                    isDark ? "text-gray-500" : "text-slate-700"
                  }`}>
                    Email
                  </p>
                  <a
                    href="mailto:contact@profitagentz.com"
                    className={`text-sm font-medium transition-colors ${
                      isDark 
                        ? "text-gray-300 hover:text-purple-light" 
                        : "text-slate-900 hover:text-purple"
                    }`}
                  >
                    contact@profitagentz.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className={`p-2 rounded-lg mt-0.5 transition-colors ${
                  isDark 
                    ? "bg-white/5 group-hover:bg-purple/20" 
                    : "bg-slate-100 group-hover:bg-purple/10"
                }`}>
                  <svg
                    className={`w-4 h-4 ${
                      isDark ? "text-gray-300" : "text-slate-800"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className={`text-xs font-semibold mb-1 ${
                    isDark ? "text-gray-500" : "text-slate-700"
                  }`}>
                    Phone
                  </p>
                  <a
                    href="tel:+918448335264"
                    className={`text-sm font-medium transition-colors ${
                      isDark 
                        ? "text-gray-300 hover:text-purple-light" 
                        : "text-slate-900 hover:text-purple"
                    }`}
                  >
                    +91 844 833 5264
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className={`p-2 rounded-lg mt-0.5 transition-colors ${
                  isDark 
                    ? "bg-white/5 group-hover:bg-purple/20" 
                    : "bg-slate-100 group-hover:bg-purple/10"
                }`}>
                  <svg
                    className={`w-4 h-4 ${
                      isDark ? "text-gray-300" : "text-slate-800"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className={`text-xs font-semibold mb-1 ${
                    isDark ? "text-gray-500" : "text-slate-700"
                  }`}>
                    Address
                  </p>
                  <address className={`not-italic text-sm font-medium leading-relaxed ${
                    isDark ? "text-gray-300" : "text-slate-900"
                  }`}>
                    Sainik Enclave, Najafgarh,
                    <br />
                    New Delhi - 110043, NCR, India
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Audit Section */}
        <div className={`mb-8 p-6 rounded-2xl border ${
          isDark 
            ? "bg-gradient-to-r from-purple/10 to-purple-light/10 border-purple/20" 
            : "bg-gradient-to-r from-purple/5 to-purple/10 border-purple/10"
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl shadow-sm ${
                isDark ? "bg-white/5" : "bg-white"
              }`}>
                <div className={`p-3 rounded-xl shadow-sm ${
                  isDark ? "bg-white/5" : "bg-white"
                }`}>
                  <Sparkles className={`w-6 h-6 ${
                    isDark ? "text-purple-light" : "text-purple"
                  }`} />
                </div>
              </div>
              <div>
                <h4 className={`font-bold text-base mb-1 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}>
                  Limited Offer
                </h4>
                <p className={`text-sm md:pr-24 sm:pr-12 ${
                  isDark ? "text-gray-400" : "text-slate-800"
                }`}>
                  Get a complimentary AI audit to identify automation
                  opportunities, performance gaps, and cost-saving optimizations
                  across your existing systems.
                </p>
              </div>
            </div>
            <Link
              href="/contact#freeAudit"
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap border ${
                isDark 
                  ? "bg-white/5 border-white/10 hover:bg-purple/20 hover:text-purple-light text-gray-300" 
                  : "bg-white border-slate-200 hover:bg-purple/10 hover:text-purple text-slate-900"
              }`}
            >
              Get Free Audit
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={`text-sm font-medium ${
            isDark ? "text-gray-500" : "text-slate-700"
          }`}>
            &copy; {new Date().getFullYear()} ProfitAgentz. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'AI Ethics'].map((item, index) => {
              const paths = ['/privacy-policy', '/terms-and-conditions', '/cookie-policy', '/ai-ethics-policy'];
              
              return (
                <React.Fragment key={index}>
                  <Link
                    href={paths[index]}
                    className={`transition-colors font-medium ${
                      isDark 
                        ? "text-gray-500 hover:text-purple-light" 
                        : "text-slate-700 hover:text-purple"
                    }`}
                  >
                    {item}
                  </Link>
                  {index < 3 && (
                    <span className={isDark ? "text-gray-700" : "text-slate-400"}>•</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;