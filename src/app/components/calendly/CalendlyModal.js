'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const checkCalendlyLoaded = setInterval(() => {
      const frame = document.querySelector('iframe[src*="calendly.com"]');
      if (frame) {
        setIsLoading(false);
        clearInterval(checkCalendlyLoaded);
      }
    }, 300);

    // Disable background scroll
    document.body.style.overflow = 'hidden';

    return () => {
      clearInterval(checkCalendlyLoaded);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={openModal}
        className="border border-blue-300 md:py-2 md:px-4 py-1 px-2 text-white cursor-pointer bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 rounded-full "
      >
        Get a demo
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm cursor-pointer"
            onClick={closeModal}
          />

          {/* Modal */}
          <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <span className="rounded-full p-2 shadow border border-gray-100">
                <Image
                  width={25}
                  height={25}
                  src="/favicon.ico"
                  alt="icon"
                />
              </span>
              <h2 className="text-base sm:text-xl font-semibold text-gray-800 text-center flex-1">
                Schedule Your Demo
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors ml-auto"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Calendly Embed */}
            <div className="flex-1 overflow-auto">
              {isLoading && (
                <div className="flex justify-center items-center py-10">
                  <div className="animate-spin h-10 w-10 border-4 border-gray-300 border-t-blue-600 rounded-full" />
                </div>
              )}
              <InlineWidget
                url="https://calendly.com/bluecompute/revealnext"
                styles={{ minHeight: '600px', width: '100%' }}
                pageSettings={{ backgroundColor: 'ffffff' }}
                iframeTitle="Schedule via Calendly"
              />
            </div>

            {/* Footer */}
            <div className="border-t p-4 flex justify-end">
              <button
                onClick={closeModal}
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CalendlyModal;
