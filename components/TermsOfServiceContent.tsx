'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Scale, AlertTriangle, FileCheck, Shield, Lock, Brain, ChevronRight } from 'lucide-react';

const TermsOfServiceContent: React.FC = () => {
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

  const lastUpdated = "January 13, 2026";
  const jurisdiction = "Delhi, India";
  const governingLaw = "Laws of India";

  return (
    <div className={`${isDark ? "bg-[#0A0B1B]" : "bg-[#F9FBFC]"} max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-20 pt-28 sm:pt-32`} itemScope itemType="https://schema.org/WebPage">
      {/* Hero Section */}
      <section 
        className="mb-16 sm:mb-20 text-center max-w-5xl mx-auto fade-in"
        itemScope
        itemType="https://schema.org/Article"
      >
        <meta itemProp="headline" content="Terms of Service" />
        <meta itemProp="datePublished" content="2026-01-13" />
        <meta itemProp="dateModified" content="2026-01-13" />
        <meta itemProp="author" content="ProfitAgentz" />
        <meta itemProp="publisher" content="ProfitAgentz" />
        
        <div className="inline-block bg-purple-500/10 text-purple-600 border border-purple-500/20 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-5 sm:mb-6 tracking-wider uppercase">
          Legal Agreement
        </div>
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight text-slate-900 dark:text-white"
          itemProp="name"
        >
          Terms of Service
        </h1>
        <p 
          className="text-lg sm:text-xl text-slate-600 dark:text-gray-400 font-medium"
          itemProp="datePublished"
        >
          Last updated: {lastUpdated}
        </p>
      </section>

      {/* Intro Card */}
      <div className="mb-12 sm:mb-16">
        <div 
          className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 p-8 sm:p-10 rounded-3xl shadow-lg relative overflow-hidden"
          itemScope
          itemType="https://schema.org/ArticleSection"
        >
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Scale className="text-purple-600 w-8 h-8" aria-hidden="true" />
            </div>
            <p 
              className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium"
              itemProp="text"
            >
              By accessing or using <span className="font-bold">https://profitagentz.com</span> or any ProfitAgentz services 
              (including pre-built AI agents, custom AI development, and AI integration services), you agree to be bound by 
              these Terms of Service ("Terms").
            </p>
            <p className="mt-5 text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              If you do not agree with these Terms, you must not access or use our website or services.
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-sm sm:text-base text-slate-500 dark:text-slate-400 italic mb-16">
        These Terms govern the provision of AI agents — both ready-to-use and fully custom-built — as well as AI integration 
        into existing software systems. We aim for transparency in an evolving technology landscape.
      </p>

      {/* Main Content */}
      <div className="space-y-14 sm:space-y-20">
        {/* Key Sections Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-9"
          itemScope
          itemType="https://schema.org/ItemList"
          itemProp="mainEntity"
        >
          {[
            {
              icon: Brain,
              title: "1. Our Services",
              content: `ProfitAgentz provides:\n• Pre-built AI agents and automation tools\n• Custom AI agent development\n• AI integration & optimization services for existing software\n• Consulting and related professional services\n\nSpecific scope, deliverables, timelines and pricing are defined in separate Order Forms, Proposals, Statements of Work or project agreements ("Engagement Documents").`,
              legalCategory: "Service Description"
            },
            {
              icon: AlertTriangle,
              title: "2. No Guarantee of Results",
              content: "All services are provided on a **best-efforts** basis.\n\nWe provide **NO WARRANTY** — express or implied — regarding:\n• Business results, revenue, profit, cost savings\n• Accuracy, completeness or reliability of AI outputs\n• Absence of errors, hallucinations or biases\n\nAI technology is probabilistic and non-deterministic by nature.",
              legalCategory: "Disclaimer of Warranties"
            },
            {
              icon: FileCheck,
              title: "3. Your Responsibilities",
              content: "You agree to:\n• Provide only lawful, accurate and rights-cleared data/materials\n• Use AI outputs responsibly and in compliance with law\n• Implement appropriate human review & oversight\n• Not rely solely on AI for critical decisions (legal, financial, medical, safety-related etc.)",
              legalCategory: "User Obligations"
            },
            {
              icon: Shield,
              title: "4. Intellectual Property",
              content: "• Our pre-built agents, core platform, background IP and general methodologies remain our exclusive property\n• Unless otherwise agreed in writing in an Engagement Document:\n  → You own the custom deliverables specifically created for you (subject to our background IP license)\n  → We retain rights to use generalized learnings, techniques & anonymized data for improving our services\n• You grant us a license to use input data solely to provide & improve the services (subject to our Privacy Policy)",
              legalCategory: "Intellectual Property Rights"
            },
            {
              icon: Lock,
              title: "5. Data Usage & AI Training",
              content: "Unless explicitly agreed otherwise in writing:\nWe may use anonymized, aggregated usage data and outputs to train, fine-tune and improve our AI models and services.\n\nYou may opt-out of training usage via written notice (some service features may be limited as a result).",
              legalCategory: "Data Usage Terms"
            },
            {
              title: "6. Acceptable Use & Prohibitions",
              content: "You may **not** use our services to:\n• Violate any law or regulation\n• Infringe third-party intellectual property\n• Generate harmful, deceptive, defamatory, illegal or adult content\n• Develop competing AI products/services (without written consent)\n• Attempt to reverse-engineer, extract or copy our models/agents",
              legalCategory: "Usage Restrictions"
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
                className="text-base text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line"
                itemProp="description"
              >
                {item.content}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-500 font-medium mt-3">
                <span className="font-bold">Category:</span> {item.legalCategory}
              </div>
            </div>
          ))}
        </div>

        {/* Strong Disclaimers Block */}
        <div 
          className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-10 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
          itemScope
          itemType="https://schema.org/ArticleSection"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <h2 
              className="text-4xl sm:text-5xl font-bold mb-10 text-center tracking-tight"
              itemProp="name"
            >
              Critical Disclaimers
            </h2>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-5 text-purple-400">AI Technology Disclaimer</h3>
                <div 
                  className="text-gray-200 leading-relaxed"
                  itemProp="text"
                >
                  Artificial Intelligence may generate incorrect, incomplete, biased, offensive or nonsensical outputs ("hallucinations").<br/><br/>
                  All outputs are provided <strong className="text-white">"AS IS"</strong> without warranty of any kind.<br/><br/>
                  Users must implement appropriate human review, validation, and oversight mechanisms.
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-5 text-purple-400">No Professional Advice</h3>
                <div 
                  className="text-gray-200 leading-relaxed"
                  itemProp="text"
                >
                  Our services and AI agents do <strong className="text-white">NOT</strong> constitute legal, financial, investment, tax, medical, insurance or any other regulated professional advice.<br/><br/>
                  Outputs are for informational/research purposes only. Always consult qualified professionals before making decisions.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Key Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-9">
          <div 
            className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 p-8 rounded-3xl shadow-sm"
            itemScope
            itemType="https://schema.org/ArticleSection"
          >
            <h3 
              className="text-3xl font-bold mb-5 text-slate-900 dark:text-white"
              itemProp="name"
            >
              7. Limitation of Liability
            </h3>
            <div 
              className="text-slate-700 dark:text-slate-300 leading-relaxed"
              itemProp="text"
            >
              To the maximum extent permitted by law:<br/><br/>
              • We are not liable for any indirect, consequential, incidental, special, punitive or exemplary damages<br/>
              • Our total aggregate liability shall not exceed the fees actually paid by you to us in the twelve (12) months preceding the claim<br/>
              • This limitation applies regardless of the cause of action or legal theory
            </div>
          </div>

          <div 
            className="bg-purple-500/5 border border-purple-500/20 p-8 rounded-3xl shadow-sm"
            itemScope
            itemType="https://schema.org/ArticleSection"
          >
            <h3 
              className="text-3xl font-bold mb-5 text-slate-900 dark:text-white"
              itemProp="name"
            >
              8. Governing Law & Disputes
            </h3>
            <div 
              className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed"
              itemProp="text"
            >
              These Terms are governed exclusively by the laws of India, without regard to conflict of law principles.<br/><br/>
              Any disputes shall be subject to the exclusive jurisdiction of the courts in Delhi, India.<br/><br/>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                For EU consumers: You may also have the right to file a complaint with your local consumer protection authority.
              </span>
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
              9. Changes & Contact
            </h3>
            <div 
              className="text-slate-700 dark:text-slate-300 leading-relaxed mb-5"
              itemProp="description"
            >
              We may update these Terms at any time. Continued use after posting changes constitutes acceptance.<br/><br/>
              Material changes will be notified via email or website notice at least 30 days before taking effect.
            </div>
            <div className="text-slate-700 dark:text-slate-300">
              Questions? Contact us at:<br/>
              <a 
                href="mailto:contact@profitagentz.com" 
                className="text-purple-600 hover:underline font-medium"
                itemProp="email"
              >
                contact@profitagentz.com
              </a>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Response time for legal inquiries: 10 business days
              </p>
            </div>
            <meta itemProp="contactType" content="customer service" />
            <meta itemProp="availableLanguage" content="English" />
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-16 italic">
          These Terms constitute the entire agreement regarding our services and supersede all prior understandings. 
          Certain engagements may be governed by additional or superseding written agreements.
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
                  <ChevronRight className="w-4 h-4 text-purple" aria-hidden="true" />
                </div>
              </Link>
              <Link href="/ai-ethics-policy" className="block p-4 bg-white dark:bg-transparent rounded-lg border border-slate-200 dark:border-white/10 dark:hover:border-purple-600 hover:border-purple-600 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-700 dark:text-gray-300">AI Ethics Policy</span>
                  <ChevronRight className="w-4 h-4 text-purple" aria-hidden="true" />
                </div>
              </Link>
              <Link href="/cookie-policy" className="block p-4 bg-white dark:bg-transparent rounded-lg border border-slate-200 dark:border-white/10 dark:hover:border-purple-600 hover:border-purple-600 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-700 dark:text-gray-300">Cookie Policy</span>
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

export default TermsOfServiceContent;