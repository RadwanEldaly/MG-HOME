/**
 * MG HOME - ملف إعدادات الاتصال ومعرض الأعمال
 * MG HOME - Business Contact & Gallery Configuration
 * ===================================================
 */

const SITE_CONFIG = {
  businessNameEn: "MG HOME",
  businessNameAr: "إم جي هوم",
  
  contact: {
    // الرقم المحلي المقدم من العميل
    localNumber: "0538061531",
    
    // مفتاح الدولة الدولي (Saudi Arabia default: 966)
    countryCode: "966",
    isCountryCodeConfirmed: true,
    
    // حساب انستغرام
    instagramUrl: "https://www.instagram.com/mg_home_air_conditioning/",
    instagramHandle: "@mg_home_air_conditioning",
    
    // رسائل مخصصة حسب اللغة والخدمة
    serviceMessages: {
      ar: {
        default: "مرحبًا، أريد الاستفسار عن خدمات الصيانة لدى MG HOME.",
        split: "مرحبًا MG HOME، أود الاستفسار عن خدمة تركيب / صيانة مكيفات سبليت.",
        duct: "مرحبًا MG HOME، أود الاستفسار عن تمديد وتركيب دكت التكييف المركزي والمخفي.",
        standing: "مرحبًا MG HOME، أود الاستفسار عن خدمات المكيفات الدولابية والستائر الهوائية.",
        washing: "مرحبًا MG HOME، أود الاستفسار عن صيانة الغسالات الأوتوماتيكية.",
        fridge: "مرحبًا MG HOME، أود الاستفسار عن صيانة الثلاجات وأجهزة التبريد.",
        general: "مرحبًا MG HOME، أود الاستفسار عن خدمات الصيانة والفحص الميداني."
      },
      en: {
        default: "Hello MG HOME, I would like to inquire about your maintenance services.",
        split: "Hello MG HOME, I would like to inquire about Split AC installation and repair services.",
        duct: "Hello MG HOME, I would like to inquire about Central & Concealed Duct AC installation.",
        standing: "Hello MG HOME, I would like to inquire about Standing AC units and Air Curtains.",
        washing: "Hello MG HOME, I would like to inquire about Automatic Washing Machine repairs.",
        fridge: "Hello MG HOME, I would like to inquire about Refrigerator and Cooling repair services.",
        general: "Hello MG HOME, I would like to inquire about field inspection and general maintenance."
      }
    }
  },

  // دالة توليد رابط واتساب مع مراعاة اللغة الحالية
  getWhatsAppUrl: function(customMessage, lang) {
    const activeLang = lang || document.documentElement.lang || 'ar';
    const rawNumber = this.contact.localNumber.replace(/\D/g, "");
    let internationalNumber = "";
    
    if (this.contact.isCountryCodeConfirmed && this.contact.countryCode) {
      const cleanLocal = rawNumber.startsWith("0") ? rawNumber.substring(1) : rawNumber;
      internationalNumber = `${this.contact.countryCode}${cleanLocal}`;
    } else {
      internationalNumber = rawNumber;
    }
    
    const fallbackMsg = this.contact.serviceMessages[activeLang]?.default || this.contact.serviceMessages.ar.default;
    const message = encodeURIComponent(customMessage || fallbackMsg);
    return `https://wa.me/${internationalNumber}?text=${message}`;
  },

  // -------------------------------------------------------------
  // معرض صور الأعمال السابقة الحقيقية (بيدعم اللغتين)
  // -------------------------------------------------------------
  gallery: [
    {
      id: "ac-split-hall",
      category: "split",
      categoryAr: "تكييف سبليت",
      categoryEn: "Split AC",
      titleAr: "تركيب وتشغيل مكيفات سبليت في صالة كبرى",
      titleEn: "Split AC Installation in Large Hall",
      descAr: "تثبيت احترافي لوحدات سبليت جدارية مع توصيلات مخفية وتوزيع تدفق هواء متوازن.",
      descEn: "Professional split AC wall installation with concealed piping and balanced airflow distribution.",
      image: "assets/maintenance/ac-split-hall-installation.jpeg",
      width: 1440,
      height: 1440
    },
    {
      id: "ac-duct-technician",
      category: "duct",
      categoryAr: "دكت وتكييف مركزي",
      categoryEn: "Duct & Central AC",
      titleAr: "تفصيل وتركيب مجاري هواء التكييف المركزي",
      titleEn: "Central AC Air Duct Fabrication & Fitting",
      descAr: "أعمال التقطيع واللحام والتثبيت العلوي لدكت التكييف في الموقع بواسطة فنيين متخصصين.",
      descEn: "On-site air duct fabrication, cutting, and overhead suspension by skilled technicians.",
      image: "assets/maintenance/ac-ductwork-fabrication-technician.jpeg",
      width: 1200,
      height: 1600
    },
    {
      id: "ac-outdoor-lg",
      category: "split",
      categoryAr: "تكييف سبليت",
      categoryEn: "Split AC",
      titleAr: "تركيب وحدات تكييف خارجية LG Dual Inverter",
      titleEn: "LG Dual Inverter Outdoor Compressor Installation",
      descAr: "تثبيت الوحدات الخارجية على حوامل جدارية قوية ومرتفعة مع عزل أنابيب النحاس.",
      descEn: "Outdoor units mounted securely on heavy-duty wall brackets with durable copper pipe insulation.",
      image: "assets/maintenance/ac-outdoor-lg-dual-inverter.jpeg",
      width: 720,
      height: 1600
    },
    {
      id: "ac-standing-unit",
      category: "standing",
      categoryAr: "دولابي وتجاري",
      categoryEn: "Standing & Commercial",
      titleAr: "تركيب مكيف دولابي General Supreme في كافيه",
      titleEn: "General Supreme Standing AC Installation in Cafe",
      descAr: "تشغيل واختبار مكيف دولابي تجاري بقدرة تبريد عالية وتوزيع عمودي للمساحات المفتوحة.",
      descEn: "Setup and performance testing of commercial floor-standing AC unit for spacious open layout.",
      image: "assets/maintenance/ac-standing-commercial-unit.jpeg",
      width: 1440,
      height: 1440
    },
    {
      id: "washing-machine-drum",
      category: "washing",
      categoryAr: "صيانة غسالات",
      categoryEn: "Washing Machines",
      titleAr: "فك وصيانة حوض ومحرك غسالة أوتوماتيك",
      titleEn: "Automatic Washer Drum & Motor Overhaul",
      descAr: "تشخيص الأعطال الميكانيكية وإصلاح الحوض والأسلاك الداخلية للغسالة الأوتوماتيكية.",
      descEn: "Mechanical troubleshooting, inner drum disassembly, and internal wiring repairs.",
      image: "assets/maintenance/washing-machine-drum-disassembly.jpeg",
      width: 720,
      height: 960
    },
    {
      id: "ac-duct-diffusers",
      category: "duct",
      categoryAr: "دكت وتكييف مركزي",
      categoryEn: "Duct & Central AC",
      titleAr: "شبكة مجاري هواء مع ناشرات هواء دائرية (Diffusers)",
      titleEn: "Spiral Ductwork Network with Circular Diffusers",
      descAr: "تمديد دكت هواء حلزوني مكشوف بنمط حديث مع فتحات توزيع هواء دائرية.",
      descEn: "Modern exposed spiral ductwork installation with ceiling-mounted round air diffusers.",
      image: "assets/maintenance/ac-ductwork-diffusers-spiral.jpeg",
      width: 1200,
      height: 1600
    },
    {
      id: "ac-outdoor-carrier",
      category: "split",
      categoryAr: "تكييف سبليت",
      categoryEn: "Split AC",
      titleAr: "تثبيت وحدات تكييف خارجية Carrier على الواجهة",
      titleEn: "Carrier Outdoor Units Installed on Facade",
      descAr: "تركيب متناسق لوحدات التكييف الاستوائية الخارجية مع عوازل الاهتزاز وقواطع الكهرباء.",
      descEn: "Precision mounting of tropical Carrier outdoor condenser units with vibration isolators.",
      image: "assets/maintenance/ac-outdoor-carrier-units.jpeg",
      width: 1600,
      height: 1200
    },
    {
      id: "washing-machine-lg",
      category: "washing",
      categoryAr: "صيانة غسالات",
      categoryEn: "Washing Machines",
      titleAr: "فحص وتشغيل غسالة LG Direct Drive أوتوماتيكية",
      titleEn: "LG Direct Drive Automatic Washer Inspection",
      descAr: "فحص دورات الغسيل، لوحة التحكم الإلكترونية ونظام السحب والتصريف.",
      descEn: "Full diagnostics on wash cycles, electronic control board, and inlet/drain pumps.",
      image: "assets/maintenance/washing-machine-lg-frontload.jpeg",
      width: 720,
      height: 960
    },
    {
      id: "ac-air-curtain",
      category: "standing",
      categoryAr: "دولابي وتجاري",
      categoryEn: "Standing & Commercial",
      titleAr: "تركيب ستارة هوائية صناعية على مدخل المنشأة",
      titleEn: "Commercial Air Curtain Installation over Entry Door",
      descAr: "تثبيت ستارة هوائية أعلى الباب لمنع دخول الغبار والحرارة والحفاظ على التكييف الداخلي.",
      descEn: "Mounting over-door industrial air curtain to prevent dust and keep cool interior climate.",
      image: "assets/maintenance/ac-air-curtain-installation.jpeg",
      width: 1200,
      height: 1600
    },
    {
      id: "fridge-compressor",
      category: "appliances",
      categoryAr: "تبريد وأجهزة",
      categoryEn: "Refrigeration & Appliances",
      titleAr: "استبدال كمبروسر ثلاجة ولحام وصلات النحاس",
      titleEn: "Refrigerator Compressor Replacement & Copper Brazing",
      descAr: "فك الضاغط التالف، تركيب صمام الخدمة وفلتر التبريد مع اختبار ضغط الدائرة.",
      descEn: "Removal of faulty compressor, brazing new service valve and filter drier, plus leak test.",
      image: "assets/maintenance/fridge-compressor-service.jpeg",
      width: 1200,
      height: 1600
    },
    {
      id: "fridge-gas-charging",
      category: "appliances",
      categoryAr: "تبريد وأجهزة",
      categoryEn: "Refrigeration & Appliances",
      titleAr: "شحن غاز الفريون واختبار ضغط منظومة التبريد",
      titleEn: "Refrigerant Gas Charging & Pressure Testing",
      descAr: "استخدام ساعات قياس الضغط لشحن غاز الفريون بدقة وفق المعايير الفنية المعتمدة.",
      descEn: "Utilizing manifold gauges for precision freon charging according to factory standards.",
      image: "assets/maintenance/fridge-freon-recharging-gauge.jpeg",
      width: 1200,
      height: 1600
    },
    {
      id: "ac-indoor-tools",
      category: "split",
      categoryAr: "تكييف سبليت",
      categoryEn: "Split AC",
      titleAr: "تجهيز وتركيب وحدة سبليت داخلية بالأدوات المتخصصة",
      titleEn: "Indoor Split Unit Preparation & Leveling",
      descAr: "فحص دقيق لميزان التثبيت ومسار تصريف المياه وتوصيلات الأنابيب قبل التشغيل.",
      descEn: "Precise leveling, drain slope inspection, and connection preparation before activation.",
      image: "assets/maintenance/ac-indoor-unit-unboxing-tools.jpeg",
      width: 1200,
      height: 1600
    }
  ]
};

window.SITE_CONFIG = SITE_CONFIG;
