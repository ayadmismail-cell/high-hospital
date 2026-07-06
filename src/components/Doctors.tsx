import React, { useState } from 'react';
import { User, Award, CheckCircle, Search, Calendar, Phone, MessageSquare, Clock, Filter, Sparkles } from 'lucide-react';
import { Language, translations, doctors } from '../types';

interface DoctorsProps {
  language: Language;
}

export default function Doctors({ language }: DoctorsProps) {
  const t = translations[language];
  const isRtl = language === 'ku' || language === 'ar';

  // Booking states
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>('');
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [appointmentDate, setAppointmentDate] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [formError, setFormError] = useState<string>('');

  // Localized Booking Labels
  const bookingTranslations = {
    ku: {
      selectSpecialty: "دیاریکردنی پسپۆڕی",
      selectDoctor: "دیاریکردنی پزیشک",
      allSpecialties: "هەموو پسپۆڕییەکان",
      allDoctors: "هەموو پزیشکەکان",
      bookTitle: "حجزی نۆرەی پزیشک",
      bookSub: "زانیارییەکان پڕبکەرەوە بۆ ناردنی داواکاری لە ڕێگەی واتسئاپەوە",
      patientName: "ناوی تەواوی نەخۆش",
      patientPhone: "ژمارەی مۆبایل",
      appointmentDate: "بەرواری نۆرە",
      notes: "تێبینی یان نیشانەکانی نەخۆشی",
      bookBtn: "حجزی ئێستا بکە (ڕاستەوخۆ بە واتسئاپ)",
      searchPlaceholder: "گەڕان بەدوای ناوی پزیشکدا...",
      noDoctorsFound: "هیچ پزیشکێک نەدۆزرایەوە بەم ناوە یان پسپۆڕییەوە.",
      fillRequired: "تکایە ناوی نەخۆش و ژمارەی تەلەفۆن و بەروار دیاری بکە.",
      formTitle: "داواکاری حجزی نۆرەی پزیشک",
      anyDoctor: "دیاریکردنی پزیشک",
      successMsg: "دروستکردنی داواکاری سەرکەوتوو بوو، ئێستا دەگوازرێیتەوە بۆ واتسئاپ..."
    },
    ar: {
      selectSpecialty: "اختر التخصص",
      selectDoctor: "اختر الطبيب",
      allSpecialties: "جميع التخصصات",
      allDoctors: "جميع الأطباء",
      bookTitle: "حجز موعد عيادة",
      bookSub: "يرجى ملء البيانات لإرسال طلب الحجز فوراً عبر الواتساب",
      patientName: "اسم المريض الكامل",
      patientPhone: "رقم الهاتف والاتصال",
      appointmentDate: "تاريخ الموعد المفضل",
      notes: "ملاحظات طبية أو أعراض",
      bookBtn: "احجز الآن (مباشرة عبر الواتساب)",
      searchPlaceholder: "ابحث عن اسم الطبيب...",
      noDoctorsFound: "لم يتم العثور على أطباء بهذا الاسم أو التخصص.",
      fillRequired: "يرجى ملء اسم المريض ورقم الهاتف وتحديد التاريخ.",
      formTitle: "نموذج طلب حجز موعد عيادة",
      anyDoctor: "اختر الطبيب",
      successMsg: "تم تجهيز الطلب بنجاح، يتم تحويلك إلى الواتساب الآن..."
    },
    en: {
      selectSpecialty: "Select Specialty",
      selectDoctor: "Select Doctor",
      allSpecialties: "All Specialties",
      allDoctors: "All Doctors",
      bookTitle: "Book an Appointment",
      bookSub: "Fill in the details below to submit your request via WhatsApp",
      patientName: "Patient's Full Name",
      patientPhone: "Phone Number",
      appointmentDate: "Preferred Appointment Date",
      notes: "Medical Notes / Symptoms",
      bookBtn: "Book Now (Direct to WhatsApp)",
      searchPlaceholder: "Search doctor name...",
      noDoctorsFound: "No doctors found matching this search criteria.",
      fillRequired: "Please fill in patient name, phone number, and preferred date.",
      formTitle: "Appointment Request Form",
      anyDoctor: "Select Doctor",
      successMsg: "Request created successfully! Redirecting you to WhatsApp..."
    }
  };

  const bt = bookingTranslations[language];

  // Get unique specialties for dropdown
  const uniqueSpecialties = Array.from(
    new Set(doctors.map((doc) => doc.specialty[language]))
  );

  // Filter doctors based on dropdown filters
  const filteredDoctors = doctors.filter((doc) => {
    const matchSpecialty = !selectedSpecialty || doc.specialty[language] === selectedSpecialty;
    const matchDoctor = !selectedDoctorId || doc.id === selectedDoctorId;
    return matchSpecialty && matchDoctor;
  });

  // Handle Book now redirect to WhatsApp
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !patientPhone.trim() || !appointmentDate) {
      setFormError(bt.fillRequired);
      return;
    }
    setFormError('');

    // Hidden number logic as strictly requested by user
    const waNumber = "9647708366126";

    // Find selected doctor name
    const docObj = doctors.find(d => d.id === selectedDoctorId);
    const doctorNameText = docObj ? docObj.name[language] : (language === 'ku' ? 'هەر پزیشکێکی پسپۆڕ' : language === 'ar' ? 'أي طبيب متوفر' : 'Any Available Doctor');
    const doctorSpecialtyText = docObj ? docObj.specialty[language] : '';

    // Formulate a beautiful WhatsApp text based on selected language
    let text = "";
    if (language === 'ku') {
      text = `سڵاو شاری پزیشکی خزمەت (نەخۆشخانەکانی های)، دەمەوێت نۆرەیەک حیجز بکەم:\n\n` +
             `🏥 *داواکاری حجزی نۆرەی پزیشک*\n` +
             `👤 *ناوی نەخۆش:* ${patientName}\n` +
             `📞 *ژمارەی مۆبایل:* ${patientPhone}\n` +
             `📅 *بەرواری نۆرە:* ${appointmentDate}\n` +
             `👨‍⚕️ *پزیشک:* ${doctorNameText} ${doctorSpecialtyText ? `(${doctorSpecialtyText})` : ''}\n` +
             `📝 *تێبینی/نیشانەکان:* ${notes || 'نییە'}\n\n` +
             `تکایە پەسەندکردنی ئەم حجزم بۆ بنێرن. سوپاس.`;
    } else if (language === 'ar') {
      text = `مرحباً مدينة خدمات الطبية (مستشفيات هاي)، أود حجز موعد عيادة:\n\n` +
             `🏥 *طلب حجز موعد طبي*\n` +
             `👤 *اسم المريض:* ${patientName}\n` +
             `📞 *رقم الهاتف:* ${patientPhone}\n` +
             `📅 *التاريخ المطلوب:* ${appointmentDate}\n` +
             `👨‍⚕️ *الطبيب المختص:* ${doctorNameText} ${doctorSpecialtyText ? `(${doctorSpecialtyText})` : ''}\n` +
             `📝 *ملاحظات/أعراض:* ${notes || 'لا يوجد'}\n\n` +
             `يرجى تأكيد موعد الحجز الخاص بي. شكراً لكم.`;
    } else {
      text = `Hello Khzmat Medical City (High Hospitals), I would like to book a medical appointment:\n\n` +
             `🏥 *Appointment Request*\n` +
             `👤 *Patient Name:* ${patientName}\n` +
             `📞 *Phone Number:* ${patientPhone}\n` +
             `📅 *Preferred Date:* ${appointmentDate}\n` +
             `👨‍⚕️ *Doctor:* ${doctorNameText} ${doctorSpecialtyText ? `(${doctorSpecialtyText})` : ''}\n` +
             `📝 *Notes/Symptoms:* ${notes || 'None'}\n\n` +
             `Please confirm my appointment. Thank you.`;
    }

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${waNumber}?text=${encodedText}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  const handleCardBookClick = (doctorId: string) => {
    setSelectedDoctorId(doctorId);
    const docObj = doctors.find(d => d.id === doctorId);
    if (docObj) {
      setSelectedSpecialty(docObj.specialty[language]);
    }
    // Scroll smoothly to the booking form
    const bookingFormElement = document.getElementById('booking-form-section');
    if (bookingFormElement) {
      bookingFormElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="doctors" className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black text-[#001f3f] tracking-tight sm:text-4xl">
            {t.doctorsTitle}
          </h2>
          <div className="w-16 h-1.5 bg-red-600 mx-auto mt-4 rounded-full" />
          <p className="text-base text-slate-500 mt-4 leading-relaxed font-medium">
            {t.doctorsSub}
          </p>
        </div>

        {/* Dropdown Filters Block */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm max-w-4xl mx-auto mb-12">
          <div className={`flex items-center gap-2 mb-4 text-[#001f3f] font-black ${isRtl ? 'flex-row-reverse' : ''}`}>
            <Filter className="w-5 h-5 text-red-600" />
            <span>{language === 'ku' ? 'فلتەرکردنی پزیشکەکان' : language === 'ar' ? 'تصفية الأطباء والاستشاريين' : 'Filter & Search Doctors'}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Specialty Filter */}
            <div className="space-y-1">
              <label className={`block text-xs font-black text-slate-500 uppercase tracking-wider ${isRtl ? 'text-right' : 'text-left'}`}>
                {bt.selectSpecialty}
              </label>
              <select
                value={selectedSpecialty}
                onChange={(e) => {
                  setSelectedSpecialty(e.target.value);
                  setSelectedDoctorId(''); // reset doctor when specialty changes
                }}
                className={`w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#001f3f]/10 focus:border-[#001f3f] transition-all ${isRtl ? 'text-right' : 'text-left'}`}
              >
                <option value="">{bt.allSpecialties}</option>
                {uniqueSpecialties.map((spec, idx) => (
                  <option key={idx} value={spec}>{spec}</option>
                ))}
              </select>
            </div>

            {/* Doctor Select Filter */}
            <div className="space-y-1">
              <label className={`block text-xs font-black text-slate-500 uppercase tracking-wider ${isRtl ? 'text-right' : 'text-left'}`}>
                {bt.selectDoctor}
              </label>
              <select
                value={selectedDoctorId}
                onChange={(e) => {
                  setSelectedDoctorId(e.target.value);
                  const doc = doctors.find(d => d.id === e.target.value);
                  if (doc) {
                    setSelectedSpecialty(doc.specialty[language]);
                  }
                }}
                className={`w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#001f3f]/10 focus:border-[#001f3f] transition-all ${isRtl ? 'text-right' : 'text-left'}`}
              >
                <option value="">{bt.allDoctors}</option>
                {doctors
                  .filter(doc => !selectedSpecialty || doc.specialty[language] === selectedSpecialty)
                  .map((doc) => (
                    <option key={doc.id} value={doc.id}>{doc.name[language]}</option>
                  ))}
              </select>
            </div>
          </div>
        </div>

        {/* Dynamic Doctors Cards Grid */}
        {filteredDoctors.length > 0 ? (
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${isRtl ? 'dir-rtl' : 'dir-ltr'}`}>
            {filteredDoctors.map((doc) => {
              const isDirector = doc.id === 'dr-ako';

              return (
                <div
                  key={doc.id}
                  id={`doctor-card-${doc.id}`}
                  className={`relative bg-white border ${
                    isDirector 
                      ? 'border-red-600 ring-2 ring-red-600/5' 
                      : 'border-slate-200 hover:border-[#001f3f]/30'
                  } rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${
                    isRtl ? 'text-right' : 'text-left'
                  }`}
                >
                  {/* Director Ribbon */}
                  {isDirector && (
                    <div className={`absolute top-0 ${isRtl ? 'left-4' : 'right-4'} -translate-y-1/2 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-red-600`}>
                      {language === 'ku' ? 'بەڕێوبەر' : language === 'ar' ? 'المدير العام' : 'Director'}
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Doctor Icon Accent */}
                    <div className={`flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                      <div className={`p-2 rounded-xl ${isDirector ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-600'}`}>
                        <User className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                        {isDirector ? 'CHIEF MEDICAL BOARD' : 'CONSULTANT SPECIALIST'}
                      </span>
                    </div>

                    {/* Doctor Info */}
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-black text-[#001f3f] tracking-tight">
                        {doc.name[language]}
                      </h3>
                      <p className="text-xs font-semibold text-slate-400 font-mono tracking-wide">
                        {doc.id.toUpperCase()} // HIGH-HOSP
                      </p>
                    </div>

                    <div className="w-full h-px bg-slate-100 my-4" />

                    {/* Specialty */}
                    <p className="text-sm text-slate-700 font-bold leading-relaxed">
                      {doc.specialty[language]}
                    </p>
                  </div>

                  {/* Booking Trigger on card */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-3">
                    <button
                      onClick={() => handleCardBookClick(doc.id)}
                      className="w-full bg-[#001f3f] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl text-xs transition-colors duration-300"
                    >
                      {language === 'ku' ? 'حیجزکردنی نۆرە' : language === 'ar' ? 'حجز موعد الآن' : 'Book Appointment'}
                    </button>

                    <div className={`flex items-center gap-1.5 text-[10px] font-bold text-slate-400 ${isRtl ? 'flex-row-reverse justify-start' : 'justify-start'}`}>
                      <Award className="w-3.5 h-3.5 text-red-600" />
                      <span>
                        {language === 'ku' ? 'مۆڵەتی باوەڕپێکراو' : language === 'ar' ? 'مُرخص ومُعتمد' : 'Licensed Consultant'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 max-w-md mx-auto mb-16">
            <p className="text-slate-500 font-bold">{bt.noDoctorsFound}</p>
            <button
              onClick={() => {
                setSelectedSpecialty('');
                setSelectedDoctorId('');
              }}
              className="mt-4 text-xs font-black text-red-600 uppercase tracking-wider hover:underline"
            >
              {language === 'ku' ? 'پاککردنەوەی فلتەر' : language === 'ar' ? 'إعادة ضبط الفلاتر' : 'Reset Filters'}
            </button>
          </div>
        )}

        {/* Interactive Booking Form Section (Beautiful Split Form Layout) */}
        <div id="booking-form-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto pt-8 border-t border-slate-200/60">
          
          {/* Left: Info Text / Intro */}
          <div className={`lg:col-span-5 flex flex-col justify-center space-y-6 ${isRtl ? 'lg:text-right' : 'lg:text-left'}`}>
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                {language === 'ku' ? 'ئاسانکاری لە حیجزکردن' : language === 'ar' ? 'تسهيل الحجوزات' : 'Streamlined Booking'}
              </span>
              <h3 className="text-2xl font-black text-[#001f3f] tracking-tight">
                {bt.bookTitle}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {bt.bookSub}
              </p>
            </div>

            <div className="space-y-4">
              <div className={`flex items-start gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="p-2 bg-slate-100 text-[#001f3f] rounded-xl shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#001f3f]">
                    {language === 'ku' ? 'پەسەندکردنی خێرا' : language === 'ar' ? 'تأكيد سريع ومباشر' : 'Instant Confirmation'}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-semibold">
                    {language === 'ku' ? 'بەرپرسانی دەرمانخانە و پەیوەندییەکان لە چەند خولەکێکدا وەڵام دەدەنەوە' : language === 'ar' ? 'يقوم موظفونا بالرد وتأكيد الحجز في دقائق معدودة' : 'Our team responds and confirms your slot within minutes'}
                  </p>
                </div>
              </div>

              <div className={`flex items-start gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="p-2 bg-slate-100 text-[#001f3f] rounded-xl shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#001f3f]">
                    {language === 'ku' ? 'هیچ بڕە پارەیەک پێشوەخت نییە' : language === 'ar' ? 'لا توجد رسوم مسبقة' : 'No Pre-payments Required'}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-semibold">
                    {language === 'ku' ? 'تەواوی شایستە داراییەکان لە ناو نەخۆشخانە دوای پشکنین وەردەگیرێن' : language === 'ar' ? 'جميع الرسوم تُدفع في مكتب الاستقبال بالمستشفى لاحقاً' : 'All consultations are settled in-person at the reception'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Actual Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#001f3f]" />

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <h4 className={`text-base font-black text-[#001f3f] mb-2 ${isRtl ? 'text-right' : 'text-left'}`}>
                {bt.formTitle}
              </h4>

              {formError && (
                <div className={`p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-bold ${isRtl ? 'text-right' : 'text-left'}`}>
                  {formError}
                </div>
              )}

              {/* Patient Name Input */}
              <div className="space-y-1">
                <label className={`block text-xs font-bold text-slate-500 ${isRtl ? 'text-right' : 'text-left'}`}>
                  {bt.patientName} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder={language === 'ku' ? 'بۆ نموونە: ئاراس کامەران' : language === 'ar' ? 'مثال: أحمد عبد الله' : 'e.g. John Doe'}
                    className={`w-full bg-slate-50 border border-slate-200 rounded-xl py-3 text-sm font-bold text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#001f3f]/10 focus:border-[#001f3f] transition-all ${isRtl ? 'text-right pr-4' : 'text-left pl-4'}`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Patient Phone Input */}
                <div className="space-y-1">
                  <label className={`block text-xs font-bold text-slate-500 ${isRtl ? 'text-right' : 'text-left'}`}>
                    {bt.patientPhone} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="0770XXXXXXX"
                    className={`w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#001f3f]/10 focus:border-[#001f3f] transition-all ${isRtl ? 'text-right' : 'text-left'}`}
                  />
                </div>

                {/* Appointment Date Input */}
                <div className="space-y-1">
                  <label className={`block text-xs font-bold text-slate-500 ${isRtl ? 'text-right' : 'text-left'}`}>
                    {bt.appointmentDate} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    className={`w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#001f3f]/10 focus:border-[#001f3f] transition-all ${isRtl ? 'text-right' : 'text-left'}`}
                  />
                </div>
              </div>

              {/* Doctor Selector inside Form */}
              <div className="space-y-1">
                <label className={`block text-xs font-bold text-slate-500 ${isRtl ? 'text-right' : 'text-left'}`}>
                  {language === 'ku' ? 'دیاریکردنی پزیشک بۆ حیجز' : language === 'ar' ? 'تحديد طبيب للحجز' : 'Doctor to Book'}
                </label>
                <select
                  value={selectedDoctorId}
                  onChange={(e) => {
                    setSelectedDoctorId(e.target.value);
                    const doc = doctors.find(d => d.id === e.target.value);
                    if (doc) {
                      setSelectedSpecialty(doc.specialty[language]);
                    }
                  }}
                  className={`w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#001f3f]/10 focus:border-[#001f3f] transition-all ${isRtl ? 'text-right' : 'text-left'}`}
                >
                  <option value="">{bt.anyDoctor}</option>
                  {doctors.map((doc) => (
                    <option key={doc.id} value={doc.id}>
                      {doc.name[language]} - {doc.specialty[language]}
                    </option>
                  ))}
                </select>
              </div>

              {/* Notes Input */}
              <div className="space-y-1">
                <label className={`block text-xs font-bold text-slate-500 ${isRtl ? 'text-right' : 'text-left'}`}>
                  {bt.notes}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={language === 'ku' ? 'ئەگەر تێبینییەکت هەیە لێرە بینوسە...' : language === 'ar' ? 'اكتب أي ملاحظة أو تاريخ مرضي هنا...' : 'Any details about your condition...'}
                  className={`w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#001f3f]/10 focus:border-[#001f3f] transition-all ${isRtl ? 'text-right' : 'text-left'}`}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-[#001f3f] text-white font-black py-4 px-6 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span>{bt.bookBtn}</span>
              </button>
            </form>

          </div>

        </div>



      </div>
    </section>
  );
}
