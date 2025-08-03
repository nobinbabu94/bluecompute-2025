import React, { useState } from 'react';
import CalendlyModal from '../components/CalendlyModal';

const ContactPage = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  
  // Replace with your actual Calendly URL
  const calendlyUrl = "https://calendly.com/your-username/meeting";

  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Ready to Get Started?
        </h1>
        
        <p className="text-xl text-gray-600 mb-12">
          Schedule a free consultation call with our team
        </p>
        
        {/* Trigger Button */}
        <button
          onClick={openCalendly}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Schedule a Call
        </button>
        
        {/* Calendly Modal */}
        <CalendlyModal
          isOpen={isCalendlyOpen}
          onClose={closeCalendly}
          calendlyUrl={calendlyUrl}
        />
      </div>
    </div>
  );
};

export default ContactPage;