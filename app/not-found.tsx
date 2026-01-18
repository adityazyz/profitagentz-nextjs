import Link from 'next/link';
import { Home, Search, AlertCircle, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-900 pt-28 sm:pt-32 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple/10 rounded-full blur-[100px] opacity-50" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple/20 rounded-full blur-[100px] opacity-30" />

          <div className="relative z-10 text-center max-w-4xl mx-auto py-16 sm:py-20 md:py-24">
            {/* Error Badge */}
            <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-500 border border-red-500/20 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold mb-8 sm:mb-10 uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              Error 404
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 leading-tight tracking-tighter text-slate-900 dark:text-white">
              Page Not Found
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-gray-400 font-medium mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Looks like this AI agent went on an unscheduled mission. The page you're looking for has either been moved or doesn't exist.
            </p>

            {/* Illustration */}
            <div className="relative w-full max-w-md mx-auto mb-12 sm:mb-16">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple/20 to-purple/10 rounded-3xl blur-xl" />
                <div className="relative bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-slate-200/60 dark:border-white/10 rounded-3xl p-8 sm:p-10">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mb-6">
                      <div className="relative">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center animate-pulse">
                          <Search className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
                          <span className="text-white text-xs font-black">404</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm sm:text-base text-slate-500 dark:text-gray-400 font-medium mb-2">
                        AI Navigation Error
                      </div>
                      <div className="text-xs text-slate-400 dark:text-gray-500">
                        Route not found in neural network
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
              <Link
                href="/"
                className="group relative w-full sm:w-auto min-w-[220px] px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-purple-900 to-purple-700 hover:from-purple-600 hover:to-purple-500 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-xl sm:rounded-2xl" />
                <span className="relative flex items-center">
                  <Home className="mr-2 w-5 h-5" />
                  Return Home
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/contact"
                className="group w-full sm:w-auto min-w-[220px] px-7 sm:px-8 py-3.5 sm:py-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center transition-all hover:bg-white/80 dark:hover:bg-white/10 hover:border-purple/30 hover:shadow-lg hover:shadow-purple/10 active:scale-95"
              >
                <span className="flex items-center">
                  Get Help
                  <AlertCircle className="ml-2 w-4 h-4 text-purple" />
                </span>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="mb-12 sm:mb-16">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-6">
                Popular Pages You Might Be Looking For:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { href: '/ai-agents', label: 'AI Agents', desc: 'Our Solutions' },
                  { href: '/about', label: 'About Us', desc: 'Our Team' },
                  { href: '/contact', label: 'Contact', desc: 'Get in Touch' },
                  { href: '/ai-ethics-policy', label: 'AI Ethics', desc: 'Our Principles' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-slate-200/60 dark:border-white/8 rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all hover:border-purple/40 hover:shadow-lg hover:shadow-purple/10 hover:-translate-y-1"
                  >
                    <div className="text-sm font-bold text-slate-900 dark:text-white mb-1 group-hover:text-purple transition-colors">
                      {link.label}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-gray-400">
                      {link.desc}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Technical Details */}
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-slate-200/60 dark:border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple/10 rounded-xl flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-purple" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      Need Technical Support?
                    </div>
                    <div className="text-xs text-slate-500 dark:text-gray-400">
                      Our AI engineers are here to help
                    </div>
                  </div>
                </div>
                <Link
                  href="mailto:contact@profitagentz.com"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 bg-slate-900 dark:bg-white/5 text-white dark:text-white rounded-xl font-bold text-sm hover:bg-slate-800 dark:hover:bg-white/10 transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200/60 dark:border-white/10">
              <p className="text-sm text-slate-500 dark:text-gray-400">
                © {new Date().getFullYear()} ProfitAgentz. All rights reserved.
                If you believe this is an error, please{' '}
                <Link href="/contact" className="text-purple hover:underline font-medium">
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}