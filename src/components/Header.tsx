import { Phone, Globe, ShieldAlert } from 'lucide-react';
import { Language, translations } from '../types';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenEmergency: () => void;
}

export default function Header({ language, onLanguageChange, onOpenEmergency }: HeaderProps) {
  const t = translations[language];
  const isRtl = language === 'ku' || language === 'ar';

  const menuItems = [
    { id: 'departments', label: t.departmentsTitle },
    { id: 'doctors', label: t.doctorsTitle },
    { id: 'about', label: t.aboutTitle },
    { id: 'contact', label: t.addressLabel }
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white border-b border-slate-100 shadow-sm relative z-40">
      {/* Top micro-header for professional info */}
      <div className="bg-[#001f3f] text-white py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-medium">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 opacity-90">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {t.hoursText}
            </span>
            <span className="opacity-40">|</span>
            <span className="opacity-90">Kalar, Sulaymaniyah, Iraq</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${t.emergencyNumber}`} 
              className="hover:text-red-300 transition-colors flex items-center gap-1 font-mono tracking-wider font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-red-400" />
              {t.emergencyNumber}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className={`flex flex-col lg:flex-row items-center justify-between gap-4 ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-3">
            <img
              src="/src/assets/images/regenerated_image_1783355962936.jpg"
              alt="High Hospitals Logo"
              id="header-logo-img"
              className="h-14 w-auto object-contain bg-white rounded-lg p-0.5"
              referrerPolicy="no-referrer"
            />
            <div className={`flex flex-col ${isRtl ? 'text-right' : 'text-left'}`}>
              <h1 className="text-xl font-extrabold tracking-tight text-[#001f3f] leading-none">
                {language === 'ku' ? 'شاری پزیشکی خزمەت' : language === 'ar' ? 'مدينة خدمات الطبية' : 'Services Medical City'}
              </h1>
              <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-widest font-mono">
                {language === 'ku' ? 'نەخۆشخانەکانی های' : language === 'ar' ? 'مستشفيات هاي' : 'High Hospitals'}
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className={`flex flex-wrap items-center justify-center gap-1 sm:gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                id={`nav-${item.id}`}
                className="px-3 py-2 text-sm font-bold text-slate-700 hover:text-[#001f3f] hover:bg-slate-50 rounded-lg transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions: Lang Selector & Emergency Button */}
          <div className="flex items-center gap-3">
            {/* Language dropdown / Selector pills */}
            <div className="flex items-center bg-slate-100 rounded-xl p-0.5 border border-slate-200">
              <button
                onClick={() => onLanguageChange('ku')}
                id="lang-selector-ku"
                className={`px-3 py-1.5 text-xs font-extrabold rounded-lg transition-all ${
                  language === 'ku'
                    ? 'bg-[#001f3f] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#001f3f] hover:bg-slate-200/50'
                }`}
              >
                کوردی
              </button>
              <button
                onClick={() => onLanguageChange('ar')}
                id="lang-selector-ar"
                className={`px-3 py-1.5 text-xs font-extrabold rounded-lg transition-all ${
                  language === 'ar'
                    ? 'bg-[#001f3f] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#001f3f] hover:bg-slate-200/50'
                }`}
              >
                العربية
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                id="lang-selector-en"
                className={`px-3 py-1.5 text-xs font-extrabold rounded-lg transition-all ${
                  language === 'en'
                    ? 'bg-[#001f3f] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#001f3f] hover:bg-slate-200/50'
                }`}
              >
                EN
              </button>
            </div>

            {/* Emergency Action Button */}
            <button
              onClick={onOpenEmergency}
              id="header-emergency-btn"
              className="flex items-center gap-2 px-4 py-2.5 bg-red-600 text-white text-xs font-black rounded-xl hover:bg-red-700 transition-all shadow-md shadow-red-600/10 active:scale-98"
            >
              <ShieldAlert className="w-4 h-4 animate-pulse" />
              <span>{t.emergencyBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
