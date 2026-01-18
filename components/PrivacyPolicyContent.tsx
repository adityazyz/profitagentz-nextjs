'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Shield, Lock, FileText, ChevronRight } from 'lucide-react';

const PrivacyPolicyContent: React.FC = () => {
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
  const complianceFrameworks = ["GDPR", "CCPA", "PIPEDA", "ISO 27001", "SOC 2"];
  const jurisdiction = "Delhi, India";

  return (
    <div className={`${isDark ? "bg-[#0A0B1B]" : "bg-[#F9FBFC]"} max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-20 pt-28 sm:pt-32`} itemScope itemType="https://schema.org/WebPage">
      {/* Hero Section */}
      <section 
        className="mb-16 sm:mb-20 text-center max-w-5xl mx-auto fade-in"
        itemScope
        itemType="https://schema.org/Article"
      >
        <meta itemProp="headline" content="Privacy Policy" />
        <meta itemProp="datePublished" content="2026-01-01" />
        <meta itemProp="dateModified" content="2026-01-01" />
        <meta itemProp="author" content="ProfitAgentz" />
        <meta itemProp="publisher" content="ProfitAgentz" />
        
        <div className="inline-block bg-purple/10 text-purple border border-purple/20 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-5 sm:mb-6 tracking-[0.2em] uppercase">
          Privacy & Trust
        </div>
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-5 sm:mb-7 leading-[1.1] text-slate-900 dark:text-white tracking-tighter"
          itemProp="name"
        >
          Privacy Policy
        </h1>
        <p 
          className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-gray-400 font-medium"
          itemProp="datePublished"
        >
          Last updated: {lastUpdated}
        </p>
      </section>

      {/* Intro Card - Updated border */}
      <div className="mb-12 sm:mb-16">
        <div 
          className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 p-8 sm:p-10 rounded-3xl shadow-lg relative overflow-hidden"
          itemScope
          itemType="https://schema.org/ArticleSection"
        >
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-purple/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Shield className="text-purple w-8 h-8" aria-hidden="true" />
            </div>
            <p 
              className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium"
              itemProp="text"
            >
              ProfitAgentz ("<span className="font-bold text-purple">ProfitAgentz</span>", "<span className="font-bold text-purple">we</span>", "<span className="font-bold text-purple">our</span>", or "<span className="font-bold text-purple">us</span>") operates 
              <span className="font-semibold"> https://profitagentz.com</span> and provides AI automation services. We are committed to protecting your privacy and handling data responsibly in accordance with global privacy regulations.
            </p>
            <p className="mt-5 text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content - Sections */}
      <div className="space-y-14 sm:space-y-20">
        {/* Section 1 + AI Special - Updated borders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-9">
          <div 
            className="bg-white/60 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200/70 dark:border-slate-700/50 rounded-2xl p-7 transition-all hover:shadow-xl hover:shadow-purple/10 hover:-translate-y-1"
            itemScope
            itemType="https://schema.org/ArticleSection"
          >
            <div className="w-14 h-14 bg-purple/10 rounded-2xl flex items-center justify-center mb-6">
              <Lock className="text-purple w-7 h-7" aria-hidden="true" />
            </div>
            <h2 
              className="text-2xl font-bold mb-4 text-slate-900 dark:text-white"
              itemProp="name"
            >
              1. Information We Collect
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-3 text-purple">a) Information You Provide</h3>
                <ul className="space-y-2 text-base text-slate-700 dark:text-slate-300">
                  <li className="flex items-center"><div className="w-2 h-2 bg-purple rounded-full mr-3" />Name</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-purple rounded-full mr-3" />Email</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-purple rounded-full mr-3" />Company</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-purple rounded-full mr-3" />Phone</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-purple rounded-full mr-3" />Message/Inquiry Details</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-purple">b) Business & Usage Information</h3>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  AI requirements, system integrations, communication records, audit data, and service usage patterns.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-purple">c) Automatically Collected Data</h3>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  IP address • Browser/device information • Pages visited • Cookies & analytics data • Performance metrics
                </p>
              </div>
            </div>
          </div>

          {/* AI Special Emphasis - Updated border */}
          <div 
            className="bg-purple/5 border border-purple/20 rounded-2xl p-7 transition-all hover:shadow-xl hover:shadow-purple/10 hover:-translate-y-1"
            itemScope
            itemType="https://schema.org/ArticleSection"
          >
            <div className="w-14 h-14 bg-white/80 dark:bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <FileText className="text-purple w-7 h-7" aria-hidden="true" />
            </div>
            <h2 
              className="text-2xl font-bold mb-4 text-slate-900 dark:text-white"
              itemProp="name"
            >
              2. AI Systems & Data Usage
            </h2>
            <div className="bg-white/50 dark:bg-white/5 p-6 rounded-2xl border border-purple/10 mb-5">
              <p className="text-lg font-bold text-purple mb-3">
                Key AI Data Commitment
              </p>
              <p className="text-base leading-relaxed text-slate-800 dark:text-slate-200">
                Client data is <span className="font-bold text-purple">never</span> used to train shared or third-party AI models 
                <strong className="text-purple"> unless explicitly agreed in a written Data Processing Agreement (DPA)</strong>.
              </p>
            </div>
            <ul className="space-y-3 text-base text-slate-700 dark:text-slate-300">
              <li className="flex items-start"><div className="w-2 h-2 bg-purple rounded-full mr-3 mt-1" />Custom AI agents use only authorized client data for specific project purposes</li>
              <li className="flex items-start"><div className="w-2 h-2 bg-purple rounded-full mr-3 mt-1" />Strict access controls limited to project needs</li>
              <li className="flex items-start"><div className="w-2 h-2 bg-purple rounded-full mr-3 mt-1" />Focus on operational efficiency, not data mining or model training</li>
              <li className="flex items-start"><div className="w-2 h-2 bg-purple rounded-full mr-3 mt-1" />GDPR-compliant data processing for EU clients</li>
            </ul>
          </div>
        </div>

        {/* Other Sections - Updated with same border styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-9">
          {[
            {
              title: "3. How We Use Your Information",
              desc: "Respond to inquiries • Deliver AI automation services & audits • Project communication • Improve site & security • Compliance with legal obligations",
              legalBasis: "Contract, Consent, Legitimate Interest"
            },
            {
              title: "4. Data Sharing",
              desc: "Essential service providers (hosting/infrastructure) • Analytics tools • Communication platforms\n\nWe do not sell, rent, or trade personal data.",
              sharingScope: "Limited to Service Delivery"
            },
            {
              title: "5. Data Security",
              desc: "Industry-standard encryption • Access controls • Secure infrastructure • Limited internal access • Regular security audits • Incident response protocols",
              securityLevel: "Enterprise Grade"
            },
            {
              title: "6. Data Retention",
              desc: "Kept only as long as necessary for service delivery, legal obligations, or legitimate business needs.\nDeletion requests considered subject to contractual obligations.",
              retentionPeriod: "Purpose-Based"
            },
            {
              title: "7. Data Processing Agreement",
              desc: "Enterprise & regulated clients: Comprehensive DPA available upon request including GDPR Article 28 requirements.",
              availability: "Upon Request"
            },
            {
              title: "8. Your Privacy Rights",
              desc: "Access • Correction • Deletion • Withdraw consent • Object to processing • Data portability\nEmail: contact@profitagentz.com",
              responseTime: "30 Days Maximum"
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="bg-white/60 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200/70 dark:border-slate-700/50 rounded-2xl p-7 transition-all hover:shadow-xl hover:shadow-purple/10 hover:-translate-y-1"
              itemScope
              itemType="https://schema.org/ArticleSection"
            >
              <h3 
                className="text-2xl font-bold mb-4 text-slate-900 dark:text-white"
                itemProp="name"
              >
                {item.title}
              </h3>
              <div 
                className="text-base text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line mb-4"
                itemProp="text"
              >
                {item.desc}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-500 font-medium mt-3">
                <span className="font-bold">Legal Basis:</span> {item.legalBasis || item.sharingScope || item.securityLevel || item.retentionPeriod || item.availability || item.responseTime}
              </div>
            </div>
          ))}
        </div>

        {/* Final Sections - Updated borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-9">
          <div 
            className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-10 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
            itemScope
            itemType="https://schema.org/ArticleSection"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple/20 blur-[120px] rounded-full" />
            <div className="relative z-10">
              <h3 
                className="text-4xl font-bold mb-6"
                itemProp="name"
              >
                9. International Data Transfers
              </h3>
              <div 
                className="text-gray-200 leading-relaxed"
                itemProp="text"
              >
                <p className="mb-4">
                  Data may be processed globally with appropriate safeguards including Standard Contractual Clauses (SCCs), 
                  Privacy Shield frameworks, and Binding Corporate Rules where applicable.
                </p>
                <p>
                  We ensure equivalent protection through contractual and technical measures regardless of processing location.
                </p>
              </div>
            </div>
          </div>

          <div 
            className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 p-8 rounded-3xl shadow-sm"
            itemScope
            itemType="https://schema.org/ContactPoint"
          >
            <h3 
              className="text-3xl font-bold mb-5 text-slate-900 dark:text-white"
              itemProp="name"
            >
              10. Updates & Contact
            </h3>
            <div 
              className="text-slate-700 dark:text-slate-300 leading-relaxed mb-5"
              itemProp="description"
            >
              <p className="mb-4">
                This policy may be updated to reflect changes in regulations, services, or business practices. 
                Significant changes will be prominently displayed here with advance notice where required.
              </p>
              <p>
                We recommend reviewing this policy periodically to stay informed about our privacy practices.
              </p>
            </div>
            <div className="text-slate-700 dark:text-slate-300">
              <p><span className="font-bold" itemProp="contactType">Privacy Contact:</span> <a href="mailto:contact@profitagentz.com" className="text-purple hover:underline" itemProp="email">contact@profitagentz.com</a></p>
              <p className="mt-2"><span className="font-bold">Jurisdiction:</span> {jurisdiction}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Response time for privacy inquiries: 15 business days</p>
            </div>
            <meta itemProp="availableLanguage" content="English" />
            <meta itemProp="areaServed" content="Worldwide" />
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-16 italic">
          This Privacy Policy explains our data handling practices. Your use of our services constitutes acceptance of these terms.
        </p>

        {/* Additional Resources */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200 dark:border-white/10">
          <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-slate-900 dark:text-white">
              Related Documents & Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/cookie-policy" className="block p-4 bg-white dark:bg-transparent rounded-lg border border-slate-200 dark:border-white/10 dark:hover:border-purple-600 hover:border-purple-600 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-700 dark:text-gray-300">Cookie Policy</span>
                  <ChevronRight className="w-4 h-4 text-purple" aria-hidden="true" />
                </div>
              </Link>
              <Link href="/ai-ethics-policy" className="block p-4 bg-white dark:bg-transparent rounded-lg border border-slate-200 dark:border-white/10 dark:hover:border-purple-600 hover:border-purple-600 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-700 dark:text-gray-300">AI Ethics Policy</span>
                  <ChevronRight className="w-4 h-4 text-purple" aria-hidden="true" />
                </div>
              </Link>
              <Link href="/terms-and-conditions" className="block p-4 bg-white dark:bg-transparent rounded-lg border border-slate-200 dark:border-white/10 dark:hover:border-purple-600 hover:border-purple-600 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-700 dark:text-gray-300">Terms of Service</span>
                  <ChevronRight className="w-4 h-4 text-purple" aria-hidden="true" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyContent;