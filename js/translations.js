/**
 * MG HOME - قاموس الترجمة ثنائي اللغة (Bilingual Translations Dictionary)
 * =========================================================================
 * 
 * يغطي كافة النصوص في الموقع باللغتين العربية والإنجليزية.
 */

const TRANSLATIONS = {
  ar: {
    // الترويسة والتنقل
    brandTagline: "لجميع خدمات التكييف والصيانة",
    navHome: "الرئيسية",
    navServices: "خدماتنا",
    navGallery: "أعمالنا السابقة",
    navContact: "تواصل معنا",
    headerWaBtn: "تواصل واتساب",
    langToggleBtn: "English",
    themeToggleAria: "تبديل المظهر (فاتح / داكن)",
    menuToggleAria: "فتح القائمة الرئيسية",

    // قسم البطل
    heroBadge: "خدمات فنية معتمدة وموثوقة",
    heroTitleHighlight: "MG HOME",
    heroTitleSuffix: "لجميع خدمات التكييف والصيانة",
    heroDesc: "نقدم حلولًا متكاملة في تركيب، صيانة وإصلاح أنظمة التكييف بمختلف أنواعها، صيانة الغسالات الأوتوماتيكية، ومتابعة دوائر التبريد على أيدي فنيين متخصصين لضمان أعلى درجات الكفاءة.",
    heroCtaWa: "طلب صيانة عبر واتساب",
    heroCtaServices: "استكشف الخدمات",
    heroFeature1: "فنيون متخصصون وخبرة تنفيذ ميدانية",
    heroFeature2: "فحص دقيق وعناية بسلامة الأجهزة",
    heroFeature3: "سرعة استجابة ومواعيد منضبطة",
    heroBadgeTitle: "جودة التثبيت والتشغيل",
    heroBadgeSubtitle: "توثيق مباشر من مواقع العمل",

    // قسم الخدمات
    servicesBadge: "خدماتنا المعتمدة",
    servicesTitle: "حلول التكييف والصيانة الشاملة",
    servicesDesc: "نقدم خدمات الصيانة والتركيب المتخصصة للقطاع السكني والتجاري بأعلى معايير الدقة والاحتراف.",
    
    service1Title: "تركيب وصيانة مكيفات سبليت",
    service1Desc: "تركيب الوحدات الداخلية والخارجية باحترافية، تثبيت الحوامل الجدارية، شحن وتعبئة فريون التبريد، ومعالجة تسريبات المياه وتراكم الثلج.",
    service1Bullet1: "فحص ضغط الغاز وتنظيف الفلاتر ومجاري التصريف",
    service1Bullet2: "تركيب متقن مع عزل مواسير النحاس بالكامل",
    service1Btn: "طلب خدمة مكيفات سبليت",

    service2Title: "تمديد وتركيب دكت التكييف المركزي",
    service2Desc: "أعمال تفصيل وتركيب مجاري الهواء (Duct)، تركيب الجريلات الخطية وموزعات الهواء الدائرية (Diffusers) للمنازل، المكاتب والمباني الإدارية.",
    service2Bullet1: "تفصيل مجاري هواء حلزونية ومربعة بدقة عالية",
    service2Bullet2: "موازنة توزيع الهواء لتدفق متجانس في الغرف",
    service2Btn: "طلب خدمة أعمال الدكت",

    service3Title: "المكيفات الدولابية والستائر الهوائية",
    service3Desc: "توريد وتركيب المكيفات الدولابية والتجارية للمحلات والمساحات الواسعة، مع تركيب الستائر الهوائية لمنع تسرب البرودة وعزل الأتربة.",
    service3Bullet1: "حلول تبريد فائقة القوة للمحلات والصالات الكبيرة",
    service3Bullet2: "تركيب ستائر هوائية علوية متوافقة مع الأبواب",
    service3Btn: "طلب خدمة المكيفات الدولابية",

    service4Title: "صيانة الغسالات الأوتوماتيكية",
    service4Desc: "صيانة شاملة للأعطال الميكانيكية والكهربائية للغسالات الأوتوماتيكية، إصلاح المحرك ونظام التدوير، معالجة مشاكل التصريف والأصوات المزعجة.",
    service4Bullet1: "فك وفحص الحوض الداخلي واستبدال التالف",
    service4Bullet2: "فحص كروت التشغيل الإلكترونية وحساسات الماء",
    service4Btn: "طلب صيانة غسالات",

    service5Title: "صيانة الثلاجات وأجهزة التبريد",
    service5Desc: "فحص كمبروسرات الثلاجات، استبدال الفلاتر وصمامات الشحن، كشف تسريب الفريون، وإصلاح مشاكل التبريد الضعيف وتراكم الثلج في المبخر.",
    service5Bullet1: "شحن غاز التبريد بالمقاييس والضغوط المحددة للمصنع",
    service5Bullet2: "إصلاح سخانات إذابة الثلج وحساسات الحرارة",
    service5Btn: "طلب صيانة ثلاجات وتبريد",

    service6Title: "الفحص الميداني والصيانة الوقائية",
    service6Desc: "زيارات تشخيصية ميدانية لمعاينة كفاءة عمل منظومة التكييف والأجهزة المنزلية، والتأكد من استهلاك الكهرباء وسلامة الوصلات الكهربائية.",
    service6Bullet1: "تشخيص فني صادق بدون استبدال قطع غير ضرورية",
    service6Bullet2: "نصائح عملية للحفاظ على عمر الجهاز وتقليل الاستهلاك",
    service6Btn: "طلب زيارة فحص ومعاينة",

    // قسم أعمالنا السابقة
    galleryBadge: "توثيق ميداني",
    galleryTitle: "أعمالنا السابقة",
    galleryDesc: "صور حقيقية وغير معدلة من مواقع عملنا الميدانية تبرز دقة التركيب وجودة الصيانة المنفذة لعملائنا.",
    filterAll: "الكل",
    filterSplit: "تكييف سبليت",
    filterDuct: "دكت وتكييف مركزي",
    filterStanding: "دولابي وتجاري",
    filterWashing: "صيانة غسالات",
    filterAppliances: "تبريد وأجهزة",
    galleryEmpty: "لا توجد صور متاحة في هذا القسم حاليًا.",

    // قسم التواصل
    contactBadge: "تواصل سريع",
    contactTitle: "نحن في خدمتك دائمًا",
    contactDesc: "تواصل معنا مباشرة عبر الاتصال الهاتفي أو واتساب لحجز موعد صيانة أو الاستفسار، أو تابعنا على فيسبوك وانستغرام.",
    cardWaLabel: "المحادثة الفورية عبر واتساب",
    cardWaNote: "تواصل مباشر لتحديد الموعد واستقبال استفسارات الصيانة والأسعار.",
    cardWaBtn: "بدء محادثة واتساب",
    cardTelLabel: "الاتصال الهاتفي المباشر",
    cardTelNote: "متاحون للرد السريع على الاتصالات واستقبال استفساراتكم وحجز المواعيد.",
    cardTelBtn: "إجراء اتصال هاتفي",
    cardFbLabel: "صفحة فيسبوك الرسمية",
    cardFbNote: "تواصل وتابع أحدث العروض وتفاصيل الخدمات عبر صفحتنا.",
    cardFbBtn: "زيارة صفحة فيسبوك",
    cardIgLabel: "حساب انستغرام الرسمي",
    cardIgNote: "تابع يوميات الأعمال الميدانية وفيديوهات التركيبات أولاً بأول.",
    cardIgBtn: "زيارة حساب انستغرام",
    
    // النموذج
    formTitle: "طلب خدمة فوري",
    formSubtitle: "حدد نوع الخدمة وسنقوم بتحويل طلبك فورًا لمحادثة واتساب مجهزة بالتفاصيل.",
    formLabelService: "نوع الخدمة المطلوبة",
    formOptSplit: "صيانة أو تركيب مكيفات سبليت",
    formOptDuct: "تمديد دكت وتكييف مركزي",
    formOptStanding: "مكيفات دولابية أو ستائر هوائية",
    formOptWashing: "صيانة غسالات أوتوماتيك",
    formOptFridge: "صيانة ثلاجات وأجهزة تبريد",
    formOptOther: "خدمات صيانة أخرى",
    formLabelName: "الاسم الكريم (اختياري)",
    formPlaceholderName: "مثال: أبو محمد",
    formLabelDetails: "وصف العطل أو تفاصيل الطلب",
    formPlaceholderDetails: "اكتب وصفًا موجزًا للمشكلة أو نوع الجهاز والحي...",
    formSubmitBtn: "إرسال الطلب عبر واتساب",

    // التذييل
    footerDesc: "مؤسسة متخصصة في خدمات صيانة وتركيب التكييف المركزي وسبليت، الغسالات الأوتوماتيكية، وأجهزة التبريد بخبرة فنية والتزام تام بالجودة.",
    footerHeadingLinks: "روابط سريعة",
    footerHeadingSocial: "قنوات التواصل",
    footerSocialDesc: "تابعنا وتواصل معنا مباشرة عبر المنصات المعتمدة:",
    footerRights: "جميع الحقوق محفوظة.",

    // الشريط العائم للجوال
    mobileWa: "واتساب",
    mobileCall: "اتصال",
    mobileIg: "انستغرام",

    // نافذة عرض الصور
    lightboxAria: "عرض الصورة بحجم كامل",
    lightboxCloseAria: "إغلاق نافذة العرض",
    lightboxPrevAria: "الصورة السابقة",
    lightboxNextAria: "الصورة التالية",

    // نصوص رسائل الواتساب
    waDefaultMsg: "مرحبًا، أريد الاستفسار عن خدمات الصيانة لدى MG HOME.",
    waFormTemplate: "مرحبًا MG HOME،\nأنا: {name}\nأرغب في الاستفسار عن: {service}\nتفاصيل الطلب: {details}"
  },

  en: {
    // Header & Navigation
    brandTagline: "All AC & Maintenance Services",
    navHome: "Home",
    navServices: "Services",
    navGallery: "Our Work",
    navContact: "Contact Us",
    headerWaBtn: "WhatsApp",
    langToggleBtn: "العربية",
    themeToggleAria: "Toggle Theme (Light / Dark)",
    menuToggleAria: "Open Main Navigation Menu",

    // Hero Section
    heroBadge: "Certified & Reliable Technical Solutions",
    heroTitleHighlight: "MG HOME",
    heroTitleSuffix: "All Air Conditioning & Maintenance Services",
    heroDesc: "Delivering complete professional services in installation, repair, and maintenance for all air conditioning systems, automatic washers, and refrigeration units by specialized technicians.",
    heroCtaWa: "Book via WhatsApp",
    heroCtaServices: "Explore Services",
    heroFeature1: "Specialized Technicians & Field Expertise",
    heroFeature2: "Thorough Inspection & Equipment Care",
    heroFeature3: "Prompt Response & Punctual Appointments",
    heroBadgeTitle: "Installation & Execution Quality",
    heroBadgeSubtitle: "Direct documentation from real job sites",

    // Services Section
    servicesBadge: "Our Verified Services",
    servicesTitle: "Comprehensive AC & Maintenance Services",
    servicesDesc: "We provide specialized maintenance and installation services for residential and commercial spaces with high technical standards.",

    service1Title: "Split AC Installation & Repair",
    service1Desc: "Professional indoor and outdoor unit mounting, sturdy brackets, freon recharging, and fixing water drainage or ice build-up issues.",
    service1Bullet1: "Freon pressure diagnostics, filter cleaning & drain clearing",
    service1Bullet2: "Precision piping with complete thermal insulation",
    service1Btn: "Book Split AC Service",

    service2Title: "Central & Concealed Duct AC Installation",
    service2Desc: "Custom duct fabrication and installation, linear grilles, and circular diffusers for homes, offices, and commercial establishments.",
    service2Bullet1: "High-precision rectangular and spiral duct installation",
    service2Bullet2: "Airflow balancing for balanced room cooling",
    service2Btn: "Book Duct AC Service",

    service3Title: "Standing AC Units & Air Curtains",
    service3Desc: "Commercial floor-standing air conditioners for large halls and shops, plus air curtain installations to block heat and dust ingress.",
    service3Bullet1: "High-power cooling solutions for wide retail spaces",
    service3Bullet2: "Over-door air curtains to preserve internal air quality",
    service3Btn: "Book Standing AC Service",

    service4Title: "Automatic Washer Repair & Servicing",
    service4Desc: "Comprehensive diagnostics for mechanical and electrical washer faults, motor repair, drum balancing, drainage, and noise elimination.",
    service4Bullet1: "Inner drum disassembly, bearing & component repair",
    service4Bullet2: "Electronic control board diagnostics and sensor tests",
    service4Btn: "Book Washer Repair",

    service5Title: "Refrigerators & Cooling Appliances Repair",
    service5Desc: "Compressor diagnostics, filter and service valve replacement, leak inspection, gas recharging, and fixing poor freezing or defrost issues.",
    service5Bullet1: "Accurate refrigerant recharging to factory gauge specs",
    service5Bullet2: "Defrost heater and thermostat sensor replacement",
    service5Btn: "Book Refrigeration Service",

    service6Title: "Field Inspection & Preventive Maintenance",
    service6Desc: "On-site visits to inspect equipment efficiency, optimize energy usage, and verify electrical safety across cooling systems.",
    service6Bullet1: "Honest technical evaluation without unnecessary part changes",
    service6Bullet2: "Practical tips to extend equipment life and reduce energy",
    service6Btn: "Book Inspection Visit",

    // Previous Work Gallery
    galleryBadge: "Field Documentation",
    galleryTitle: "Our Previous Work",
    galleryDesc: "Authentic, unedited photographs from our field work sites highlighting precision installation and craftsmanship quality.",
    filterAll: "All",
    filterSplit: "Split AC",
    filterDuct: "Duct & Central AC",
    filterStanding: "Standing & Commercial",
    filterWashing: "Washing Machines",
    filterAppliances: "Refrigeration & Appliances",
    galleryEmpty: "No photos currently available in this category.",

    // Contact Section
    contactBadge: "Quick Contact",
    contactTitle: "Always Ready to Assist You",
    contactDesc: "Contact us directly via phone call or WhatsApp for booking and inquiries, or follow us on Facebook and Instagram.",
    cardWaLabel: "Instant WhatsApp Chat",
    cardWaNote: "Direct chat to schedule a visit, ask questions, or obtain estimates.",
    cardWaBtn: "Start WhatsApp Chat",
    cardTelLabel: "Direct Phone Call",
    cardTelNote: "Available for quick response, inquiries, and booking appointments.",
    cardTelBtn: "Call Now",
    cardFbLabel: "Official Facebook Page",
    cardFbNote: "Connect and follow our latest service updates on Facebook.",
    cardFbBtn: "Visit Facebook Page",
    cardIgLabel: "Official Instagram Profile",
    cardIgNote: "Check out daily job highlights and installation videos.",
    cardIgBtn: "Visit Instagram Profile",

    // Inquiry Form
    formTitle: "Instant Service Request",
    formSubtitle: "Choose your service and we will prepare a detailed message directly in WhatsApp.",
    formLabelService: "Required Service",
    formOptSplit: "Split AC Installation / Repair",
    formOptDuct: "Central / Concealed Duct AC",
    formOptStanding: "Standing AC / Air Curtains",
    formOptWashing: "Automatic Washer Maintenance",
    formOptFridge: "Refrigerator & Cooling Repair",
    formOptOther: "Other Maintenance Services",
    formLabelName: "Your Name (Optional)",
    formPlaceholderName: "e.g., Mohammed / John",
    formLabelDetails: "Issue Description or Request Details",
    formPlaceholderDetails: "Describe the issue, appliance brand, or district...",
    formSubmitBtn: "Send Request via WhatsApp",

    // Footer
    footerDesc: "Specialized in professional air conditioning installation and maintenance, automatic washing machine repairs, and cooling appliances with proven technical quality.",
    footerHeadingLinks: "Quick Links",
    footerHeadingSocial: "Contact Channels",
    footerSocialDesc: "Follow and connect with us directly on verified platforms:",
    footerRights: "All rights reserved.",

    // Mobile Action Bar
    mobileWa: "WhatsApp",
    mobileCall: "Call",
    mobileIg: "Instagram",

    // Lightbox
    lightboxAria: "View full size image",
    lightboxCloseAria: "Close full view",
    lightboxPrevAria: "Previous image",
    lightboxNextAria: "Next image",

    // WhatsApp Message Strings
    waDefaultMsg: "Hello MG HOME, I would like to inquire about your maintenance services.",
    waFormTemplate: "Hello MG HOME,\nName: {name}\nService: {service}\nDetails: {details}"
  }
};

window.TRANSLATIONS = TRANSLATIONS;
