'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { HeartHandshake, Scale, ShieldCheck, ChevronRight } from 'lucide-react';

const AIEthicsContent: React.FC = () => {
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

  const complianceFrameworks = ["EU AI Act", "NIST AI RMF", "OECD AI Principles", "IEEE Ethically Aligned Design"];
  const lastUpdated = "January 13, 2026";

  return (
    <div className={`${isDark ? "bg-[#0A0B1B]" : "bg-[#F9FBFC]"} max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-20 pt-28 sm:pt-32`} itemScope itemType="https://schema.org/WebPage">
      {/* Hero Section */}
      <section 
        className="mb-16 sm:mb-20 text-center max-w-5xl mx-auto fade-in"
        itemScope
        itemType="https://schema.org/Article"
      >
        <meta itemProp="headline" content="AI Ethics Policy" />
        <meta itemProp="datePublished" content="2026-01-13" />
        <meta itemProp="dateModified" content="2026-01-13" />
        <meta itemProp="author" content="ProfitAgentz" />
        <meta itemProp="publisher" content="ProfitAgentz" />
        
        <div className="inline-block bg-purple-500/10 text-purple-600 border border-purple-500/20 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-5 sm:mb-6 tracking-wider uppercase">
          Responsible AI
        </div>
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight text-slate-900 dark:text-white"
          itemProp="name"
        >
          AI Ethics Policy
        </h1>
        <p 
          className="text-lg sm:text-xl text-slate-600 dark:text-gray-400 font-medium"
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
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <HeartHandshake className="text-purple-600 w-8 h-8" aria-hidden="true" />
            </div>
            <p 
              className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium"
              itemProp="text"
            >
              At <span className="font-bold text-purple-600">ProfitAgentz</span>, we build AI that is 
              <strong> responsible, transparent, secure</strong> and <strong>human-aligned</strong>. 
              Our ethical framework ensures that artificial intelligence serves humanity's best interests 
              while maintaining the highest standards of integrity, fairness, and accountability.
            </p>
            <p className="mt-5 text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              This policy outlines our commitment to ethical AI development and deployment.
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-sm sm:text-base text-slate-500 dark:text-slate-400 italic mb-16">
        Our ethical framework guides every aspect of AI development, from initial design to ongoing monitoring, 
        ensuring alignment with global standards and societal values.
      </p>

      {/* Compliance Badges */}
      <div className="mb-12 sm:mb-16">
        <div className="bg-white/60 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200/70 dark:border-slate-700/50 rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white text-center">
            Aligned with Leading Ethical Frameworks
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {complianceFrameworks.map((framework, index) => (
              <div 
                key={index}
                className="bg-white/80 dark:bg-white/10 rounded-xl p-4 border border-slate-200/70 dark:border-slate-700/50 text-center hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1 transition-all"
              >
                <div className="text-sm font-bold text-slate-700 dark:text-slate-300">{framework}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Principles Grid - Updated borders */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-9 mb-16"
        itemScope
        itemType="https://schema.org/ItemList"
        itemProp="mainEntity"
      >
        {[
          {
            icon: HeartHandshake,
            title: "1. Human-Centric AI",
            content: "Assist human decisions\nNever replace judgment in critical areas\nAlways support human oversight",
            riskLevel: "Low Risk",
            compliance: "EU AI Act Article 5"
          },
          {
            icon: ShieldCheck,
            title: "2. Data Privacy & Ownership",
            content: "Client data remains client-owned\nNo training usage without explicit consent\nAccess limited to project needs",
            riskLevel: "GDPR Compliant",
            compliance: "GDPR Article 4"
          },
          {
            icon: Scale,
            title: "3. Transparency",
            content: "Clear disclosure of AI usage\nHonest communication about capabilities & limitations\nDocumented decision processes",
            riskLevel: "High Transparency",
            compliance: "Algorithmic Accountability"
          },
          {
            title: "4. Fairness & Bias Mitigation",
            content: "Regular prompt/workflow reviews\nOngoing output monitoring\nBias adjustments when identified\nDiverse testing datasets",
            riskLevel: "Continuous Assessment",
            compliance: "Equal Opportunity"
          },
          {
            title: "5. Security & Reliability",
            content: "Secure infrastructure\nControlled access\nSafety-first continuous optimization\nRedundant safety measures",
            riskLevel: "High Security",
            compliance: "ISO 27001 Standards"
          },
          {
            title: "6. Responsible Use",
            content: "We reject:\nIllegal use\nDeceptive practices\nHarmful automation\nManipulative applications",
            riskLevel: "Ethical Review",
            compliance: "Prohibited Practices"
          }
        ].map((item, i) => (
          <div 
            key={i}
            className="bg-white/60 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200/70 dark:border-slate-700/50 rounded-2xl p-7 transition-all hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
            itemScope
            itemType="https://schema.org/ListItem"
            itemProp="itemListElement"
          >
            <meta itemProp="position" content={`${i + 1}`} />
            {item.icon && (
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
                <item.icon className="text-purple-600 w-7 h-7" aria-hidden="true" />
              </div>
            )}
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
              {item.content}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-500 font-medium mt-3">
              <span className="font-bold">Risk Level:</span> {item.riskLevel} • 
              <span className="font-bold ml-2">Compliance:</span> {item.compliance}
            </div>
          </div>
        ))}
      </div>

      {/* Strong Commitment Block */}
      <div 
        className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-10 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden mb-14 sm:mb-20"
        itemScope
        itemType="https://schema.org/ArticleSection"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 
            className="text-4xl sm:text-5xl font-bold mb-10 text-center tracking-tight"
            itemProp="name"
          >
            Our Ethical Commitment
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-5 text-purple-400">7. Continuous Improvement</h3>
              <div 
                className="text-gray-200 leading-relaxed"
                itemProp="text"
              >
                We conduct <strong className="text-white">quarterly ethical audits</strong>, bi-annual impact assessments, and continuous 
                monitoring of all AI systems. Our practices evolve alongside emerging AI standards 
                and societal expectations.<br/><br/>
                
                <ul className="list-disc pl-5 space-y-2">
                  <li>Quarterly ethical reviews</li>
                  <li>Bi-annual impact assessments</li>
                  <li>Continuous monitoring systems</li>
                  <li>Annual third-party audits</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-5 text-purple-400">8. Accountability Framework</h3>
              <div 
                className="text-gray-200 leading-relaxed"
                itemProp="text"
              >
                We maintain <strong className="text-white">clear lines of responsibility</strong> and a transparent reporting structure. 
                Questions or concerns about our ethical practices are always welcome and receive 
                prompt attention from our Ethics Review Board.<br/><br/>
                
                <div className="bg-white/10 p-4 rounded-xl">
                  <p className="font-bold">Response guarantee:</p>
                  <p>Within 48 business hours for all ethics inquiries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div 
        className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 p-8 rounded-3xl shadow-sm"
        itemScope
        itemType="https://schema.org/ContactPoint"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 
              className="text-3xl font-bold mb-5 text-slate-900 dark:text-white"
              itemProp="name"
            >
              Contact for Ethical Concerns
            </h3>
            <div 
              className="text-slate-700 dark:text-slate-300 leading-relaxed mb-5"
              itemProp="description"
            >
              <p className="mb-4">
                We welcome questions, concerns, or suggestions regarding our ethical practices. 
                All inquiries are reviewed by our Ethics Review Board and receive confidential handling.
              </p>
              {/* <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  <strong>Response time:</strong> Guaranteed within 48 business hours
                </p>
              </div> */}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-slate-700 dark:text-slate-300">
              <p className="text-lg font-bold mb-2" itemProp="contactType">Ethics Contact:</p>
              <a 
                href="mailto:contact@profitagentz.com" 
                className="text-purple-600 hover:underline text-xl font-medium"
                itemProp="email"
              >
                contact@profitagentz.com
              </a>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                For ethical concerns, incident reporting, or policy questions
              </p>
            </div>
            <div className="mt-6">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-bold">Ethics Review Board:</span> Independent oversight committee
              </p>
            </div>
            <meta itemProp="availableLanguage" content="English" />
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-16 italic">
        This policy is a living document that evolves with AI technology, regulations, and societal expectations. 
        We commit to regular review and updates to maintain the highest ethical standards.
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
            <Link href="/cookie-policy" className="block p-4 bg-white dark:bg-transparent rounded-lg border border-slate-200 dark:border-white/10 dark:hover:border-purple-600 hover:border-purple-600 transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-700 dark:text-gray-300">Cookie Policy</span>
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

export default AIEthicsContent;