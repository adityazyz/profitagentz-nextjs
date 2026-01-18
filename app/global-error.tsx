'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, Home, Server } from 'lucide-react';

export default function GlobalError({
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
    <html>
      <body>
        <div className="min-h-screen bg-slate-50 dark:bg-navy-900 flex items-center justify-center px-5 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple/20 rounded-full blur-[80px]" />

            <div className="relative z-10">
              {/* Error Icon */}
              <div className="w-20 h-20 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Server className="w-10 h-10 text-red-500" />
              </div>

              {/* Error Message */}
              <h1 className="text-3xl sm:text-4xl font-black mb-4 text-slate-900 dark:text-white">
                Critical System Error
              </h1>
              <p className="text-lg text-slate-600 dark:text-gray-400 mb-8">
                Our AI infrastructure is experiencing technical difficulties.
                Our engineering team has been notified.
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <button
                  onClick={reset}
                  className="px-6 py-3 bg-gradient-to-r from-purple-900 to-purple-700 text-white rounded-xl font-bold hover:from-purple-600 hover:to-purple-500 transition-all"
                >
                  Try Again
                </button>
                <Link
                  href="/"
                  className="px-6 py-3 bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-white/80 dark:hover:bg-white/10 transition-all"
                >
                  Go Home
                </Link>
              </div>

              {/* Contact Info */}
              <div className="text-sm text-slate-500 dark:text-gray-400">
                <p className="mb-2">For urgent support:</p>
                <Link
                  href="mailto:contact@profitagentz.com"
                  className="text-purple hover:underline font-medium"
                >
                  contact@profitagentz.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}