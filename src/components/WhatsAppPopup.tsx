import { useState, useEffect } from "react";
import { X, MessageCircle, Clock, Shield, Star } from "lucide-react";

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
    window.open("https://wa.me/1234567890?text=Hi%2C%20I%20need%20help%20with%20LLC%20formation", "_blank");
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative animate-in zoom-in-95 fade-in duration-200">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 pb-4">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Need Expert Help? Chat with Us</h3>
              <p className="text-gray-600 text-sm mt-1">
                Get instant support from our <span className="font-semibold text-gray-900">U.S. business experts</span>
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#25D366]" />
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Quick WhatsApp Support</span> - Get help when we're available
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-[#0436E3]" />
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">24-Hour LLC Formation</span> - Register with Secretary of State
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-[#0436E3]" />
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Expert Guidance</span> - Step-by-step assistance from professionals
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-100 rounded-xl p-4 mb-6">
            <p className="text-xs font-semibold text-[#25D366] uppercase tracking-wide mb-1">🎉 Special Offer</p>
            <p className="text-gray-800 text-sm">
              <span className="font-bold">Get 10% off</span> your LLC formation when you start your chat now!
            </p>
            <p className="text-gray-500 text-xs mt-1">Limited time offer for new customers</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleStartChat}
              className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Start Chat Now
            </button>
            <button
              onClick={handleClose}
              className="flex-1 border border-gray-300 text-gray-700 font-semibold py-3.5 px-6 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPopup;
