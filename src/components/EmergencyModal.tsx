import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, X, ShieldAlert, HeartHandshake } from 'lucide-react';
import { Language, translations } from '../types';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export default function EmergencyModal({ isOpen, onClose, language }: EmergencyModalProps) {
  const t = translations[language];

  // Optional: prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isRtl = language === 'ku' || language === 'ar';

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
          id="emergency-modal-backdrop"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop Click */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            id="emergency-modal-container"
            className="relative w-full max-w-lg overflow-hidden bg-white rounded-2xl shadow-2xl border border-red-200/50"
          >
            {/* Red top bar accent indicating emergency */}
            <div className="h-2 bg-red-600 w-full animate-pulse" />

            {/* Header / Close button */}
            <button
              onClick={onClose}
              id="emergency-close-btn"
              className={`absolute top-4 ${isRtl ? 'left-4' : 'right-4'} p-2 text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 rounded-full hover:bg-gray-200`}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Area */}
            <div className={`p-8 text-center ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
              {/* Emergency Logo Accent */}
              <div className="flex justify-center mb-5">
                <div className="relative flex items-center justify-center w-20 h-20 bg-red-50 rounded-full animate-bounce">
                  <div className="absolute inset-0 bg-red-100 rounded-full animate-ping opacity-60" />
                  <ShieldAlert className="w-10 h-10 text-red-600 relative z-10" />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-snug md:text-3xl">
                {t.emergencyModalTitle}
              </h2>

              <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
                {t.emergencyModalDesc}
              </p>

              {/* The Phone Box (High visibility, prestigious card styling) */}
              <div className="my-8 p-6 bg-red-50 rounded-2xl border-2 border-red-500/30 flex flex-col items-center justify-center relative group">
                <span className="text-xs font-bold text-red-600 tracking-wider uppercase mb-1 flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 animate-pulse" />
                  {language === 'en' ? 'HOTLINE 24/7' : language === 'ku' ? 'هێڵی گەرم ٢٤/٧' : 'الخط الساخن ٢٤/٧'}
                </span>
                
                <a
                  href={`tel:${t.emergencyNumber}`}
                  id="emergency-modal-phone-link"
                  className="flex items-center gap-3.5 text-3xl font-black text-red-600 hover:text-red-700 transition-colors font-mono tracking-wider active:scale-98"
                >
                  <Phone className="w-8 h-8 animate-wiggle fill-red-600 text-red-600" />
                  <span>{t.emergencyNumber}</span>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${t.emergencyNumber}`}
                  id="emergency-modal-call-action"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-white bg-red-600 rounded-xl hover:bg-red-700 active:bg-red-800 transition-colors duration-150 shadow-lg shadow-red-600/20 w-full sm:w-auto"
                >
                  {t.callNowBtn}
                </a>
                <button
                  onClick={onClose}
                  id="emergency-modal-dismiss"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 active:bg-slate-300 transition-colors duration-150 w-full sm:w-auto"
                >
                  {t.closeBtn}
                </button>
              </div>

              {/* Extra Security/Care Assurance */}
              <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-slate-400">
                <span>✦</span>
                <span>
                  {language === 'en' ? 'Immediate response, high-end ICU standby' : 
                   language === 'ku' ? 'وەڵامدانەوەی خێرا، چاودێری چڕی ئامادەباشی لۆکس' : 
                   'استجابة فورية، عناية مركزة مجهزة على أهبة الاستعداد'}
                </span>
                <span>✦</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
