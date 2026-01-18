'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Target, Zap, ChevronRight } from 'lucide-react';

// ── Enhanced TEAM data with professional roles and descriptions ──
const TEAM = [
  {
    name: "Aditya Dagar",
    role: "Founder & CTO",
    bio: "Drives technical vision and AI product strategy. Specializes in building autonomous systems and scalable infrastructure that deliver measurable business impact across enterprise markets.",
    image: "/images/aaditya.avif",
  },
  {
    name: "Priyanshu Singh",
    role: "COO & Head of Operations",
    bio: "Architects operational excellence and organizational growth strategies. Builds high-performance teams and scalable processes that enable rapid market expansion and execution velocity.",
    image: "/images/priyanshu.avif",
  },
  {
    name: "Sukesh Bharadwaj",
    role: "VP of Engineering",
    bio: "Leads engineering excellence and production infrastructure. Architects enterprise-grade AI systems with focus on reliability, performance, and scalability for mission-critical deployments.",
    image: "/images/sukesh.avif",
  },
] as const;

const AboutContent: React.FC = () => {

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
    <div className={`${isDark ? "bg-[#0A0B1B]" : "bg-[#F9FBFC]"} max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-20 pt-28 sm:pt-32`}>
      {/* Hero */}
      <section className="mb-16 sm:mb-20 text-center max-w-5xl mx-auto fade-in">
        <div className={`inline-block border px-4 py-1 rounded-full text-xs font-bold mb-5 sm:mb-6 tracking-[0.2em] uppercase ${
          isDark 
            ? "bg-purple-400/20 text-purple-300 border-purple-400/30" 
            : "bg-purple/10 text-purple-700 border-purple/20"
        }`}>
          Our Vision
        </div>
        <h1 className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-5 sm:mb-7 leading-[1.1] tracking-tight ${
          isDark ? "text-white" : "text-slate-900"
        }`}>
          Engineering <br className="hidden md:block" /> Growth through AI
        </h1>
        <p className={`text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto ${
          isDark ? "text-gray-400" : "text-slate-600"
        }`}>
          From Delhi to global scale, we build agents that automate profits—not just generate hype. 
          Measurable ROI is the only metric that matters.
        </p>
      </section>

      {/* Mission & Why Us */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
        {/* Mission Card - purple border on hover */}
        <article 
          className={`p-7 sm:p-9 md:p-10 rounded-2xl sm:rounded-[3rem] shadow-sm transition-all duration-300 ${
            isDark 
              ? "bg-white/5 border border-white/10 hover:border-purple-400" 
              : "bg-white border border-slate-200 hover:border-purple-600"
          }`}
          itemScope
          itemType="https://schema.org/Mission"
        >
          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-7 ${
            isDark ? "bg-purple-400/10" : "bg-purple/10"
          }`}>
            <Target className={`w-6 h-6 sm:w-7 sm:h-7 ${
              isDark ? "text-purple-400" : "text-purple-600"
            }`} />
          </div>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 tracking-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            Our Mission
          </h2>
          <p 
            className={`text-base sm:text-lg md:text-xl leading-relaxed font-medium ${
              isDark ? "text-gray-400" : "text-slate-600"
            }`}
            itemProp="description"
          >
            To empower businesses with autonomous systems that eliminate repetitive labor, unlock insights, and scale revenue 24/7.
          </p>
        </article>

        {/* Why Us Card - purple border on hover */}
        <article className={`p-7 sm:p-9 md:p-10 rounded-2xl sm:rounded-[3rem] shadow-sm transition-all duration-300 ${
          isDark 
            ? "bg-purple-400/10 border border-purple-400/20 hover:border-purple-400" 
            : "bg-purple/5 border border-purple/20 hover:border-purple-600"
        }`}>
          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-7 ${
            isDark ? "bg-white/10" : "bg-white/80"
          }`}>
            <Zap className={`w-6 h-6 sm:w-7 sm:h-7 ${
              isDark ? "text-purple-400" : "text-purple-600"
            }`} />
          </div>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 tracking-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            Why ProfitAgentz?
          </h2>
          <ul className="space-y-3 sm:space-y-4">
            {[
              "Token savings expertise (up to 70%)",
              "Bespoke multi-agent orchestration",
              "Private & ISO compliant architecture",
              "Guaranteed outcome-driven engineering"
            ].map((item, i) => (
              <li key={i} className={`flex items-center text-base sm:text-lg font-bold ${
                isDark ? "text-gray-200" : "text-slate-700"
              }`}>
                <div className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 ${
                  isDark ? "bg-purple-400" : "bg-purple-600"
                }`} />
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>

      {/* Team Section */}
      <section className="mb-16 sm:mb-20">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className={`text-2.5xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 tracking-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            Meet Our Core Team
          </h2>
          <p className={`text-base sm:text-lg md:text-xl font-medium ${
            isDark ? "text-gray-400" : "text-slate-600"
          }`}>
            The minds building tomorrow's autonomous revenue engines
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            {TEAM.map((member) => (
              <article 
                key={member.name} 
                className={`group backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 w-full max-w-[320px] sm:max-w-xs ${
                  isDark 
                    ? "bg-white/5 border border-white/10 hover:border-purple-400" 
                    : "bg-white/40 border border-slate-200/60 hover:border-purple-600"
                }`}
                itemScope
                itemType="https://schema.org/Person"
              >
                <div className="relative mx-auto mb-5 sm:mb-6 w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 overflow-hidden rounded-full shadow-md">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="object-cover w-full h-full grayscale-[0.6] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    itemProp="image"
                    width={176}
                    height={176}
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-70 transition-opacity duration-500 ${
                    isDark ? "from-navy-900/40" : "from-slate-900/40"
                  }`} />
                </div>

                <div className="text-center">
                  <h3 
                    className={`text-lg sm:text-xl md:text-2xl font-bold mb-1 ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                    itemProp="name"
                  >
                    {member.name}
                  </h3>
                  <p 
                    className={`font-bold mb-3 sm:mb-4 tracking-wide text-xs sm:text-sm uppercase ${
                      isDark ? "text-purple-300" : "text-purple-600"
                    }`}
                    itemProp="jobTitle"
                  >
                    {member.role}
                  </p>
                  <p 
                    className={`text-sm sm:text-base leading-relaxed font-medium ${
                      isDark ? "text-gray-400" : "text-slate-600"
                    }`}
                    itemProp="description"
                  >
                    {member.bio}
                  </p>
                </div>
                <meta itemProp="worksFor" content="ProfitAgentz" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline - more compact */}
      <section 
        className={`text-white p-8 sm:p-12 md:p-16 rounded-3xl sm:rounded-[3rem] md:rounded-[4rem] overflow-hidden relative shadow-2xl ${
          isDark 
            ? "bg-gradient-to-br from-navy-800 to-navy-900" 
            : "bg-gradient-to-br from-slate-900 to-slate-800"
        }`}
        aria-labelledby="process-heading"
      >
        <div className={`absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 blur-[120px] sm:blur-[150px] rounded-full ${
          isDark ? "bg-purple-400/20" : "bg-purple-600/20"
        }`} />
        
        <div className="text-center mb-12 sm:mb-16 relative z-10">
          <h2 
            id="process-heading"
            className="text-2.5xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight"
          >
            Our Process
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium">
            From blueprint to production-grade deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 relative z-10">
          {[
            { step: "01", title: "Audit", desc: "Analysis of workflows, costs, and high-impact manual tasks." },
            { step: "02", title: "Build", desc: "Crafting bespoke agent architectures using modern LLM frameworks." },
            { step: "03", title: "Deploy", desc: "Deep integration into your existing CRM, APIs, and workflows." },
            { step: "04", title: "Refine", desc: "Continuous monitoring to slash costs and improve accuracy." }
          ].map((item, i) => (
            <div 
              key={i} 
              className="group relative"
              itemScope
              itemType="https://schema.org/HowToStep"
            >
              <span className={`text-6xl sm:text-7xl md:text-8xl font-black absolute -top-6 -left-3 sm:-top-8 sm:-left-4 select-none transition-all duration-500 pointer-events-none ${
                isDark ? "text-white/5 group-hover:text-purple-400/20" : "text-white/5 group-hover:text-purple-500/20"
              }`}>
                {item.step}
              </span>
              <div className="relative pt-5 sm:pt-6">
                <h3 
                  className={`text-xl sm:text-2xl font-black mb-2 sm:mb-3 transition-colors duration-300 ${
                    isDark 
                      ? "text-white group-hover:text-purple-400" 
                      : "text-white group-hover:text-purple-300"
                  }`}
                  itemProp="name"
                >
                  {item.title}
                </h3>
                <p 
                  className="text-sm sm:text-base text-gray-400 leading-relaxed font-medium"
                  itemProp="text"
                >
                  {item.desc}
                </p>
              </div>
              <meta itemProp="position" content={(i + 1).toString()} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutContent;