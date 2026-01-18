'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Cookie, Settings } from 'lucide-react';

const CookiePolicyContent: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  
    useEffect(() => {
      // Check theme on component mount
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark" || document.documentElement.classList.contains('dark')) {
        setIsDark(true);
      }
  
      // Scroll to top
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 0);
      
      // Listen for theme changes
      const handleThemeChange = () => {
        setIsDark(document.documentElement.classList.contains('dark'));
      };
  
      const observer = new MutationObserver(handleThemeChange);
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  
      return () => {
        clearTimeout(timer);
        observer.disconnect();
      };
    }, []);

  const lastUpdated = "January 2026";

  return (
    <div className={`${isDark ? "bg-[#0A0B1B]" : "bg-[#F9FBFC]"} max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-20 pt-28 sm:pt-32`} itemScope itemType="https://schema.org/WebPage">
      {/* Hero Section */}
      <section 
        className="mb-16 sm:mb-20 text-center max-w-5xl mx-auto fade-in"
        itemScope
        itemType="https://schema.org/Article"
      >
        <meta itemProp="headline" content="Cookie Policy" />
        <meta itemProp="datePublished" content="2026-01-01" />
        <meta itemProp="dateModified" content="2026-01-01" />
        <meta itemProp="author" content="ProfitAgentz" />
        <meta itemProp="publisher" content="ProfitAgentz" />
        
        <div className="inline-block bg-purple-500/10 text-purple-600 border border-purple-500/20 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-5 sm:mb-6 tracking-wider uppercase">
          Transparency & Control
        </div>
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight text-slate-900 dark:text-white"
          itemProp="name"
        >
          Cookie Policy
        </h1>
        <p 
          className="text-lg sm:text-xl text-slate-600 dark:text-gray-400 font-medium"
          itemProp="datePublished"
        >
          Last updated: {lastUpdated}
        </p>
      </section>

      {/* 1. Introduction - Updated border */}
      <div className="mb-12 sm:mb-16">
        <div 
          className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 p-8 sm:p-10 rounded-3xl shadow-lg relative overflow-hidden"
          itemScope
          itemType="https://schema.org/ArticleSection"
        >
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Cookie className="text-purple-600 w-8 h-8" aria-hidden="true" />
            </div>
            <p 
              className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium"
              itemProp="text"
            >
              This Cookie Policy explains how <span className="font-bold text-purple-600">ProfitAgentz</span> uses cookies and similar technologies on
              <span className="font-semibold"> https://profitagentz.com</span> to improve your experience, security, and site insights. 
              By using our website, you consent to the use of cookies in accordance with this policy.
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-sm sm:text-base text-slate-500 dark:text-slate-400 italic mb-16">
        This policy details the types of cookies we use, their purposes, and how you can control them to manage your privacy preferences.
      </p>

      {/* 2. Types of Cookies */}
      <h2 
        className="text-3xl sm:text-4xl font-bold mb-10 text-slate-900 dark:text-white text-center"
        id="cookie-types"
        itemProp="name"
      >
        Types of Cookies We Use
      </h2>

      <div 
        className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-9 mb-16"
        itemScope
        itemType="https://schema.org/ItemList"
        itemProp="mainEntity"
      >
        {[
          {
            title: "1. Essential Cookies",
            desc: "Required for basic site functions & security.\nCannot be disabled without breaking the site.",
            bg: "bg-white/60 dark:bg-slate-800/30 backdrop-blur-sm",
            border: "border border-slate-200/70 dark:border-slate-700/50",
            role: "Essential",
            duration: "Session-based"
          },
          {
            title: "2. Analytics Cookies",
            desc: "Help us understand usage, improve content and navigation.\nCollect anonymous data about site performance.",
            bg: "bg-purple-500/5",
            border: "border border-purple-500/20",
            role: "Performance",
            duration: "Persistent"
          },
          {
            title: "3. Marketing Cookies",
            desc: "Measure campaign performance and personalize content.\nOnly used with your explicit consent.",
            bg: "bg-white/60 dark:bg-slate-800/30 backdrop-blur-sm",
            border: "border border-slate-200/70 dark:border-slate-700/50",
            role: "Targeting",
            duration: "Persistent"
          }
        ].map((item, i) => (
          <div 
            key={i}
            className={`${item.bg} ${item.border} rounded-2xl p-7 transition-all hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1`}
            itemScope
            itemType="https://schema.org/ListItem"
            itemProp="itemListElement"
          >
            <meta itemProp="position" content={`${i + 1}`} />
            <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
              <Settings className="text-purple-600 w-7 h-7" aria-hidden="true" />
            </div>
            <h3 
              className="text-2xl font-bold mb-4 text-slate-900 dark:text-white"
              itemProp="name"
            >
              {item.title}
            </h3>
            <div 
              className="text-base text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line mb-4"
              itemProp="description"
            >
              {item.desc}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-500 font-medium">
              <span className="font-bold">Role:</span> {item.role} • 
              <span className="font-bold ml-2">Duration:</span> {item.duration}
            </div>
          </div>
        ))}
      </div>

      {/* 3–5 Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-9">
        <div 
          className="bg-white/60 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200/70 dark:border-slate-700/50 rounded-2xl p-7 transition-all hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
          itemScope
          itemType="https://schema.org/ArticleSection"
        >
          <h3 
            className="text-2xl font-bold mb-4 text-slate-900 dark:text-white"
            itemProp="name"
          >
            Managing Cookies
          </h3>
          <div 
            className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium"
            itemProp="text"
          >
            <p className="mb-4">Control cookies via:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Browser settings (Chrome, Firefox, Safari, Edge)</li>
              <li>Our consent banner/tools</li>
              <li>Third-party cookie management plugins</li>
            </ul>
            <p className="text-sm text-slate-500 dark:text-slate-500 italic">
              <strong>Note:</strong> Some features may be limited if essential cookies are disabled.
            </p>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-500 font-medium mt-3">
            <span className="font-bold">Category:</span> User Control Options
          </div>
        </div>

        <div 
          className="bg-white/60 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200/70 dark:border-slate-700/50 rounded-2xl p-7 transition-all hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
          itemScope
          itemType="https://schema.org/ArticleSection"
        >
          <h3 
            className="text-2xl font-bold mb-4 text-slate-900 dark:text-white"
            itemProp="name"
          >
            Third-Party Cookies
          </h3>
          <div 
            className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium"
            itemProp="text"
          >
            <p className="mb-4">Some third-party services may set cookies:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Google Analytics (performance tracking)</li>
              <li>Social media platforms (sharing features)</li>
              <li>Embedded content providers</li>
              <li>Advertising networks (with consent)</li>
            </ul>
            <p className="text-sm text-slate-500 dark:text-slate-500 italic">
              These services follow their own privacy & cookie policies.
            </p>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-500 font-medium mt-3">
            <span className="font-bold">Category:</span> External Services
          </div>
        </div>

        <div 
          className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-10 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
          itemScope
          itemType="https://schema.org/ContactPoint"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />
          <div className="relative z-10">
            <h3 
              className="text-4xl font-bold mb-6"
              itemProp="name"
            >
              Updates & Contact
            </h3>
            <div 
              className="text-gray-200 leading-relaxed mb-6"
              itemProp="description"
            >
              <p className="mb-4">
                This Cookie Policy may be updated periodically to reflect changes in our practices, 
                technology, or legal requirements. Significant changes will be prominently displayed 
                on this page.
              </p>
              <p>
                We recommend reviewing this policy regularly to stay informed about how we use cookies.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-lg">
                <span className="font-bold" itemProp="contactType">Email:</span>{' '}
                <a 
                  href="mailto:contact@profitagentz.com" 
                  className="text-purple-400 hover:underline"
                  itemProp="email"
                >
                  contact@profitagentz.com
                </a>
              </p>
              <p className="text-sm text-gray-400">
                Response time for cookie-related inquiries: 5 business days
              </p>
            </div>
            <meta itemProp="areaServed" content="Worldwide" />
            <meta itemProp="availableLanguage" content="English" />
          </div>
        </div>
      </div>

      {/* Legal Compliance Block */}
      <div 
        className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-10 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden mt-14 sm:mt-20"
        itemScope
        itemType="https://schema.org/ArticleSection"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 
            className="text-4xl sm:text-5xl font-bold mb-10 text-center tracking-tight"
            itemProp="name"
          >
            Legal Compliance
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-5 text-purple-400">GDPR Compliant (EU)</h3>
              <div 
                className="text-gray-200 leading-relaxed"
                itemProp="text"
              >
                Our cookie practices comply with the General Data Protection Regulation.<br/><br/>
                We provide clear consent mechanisms and respect user preferences for all non-essential cookies.
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-5 text-purple-400">CCPA Ready (California)</h3>
              <div 
                className="text-gray-200 leading-relaxed"
                itemProp="text"
              >
                California Consumer Privacy Act compliant.<br/><br/>
                California residents can exercise their right to opt-out of cookie-based data sharing.
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-5 text-purple-400">Global Standards</h3>
              <div 
                className="text-gray-200 leading-relaxed"
                itemProp="text"
              >
                Aligned with PIPEDA (Canada), LGPD (Brazil), and other global privacy frameworks.<br/><br/>
                We implement privacy-by-design principles across all our services.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div 
        className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 p-8 rounded-3xl shadow-sm mt-14 sm:mt-20"
        itemScope
        itemType="https://schema.org/ArticleSection"
      >
        <h3 
          className="text-3xl font-bold mb-5 text-slate-900 dark:text-white text-center"
          itemProp="name"
        >
          Cookie Duration & Storage
        </h3>
        <div 
          className="text-slate-700 dark:text-slate-300 leading-relaxed text-center max-w-3xl mx-auto"
          itemProp="text"
        >
          <p className="mb-4">
            Cookies have different lifespans. Session cookies expire when you close your browser, 
            while persistent cookies remain until they expire or you delete them.
          </p>
          <p>
            We regularly review and update our cookie usage to ensure compliance with evolving regulations 
            and best practices.
          </p>
        </div>
      </div>

      <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-16 italic">
        By continuing to use our website, you acknowledge that you have read and understand this Cookie Policy.
      </p>

      {/* Additional Resources */}
      <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200 dark:border-white/10">
        <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-slate-900 dark:text-white">
            Related Documents & Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/privacy-policy" className="block p-4 bg-white dark:bg-transparent rounded-lg border border-slate-200 dark:border-white/10 dark:hover:border-purple-600 hover:border-purple-600 transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-700 dark:text-gray-300">Privacy Policy</span>
                <ChevronRight className="w-4 h-4 text-purple-600" aria-hidden="true" />
              </div>
            </Link>
            <Link href="/ai-ethics-policy" className="block p-4 bg-white dark:bg-transparent rounded-lg border border-slate-200 dark:border-white/10 dark:hover:border-purple-600 hover:border-purple-600 transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-700 dark:text-gray-300">AI Ethics Policy</span>
                <ChevronRight className="w-4 h-4 text-purple-600" aria-hidden="true" />
              </div>
            </Link>
            <Link href="/terms-and-conditions" className="block p-4 bg-white dark:bg-transparent rounded-lg border border-slate-200 dark:border-white/10 dark:hover:border-purple-600 hover:border-purple-600 transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-700 dark:text-gray-300">Terms of Service</span>
                <ChevronRight className="w-4 h-4 text-purple-600" aria-hidden="true" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyContent;