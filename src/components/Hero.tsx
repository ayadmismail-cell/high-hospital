import { ShieldAlert, ArrowUpRight, CheckCircle2, Phone, CalendarRange } from 'lucide-react';
import { Language, translations } from '../types';

interface HeroProps {
  language: Language;
  onOpenEmergency: () => void;
}

export default function Hero({ language, onOpenEmergency }: HeroProps) {
  const t = translations[language];
  const isRtl = language === 'ku' || language === 'ar';

  const handleScrollToDepartments = () => {
    const element = document.getElementById('departments');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-slate-50 overflow-hidden py-12 lg:py-20 border-b border-slate-100">
      {/* Decorative luxury abstract shapes in the background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#001f3f]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isRtl ? 'dir-rtl' : 'dir-ltr'}`}>
          {/* Hero Copy (Text Column) */}
          <div className={`lg:col-span-6 space-y-6 ${isRtl ? 'text-right order-last lg:order-first' : 'text-left'}`}>
            {/* Elegant luxury tag */}
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#001f3f]/5 border border-[#001f3f]/10 text-xs font-bold text-[#001f3f] ${isRtl ? 'flex-row-reverse' : ''}`}>
              <CheckCircle2 className="w-4 h-4 text-[#001f3f]" />
              <span>{t.qualityHealthcare}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl font-black text-[#001f3f] tracking-tight leading-tight">
              {language === 'ku' && (
                <>
                  شاری پزیشکی خزمەت <br />
                  <span className="text-slate-600">نەخۆشخانەکانی های</span>
                </>
              )}
              {language === 'ar' && (
                <>
                  مدينة خدمات الطبية <br />
                  <span className="text-slate-600">مستشفيات هاي الفاخرة</span>
                </>
              )}
              {language === 'en' && (
                <>
                  Services Medical City <br />
                  <span className="text-slate-600">High Hospitals</span>
                </>
              )}
            </h1>

            {/* Slogan & Paragraph */}
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-medium">
              {language === 'ku' && "دامەزراوەیەکی پزیشکی مۆدێرن و شاهانەیە لە کەلار، کە باشترین خزمەتگوزاری چاودێری تەندروستی لە ژێر یەک سەقفدا دابین دەکات بە کوالیتی بەرز و تەکنەلۆژیای لوکس."}
              {language === 'ar' && "صرح طبي متكامل بمعايير عالمية في كلار، يقدم أرقى الخدمات الطبية المتميزة لراحتكم وسلامتكم تحت إشراف نخبة من الأطباء والاستشاريين."}
              {language === 'en' && "A prestigious, world-class medical complex in Kalar, Sulaymaniyah, providing elite clinical specialties, premium patient care, and state-of-the-art diagnostics."}
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-wrap gap-4 pt-2 justify-start ${isRtl ? 'flex-row-reverse' : ''}`}>
              {/* Emergency Hotline */}
              <button
                onClick={onOpenEmergency}
                id="hero-emergency-cta"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-red-600 text-white font-extrabold text-sm rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-600/15"
              >
                <ShieldAlert className="w-5 h-5 animate-pulse" />
                <span>{t.emergencyBtn}</span>
              </button>

              {/* Explore services */}
              <button
                onClick={handleScrollToDepartments}
                id="hero-departments-cta"
                className="inline-flex items-center gap-1.5 px-6 py-3.5 bg-[#001f3f] text-white font-extrabold text-sm rounded-xl hover:bg-[#002e5e] transition-all shadow-md active:scale-98"
              >
                <span>{t.exploreBtn}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* Contact / Location */}
              <button
                onClick={handleScrollToContact}
                id="hero-contact-cta"
                className="inline-flex items-center gap-1.5 px-6 py-3.5 bg-white border border-slate-200 text-slate-700 font-extrabold text-sm rounded-xl hover:bg-slate-50 transition-all active:scale-98"
              >
                <span>{t.addressLabel}</span>
              </button>
            </div>
          </div>

          {/* Symmetrical Dual-Image Layout representing Luxury Architecture */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {/* Daytime Building card */}
            <div className="space-y-4">
              <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-white/50 bg-white">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-300" />
                <img
                  src="/src/assets/images/regenerated_image_1783355963281.jpg"
                  alt="High Hospitals Exterior Day"
                  id="hero-ext-day"
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-bold uppercase tracking-wider bg-[#001f3f]/80 px-2 py-1 rounded">
                    {language === 'ku' ? 'دیمەنی ڕۆژ' : language === 'ar' ? 'واجهة النهار' : 'Daytime facade'}
                  </span>
                </div>
              </div>
              
              {/* Quality highlight box */}
              <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm text-center">
                <h4 className="text-sm font-extrabold text-[#001f3f]">
                  {language === 'en' ? 'Services Medical City' : language === 'ku' ? 'شاری پزیشکی خزمەت' : 'مدينة خدمات الطبية'}
                </h4>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                  {language === 'en' ? 'Accredited Excellence' : language === 'ku' ? 'متمانەپێکراو و دڵنیا' : 'رعاية معتمدة وموثوقة'}
                </p>
              </div>
            </div>

            {/* Nighttime Building card (staggered down for premium dynamic feel) */}
            <div className="space-y-4 pt-6 lg:pt-10">
              {/* Premium highlight box */}
              <div className="p-5 bg-[#001f3f] text-white rounded-2xl shadow-sm text-center">
                <h4 className="text-sm font-extrabold text-white">
                  {language === 'en' ? 'High Q Hospitals' : language === 'ku' ? 'نەخۆشخانەکانی های' : 'مستشفيات هاي'}
                </h4>
                <p className="text-xs text-slate-200/70 mt-1 font-medium">
                  {language === 'en' ? 'State-Of-The-Art' : language === 'ku' ? 'نوێترین ئامێری تەندروستی' : 'أرقى التجهيزات'}
                </p>
              </div>

              <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-[#001f3f]/10 bg-white">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-300" />
                <img
                  src="/src/assets/images/regenerated_image_1783355964166.jpg"
                  alt="High Hospitals Exterior Night"
                  id="hero-ext-night"
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-bold uppercase tracking-wider bg-red-600/80 px-2 py-1 rounded">
                    {language === 'ku' ? 'دیمەنی شەو' : language === 'ar' ? 'واجهة الليل' : 'Nighttime facade'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
