'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-900 pt-28 sm:pt-32 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-500/10 rounded-full blur-[100px] opacity-50" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple/20 rounded-full blur-[100px] opacity-30" />

          <div className="relative z-10 text-center max-w-4xl mx-auto py-16 sm:py-20 md:py-24">
            {/* Error Badge */}
            <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-500 border border-red-500/20 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold mb-8 sm:mb-10 uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              System Error
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 leading-tight tracking-tighter text-slate-900 dark:text-white">
              AI System Overload
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-gray-400 font-medium mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Our neural networks encountered an unexpected error. The AI agents are working to resolve this issue.
            </p>

            {/* Error Details */}
            <div className="bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-slate-200/60 dark:border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto mb-10 sm:mb-12">
              <div className="text-left">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    Error Details
                  </div>
                </div>
                <div className="bg-slate-900/5 dark:bg-white/5 rounded-xl p-4 font-mono text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                  {error.message || 'An unexpected error occurred'}
                </div>
                {error.digest && (
                  <div className="text-xs text-slate-500 dark:text-gray-400 mt-2">
                    Error ID: {error.digest}
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <button
                onClick={reset}
                className="group relative w-full sm:w-auto min-w-[220px] px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-purple-900 to-purple-700 hover:from-purple-600 hover:to-purple-500 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-xl sm:rounded-2xl" />
                <span className="relative flex items-center">
                  <RefreshCw className="mr-2 w-5 h-5" />
                  Try Again
                </span>
              </button>

              <Link
                href="/"
                className="group w-full sm:w-auto min-w-[220px] px-7 sm:px-8 py-3.5 sm:py-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center transition-all hover:bg-white/80 dark:hover:bg-white/10 hover:border-purple/30 hover:shadow-lg hover:shadow-purple/10 active:scale-95"
              >
                <span className="flex items-center">
                  <Home className="mr-2 w-5 h-5" />
                  Go Home
                </span>
              </Link>
            </div>

            {/* Contact Support */}
            <div className="mt-12 sm:mt-16">
              <p className="text-sm text-slate-500 dark:text-gray-400 mb-4">
                If this error persists, please contact our support team.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-purple hover:underline font-medium"
              >
                Contact AI Support Team →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}