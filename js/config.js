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

    // صفحة فيسبوك الرسمية
    facebookUrl: "https://www.facebook.com/share/1533Pkhifuh/",
    
    // رسائل مخصصة حسب اللغة والخدمة
    serviceMessages: {
      ar: {
        default: "مرحبًا، أريد الاستفسار عن خدمات الصيانة لدى MG HOME.",
        split: "مرحبًا MG HOME، أود الاستفسار عن خدمة تركيب / صيانة مكيفات سبليت.",
        duct: "مرحبًا MG HOME، أود الاستفسار عن تمديد وتركيب دكت التكييف المركزي والمخفي.",
        standing: "مرحبًا MG HOME، أود الاستفسار عن خدمات المكيفات الدولابية والستائر الهوائية.",
        copper: "مرحبًا MG HOME، أود الاستفسار عن خدمات تأسيس وتمديد مواسير النحاس (أمريكي / كوري / صيني).",
        copperAmerican: "مرحبًا MG HOME، أود الاستفسار عن تأسيس وتمديد المواسير النحاس الأمريكي.",
        copperKorean: "مرحبًا MG HOME، أود الاستفسار عن تأسيس وتمديد المواسير النحاس الكوري.",
        copperChinese: "مرحبًا MG HOME، أود الاستفسار عن تأسيس وتمديد المواسير النحاس الصيني.",
        washing: "مرحبًا MG HOME، أود الاستفسار عن صيانة الغسالات الأوتوماتيكية وغسالات الصحون.",
        fridge: "مرحبًا MG HOME، أود الاستفسار عن صيانة الثلاجات وأجهزة التبريد.",
        general: "مرحبًا MG HOME، أود الاستفسار عن خدمات الصيانة والفحص الميداني."
      },
      en: {
        default: "Hello MG HOME, I would like to inquire about your maintenance services.",
        split: "Hello MG HOME, I would like to inquire about Split AC installation and repair services.",
        duct: "Hello MG HOME, I would like to inquire about Central & Concealed Duct AC installation.",
        standing: "Hello MG HOME, I would like to inquire about Standing AC units and Air Curtains.",
        copper: "Hello MG HOME, I would like to inquire about copper piping installation services (American / Korean / Chinese).",
        copperAmerican: "Hello MG HOME, I would like to inquire about American copper piping installation.",
        copperKorean: "Hello MG HOME, I would like to inquire about Korean copper piping installation.",
        copperChinese: "Hello MG HOME, I would like to inquire about Chinese copper piping installation.",
        washing: "Hello MG HOME, I would like to inquire about Automatic Washing Machine and Dishwasher repairs.",
        fridge: "Hello MG HOME, I would like to inquire about Refrigerator and Cooling repair services.",
        general: "Hello MG HOME, I would like to inquire about field inspection and general maintenance."
      }
    }
  },

  // دالة توليد رابط الاتصال الهاتفي المباشر
  getTelUrl: function() {
    const rawNumber = this.contact.localNumber.replace(/\D/g, "");
    if (this.contact.isCountryCodeConfirmed && this.contact.countryCode) {
      const cleanLocal = rawNumber.startsWith("0") ? rawNumber.substring(1) : rawNumber;
      return `tel:+${this.contact.countryCode}${cleanLocal}`;
    }
    return `tel:${rawNumber}`;
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
      id: "copper-american-spec",
      category: "copper",
      categoryAr: "مواسير وتأسيس",
      categoryEn: "Copper & Piping",
      titleAr: "تمديد مواسير النحاس الأمريكي الأصلية",
      titleEn: "Certified American Copper Pipe Installation",
      descAr: "توريد وتمديد مواسير النحاس الأمريكي المعتمدة مع العزل الحراري التام لمنع التكثف وهدر التبريد.",
      descEn: "Premium certified American copper piping with full thermal insulation to prevent condensation and loss.",
      image: "assets/copper/american-copper-pipe.jpeg",
      width: 1200,
      height: 900
    },
    {
      id: "copper-wall-roughin-1",
      category: "copper",
      categoryAr: "مواسير وتأسيس",
      categoryEn: "Copper & Piping",
      titleAr: "تأسيس وتمديد مسارات التكييف داخل الجدار",
      titleEn: "In-Wall AC Copper Piping & Drain Chasing",
      descAr: "تكسير هندسي وتمديد خطوط النحاس ومجاري التصريف داخل الجدار قبل اللياسة والتشطيب.",
      descEn: "Precision masonry chasing, copper refrigerant line, and condensate drain installation before plastering.",
      image: "assets/copper/copper-piping-wall-roughin-1.jpeg",
      width: 1200,
      height: 1600
    },
    {
      id: "dishwasher-lg-service",
      category: "washing",
      categoryAr: "غسالات وصحون",
      categoryEn: "Washers & Dishwashers",
      titleAr: "فحص وصيانة غسالة صحون LG Direct Drive",
      titleEn: "LG Direct Drive Dishwasher Diagnostics",
      descAr: "فحص دورات الغسيل الذكية، رشاشات توزيع المياه، ومعالجة أعطال لوحة التحكم والتصريف.",
      descEn: "Smart diagnostic inspection, dual spray arm testing, and drain cycle servicing.",
      image: "assets/maintenance/dishwasher-lg-direct-drive.jpeg",
      width: 1200,
      height: 1200
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
      id: "copper-korean-coils",
      category: "copper",
      categoryAr: "مواسير وتأسيس",
      categoryEn: "Copper & Piping",
      titleAr: "لفات مواسير النحاس الكوري عالي التحمل",
      titleEn: "High-Durability Korean Copper Pipe Coils",
      descAr: "لفات نحاس كوري ممتازة لشبكات التبريد تتميز بالمرونة العالية وسهولة التشكيل ومقاومة الضغط.",
      descEn: "Top-grade Korean copper coils offering superior bend flexibility and high pressure endurance.",
      image: "assets/copper/korean-copper-coils.jpeg",
      width: 1200,
      height: 900
    },
    {
      id: "dishwasher-interior",
      category: "washing",
      categoryAr: "غسالات وصحون",
      categoryEn: "Washers & Dishwashers",
      titleAr: "صيانة الحوض الداخلي ونظام تصريف غسالة الصحون",
      titleEn: "Dishwasher Interior Basin & Pump Maintenance",
      descAr: "معالجة انسداد مضخة التصريف، تنظيف الفلاتر، وتطهير دورة الغسيل بالكامل.",
      descEn: "Clearing drainage pump blockages, cleaning fine filters, and full wash cycle servicing.",
      image: "assets/maintenance/dishwasher-interior-service.jpeg",
      width: 1200,
      height: 1200
    },
    {
      id: "copper-wall-roughin-2",
      category: "copper",
      categoryAr: "مواسير وتأسيس",
      categoryEn: "Copper & Piping",
      titleAr: "تمديد مسارات التكييف والكهرباء بالجدار",
      titleEn: "Wall Conduit & AC Line Layout Setup",
      descAr: "تجهيز علب الكهرباء وتمديد مواسير التبريد المعزولة والتصريف بمنسوب هندسي دقيق.",
      descEn: "Careful alignment of insulated refrigeration tubing, drain line slope, and electrical rough-in.",
      image: "assets/copper/copper-piping-wall-roughin-2.jpeg",
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
      id: "copper-site-install",
      category: "copper",
      categoryAr: "مواسير وتأسيس",
      categoryEn: "Copper & Piping",
      titleAr: "تجهيز شبكات التكييف واختبار النيتروجين في الموقع",
      titleEn: "Site AC Piping Network & Nitrogen Pressure Test",
      descAr: "تمديد وتجهيز مسارات مواسير النحاس وعوازلها مع إجراء اختبار ضغط النيتروجين قبل إغلاق الأسقف.",
      descEn: "Comprehensive AC line installation with nitrogen pressure testing to verify zero leakage.",
      image: "assets/copper/copper-piping-site-installation.jpeg",
      width: 1200,
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
      id: "dishwasher-kitchen-line",
      category: "washing",
      categoryAr: "غسالات وصحون",
      categoryEn: "Washers & Dishwashers",
      titleAr: "فحص وتشغيل غسالة صحون Kitchen Line المدمجة",
      titleEn: "Kitchen Line Built-in Dishwasher Inspection",
      descAr: "معالجة أذرع الرش واللوحة الرقمية، فحص مانع التسريب والتوصيل الميكانيكي تحت المجلى.",
      descEn: "Spray arm inspection, digital panel checkout, and under-counter leak prevention testing.",
      image: "assets/maintenance/dishwasher-kitchen-line-opened.jpeg",
      width: 1200,
      height: 1200
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
      id: "copper-chinese-sizing",
      category: "copper",
      categoryAr: "مواسير وتأسيس",
      categoryEn: "Copper & Piping",
      titleAr: "قص وتشكيل مقاسات مواسير النحاس بالموقع",
      titleEn: "Precision Copper Pipe Sizing & Flaring",
      descAr: "قياس وتجهيز وصلات مواسير النحاس الصيني للأجهزة المختلفة بأدوات ثني وتوسيع دقيقة.",
      descEn: "On-site precision measuring, bending, and flaring of copper tubing for AC connections.",
      image: "assets/copper/chinese-copper-sizing.jpeg",
      width: 1200,
      height: 800
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
