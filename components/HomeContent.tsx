'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Database,
  CheckCircle2,
} from "lucide-react";

const FeatureCard = ({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`backdrop-blur-md border p-5 sm:p-7 rounded-3xl transition-all group shadow-sm hover:shadow-xl ${
      isDark 
        ? "bg-white/5 border-white/10 hover:border-purple-400 hover:shadow-purple-400/10" 
        : "bg-white/50 border-slate-200 hover:border-purple-600 hover:shadow-purple/10"
    }`}>
      <div className={`w-11 h-11 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform ${
        isDark 
          ? "bg-purple-400/10 shadow-inner shadow-purple-400/5" 
          : "bg-purple/10 shadow-inner shadow-purple/5"
      }`}>
        <Icon className={`w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 ${
          isDark ? "text-purple-400" : "text-purple-600"
        }`} />
      </div>
      <h3 className={`text-xl sm:text-2xl font-bold mb-2.5 sm:mb-4 ${
        isDark ? "text-white" : "text-slate-900"
      }`}>
        {title}
      </h3>
      <p className={`leading-relaxed text-base sm:text-lg ${
        isDark ? "text-gray-300" : "text-slate-600"
      }`}>
        {desc}
      </p>
    </div>
  );
};

const HomeContent: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const specializations = [
    "Support", "Sales", "Legal", "Recruitment", "Data", "Research", "Finance", "Custom",
  ];

  useEffect(() => {
    // Check theme on component mount
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }

    // Scroll to top
    window.scrollTo(0, 0);
    const timer = setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 0);
    
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

  return (
    <div className={`overflow-hidden ${isDark ? "bg-[#0A0B1B]" : "bg-[#F9FBFC]"}`}>
      {/* Hero - reduced padding & spacing */}
<section className={`relative min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center px-5 sm:px-6 pt-28 sm:pt-36 pb-20 sm:pb-28 transition-colors ${
  isDark ? "bg-navy-900" : "bg-slate-50"
}`}>
  <div className={`absolute inset-0 bg-gradient-to-br via-transparent to-transparent -z-10 ${
    isDark 
      ? "from-purple-400/10 via-purple-400/5" 
      : "from-purple/10 via-purple/5"
  }`} />

  <div className={`absolute top-1/4 -left-20 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full blur-[90px] sm:blur-[110px] ${
    isDark 
      ? "bg-purple-400/30 opacity-60" 
      : "bg-purple/30 opacity-50"
  }`} />
  <div className={`absolute bottom-1/4 -right-20 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full blur-[90px] sm:blur-[110px] ${
    isDark 
      ? "bg-purple-400/20 opacity-60" 
      : "bg-purple/30 opacity-50"
  }`} />
  
  <div className="max-w-6xl mx-auto text-center fade-in px-3">
    <div className={`inline-block border px-4 py-1 rounded-full text-xs font-bold mb-5 sm:mb-7 uppercase tracking-[0.2em] ${
      isDark 
        ? "bg-purple-400/20 text-purple-300 border-purple-400/30" 
        : "bg-purple/10 text-purple-700 border-purple/20"
    }`}>
      Revenue-First Automation
    </div>
    <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-5 pb-2 sm:mb-7 bg-gradient-to-r bg-clip-text text-transparent ${
      isDark 
        ? "from-purple-100 via-purple-200 to-purple-400" 
        : "from-purple-900 via-purple-800 to-purple-500"
    }`}>
      Supercharge Profits <br className="hidden md:block" /> with AI Agents
    </h1>
    <p className={`text-base sm:text-lg md:text-xl mb-6 sm:mb-9 max-w-3xl mx-auto font-medium leading-relaxed tracking-wide ${
      isDark ? "text-gray-300" : "text-slate-600"
    }`}>
      High-performance automation and token optimization designed to scale smarter and maximize your bottom line.
    </p>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
      {/* Primary CTA - smaller everywhere */}
      <Link
        href="/contact"
        className={`group relative w-full sm:w-auto min-w-[220px] sm:min-w-[240px] px-7 sm:px-9 py-3.5 sm:py-4 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 overflow-hidden ${
          isDark 
            ? "bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40" 
            : "bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-700 hover:to-purple-500 shadow-lg shadow-purple/30 hover:shadow-purple/40"
        }`}
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-xl sm:rounded-2xl" />
        <span className="relative flex items-center">
          Get Started Now{" "}
          <ArrowRight className="ml-1.5 w-4 h-4 sm:ml-2 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
        </span>
      </Link>

      {/* Secondary CTA */}
      <div className={`w-full sm:w-auto min-w-[220px] sm:min-w-[240px] flex items-center justify-center gap-2.5 px-5 py-3 backdrop-blur-sm border rounded-xl sm:rounded-2xl ${
        isDark 
          ? "bg-white/5 border-white/10" 
          : "bg-white/50 border-slate-200"
      }`}>
        <div className="flex -space-x-1.5">
          <div className={`w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 ${
            isDark ? "border-navy-800" : "border-white"
          }`} />
          <div className={`w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 ${
            isDark ? "border-navy-800" : "border-white"
          }`} />
          <div className={`w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 ${
            isDark ? "border-navy-800" : "border-white"
          }`} />
        </div>
        <div className="text-left">
          <div className={`text-xs sm:text-sm font-bold ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            Join 500+ Companies
          </div>
          <div className={`text-[10px] sm:text-xs ${
            isDark ? "text-gray-400" : "text-slate-600"
          }`}>
            Automating with AI
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Marquee - FIXED: Dark text on light background for dark theme */}
      <div className={`py-6 sm:py-8 overflow-hidden ${
        isDark 
          ? "bg-white/5" 
          : "bg-slate-100"
      }`}>
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...specializations, ...specializations].map((spec, i) => (
            <span
              key={i}
              className={`text-lg sm:text-2xl md:text-3xl font-bold mx-6 sm:mx-9 uppercase tracking-tighter ${
                isDark 
                  ? "text-slate-600"  // Lighter gray for dark theme
                  : "text-slate-300"  // Normal for light theme
              }`}
            >
              {spec} <span className={`ml-2 font-black sm:ml-3 ${
                isDark ? "text-purple-400" : "text-purple-600"
              }`}>•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className={`text-2.5xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 tracking-normal ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            Built for Performance
          </h2>
          <p className={`text-base sm:text-lg md:text-xl font-medium ${
            isDark ? "text-gray-300" : "text-slate-600"
          }`}>
            Everything you need to deploy enterprise-grade AI agents at scale.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <FeatureCard icon={Zap} title="Fast Deployment" desc="Go from concept to active agent in days. Our modular systems accelerate speed-to-revenue." />
          <FeatureCard icon={ShieldCheck} title="Private Infrastructure" desc="SOC 2 compliant. Your business data is isolated and never used for public training." />
          <FeatureCard icon={Database} title="Deep Connectivity" desc="Native integration with your current tech stack, databases, and internal workflows." />
        </div>
      </section>

      {/* Manifesto - reduced spacing */}
      <section className={`py-16 sm:py-24 border-y ${
        isDark 
          ? "bg-navy-900/50 border-white/10" 
          : "bg-slate-100 border-slate-200"
      }`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 items-center">
          <div className="order-2 lg:order-1">
            <h2 className={`text-2.5xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 leading-tight tracking-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              AI That Delivers ROI, <br /> Not Just Conversation.
            </h2>
            <div className="space-y-4 sm:space-y-5">
              {[
                "Accelerate sales cycles with autonomous outreach.",
                "Scale securely with SOC 2 type infrastructure.",
                "Private data instances—your intel is safe.",
                "Token optimization engines reducing costs by 50%.",
              ].map((item, i) => (
                <div key={i} className="flex items-start group">
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0 transition-colors ${
                    isDark 
                      ? "bg-purple-400/10 group-hover:bg-purple-400" 
                      : "bg-purple/10 group-hover:bg-purple-600"
                  }`}>
                    <CheckCircle2 className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                      isDark 
                        ? "text-purple-400 group-hover:text-white" 
                        : "text-purple-600 group-hover:text-white"
                    }`} />
                  </div>
                  <p className={`text-base sm:text-lg font-medium leading-relaxed ${
                    isDark ? "text-gray-300" : "text-slate-700"
                  }`}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className={`absolute inset-0 blur-[90px] rounded-full ${
              isDark 
                ? "bg-purple-400/20 opacity-30" 
                : "bg-purple/20 opacity-40"
            }`} />
            <div className={`relative rounded-2xl overflow-hidden border shadow-2xl z-10 rotate-1 ${
              isDark ? "border-white/10" : "border-slate-200"
            }`}>
              <img
                src="https://images.pexels.com/photos/5466789/pexels-photo-5466789.jpeg"
                alt="ROI-focused AI automation dashboard showing cost reduction and revenue growth"
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
                width={800}
                height={500}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges - tighter */}
      <section className={`py-12 sm:py-20 px-5 sm:px-6 ${
        isDark ? "bg-navy-900" : "bg-white"
      }`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={`uppercase tracking-[0.25em] text-[9px] sm:text-xs font-black mb-8 sm:mb-12 ${
            isDark ? "text-gray-400" : "text-slate-500"
          }`}>
            Verified Security & Compliance
          </p>
          <div className={`flex flex-wrap justify-center items-center gap-8 sm:gap-14 md:gap-20 ${
            isDark ? "opacity-70" : "opacity-60"
          }`}>
            <span className={`text-lg sm:text-xl md:text-2xl font-black ${
              isDark ? "text-gray-300" : "text-slate-800"
            }`}>SOC 2 TYPE II</span>
            <span className={`text-lg sm:text-xl md:text-2xl font-black ${
              isDark ? "text-gray-300" : "text-slate-800"
            }`}>GDPR READY</span>
            <span className={`text-lg sm:text-xl md:text-2xl font-black ${
              isDark ? "text-gray-300" : "text-slate-800"
            }`}>ISO 27001</span>
            <span className={`text-lg sm:text-xl md:text-2xl font-black ${
              isDark ? "text-gray-300" : "text-slate-800"
            }`}>HIPAA</span>
          </div>
        </div>
      </section>

      {/* Final CTA - smaller button & less padding */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-24">
        <div className={`text-white p-8 sm:p-16 md:p-20 rounded-3xl sm:rounded-[3rem] text-center relative overflow-hidden shadow-2xl ${
          isDark 
            ? "bg-gradient-to-br from-navy-800 to-navy-900" 
            : "bg-gradient-to-br from-slate-900 to-slate-800"
        }`}>
          <div className={`absolute top-0 right-0 w-64 h-64 sm:w-72 sm:h-72 blur-[80px] -translate-y-1/2 translate-x-1/2 rounded-full ${
            isDark 
              ? "bg-purple-400/20" 
              : "bg-purple-600/30"
          }`} />
          <div className={`absolute bottom-0 left-0 w-64 h-64 sm:w-72 sm:h-72 blur-[80px] translate-y-1/2 -translate-x-1/2 rounded-full ${
            isDark 
              ? "bg-purple-400/10" 
              : "bg-purple-600/20"
          }`} />

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-5 sm:mb-7 leading-tight tracking-tight">
            Ready to automate profits?
          </h2>
          <p className={`text-base sm:text-lg md:text-xl mb-6 sm:mb-9 max-w-2xl mx-auto font-medium ${
            isDark ? "text-gray-300" : "text-gray-400"
          }`}>
            Stop manually handling tasks that AI can do better, faster, and cheaper.
          </p>
          <Link
            href="/contact"
            className={`inline-flex items-center px-7 sm:px-9 py-3.5 sm:py-4.5 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all hover:scale-105 active:scale-97 shadow-lg ${
              isDark 
                ? "bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-400 hover:to-purple-300 shadow-purple-400/30" 
                : "bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-600 hover:to-purple-500 shadow-purple/30"
            }`}
          >
            Request Free Audit <ArrowRight className="ml-1.5 w-4.5 h-4.5 sm:ml-2 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;