import { MapPin, Phone, Mail, Clock, ArrowUp, Send, Facebook, Instagram } from 'lucide-react';
import { Language, translations } from '../types';

interface ContactFooterProps {
  language: Language;
}

export default function ContactFooter({ language }: ContactFooterProps) {
  const t = translations[language];
  const isRtl = language === 'ku' || language === 'ar';

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#001f3f] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact info grid & photo integration */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800 ${
          isRtl ? 'text-right' : 'text-left'
        }`}>
          
          {/* Column 1: Contact details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              {/* Mini Brand Info */}
              <div className={`flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <img
                  src="/src/assets/images/regenerated_image_1783355961210.jpg"
                  alt="High Hospitals Logo"
                  className="h-10 w-auto bg-white rounded-md p-0.5"
                  referrerPolicy="no-referrer"
                />
                <span className="text-lg font-black tracking-wider uppercase">
                  {language === 'en' ? 'HIGH HOSPITALS' : 'نەخۆشخانەکانی های'}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-bold max-w-sm">
                {language === 'ku' ? 'شاری پزیشکی پێشەنگ لە پێشکەشکردنی چاودێری تەندروستی لوکس بە بەرزترین ستانداردەکان.' : 
                 language === 'ar' ? 'المدينة الطبية الرائدة في تقديم الرعاية الصحية الفاخرة بأعلى المعايير العالمية.' : 
                 'The premier medical city offering elite clinical diagnostics and premium therapeutic care in the region.'}
              </p>
            </div>

            {/* Address (Critical Correction) */}
            <div className="space-y-4 pt-2">
              {/* Kurdish Address Block */}
              <div className={`flex items-start gap-3.5 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="p-2.5 bg-slate-800 text-red-500 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {language === 'ku' ? 'ناونیشانی فەرمی (کوردی)' : 'العنوان الرسمي (بالكردية)'}
                  </h4>
                  <p className="text-base font-extrabold text-white mt-1">
                    کەلار، سلێمانی، عێراق
                  </p>
                </div>
              </div>

              {/* English Address Block */}
              <div className={`flex items-start gap-3.5 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="p-2.5 bg-slate-800 text-blue-400 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {language === 'ku' ? 'ناونیشانی فەرمی (ئینگلیزی)' : 'Official Address (English)'}
                  </h4>
                  <p className="text-base font-extrabold text-white mt-1">
                    Kalar, Sulaymaniyah, Iraq
                  </p>
                </div>
              </div>

              {/* Telephone & WhatsApp */}
              <div className={`flex items-start gap-3.5 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="p-2.5 bg-slate-800 text-emerald-500 rounded-lg flex items-center gap-1.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {t.phoneLabel} & WhatsApp
                  </h4>
                  <div className={`flex items-center gap-3 mt-1 ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <p className="text-base font-extrabold text-white font-mono tracking-wider">
                      {t.emergencyNumber}
                    </p>
                    <a
                      href="https://wa.me/9647708366126"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full text-[10px] font-black uppercase tracking-wider transition-all shadow-sm"
                      title="WhatsApp Chat"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className={`flex items-start gap-3.5 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="p-2.5 bg-slate-800 text-amber-500 rounded-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {t.hoursLabel}
                  </h4>
                  <p className="text-base font-extrabold text-white mt-1">
                    {t.hoursText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Photo Integration - Hospital Reception Admission */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-400">
              {language === 'ku' ? 'پێشوازی و پەیوەندی' : language === 'ar' ? 'الاستقبال والتواصل' : 'Luxury Hospitality'}
            </h3>
            <div className="relative group overflow-hidden rounded-xl border border-slate-700 shadow-md bg-slate-800">
              <img
                src="/src/assets/images/regenerated_image_1783355961911.jpg"
                alt="High Hospitals Reception desk"
                className="w-full h-44 object-cover rounded-xl opacity-90 transition-transform duration-500 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 z-10 text-white text-xs">
                <p className="font-extrabold uppercase tracking-wide">
                  {language === 'ku' ? 'تەلارسازی ناوخۆیی و پێشوازی شاهانە' : 
                   language === 'ar' ? 'التصميم الداخلي والاستقبال الملكي' : 
                   'Luxury Reception & Admitting'}
                </p>
                <p className="text-[10px] text-slate-300 mt-0.5">
                  {language === 'ku' ? 'ئامادەین بۆ هاوکاری لە کاتی سەردانکردنتاندا' : 
                   language === 'ar' ? 'جاهزون لمساعدتكم عند زيارتنا' : 
                   'Dedicated staff to assist during admission'}
                </p>
              </div>
            </div>
            
            {/* Quick social links */}
            <div className={`flex gap-3 pt-2 ${isRtl ? 'justify-end' : 'justify-start'}`}>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-white transition-all hover:text-blue-400"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-white transition-all hover:text-pink-400"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer bottom */}
        <div className={`mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-400 ${
          isRtl ? 'md:flex-row-reverse' : ''
        }`}>
          <div>
            © 2026 Khzmat Medical City. All rights reserved. | Developed & Designed by Ayad M.Ismail
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>{t.backToTop}</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
