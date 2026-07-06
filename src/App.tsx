import { useState, useEffect } from 'react';
import { Heart, Stethoscope, Award, Users } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Departments from './components/Departments';
import Doctors from './components/Doctors';
import ContactFooter from './components/ContactFooter';
import EmergencyModal from './components/EmergencyModal';
import { Language, translations } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('ku');
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);

  // Set document direction and HTML lang attribute when language changes
  useEffect(() => {
    const isRtl = language === 'ku' || language === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  // Emergency Pop-up Modal appears 3 seconds after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEmergencyOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const t = translations[language];
  const isRtl = language === 'ku' || language === 'ar';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#001f3f] selection:text-white">
      {/* 1. Navigation Header */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
      />

      {/* 2. Visual Hero Showcase with Daytime and Nighttime Hospital Photos */}
      <Hero
        language={language}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
      />

      {/* 3. Luxury Features Summary Bar */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-sm font-black uppercase tracking-widest text-red-600">
              {t.whyChooseUs}
            </h3>
            <div className="w-8 h-1 bg-red-600 mx-auto mt-2 rounded-full" />
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isRtl ? 'text-right' : 'text-left'}`}>
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all">
              <div className={`flex items-center gap-3 mb-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="p-2.5 bg-red-50 text-red-600 rounded-xl">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black text-[#001f3f]">
                  {t.expertDoctors}
                </h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-bold">
                {t.expertDoctorsDesc}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all">
              <div className={`flex items-center gap-3 mb-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black text-[#001f3f]">
                  {t.modernFacilities}
                </h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-bold">
                {t.modernFacilitiesDesc}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all">
              <div className={`flex items-center gap-3 mb-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black text-[#001f3f]">
                  {t.icuCare}
                </h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-bold">
                {t.icuCareDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Departments Grid with Integrated Photos (ER, Surgery, NICU, etc.) */}
      <Departments language={language} />

      {/* 5. Clean Typographic Doctors List */}
      <Doctors language={language} />

      {/* 7. Contact Details & Official Addresses (with Reception Photo) */}
      <ContactFooter language={language} />

      {/* 8. Emergency Pop-up Modal (Activated 3s after load or via clicks) */}
      <EmergencyModal
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
        language={language}
      />
    </div>
  );
}
