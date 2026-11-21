/* site.config.js — مُولَّد من لوحة الإدارة */
window.SITE = {
  "brand": {
    "name": "نظارات شمسية",
    "tagline": "امينو",
    "logoText": "امين"
  },
  "lang": "ar",
  "dir": "rtl",
  "currency": "د.ج",
  "currencyCode": "DZD",
  "theme": {
    "mode": "dark",
    "accent": "#c9a227",
    "accent2": "#f2d98a"
  },
  "contact": {
    "whatsapp": "213000000000",
    "phone": "",
    "email": "",
    "address": ""
  },
  "social": {
    "tiktok": "",
    "instagram": "",
    "facebook": "",
    "youtube": ""
  },
  "demoNotice": "",
  "hero": {
    "title": "عنوان المتجر الرئيسي",
    "subtitle": "",
    "text": "جملة قصيرة تشرح ماذا تبيع ولمن، وما الذي يميّزك.",
    "cta1": "تصفّح المنتجات",
    "cta2": "تواصل معنا",
    "points": [
      "الدفع عند الاستلام",
      "تواصل سريع عبر واتساب"
    ]
  },
  "seo": {
    "description": "وصف المتجر الذي يظهر في نتائج البحث."
  },
  "footer": {
    "about": "نبذة قصيرة عن المتجر.",
    "copyright": "جميع الحقوق محفوظة"
  },
  "cart": {
    "enabled": true
  },
  "about": {
    "title": "من نحن",
    "text": "نبذة قصيرة عن المتجر وقصته وما يميّز منتجاته."
  },
  "testimonials": [
    {
      "name": "اسم الزبون",
      "text": "اكتب هنا رأي زبون حقيقي فقط."
    }
  ],
  "faq": [
    {
      "q": "كيف أطلب؟",
      "a": "اختر المنتج ثم أضفه إلى السلة أو أرسل الطلب عبر واتساب."
    },
    {
      "q": "ما هي طرق الدفع والتوصيل؟",
      "a": "الدفع عند الاستلام حسب شروط التوصيل المتاحة."
    }
  ],
  "categories": {
    "glasses": "النظارات",
    "watches": "الساعات"
  },
  "products": [
    {
      "id": "product-1",
      "name": "منتج بألوان",
      "category": "glasses",
      "image": "images/cartier-black-dark.jpg",
      "gallery": [
        "images/cartier-black-dark.jpg",
        "images/cartier-black-dark.jpg"
      ],
      "colors": [
        {
          "name": "أسود",
          "image": "images/cartier-black-dark.jpg",
          "swatch": "#111111"
        },
        {
          "name": "أبيض",
          "image": "images/cartier-black-light.jpg",
          "swatch": "#f1f1f1"
        }
      ],
      "price": "",
      "badge": "جديد",
      "short": "وصف مختصر يظهر على البطاقة.",
      "description": "الوصف الكامل للمنتج: الخامة، المقاس، الاستخدام.",
      "features": [
        "ميزة أولى",
        "ميزة ثانية",
        "ميزة ثالثة"
      ]
    },
    {
      "id": "product-2",
      "name": "منتج 2",
      "category": "glasses",
      "image": "images/cartier-havana-brown.jpg",
      "price": "2500",
      "short": "وصف مختصر.",
      "description": "وصف كامل للمنتج."
    },
    {
      "id": "product-3",
      "name": "منتج 3",
      "category": "watches",
      "image": "images/cartier-havana-dark.jpg",
      "price": "",
      "short": "السعر عند الطلب.",
      "description": "وصف كامل للمنتج."
    }
  ],
  "order": {
    "requireAddress": true,
    "requireCity": true,
    "cartHeader": "مرحبًا، أريد طلب المنتجات التالية:",
    "message": "مرحبًا، أريد طلب:\nالمنتج: {product}\nاللون: {color}\nالكمية: {qty}\nالسعر: {price}\nالاسم: {name}\nالهاتف: {phone}\nالولاية / المدينة: {city}\nالعنوان: {address}\nملاحظات: {notes}"
  }
};
