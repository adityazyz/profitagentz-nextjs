'use client';

import React, { useEffect, useState } from 'react'; 
import Link from 'next/link';
import { AGENTS, iconMap } from '@/constants';
import { ChevronRight, Zap } from 'lucide-react';

const AgentsContent: React.FC = () => {
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

  return (
    <div className={`max-w-7xl ${isDark ? "bg-[#0A0B1B]" : "bg-[#F9FBFC]"} mx-auto px-5 sm:px-6 py-16 sm:py-20 pt-28 sm:pt-32`}>
      {/* Hero - more compact */}
      <header className="mb-16 sm:mb-20 text-center max-w-4xl mx-auto fade-in">
        <div className={`inline-block border px-4 py-1 rounded-full text-xs font-bold mb-5 sm:mb-6 tracking-[0.2em] uppercase ${
          isDark 
            ? "bg-purple-400/20 text-purple-300 border-purple-400/30" 
            : "bg-purple/10 text-purple-700 border-purple/20"
        }`}>
          AI Capabilities
        </div>
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 sm:mb-7 font-bold tracking-tight ${
          isDark ? "text-white" : "text-slate-900"
        }`}>
          Our ProfitAgentz Arsenal
        </h1>
        <p className={`text-base sm:text-lg md:text-xl leading-relaxed mb-7 sm:mb-9 font-medium ${
          isDark ? "text-gray-400" : "text-slate-600"
        }`}>
          Deploy pre-built high-performance agents or request a bespoke build tailored to your business.
        </p>
        <Link 
          href="/contact"
          className={`inline-flex items-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all hover:scale-105 active:scale-97 shadow-lg ${
            isDark 
              ? "bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 shadow-purple-500/30 text-white" 
              : "bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-700 hover:to-purple-500 shadow-purple/30 text-white"
          }`}
        >
          Request Custom Build <ChevronRight className="ml-1.5 w-4.5 h-4.5 sm:ml-2 sm:w-5 sm:h-5" />
        </Link>
      </header>

      {/* Agent Cards - tighter */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-20 sm:mb-28">
        {AGENTS.map((agent) => {
          const Icon = iconMap[agent.icon as keyof typeof iconMap];
          return (
            <article 
              key={agent.id} 
              className={`border p-6 sm:p-7 rounded-xl sm:rounded-[2.5rem] transition-all flex flex-col group h-full shadow-sm hover:shadow-lg ${
                isDark 
                  ? "bg-[#171626] border-white/10 hover:border-purple-400 hover:shadow-purple-400/10" 
                  : "bg-white border-slate-200 hover:border-purple-600 hover:shadow-purple/10"
              }`}
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="flex justify-between items-start mb-6 sm:mb-7">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all ${
                  isDark 
                    ? "bg-[#232231] text-gray-400 group-hover:text-purple-400 group-hover:bg-purple-400/10" 
                    : "bg-slate-100 text-slate-600 group-hover:text-purple-600 group-hover:bg-purple/10"
                }`}>
                  {Icon && <Icon className="w-5 h-5 sm:w-6 sm:h-6" />}
                </div>
                {agent.isBeta && (
                  <span className={`text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-md sm:rounded-lg tracking-widest uppercase ${
                    isDark 
                      ? "bg-purple-400/10 text-purple-300" 
                      : "bg-purple/10 text-purple-700"
                  }`}>
                    New
                  </span>
                )}
              </div>
              <h3 
                className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
                itemProp="name"
              >
                {agent.title}
              </h3>
              <p 
                className={`text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 flex-grow font-medium ${
                  isDark ? "text-gray-300" : "text-slate-600"
                }`}
                itemProp="description"
              >
                {agent.description}
              </p>
              <Link 
                href="/contact" 
                className={`w-full text-center py-3 sm:py-3.5 rounded-xl border font-bold text-sm sm:text-base transition-all active:scale-97 ${
                  isDark 
                    ? "border-white/10 text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-500 hover:text-white hover:border-purple-400" 
                    : "border-slate-200 text-slate-900 hover:bg-gradient-to-r hover:from-purple-800 hover:to-purple-600 hover:text-white hover:border-purple-600"
                }`}
                aria-label={`Deploy ${agent.title} AI agent`}
              >
                Deploy Now
              </Link>
            </article>
          );
        })}
      </div>

      {/* Optimization Section - more compact */}
      <section 
        className={`text-white p-8 sm:p-12 md:p-16 rounded-3xl sm:rounded-[3rem] md:rounded-[4rem] relative overflow-hidden shadow-2xl ${
          isDark 
            ? "bg-gradient-to-br from-navy-800 to-navy-900" 
            : "bg-gradient-to-br from-slate-900 to-slate-800"
        }`}
        aria-labelledby="optimization-heading"
      >
        <div className={`absolute -top-20 -left-20 sm:-top-24 sm:-left-24 w-64 h-64 sm:w-80 sm:h-80 blur-[100px] sm:blur-[120px] rounded-full opacity-60 ${
          isDark ? "bg-purple-400/30" : "bg-purple-600/30"
        }`} />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div>
            <div className={`flex items-center space-x-2.5 mb-5 ${
              isDark ? "text-purple-300" : "text-purple-400"
            }`}>
              <Zap className={`w-5 h-5 ${
                isDark ? "fill-purple-300" : "fill-purple-400"
              }`} />
              <span className="font-black tracking-widest uppercase text-xs">System Optimization</span>
            </div>
            <h2 
              id="optimization-heading"
              className="text-2.5xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight"
            >
              Slash Costs.<br className="sm:hidden" /> Boost Speed.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed font-medium">
              We've helped clients cut token usage by 50–70% while improving precision.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {['Smart Prompt Caching', 'Context Pruning', 'Model Distillation', 'Dynamic Routing'].map(item => (
                <div key={item} className="flex items-center text-base sm:text-lg text-gray-200 font-medium">
                  <div className={`w-2 h-2 rounded-full mr-2.5 ${
                    isDark ? "bg-purple-400" : "bg-purple-500"
                  }`} />
                  {item}
                </div>
              ))}
            </div>
            <Link 
              href="/contact" 
              className={`inline-block px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all shadow-lg active:scale-97 ${
                isDark 
                  ? "bg-white text-navy-900 hover:bg-gray-200" 
                  : "bg-white text-slate-900 hover:bg-slate-200"
              }`}
              aria-label="Request AI optimization audit"
            >
              Request AI Audit
            </Link>
          </div>

          <div 
            className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border relative group ${
              isDark 
                ? "bg-white/5 border-white/10" 
                : "bg-white/10 border-white/20"
            }`}
            role="img"
            aria-label="Chart showing 64% token cost reduction"
          >
            <div className={`absolute inset-0 blur-[60px] sm:blur-[80px] rounded-full group-hover:opacity-100 opacity-0 transition-opacity ${
              isDark ? "bg-purple-400/10" : "bg-purple-600/10"
            }`} />
            <div className="relative z-10 space-y-5 sm:space-y-6">
              <div className="flex justify-between items-center mb-6 sm:mb-8">
                <span className="text-base sm:text-lg font-bold">Token Cost Reduction</span>
                <span className={`text-2xl sm:text-3xl font-black ${
                  isDark ? "text-green-400" : "text-green-500"
                }`}>-64%</span>
              </div>
              <div className="h-40 sm:h-48 w-full flex items-end justify-around gap-5 sm:gap-6 px-3 sm:px-4">
                <div className="flex-1 bg-white/10 h-full rounded-xl sm:rounded-2xl relative">
                  <div className="absolute bottom-0 left-0 right-0 bg-white/20 h-full rounded-xl sm:rounded-2xl" />
                  <div className={`absolute bottom-0 left-0 right-0 h-[90%] rounded-xl sm:rounded-2xl animate-pulse ${
                    isDark ? "bg-purple-400/30" : "bg-purple-600/30"
                  }`} />
                  <span className="absolute -top-7 sm:-top-8 left-0 right-0 text-center text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest">Unoptimized</span>
                </div>
                <div className="flex-1 bg-white/10 h-full rounded-xl sm:rounded-2xl relative">
                  <div className={`absolute bottom-0 left-0 right-0 h-[25%] rounded-xl sm:rounded-2xl ${
                    isDark ? "bg-green-500/40" : "bg-green-600/40"
                  }`} />
                  <span className="absolute -top-7 sm:-top-8 left-0 right-0 text-center text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest">Optimized</span>
                </div>
              </div>
              <p className="text-center text-gray-500 text-[10px] sm:text-xs font-bold mt-6 uppercase tracking-[0.2em]">
                Based on Fintech SaaS Case Study
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgentsContent;