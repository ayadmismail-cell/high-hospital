export type Language = 'ku' | 'ar' | 'en';

export interface Translation {
  title: string;
  subtitle: string;
  emergencyBtn: string;
  emergencyCall: string;
  emergencyModalTitle: string;
  emergencyModalDesc: string;
  emergencyNumber: string;
  closeBtn: string;
  callNowBtn: string;
  directorTitle: string;
  directorName: string;
  directorMessage: string;
  directorRole: string;
  addressLabel: string;
  addressText: string;
  phoneLabel: string;
  emailLabel: string;
  hoursLabel: string;
  hoursText: string;
  departmentsTitle: string;
  departmentsSub: string;
  doctorsTitle: string;
  doctorsSub: string;
  adminTitle: string;
  adminSub: string;
  aboutTitle: string;
  aboutText: string;
  allRightsReserved: string;
  exploreBtn: string;
  backToTop: string;
  qualityHealthcare: string;
  whyChooseUs: string;
  expertDoctors: string;
  expertDoctorsDesc: string;
  modernFacilities: string;
  modernFacilitiesDesc: string;
  icuCare: string;
  icuCareDesc: string;
}

export const translations: Record<Language, Translation> = {
  ku: {
    title: "شاری پزیشکی خزمەت",
    subtitle: "نەخۆشخانەکانی های (HIGH HOSPITALS)",
    emergencyBtn: "فریاگوزاری کتوپڕ ٢٤/٧",
    emergencyCall: "ژمارەی فریاگوزاری: ٠٧٧٠٧٠٤٩١٩١",
    emergencyModalTitle: "بارودۆخی کتوپڕی پزیشکی",
    emergencyModalDesc: "بەشی فریاگوزاری خێرامان ٢٤ کاتژمێر کراوەیە. تکایە لە کاتی هەر بارێکی کتوپڕدا پەیوەندی بە ژمارەی خوارەوە بکەن:",
    emergencyNumber: "07707049191",
    closeBtn: "داخستن",
    callNowBtn: "پەیوەندی بکە ئێستا",
    directorTitle: "بەڕێوبەرایەتی نەخۆشخانە",
    directorName: "د. ئاکۆ ئیبراهیم محەمەد",
    directorRole: "بەڕێوەبەری نەخۆشخانەی های",
    directorMessage: "بەخێرهاتنتان دەکەین بۆ شاری پزیشکی خزمەت. نەخۆشخانەی های پابەندە بە پێشکەشکردنی چاودێری پزیشکی لوکس و ئاست بەرز لە ڕێگەی لێهاتووترین پزیشکانی دەڤەرەکە و نوێترین ئامێرە پزیشکییەکانەوە. ئامانجمان خزمەتکردنی هاونیشتمانیانە بە شایستەترین شێواز.",
    addressLabel: "ناونیشان",
    addressText: "کەلار، سلێمانی، عێراق",
    phoneLabel: "تەلەفۆن",
    emailLabel: "ئیمەیڵ",
    hoursLabel: "کاتەکانی کارکردن",
    hoursText: "٢٤ کاتژمێر / ٧ ڕۆژ لە هەفتەدا",
    departmentsTitle: "بەشە پزیشکییەکان",
    departmentsSub: "خزمەتگوزاری پزیشکی هەمەلایەنە لە ژێر چاودێری کۆمەڵێک پزیشکی شارەزا",
    doctorsTitle: "پزیشکە پسپۆڕەکانمان",
    doctorsSub: "کۆمەڵێک پزیشکی لێهاتوو لە سەرجەم بوارە پزیشکییەکاندا",
    adminTitle: "وتەی بەڕێوەبەر",
    adminSub: "سەرپەرشتی و کارگێڕی شاری پزیشکی",
    aboutTitle: "دەربارەی ئێمە",
    aboutText: "نەخۆشخانەی های (High Hospitals) یەکێکە لە پڕۆژە پێشەنگەکانی کەرتی تەندروستی لە ناوچەکە، کە ئامانجی پێشکەشکردنی خزمەتگوزاری پزیشکی کوالێتی باڵا و لوکسە بە هاووڵاتیان. ئێمە کاردەکەین بۆ دابینکردنی ژینگەیەکی ئارام و چاودێرییەکی متمانەپێکراو بۆ هەر نەخۆشێک کە سەردانمان دەکات.",
    allRightsReserved: "هەموو مافەکان پارێزراوە بۆ شاری پزیشکی خزمەت (نەخۆشخانەکانی های)",
    exploreBtn: "گەڕان لە بەشەکان",
    backToTop: "بۆ سەرەوە",
    qualityHealthcare: "تەندروستیەکی باشتر بۆ دواڕۆژێکی گەشتر",
    whyChooseUs: "بۆچی نەخۆشخانەی های هەڵدەبژێریت؟",
    expertDoctors: "پزیشکانی پسپۆڕ و باڵا",
    expertDoctorsDesc: "پزیشکەکانمان باشترین و بەئەزموونترین پزیشکانی ناوچەکەن کە تەرخانکراون بۆ تەندروستی ئێوە.",
    modernFacilities: "ئامێر و ژینگەی پێشکەوتوو",
    modernFacilitiesDesc: "ژینگەیەکی لوکس و پاقژ و تەیارکراو بە نوێترین تەمەنەلۆژیای پزیشکی جیهانی.",
    icuCare: "چاودێری چڕی پێشکەوتوو",
    icuCareDesc: "بەشی چاودێری چڕ و منداڵە ناکامەکان بە نوێترین تەکنەلۆژیاوە بۆ پاراستنی ژیانی ئازیزانتان."
  },
  ar: {
    title: "مدينة خدمات الطبية",
    subtitle: "مستشفيات هاي (HIGH HOSPITALS)",
    emergencyBtn: "طوارئ طبية ٢٤/٧",
    emergencyCall: "رقم الطوارئ: ٠٧٧٠٧٠٤٩١٩١",
    emergencyModalTitle: "حالة طوارئ طبية كبرى",
    emergencyModalDesc: "قسم الطوارئ لدينا يعمل على مدار الساعة لاستقبال كافة الحالات الحرجة. يرجى الاتصال بالرقم أدناه في الحالات الطارئة فوراً:",
    emergencyNumber: "07707049191",
    closeBtn: "إغلاق",
    callNowBtn: "اتصل الآن",
    directorTitle: "إدارة المستشفى",
    directorName: "د. آكو إبراهيم محمد",
    directorRole: "مدير مستشفى هاي",
    directorMessage: "مرحبًا بكم في مدينة خدمات الطبية (مستشفيات هاي). نحن ملتزمون بتقديم أعلى مستويات الرعاية الصحية الفاخرة والنخبوية في المنطقة، من خلال توظيف كادر طبي واستشاري من النخبة، وبأحدث الأجهزة التشخيصية والعلاجية العالمية لخدمة مجتمعنا الكريم بكل تفانٍ وأمانة.",
    addressLabel: "العنوان",
    addressText: "كلار، السليمانية، العراق",
    phoneLabel: "الهاتف",
    emailLabel: "البريد الإلكتروني",
    hoursLabel: "ساعات العمل",
    hoursText: "على مدار ٢٤ ساعة / ٧ أيام في الأسبوع",
    departmentsTitle: "الأقسام الطبية",
    departmentsSub: "رعاية طبية تخصصية متكاملة تحت إشراف طاقم طبي عالمي المستوى",
    doctorsTitle: "أطباؤنا الأخصائيون",
    doctorsSub: "نخبة من الأطباء الاستشاريين والأخصائيين ذوي الكفاءة العالية",
    adminTitle: "كلمة المدير",
    adminSub: "القيادة الإدارية والطبية لمدينة خدمات الطبية",
    aboutTitle: "من نحن",
    aboutText: "مستشفى هاي (High Hospitals) يمثل صرحاً طبياً رائداً في المنطقة، يهدف لتقديم خدمات طبية متطورة بلمسة راقية وفخامة متميزة. نعمل بكل طاقتنا لتوفير بيئة استشفائية آمنة وصحية تضمن الراحة التامة والرعاية الدقيقة لكل مريض.",
    allRightsReserved: "جميع الحقوق محفوظة لمدينة خدمات الطبية (مستشفيات هاي)",
    exploreBtn: "استكشف الأقسام",
    backToTop: "الرجوع للأعلى",
    qualityHealthcare: "رعاية صحية متميزة لمستقبل أكثر إشراقاً",
    whyChooseUs: "لماذا تختار مستشفى هاي؟",
    expertDoctors: "أطباء استشاريون من النخبة",
    expertDoctorsDesc: "نخبة من الأطباء والاستشاريين الحاصلين على أعلى الشهادات الطبية والخبرات العملية.",
    modernFacilities: "أحدث التقنيات والبيئة الفاخرة",
    modernFacilitiesDesc: "تصاميم معمارية فاخرة وبيئة معقمة ومجهزة بأحدث الأنظمة الطبية في العالم.",
    icuCare: "رعاية مركزة متطورة للغاية",
    icuCareDesc: "أقسام العناية المركزة لحديثي الولادة والخدج (NICU) مجهزة بأنظمة حيوية لمراقبة دقيقة."
  },
  en: {
    title: "Services Medical City",
    subtitle: "High Hospitals (HIGH HOSPITALS)",
    emergencyBtn: "Medical Emergency 24/7",
    emergencyCall: "Emergency Call: 07707049191",
    emergencyModalTitle: "Medical Emergency",
    emergencyModalDesc: "Our critical response emergency department is fully staffed and active 24/7. In case of an emergency, please dial the hotline immediately:",
    emergencyNumber: "07707049191",
    closeBtn: "Close",
    callNowBtn: "Call Now",
    directorTitle: "Hospital Administration",
    directorName: "Dr. Ako Ibrahim Muhammad",
    directorRole: "Hospital Director of High Hospitals",
    directorMessage: "Welcome to High Hospitals. We are profoundly dedicated to providing luxurious, world-class healthcare services. Through our elite medical specialists, compassionate nursing teams, and cutting-edge international technologies, we strive to offer the ultimate standard of healing, trust, and premium clinical excellence.",
    addressLabel: "Address",
    addressText: "Kalar, Sulaymaniyah, Iraq",
    phoneLabel: "Phone",
    emailLabel: "Email",
    hoursLabel: "Opening Hours",
    hoursText: "24 Hours / 7 Days a Week",
    departmentsTitle: "Medical Departments",
    departmentsSub: "Comprehensive, state-of-the-art clinical divisions managed by expert healthcare professionals",
    doctorsTitle: "Our Specialist Doctors",
    doctorsSub: "A distinguished roster of certified consultants and physicians across all disciplines",
    adminTitle: "Director's Note",
    adminSub: "Executive Leadership & Vision of High Hospitals",
    aboutTitle: "About Us",
    aboutText: "High Hospitals is a premier medical establishment committed to setting the benchmark for elite healthcare in the region. Combining luxurious hospitality with state-of-the-art diagnostic and surgical capabilities, we deliver exceptional safety and comfort for our patients.",
    allRightsReserved: "All Rights Reserved © Services Medical City (High Hospitals)",
    exploreBtn: "Explore Departments",
    backToTop: "Back to Top",
    qualityHealthcare: "Superior Clinical Care for a Healthier Community",
    whyChooseUs: "Why High Hospitals?",
    expertDoctors: "Elite Specialist Doctors",
    expertDoctorsDesc: "Our consultants are recognized experts with extensive international training and clinical experience.",
    modernFacilities: "State-of-the-Art Luxury Facility",
    modernFacilitiesDesc: "Premium clinical environment utilizing modern technology designed for comfort and sterile safety.",
    icuCare: "Advanced Critical & Neonatal Care",
    icuCareDesc: "Advanced NICU equipped with advanced incubation systems and constant monitoring for delicate infants."
  }
};

export interface Department {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  image?: string;
  features: Record<Language, string[]>;
}

export const departments: Department[] = [
  {
    id: "er",
    name: {
      ku: "فریاگوزاری",
      ar: "قسم الطوارئ",
      en: "Emergency Room (ER)"
    },
    description: {
      ku: "بەشی فریاگوزاری پێشکەوتوو بە کارمەندی لێهاتوو و پزیشکی پسپۆڕ بە درێژایی ٢٤ کاتژمێری شەو و ڕۆژ لە خزمەتدایە.",
      ar: "قسم الطوارئ المتقدم يعمل على مدار 24 ساعة طوال أيام الأسبوع تحت إشراف أطباء وكوادر تخصصية مؤهلة.",
      en: "State-of-the-art Emergency Department operating 24/7 under the supervision of highly specialized medical teams."
    },
    image: "/src/assets/images/regenerated_image_1783355965189.jpg", // Patient wheeling in corridor
    features: {
      ku: ["ئامبولانسی متمانەپێکراو و مۆدێرن", "پزیشکی پسپۆڕی ئامادە باش", "مامەڵەکردنی خێرا لەگەڵ حاڵەتە دژوارەکان"],
      ar: ["سيارات إسعاف مجهزة بالكامل", "أطباء طوارئ مقيمون في أي وقت", "التعامل السريع والمهني مع الحالات الحرجة"],
      en: ["Fully-equipped rapid ambulances", "On-duty trauma physicians", "Immediate response for critical cases"]
    }
  },
  {
    id: "surgery",
    name: {
      ku: "نەشتەرگەری",
      ar: "قسم العمليات الجراحية",
      en: "Surgical Department"
    },
    description: {
      ku: "هۆڵەکانی نەشتەرگەری پڕچەک کراون بە نوێترین ئامێرە تەکنەلۆژییەکان بۆ ئەنجامدانی نەشتەرگەرییە گەورە، ورد و نازۆرییەکان.",
      ar: "غرف العمليات مجهزة بأحدث التقنيات الطبية والأنظمة الرقمية لإجراء الجراحات الكبرى والمنظارية والدقيقة.",
      en: "Advanced Operating Theaters equipped with cutting-edge medical technologies for major, laparoscopic, and specialized surgeries."
    },
    image: "/src/assets/images/regenerated_image_1783355965598.jpg", // Surgeons performing surgery
    features: {
      ku: ["هۆڵەکانی بێگەرد و تەواو ستریل", "نەشتەرگەری نازۆری (ناسکۆپی)", "کادری پسپۆڕ و خاوەن ئەزموونی جیهانی"],
      ar: ["غرف عمليات معقمة بنظام الفلترة الهوائية", "عمليات ناظورية متقدمة وقليلة التداخل", "طاقم تمريضي جراحي عالي التدريب"],
      en: ["Laminar flow sterile environment", "Advanced laparoscopic (minimally invasive) surgery", "Highly-experienced surgical assist teams"]
    }
  },
  {
    id: "clinics",
    name: {
      ku: "کلینیک",
      ar: "العيادات الاستشارية",
      en: "Outpatient Clinics"
    },
    description: {
      ku: "ڕاوێژکارییە پسپۆڕییە جیاوازەکان ڕۆژانە پێشوازی لە نەخۆش دەکەن بۆ پشکنینی ورد و دیاریکردنی چارەسەری پێویست.",
      ar: "العيادات الاستشارية التخصصية تستقبل المرضى يومياً لتقديم أدق الفحوصات والاستشارات الطبية المتكاملة.",
      en: "Specialized Outpatient Clinics welcoming patients daily for comprehensive medical consults, diagnoses, and personal treatment plans."
    },
    image: "/src/assets/images/regenerated_image_1783355966008.jpg", // Clinic area / Waiting room
    features: {
      ku: ["پشکنینی بەشە جیاوازەکان", "سیستەمی نۆبەی مۆدێرن", "کاتەکانی سەردانی گونجاو"],
      ar: ["مختلف التخصصات الطبية في مكان واحد", "نظام حجز مواعيد مرن ومنظم", "أجنحة انتظار فاخرة ومريحة"],
      en: ["Multidisciplinary clinics on site", "Streamlined appointment booking", "Luxurious and comfortable waiting lounges"]
    }
  },
  {
    id: "nicu",
    name: {
      ku: "منداڵە ناکامەکان",
      ar: "العناية المركزة لحديثي الولادة (الخدج)",
      en: "Neonatal Intensive Care Unit (NICU)"
    },
    description: {
      ku: "بەشی چاودێری چڕی منداڵانی ناکام و تازەلەدایکبووان بە پڕچەکترین و نوێترین ئامێرەکانی هەنبانە (ئینکیوبیتەر) بۆ پاراستنی ژیانی منداڵان.",
      ar: "وحدة العناية المركزة لحديثي الولادة والخدج مجهزة بأحدث الحاضنات وأنظمة التنفس والدعم الحيوي المتكامل.",
      en: "Advanced NICU offering specialized neonatal care with high-grade incubators, ventilators, and constant physiological monitoring."
    },
    image: "/src/assets/images/regenerated_image_1783355966617.jpg", // Nursing Station & specialized care
    features: {
      ku: ["هەنبانەی مۆدێرنی ئینکۆبیتەر", "چاودێری ٢٤ کاتژمێری پزیشکی", "تەندروستی و ستریلی زۆر توند"],
      ar: ["حاضنات حديثة للخدج والمبتسرين", "مراقبة مستمرة على مدار الساعة من استشاريين", "بيئة فائقة التعقيم والخصوصية"],
      en: ["Sophisticated warm incubators", "24/7 dedicated neonatologist monitoring", "Strict sterile and infection-control guidelines"]
    }
  },
  {
    id: "gynecology",
    name: {
      ku: "ژنان",
      ar: "قسم أمراض النساء والتوليد",
      en: "Obstetrics & Gynecology"
    },
    description: {
      ku: "خزمەتگوزاری گشتگیر بۆ نەخۆشییەکانی ژنان، چاودێری دووگیانی، منداڵبوونی ئاسایی و قەیسەری لە ژێر چاودێری پسپۆڕانی باڵا.",
      ar: "رعاية نسائية شاملة ومتابعة دقيقة للحمل، وعمليات الولادة الطبيعية والقيصرية بأرقى معايير الأمان والتخدير.",
      en: "Comprehensive services for general women's health, specialized prenatal monitoring, and highly-safe natural and Caesarean deliveries."
    },
    image: "/src/assets/images/regenerated_image_1783355966946.jpg", // Reception wood paneling (luxurious reception)
    features: {
      ku: ["هۆڵەکانی منداڵبوونی تایبەت", "سۆنەری ڕەنگاوڕەنگی چوار ڕەهەندی", "چاودێری پێش و پاش منداڵبوون"],
      ar: ["أجنحة ولادة خاصة وفاخرة", "أجهزة سونار ثلاثية ورباعية الأبعاد", "برامج متكاملة لرعاية الأم والطفل"],
      en: ["Private, premium delivery suites", "Advanced 3D & 4D Obstetric Ultrasound", "Postpartum support and neonatal checkups"]
    }
  },
  {
    id: "radiology",
    name: {
      ku: "سەنتەری تیشک",
      ar: "مركز الأشعة والسونار",
      en: "Radiology & Imaging Center"
    },
    description: {
      ku: "ئامێرەکانی تیشک، سۆنەری پێشکەوتوو، سیتی سکان (CT-Scan) بۆ دەستنیشانکردنی زۆر ورد و زانستیانەی نەخۆشییەکان بە خێرایی بەرز.",
      ar: "خدمات الأشعة، السونار، والمفراس الحلزوني المتطور لتوفير صور عالية الدقة تساعد في التشخيص الطبي المتكامل.",
      en: "Imaging services utilizing highly advanced X-Ray, diagnostic Ultrasound, and multi-slice CT-Scans for rapid, precise clinical outcomes."
    },
    features: {
      ku: ["سیتی سکانی نوێ", "تیشکی ئێکس لۆکاڵ کەم", "ڕاپۆرتی دەستبەجێ و باوەڕپێکراو"],
      ar: ["جهاز مفراس متقدم بجرعة إشعاع منخفضة", "أحدث أجهزة الموجات فوق الصوتية", "تقارير طبية فورية ودقيقة"],
      en: ["Low-dose diagnostic CT-Scan", "State-of-the-art Ultrasound imaging", "Fast, high-fidelity diagnostic reports"]
    }
  },
  {
    id: "laboratory",
    name: {
      ku: "تاقیگە",
      ar: "المختبر المركزي",
      en: "Central Laboratory"
    },
    description: {
      ku: "پشکنینە پزیشکییەکان بە ئامێری زۆر پێشکەوتوو و ئۆتۆماتیکی ئەڵمانی بۆ بەدەستهێنانی ئەنجامی خێرا و سەدا سەد ڕاست.",
      ar: "إجراء الفحوصات والتحاليل الطبية والبيولوجية بأحدث الأجهزة الآلية لضمان أدق النتائج وأسرعها.",
      en: "In-house lab facilitating all regular and specialized tests with fully automated, high-precision equipment."
    },
    features: {
      ku: ["پشکنینی گشتی تاقیگەیی", "ئۆتۆماتیکی بێ دەست تێوەردانی مرۆڤ", "کوالیتی توند و پشتڕاستکراو"],
      ar: ["كافة الفحوصات الهرمونية والكيميائية والدموية", "أجهزة تحليل مؤتمتة بالكامل لمنع الخطأ", "أعلى معايير الجودة ومراقبة النتائج"],
      en: ["Comprehensive hematology & biochemistry tests", "Fully automated robotic diagnostic channels", "Strict quality control validation"]
    }
  },
  {
    id: "pharmacy",
    name: {
      ku: "دەرمانخانە",
      ar: "الصيدلية المركزية",
      en: "Central Pharmacy"
    },
    description: {
      ku: "دابینکردنی هەموو جۆرە دەرمانێکی کوالێتی بەرز و پێویست بۆ نەخۆش بە چاودێری دەرمانسازی لێهاتوو ٢٤ کاتژمێر.",
      ar: "توفير كافة الأدوية والمستلزمات الطبية المعتمدة عالمياً تحت إشراف صيادلة متخصصين طوال اليوم.",
      en: "Providing certified and high-standard medications and medical products, managed by professional clinical pharmacists."
    },
    features: {
      ku: ["دەرمانی ئەسڵی و کوالێتی بەرز", "ڕێنمایی دەرمانسازی چڕ بۆ نەخۆش", "بەردەستبوون ٢٤ کاتژمێر"],
      ar: ["أدوية أصلية خاضعة للرقابة الدوائية", "إرشادات صيدلانية دقيقة ومبسطة للمرضى", "خدمة متواصلة على مدار الساعة"],
      en: ["Authentic medications with strict cold chain storage", "Detailed, compassionate patient counseling", "Continuous availability, 24 hours a day"]
    }
  }
];

export interface Doctor {
  id: string;
  name: Record<Language, string>;
  specialty: Record<Language, string>;
  subtitle?: Record<Language, string>;
}

export const doctors: Doctor[] = [
  {
    id: "dr-dilsoz",
    name: {
      ku: "دڵسۆز عماد باجەڵان",
      ar: "دلسوز عماد باجلان",
      en: "Dr. Dilsoz Imad Bajalan"
    },
    specialty: {
      ku: "نەخۆشییەکانی ژنان و منداڵبوون و نەزۆکی",
      ar: "أخصائية أمراض النساء والتوليد والعقم",
      en: "Specialist in Obstetrics, Gynecology, & Fertility"
    }
  },
  {
    id: "dr-jamal",
    name: {
      ku: "د. جەمال",
      ar: "د. جمال",
      en: "Dr. Jamal"
    },
    specialty: {
      ku: "نەخۆشی دڵ و قەستەرە و ئیکۆ",
      ar: "أخصائي أمراض القلب والقسطرة والإيكو",
      en: "Specialist in Cardiology, Catheterization, & Echo"
    }
  },
  {
    id: "dr-rawand",
    name: {
      ku: "د. ڕەوەند",
      ar: "د. راوند",
      en: "Dr. Rawand"
    },
    specialty: {
      ku: "رۆماتیزم و جومگە و بڕبڕەی پشت",
      ar: "أخصائي الروماتيزم والمفاصل والعمود الفقري",
      en: "Specialist in Rheumatology, Joints, & Spine"
    }
  },
  {
    id: "dr-orhan",
    name: {
      ku: "ئورهان",
      ar: "د. أورهان",
      en: "Dr. Orhan"
    },
    specialty: {
      ku: "منداڵان و تازە لە دایک بوو",
      ar: "أخصائي طب الأطفال وحديثي الولادة",
      en: "Specialist Pediatrician & Neonatologist"
    }
  },
  {
    id: "dr-muthana",
    name: {
      ku: "موسەنا",
      ar: "د. مثنى",
      en: "Dr. Muthana"
    },
    specialty: {
      ku: "ئێسک و شکاوی و جومگە",
      ar: "أخصائي جراحة العظام والكسور والمفاصل",
      en: "Specialist in Orthopedics, Fractures & Joints"
    }
  },
  {
    id: "dr-binar",
    name: {
      ku: "بنار یادگار حیشمەت",
      ar: "بنار يادكار",
      en: "Dr. Binar Yadgar Hishmat"
    },
    specialty: {
      ku: "دڵ و قەستەرە و ئیکۆی دڵ",
      ar: "أخصائي أمراض القلب والقسطرة وإيكو القلب",
      en: "Specialist in Cardiology, Catheterization, & Heart Echo"
    }
  },
  {
    id: "dr-ammar",
    name: {
      ku: "د. عەممار",
      ar: "د. عمار",
      en: "Dr. Ammar"
    },
    specialty: {
      ku: "نەشتەرگەری و نەخۆشیەکانی چاو",
      ar: "أخصائي طب وجراحة العيون",
      en: "Specialist Ophthalmologist & Eye Surgeon"
    }
  }
];
