import { Activity, FlaskConical, Pill, Scan, Stethoscope, Scissors, Heart, UserCheck, FlameKindling, ShieldAlert } from 'lucide-react';
import { Language, translations, departments, Department } from '../types';

interface DepartmentsProps {
  language: Language;
}

export default function Departments({ language }: DepartmentsProps) {
  const t = translations[language];
  const isRtl = language === 'ku' || language === 'ar';

  // Get lucide icon based on department ID
  const getDeptIcon = (id: string) => {
    switch (id) {
      case 'er': return <ShieldAlert className="w-6 h-6 text-red-600" />;
      case 'surgery': return <Scissors className="w-6 h-6 text-indigo-600" />;
      case 'clinics': return <Stethoscope className="w-6 h-6 text-cyan-600" />;
      case 'nicu': return <Heart className="w-6 h-6 text-pink-600" />;
      case 'gynecology': return <UserCheck className="w-6 h-6 text-emerald-600" />;
      case 'radiology': return <Scan className="w-6 h-6 text-amber-600" />;
      case 'laboratory': return <FlaskConical className="w-6 h-6 text-purple-600" />;
      case 'pharmacy': return <Pill className="w-6 h-6 text-blue-600" />;
      default: return <Activity className="w-6 h-6 text-slate-600" />;
    }
  };

  // Separate departments that have custom images from those that are specialized secondary text-only cards
  const majorDepartments = departments.filter(d => d.image);
  const secondaryDepartments = departments.filter(d => !d.image);

  return (
    <section id="departments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black text-[#001f3f] tracking-tight sm:text-4xl">
            {t.departmentsTitle}
          </h2>
          <div className="w-16 h-1.5 bg-red-600 mx-auto mt-4 rounded-full" />
          <p className="text-base text-slate-500 mt-4 leading-relaxed font-medium">
            {t.departmentsSub}
          </p>
        </div>

        {/* Major Feature Departments with Image Integration */}
        <div className="space-y-16">
          {majorDepartments.map((dept, idx) => {
            const isEven = idx % 2 === 0;
            // Alternating layouts for desktop (image left / text right)
            const layoutClass = isEven 
              ? 'lg:flex-row' 
              : 'lg:flex-row-reverse';

            return (
              <div
                key={dept.id}
                id={`dept-${dept.id}`}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center border border-slate-100 rounded-2xl p-6 lg:p-8 bg-slate-50/50 shadow-sm hover:shadow-md transition-shadow ${
                  isRtl ? 'text-right' : 'text-left'
                }`}
              >
                {/* Department Image Container */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group overflow-hidden rounded-xl shadow-lg border border-white">
                    <img
                      src={dept.image}
                      alt={dept.name[language]}
                      id={`dept-img-${dept.id}`}
                      className="w-full h-64 sm:h-80 object-cover rounded-xl transition-transform duration-500 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                    {/* Subtle aesthetic tint indicating premier care */}
                    <div className="absolute inset-0 bg-slate-900/10 mix-blend-overlay pointer-events-none" />
                  </div>
                </div>

                {/* Department Description / Content Column */}
                <div className="w-full lg:w-1/2 space-y-5">
                  <div className={`flex items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                      {getDeptIcon(dept.id)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-[#001f3f]">
                        {dept.name[language]}
                      </h3>
                      <span className="text-xs font-bold text-red-600 uppercase tracking-widest font-mono">
                        {language === 'ku' ? 'بەشی سەرەکی' : language === 'ar' ? 'قسم رئيسي' : 'Major Division'}
                      </span>
                    </div>
                  </div>

                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    {dept.description[language]}
                  </p>

                  {/* Bulleted Capabilities List */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {language === 'ku' ? 'تایبەتمەندییەکان' : language === 'ar' ? 'المزايا والقدرات' : 'Key Features & Equipment'}
                    </h4>
                    <ul className={`grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700 font-bold ${isRtl ? 'text-right' : 'text-left'}`}>
                      {dept.features[language].map((feat, fIdx) => (
                        <li 
                          key={fIdx} 
                          className={`flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#001f3f]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Specialized Secondary Grid (Radiology, Lab, Pharmacy) */}
        <div className="mt-20 border-t border-slate-100 pt-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-xl font-extrabold text-[#001f3f] tracking-tight">
              {language === 'ku' ? 'بەشە پسپۆڕییە هاوکارەکان' : language === 'ar' ? 'الأقسام التشخيصية والمساندة' : 'Supportive & Diagnostic Divisions'}
            </h3>
            <p className="text-xs text-slate-400 mt-1 font-bold">
              {language === 'ku' ? 'دابینکردنی چاودێری تەواو ٢٤ کاتژمێر' : language === 'ar' ? 'تكامل طبي شامل على مدار الساعة' : 'Providing integrated clinical workflows around the clock'}
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${isRtl ? 'dir-rtl' : 'dir-ltr'}`}>
            {secondaryDepartments.map((dept) => (
              <div
                key={dept.id}
                id={`secondary-dept-${dept.id}`}
                className={`p-6 bg-slate-50 border border-slate-100 rounded-xl hover:bg-white hover:shadow-md hover:border-[#001f3f]/10 transition-all ${
                  isRtl ? 'text-right' : 'text-left'
                }`}
              >
                <div className={`flex items-center gap-3 mb-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <div className="p-2.5 bg-white rounded-lg shadow-sm border border-slate-100">
                    {getDeptIcon(dept.id)}
                  </div>
                  <h4 className="text-lg font-black text-[#001f3f]">
                    {dept.name[language]}
                  </h4>
                </div>

                <p className="text-sm text-slate-500 leading-relaxed font-semibold">
                  {dept.description[language]}
                </p>

                {/* Micro badges for luxury accent */}
                <div className={`mt-5 flex items-center justify-between pt-4 border-t border-slate-200/50 text-xs font-mono font-bold text-slate-400 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <span>24/7 STANDBY</span>
                  <span className="text-red-600">✦ ACTIVE</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
