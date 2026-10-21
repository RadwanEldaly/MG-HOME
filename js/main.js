/**
 * MG HOME - ملف الجافاسكريبت المطور (Theme, Bilingual, Gallery, Lightbox)
 * =========================================================================
 * 
 * يتحكم في:
 * 1. تبديل الوضع الداكن والفاتح (Dark/Light Mode) وحفظه في localStorage.
 * 2. تبديل اللغة (عربي / إنجليزي) وتحديث اتجاه الصفحة (RTL/LTR) وترجمة النصوص.
 * 3. تهيئة روابط التواصل (واتساب وانستغرام) بحسب اللغة النشطة.
 * 4. بناء وتصفية معرض الأعمال السابق ثنائي اللغة.
 * 5. نافذة تكبير الصور (Lightbox Modal).
 * 6. قائمة الموبايل ونموذج الاستفسار السريع.
 */

// حالة التطبيق العامة
const AppState = {
  theme: 'light',
  lang: 'ar',
  activeCategory: 'all',
  currentFilteredList: [],
  currentLightboxIndex: 0
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initContactLinks();
  initGallery();
  initLightbox();
  initNavigation();
  initQuickInquiryForm();
});

/* ==========================================================================
   1. إدارة المظهر الداكن والفاتح (Dark & Light Theme)
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('mg_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  setTheme(initialTheme);

  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const newTheme = AppState.theme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }

  // الاستجابة لتغير تفضيل النظام عند عدم وجود تفضيل محفوظ
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('mg_theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function setTheme(theme) {
  AppState.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('mg_theme', theme);

  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    const isDark = theme === 'dark';
    themeToggleBtn.setAttribute('aria-label', isDark ? 'التبديل إلى الوضع الفاتح / Switch to Light Mode' : 'التبديل إلى الوضع الداكن / Switch to Dark Mode');
    themeToggleBtn.innerHTML = isDark ? `
      <!-- أيقونة الشمس للوضع الفاتح -->
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    ` : `
      <!-- أيقونة القمر للوضع الداكن -->
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
  }
}

/* ==========================================================================
   2. إدارة اللغات (Arabic / English Bilingual Support)
   ========================================================================== */
function initLanguage() {
  const savedLang = localStorage.getItem('mg_lang') || 'ar';
  setLanguage(savedLang);

  const langToggleBtn = document.getElementById('lang-toggle');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const targetLang = AppState.lang === 'ar' ? 'en' : 'ar';
      setLanguage(targetLang);
    });
  }
}

function setLanguage(lang) {
  if (!window.TRANSLATIONS || !window.TRANSLATIONS[lang]) return;

  AppState.lang = lang;
  const isAr = lang === 'ar';
  const dict = window.TRANSLATIONS[lang];

  // تحديث سمات الوثيقة الأساسية
  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  localStorage.setItem('mg_lang', lang);

  // تحديث نصوص العناصر الحاملة لسمة data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // تحديث الخانات الحاملة للنصوص المؤقتة data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // تحديث تسميات إمكانية الوصول data-i18n-aria
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key]) {
      el.setAttribute('aria-label', dict[key]);
    }
  });

  // تحديث نص زر تبديل اللغة
  const langLabelEl = document.getElementById('lang-label');
  if (langLabelEl) {
    langLabelEl.textContent = isAr ? 'English' : 'العربية';
  }

  // تحديث خيارات القائمة المنسدلة للنموذج
  updateFormSelectOptions(lang);

  // تحديث روابط واتساب باللغة الجديدة
  initContactLinks();

  // إعادة رسم المعرض باللغة الحالية
  filterGallery(AppState.activeCategory);
}

function updateFormSelectOptions(lang) {
  const select = document.getElementById('inquiry-service');
  if (!select || !window.TRANSLATIONS) return;

  const dict = window.TRANSLATIONS[lang];
  const optionsData = [
    { value: 'split', text: dict.formOptSplit },
    { value: 'duct', text: dict.formOptDuct },
    { value: 'standing', text: dict.formOptStanding },
    { value: 'washing', text: dict.formOptWashing },
    { value: 'fridge', text: dict.formOptFridge },
    { value: 'other', text: dict.formOptOther }
  ];

  const currentValue = select.value;
  select.innerHTML = '';
  optionsData.forEach(opt => {
    const el = document.createElement('option');
    el.value = opt.value;
    el.textContent = opt.text;
    if (opt.value === currentValue) el.selected = true;
    select.appendChild(el);
  });
}

/* ==========================================================================
   3. روابط الاتصال الموحدة (WhatsApp & Instagram)
   ========================================================================== */
function initContactLinks() {
  if (!window.SITE_CONFIG) return;

  const config = window.SITE_CONFIG;
  const lang = AppState.lang;
  const instagramUrl = config.contact.instagramUrl;
  const localNumber = config.contact.localNumber;

  document.querySelectorAll('[data-wa-link]').forEach(el => {
    const serviceKey = el.getAttribute('data-wa-service') || 'default';
    const langMsgs = config.contact.serviceMessages[lang] || config.contact.serviceMessages.ar;
    const msg = langMsgs[serviceKey] || langMsgs.default;

    el.href = config.getWhatsAppUrl(msg, lang);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });

  document.querySelectorAll('[data-ig-link]').forEach(el => {
    el.href = instagramUrl;
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });

  document.querySelectorAll('[data-phone-display]').forEach(el => {
    el.textContent = localNumber;
  });
}

/* ==========================================================================
   4. معرض الأعمال السابق (Bilingual Gallery & Filtering)
   ========================================================================== */
function initGallery() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  if (!window.SITE_CONFIG || !window.SITE_CONFIG.gallery) return;

  filterGallery('all');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-filter');
      AppState.activeCategory = category;
      filterGallery(category);
    });
  });
}

function filterGallery(category) {
  if (!window.SITE_CONFIG || !window.SITE_CONFIG.gallery) return;

  if (category === 'all') {
    AppState.currentFilteredList = [...window.SITE_CONFIG.gallery];
  } else {
    AppState.currentFilteredList = window.SITE_CONFIG.gallery.filter(item => item.category === category);
  }

  renderGalleryCards(AppState.currentFilteredList);
}

function renderGalleryCards(items) {
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;

  galleryGrid.innerHTML = '';
  const lang = AppState.lang;
  const isAr = lang === 'ar';
  const dict = window.TRANSLATIONS[lang] || window.TRANSLATIONS.ar;

  if (items.length === 0) {
    galleryGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <p>${dict.galleryEmpty}</p>
      </div>
    `;
    return;
  }

  items.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'gallery-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    const title = isAr ? item.titleAr : (item.titleEn || item.titleAr);
    const desc = isAr ? item.descAr : (item.descEn || item.descAr);
    const catName = isAr ? item.categoryAr : (item.categoryEn || item.categoryAr);

    card.setAttribute('aria-label', `${title}`);

    card.innerHTML = `
      <div class="gallery-image-wrapper">
        <img 
          src="${item.image}" 
          alt="${title}" 
          class="gallery-thumb" 
          loading="lazy" 
          width="${item.width || 800}" 
          height="${item.height || 600}"
        />
        <span class="gallery-category-badge">${catName}</span>
        <div class="gallery-overlay-hint">
          <div class="gallery-zoom-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
        </div>
      </div>
      <div class="gallery-content">
        <h3 class="gallery-card-title">${title}</h3>
        <p class="gallery-card-desc">${desc}</p>
      </div>
    `;

    const openAction = () => openLightbox(index);
    card.addEventListener('click', openAction);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openAction();
      }
    });

    galleryGrid.appendChild(card);
  });
}

/* ==========================================================================
   5. نافذة تكبير الصور (Lightbox Modal)
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (!modal) return;

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(1);
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      // إذا كان الاتجاه RTL، فالسهم الأيمن يعني السابق
      const dir = document.documentElement.dir === 'rtl' ? -1 : 1;
      navigateLightbox(dir);
    } else if (e.key === 'ArrowLeft') {
      const dir = document.documentElement.dir === 'rtl' ? 1 : -1;
      navigateLightbox(dir);
    }
  });
}

function openLightbox(index) {
  const modal = document.getElementById('lightbox-modal');
  if (!modal || !AppState.currentFilteredList[index]) return;

  AppState.currentLightboxIndex = index;
  updateLightboxContent();

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  const closeBtn = document.getElementById('lightbox-close');
  if (closeBtn) closeBtn.focus();
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;

  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(direction) {
  const list = AppState.currentFilteredList;
  if (list.length === 0) return;
  AppState.currentLightboxIndex = (AppState.currentLightboxIndex + direction + list.length) % list.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = AppState.currentFilteredList[AppState.currentLightboxIndex];
  if (!item) return;

  const isAr = AppState.lang === 'ar';
  const title = isAr ? item.titleAr : (item.titleEn || item.titleAr);
  const desc = isAr ? item.descAr : (item.descEn || item.descAr);

  const imgEl = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-desc');

  if (imgEl) {
    imgEl.src = item.image;
    imgEl.alt = title;
  }
  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = desc;
}

/* ==========================================================================
   6. قائمة الهاتف والتنقل (Navigation)
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const menuBackdrop = document.getElementById('menu-backdrop');
  const drawerClose = document.getElementById('drawer-close');
  const allNavLinks = document.querySelectorAll('.drawer-link, .nav-link');
  const drawerWaBtn = document.querySelector('.drawer-wa-btn');

  function openDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('open');
    if (menuBackdrop) menuBackdrop.classList.add('open');
    if (menuToggle) {
      menuToggle.classList.add('open');
      menuToggle.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (menuBackdrop) menuBackdrop.classList.remove('open');
    if (menuToggle) {
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileDrawer ? mobileDrawer.classList.contains('open') : false;
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', closeDrawer);
  }

  if (menuBackdrop) {
    menuBackdrop.addEventListener('click', closeDrawer);
  }

  allNavLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  if (drawerWaBtn) {
    drawerWaBtn.addEventListener('click', closeDrawer);
  }

  // إغلاق القائمة بمفتاح Escape لتوافق معايير الوصول
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 15) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   7. نموذج الاستفسار السريع المباشر لواتساب
   ========================================================================== */
function initQuickInquiryForm() {
  const form = document.getElementById('quick-inquiry-form');
  if (!form || !window.SITE_CONFIG) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const lang = AppState.lang;
    const isAr = lang === 'ar';
    const dict = window.TRANSLATIONS[lang] || window.TRANSLATIONS.ar;

    const serviceSelect = document.getElementById('inquiry-service');
    const nameInput = document.getElementById('inquiry-name');
    const detailsInput = document.getElementById('inquiry-details');

    const serviceName = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex].text : "Maintenance Services";
    const clientName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : (isAr ? "عميل كريم" : "Valued Customer");
    const details = detailsInput && detailsInput.value.trim() ? detailsInput.value.trim() : (isAr ? "لا توجد تفاصيل إضافية" : "No additional details");

    let template = dict.waFormTemplate;
    const fullMessage = template
      .replace('{name}', clientName)
      .replace('{service}', serviceName)
      .replace('{details}', details);

    const waUrl = window.SITE_CONFIG.getWhatsAppUrl(fullMessage, lang);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  });
}
