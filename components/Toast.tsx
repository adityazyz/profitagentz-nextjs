'use client';

import React, { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = 'success',
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 shadow-2xl text-white transition-all duration-300 transform translate-y-0 opacity-100 text-sm sm:text-base
        ${type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
      role="alert"
      aria-live="polite"
    >
      {type === 'success' ? (
        <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
      ) : (
        <span className="text-lg" aria-hidden="true">⚠</span>
      )}
      <p className="font-medium">{message}</p>
      <button
        onClick={onClose}
        className="ml-2 sm:ml-4 text-white/80 hover:text-white focus:outline-none text-xl leading-none"
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
};

export default Toast;