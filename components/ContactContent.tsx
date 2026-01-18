'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, ChevronDown, ChevronUp, Loader2, Sparkles } from 'lucide-react';
import { FAQS } from '@/constants';
import { sendContactForm } from '@/services/emailService';
import { useAudit } from '@/hooks/useAudit';
import FAQAccordion from './FAQAccordion';
import Toast from './Toast';

interface FAQItem {
  question: string;
  answer: string;
}

interface ToastType {
  message: string;
  type: 'success' | 'error';
}

const ContactContent: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactError, setContactError] = useState<string | null>(null);
  const { runAudit, loading: isAuditing, error: auditError } = useAudit();
  
  const [auditResult, setAuditResult] = useState<any>(null);
  const [toast, setToast] = useState<ToastType | null>(null);
  const [isDark, setIsDark] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setContactError(null);

    if (!formRef.current) return;

    try {
      const formData = new FormData(formRef.current);
      await sendContactForm(formData);

      showToast("Inquiry received! We'll reach out within 24 hours.");
      formRef.current.reset();
    } catch (err: any) {
      console.error('Form submission error:', err);
      const errorMessage = err.message || "Failed to send inquiry. Please try again or contact us directly.";
      setContactError(errorMessage);
      showToast("Something went wrong. Please try again.", 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAudit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const businessDesc = formData.get('businessDesc') as string;

    if (!businessDesc?.trim()) return;

    const result = await runAudit(businessDesc);
    if (result) {
      setAuditResult(result);
    } else if (auditError) {
      showToast(auditError, 'error');
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.split('#').pop();
      if (id === 'freeAudit') {
        const timer = setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        return () => clearTimeout(timer);
      }
    } 
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Check theme on component mount
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }

    // Listen for theme changes
    const handleThemeChange = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`${isDark ? "bg-[#0A0B1B]" : "bg-[#F9FBFC]"} max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-20 pt-28 sm:pt-32 relative`}>
      {/* Hero */}
      <header className="mb-16 sm:mb-20 text-center max-w-4xl mx-auto fade-in">
        <div className="inline-block bg-purple/10 text-purple border border-purple/10 px-4 py-1 rounded-full text-xs font-bold mb-5 sm:mb-6 tracking-[0.2em] uppercase">
          Get Started
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-5 sm:mb-7 leading-[1] text-slate-900 dark:text-white tracking-tighter">
          Ready to Profit?
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-gray-400 font-medium leading-relaxed">
          {"The future of automation is here. Let's Design your AI solution."}
        </p>
      </header>

      {/* Contact Form & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 mb-16 sm:mb-20">
        {/* Contact Form */}
        <div 
          className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[3rem] shadow-xl"
          itemScope
          itemType="https://schema.org/ContactPage"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-slate-900 dark:text-white tracking-tight">
            Request a Consultation
          </h2>

          <form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className="space-y-5 sm:space-y-6"
            itemScope
            itemType="https://schema.org/ContactForm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div>
                <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mb-1.5 sm:mb-2">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  name="from_name"
                  className="w-full bg-slate-50 dark:bg-navy-900/50 border border-slate-200 dark:border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all text-sm sm:text-base text-slate-900 dark:text-white font-medium"
                  itemProp="givenName"
                />
              </div>
              <div>
                <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mb-1.5 sm:mb-2">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  name="from_email"
                  className="w-full bg-slate-50 dark:bg-navy-900/50 border border-slate-200 dark:border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all text-sm sm:text-base text-slate-900 dark:text-white font-medium"
                  itemProp="email"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mb-1.5 sm:mb-2">
                Company
              </label>
              <input
                required
                type="text"
                name="company_name"
                className="w-full bg-slate-50 dark:bg-navy-900/50 border border-slate-200 dark:border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all text-sm sm:text-base text-slate-900 dark:text-white font-medium"
                itemProp="affiliation"
              />
            </div>

            <div>
              <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mb-1.5 sm:mb-2">
                How Can We Help?
              </label>
              <textarea
                required
                name="message"
                rows={3}
                className="w-full bg-slate-50 dark:bg-navy-900/50 border border-slate-200 dark:border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all text-sm sm:text-base text-slate-900 dark:text-white font-medium resize-none"
                itemProp="description"
              ></textarea>
            </div>

            {contactError && <p className="text-red-500 text-xs sm:text-sm font-medium text-center">{contactError}</p>}

            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-gradient-to-r from-purple-900 to-purple-600 hover:from-purple-600 hover:to-purple-500 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg md:text-xl py-3.5 sm:py-5 transition-all hover:scale-105 active:scale-97 shadow-lg shadow-purple/30 flex items-center justify-center disabled:opacity-70"
              aria-label={isSubmitting ? "Submitting inquiry" : "Submit inquiry"}
            >
              {isSubmitting ? <Loader2 className="animate-spin mr-2 h-5 w-5" /> : null}
              {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
            </button>
            <meta itemProp="target" content="https://profitagentz.com/contact" />
          </form>
        </div>

        {/* Info Column */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-slate-900 dark:text-white tracking-tight underline decoration-purple/50 decoration-4 underline-offset-6 sm:underline-offset-8">
            Our Commitment
          </h2>
          <div className="space-y-5 sm:space-y-6 mb-10 sm:mb-12">
            {[
              "Dedicated solutions architect assigned to every project",
              "Comprehensive performance analytics and reporting",
              "Intelligent escalation with human oversight",
              "Transparent pricing with cost optimization guarantees",
            ].map((benefit, i) => (
              <div 
                key={i} 
                className="flex items-start group"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple/10 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 mt-1 transition-colors group-hover:bg-purple">
                  <CheckCircle2 className="text-purple w-4 h-4 sm:w-5 sm:h-5 group-hover:text-white" />
                </div>
                <p 
                  className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-gray-300 font-bold leading-tight"
                  itemProp="description"
                >
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" itemScope itemType="https://schema.org/Organization">
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mb-1 sm:mb-2">
                Email Us
              </span>
              <a
                href="mailto:contact@profitagentz.com"
                className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white hover:text-purple transition-colors"
                itemProp="email"
              >
                contact@profitagentz.com
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mb-1 sm:mb-2">
                Call Us
              </span>
              <a
                href="tel:+918448335264"
                className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white hover:text-purple transition-colors"
                itemProp="telephone"
              >
                +91 844 833 5264
              </a>
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col" itemScope itemType="https://schema.org/PostalAddress">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mb-1 sm:mb-2">
                Office Location
              </span>
              <p className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                Sainik Enclave, Najafgarh, New Delhi - 110043, NCR, India
              </p>
              <meta itemProp="streetAddress" content="Sainik Enclave, Najafgarh" />
              <meta itemProp="addressLocality" content="New Delhi" />
              <meta itemProp="postalCode" content="110043" />
              <meta itemProp="addressRegion" content="Delhi" />
              <meta itemProp="addressCountry" content="IN" />
            </div>
          </div>
        </div>
      </div>

      {/* AI Audit Section */}
      <section 
        className="mb-16 sm:mb-20" 
        id="freeAudit"
        itemScope
        itemType="https://schema.org/Service"
      >
        <div className="bg-slate-900 dark:bg-navy-800 text-white p-8 sm:p-10 md:p-14 lg:p-16 rounded-3xl sm:rounded-[3rem] md:rounded-[4rem] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple/20 blur-[120px] sm:blur-[150px] rounded-full" />
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-purple/20 text-purple-light border border-purple/30 px-4 py-1 rounded-full text-xs font-bold mb-5 sm:mb-6 uppercase tracking-widest">
              <Sparkles className="w-4 h-4" /> <span>Instant Intelligence</span>
            </div>
            <h2 className="text-2.5xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-6 tracking-tight leading-[1.1]">
              Free AI Business Audit
            </h2>
            <p 
              className="text-base sm:text-lg md:text-xl text-gray-300 font-medium leading-relaxed"
              itemProp="description"
            >
              Describe your bottleneck, and we'll engineer an immediate solution.
            </p>
          </div>

          <form 
            onSubmit={handleAudit} 
            className="max-w-2xl mx-auto space-y-5 sm:space-y-6 relative z-10"
            itemScope
            itemType="https://schema.org/Audit"
          >
            <textarea
              name="businessDesc"
              placeholder="e.g. We spend 15 hours a week manually qualifying leads from LinkedIn..."
              rows={4}
              required
              className="w-full bg-navy-900 border border-white/10 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-4 sm:py-5 focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all text-sm sm:text-base text-white resize-none"
              itemProp="auditSubject"
            ></textarea>
            <button
              disabled={isAuditing}
              className="w-full bg-white text-navy-900 font-bold py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl hover:bg-slate-200 transition-all flex items-center justify-center disabled:opacity-70 active:scale-98 shadow-xl"
              aria-label={isAuditing ? "Analyzing business process" : "Get free AI audit report"}
            >
              {isAuditing ? <Loader2 className="animate-spin mr-2 h-5 w-5" /> : null}
              {isAuditing ? "Analyzing..." : "Get AI Report"}
            </button>
            {auditError && <p className="text-red-400 text-sm sm:text-base text-center font-bold mt-3 animate-pulse">{auditError}</p>}
          </form>

          {auditResult && (
            <div 
              className="mt-12 sm:mt-16 fade-in bg-navy-900/80 backdrop-blur-md rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 border border-purple/30 shadow-2xl relative z-10"
              itemScope
              itemType="https://schema.org/AuditReport"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-purple" itemProp="name">
                  {auditResult.auditTitle}
                </h3>
                <div className="px-5 sm:px-6 py-1.5 sm:py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 font-bold text-lg sm:text-xl">
                  {auditResult.potentialSavings} Savings
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-10">
                {auditResult.suggestedAgents.map((agent: any, idx: number) => (
                  <div
                    key={idx}
                    className="bg-white/5 p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 hover:border-purple/30 transition-colors"
                    itemScope
                    itemType="https://schema.org/Service"
                  >
                    <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-white" itemProp="name">
                      {agent.name}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-5 font-medium leading-relaxed" itemProp="description">
                      {agent.benefit}
                    </p>
                    <div className="text-[9px] sm:text-[10px] font-bold text-purple uppercase tracking-[0.2em] border-t border-white/5 pt-3 sm:pt-4 flex justify-between items-center">
                      <span>ROI projection</span>
                      <span className="text-white text-xs sm:text-sm" itemProp="estimatedCost">
                        {agent.estimatedRoi}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 sm:p-8 bg-purple/5 rounded-xl sm:rounded-[2rem] border border-purple/20 relative group">
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 text-purple opacity-20">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h4 className="font-bold mb-2 sm:mb-3 uppercase tracking-widest text-[10px] sm:text-xs text-purple">
                  Strategic Tip
                </h4>
                <p className="text-gray-200 text-base sm:text-lg md:text-xl italic leading-relaxed" itemProp="auditFinding">
                  "{auditResult.optimizationTip}"
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/FAQPage">
        <h2 className="text-2.5xl sm:text-3xl md:text-5xl font-bold mb-8 sm:mb-10 text-center text-slate-900 dark:text-white tracking-tight">
          Support & Guidance
        </h2>
        <div className="bg-white dark:bg-white/5 rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-6 md:p-8 border border-slate-200 dark:border-white/5 shadow-sm">
          {FAQS.map((faq) => (
            <FAQAccordion key={faq.question} item={faq} />
          ))}
        </div>
      </section>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default ContactContent;