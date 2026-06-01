"use client";

import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";

const WhatsAppPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleClose = () => {
    setIsOpen(false);
    setDismissed(true);
  };

  const handleStartChat = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=919510022071&text=Hi!%20%F0%9F%91%8B%20I%27d%20like%20to%20know%20more.%20Is%20anyone%20free%20to%20chat?",
      "_blank"
    );
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform bg-primary"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0,0,0,0.45)" }}>
      <div
        className="bg-white rounded-2xl w-full max-w-[480px] relative"
        style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.15)" }}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-7 pt-8">
          {/* Header */}
          <div className="flex items-start gap-4 mb-7">
            <div className="w-[56px] h-[56px] rounded-full flex items-center justify-center flex-shrink-0 bg-primary">
              <MessageCircle className="w-7 h-7 text-white fill-white" />
            </div>
            <div className="pt-0.5">
              <h3 className="text-[22px] font-bold text-gray-900 leading-tight">
                Need Expert Help? Chat with Us
              </h3>
              <p className="text-gray-500 text-[15px] mt-1.5">
                Get instant support from our{" "}
                <span className="font-semibold text-gray-900">U.S. business experts</span>
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-5 mb-7">
            <div className="flex items-center gap-3.5">
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="10" stroke="#0436E3" strokeWidth="2" />
                  <path d="M11 6v5l3 3" stroke="#0436E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-gray-700 text-[15px]">
                <span className="font-semibold text-gray-900">Quick WhatsApp Support</span>
                <span className="text-gray-400"> – </span>Get help when we're available
              </p>
            </div>
            <div className="flex items-center gap-3.5">
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="10" stroke="#0436E3" strokeWidth="2" />
                  <path d="M8 11l2 2 4-4" stroke="#0436E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-gray-700 text-[15px]">
                <span className="font-semibold text-gray-900">24-Hour LLC Formation</span>
                <span className="text-gray-400"> – </span>Register with Secretary of State
              </p>
            </div>
            <div className="flex items-center gap-3.5">
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 2l2.5 5.5L19 8.5l-4 4 1 5.5L11 15.5 6 18l1-5.5-4-4 5.5-1L11 2z" stroke="#0436E3" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-gray-700 text-[15px]">
                <span className="font-semibold text-gray-900">Expert Guidance</span>
                <span className="text-gray-400"> – </span>Step-by-step assistance from professionals
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handleStartChat}
            className="w-full text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2.5 hover:opacity-90 transition-opacity text-[15px] bg-primary"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            Start Chat Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPopup;
