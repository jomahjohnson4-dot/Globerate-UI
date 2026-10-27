import React, { createContext, useContext, useState } from 'react';

export const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧', region: 'United Kingdom' },
  { code: 'sw', name: 'Kiswahili', flag: '🇹🇿', region: 'Tanzania' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', region: 'France' },
  { code: 'es', name: 'Español', flag: '🇪🇸', region: 'España' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', region: 'Deutschland' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹', region: 'Italia' },
  { code: 'pt', name: 'Português', flag: '🇵🇹', region: 'Portugal' },
  { code: 'pt-br', name: 'Português (Brasil)', flag: '🇧🇷', region: 'Brasil' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱', region: 'Nederland' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', region: 'المملكة العربية السعودية' },
  { code: 'zh', name: '简体中文', flag: '🇨🇳', region: '中国' },
  { code: 'zh-tw', name: '繁體中文', flag: '🇹🇼', region: '台灣' },
  { code: 'ja', name: '日本語', flag: '🇯🇵', region: '日本' },
  { code: 'ko', name: '한국어', flag: '🇰🇷', region: '대한민국' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺', region: 'Россия' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳', region: 'भारत' },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩', region: 'বাংলাদেশ' },
  { code: 'ur', name: 'اردو', flag: '🇵🇰', region: 'پاکستان' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷', region: 'Türkiye' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱', region: 'Polska' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦', region: 'Україна' },
  { code: 'cs', name: 'Čeština', flag: '🇨🇿', region: 'Česká republika' },
  { code: 'hu', name: 'Magyar', flag: '🇭🇺', region: 'Magyarország' },
  { code: 'ro', name: 'Română', flag: '🇷🇴', region: 'România' },
  { code: 'el', name: 'Ελληνικά', flag: '🇬🇷', region: 'Ελλάδα' },
  { code: 'he', name: 'עברית', flag: '🇮🇱', region: 'ישראל' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭', region: 'ประเทศไทย' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳', region: 'Việt Nam' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩', region: 'Indonesia' },
  { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾', region: 'Malaysia' },
  { code: 'tl', name: 'Tagalog', flag: '🇵🇭', region: 'Pilipinas' },
  { code: 'fa', name: 'فارسی', flag: '🇮🇷', region: 'ایران' },
  { code: 'af', name: 'Afrikaans', flag: '🇿🇦', region: 'South Africa' },
  { code: 'am', name: 'አማርኛ', flag: '🇪🇹', region: 'ኢትዮጵያ' },
  { code: 'sw-ke', name: 'Kiswahili (Kenya)', flag: '🇰🇪', region: 'Kenya' },
  { code: 'sw-ug', name: 'Kiswahili (Uganda)', flag: '🇺🇬', region: 'Uganda' },
];

const translations = {
  en: {
    nav: {
      personal: 'Personal',
      business: 'Business',
      platform: 'Platform',
      help: 'Help',
      login: 'Login',
      getStarted: 'Get Started',
    },
    tabs: {
      liveExchangeRates: 'Live exchange rates',
      currencyConverter: 'Currency converter',
      currencyCharts: 'Currency charts',
      getRateAlerts: 'Get rate alerts',
      sendMoney: 'Send money',
    },
    megaMenu: {
      needAssistance: 'Need assistance?',
      visitHelpCentre: 'Visit Help Centre',
      learnMore: 'Learn more',
    },
    home: {
      title: 'Global Currency Exchange Made Simple',
      subtitle: 'Send money abroad, compare rates, and manage currency with confidence',
      sendMoneyNow: 'Send money now',
      convertCurrency: 'Convert currency',
      sendMoneyCard: 'Send Money',
      sendMoneyDesc: 'Fast, secure international transfers with great rates',
      compareRatesCard: 'Compare Rates',
      compareRatesDesc: 'Live rate comparison across providers',
      currencyChartsCard: 'Currency Charts',
      currencyChartsDesc: 'Track historical and live FX trends',
      secureCard: 'Secure & Trusted',
      secureCardDesc: 'Bank-level security for every transfer',
      popularCurrencies: 'Popular Currencies',
      popularCurrenciesDesc: 'Trade and send money in major currencies worldwide',
    },
    sendMoney: {
      title: 'Secure International Money Transfers',
      subtitle: 'Send money to 190+ countries with bank-beating rates and low fees',
      bankLevelSecurity: 'Bank-level security',
      fastDelivery: 'Fast delivery',
      trusted: 'Trusted by millions',
      youSend: 'You send',
      recipientGets: 'Recipient gets',
      exchangeRate: 'Exchange rate',
      fee: 'Fee',
      deliveryTime: 'Delivery time',
      withinMinutes: 'Within minutes',
      continue: 'Continue',
    },
    converter: {
      title: 'Live Currency Converter',
      subtitle: 'Convert between currencies at live mid-market exchange rates',
      amount: 'Amount',
      from: 'From',
      to: 'To',
      convertCurrency: 'Convert Currency',
      calculating: 'Calculating...',
      midMarketRate: 'Mid-market rate',
      updated: 'Updated',
      popularConversions: 'Popular Conversions',
    },
    liveRates: {
      title: 'Live exchange rates',
      subtitle: 'Compare 100+ currencies in real time & find the right moment to transfer funds',
      baseCurrency: 'Base currency',
      amount: 'Amount',
      currency: 'Currency',
      rate: 'Rate',
      change24h: '24h Change',
      trend: 'Trend',
      action: 'Action',
      send: 'Send',
      addCurrency: 'Add currency',
      lastUpdated: 'Last updated',
      needToSend: 'Need to send money?',
      getGreatRates: 'Get great rates and low fees for your international transfers',
      startSending: 'Start sending now',
    },
  },
  sw: {
    nav: {
      personal: 'Binafsi',
      business: 'Biashara',
      platform: 'Jukwaa',
      help: 'Msaada',
      login: 'Ingia',
      getStarted: 'Anza Sasa',
    },
    tabs: {
      liveExchangeRates: 'Viwango vya kubadilisha fedha moja kwa moja',
      currencyConverter: 'Kigeuzi cha sarafu',
      currencyCharts: 'Chati za sarafu',
      getRateAlerts: 'Pata arifa za viwango',
      sendMoney: 'Tuma pesa',
    },
    megaMenu: {
      needAssistance: 'Unahitaji usaidizi?',
      visitHelpCentre: 'Tembelea Kituo cha Msaada',
      learnMore: 'Jifunze zaidi',
    },
    home: {
      title: 'Ubadilishanaji wa Sarafu Kimataifa Umerahisishwa',
      subtitle: 'Tuma pesa nje ya nchi, linganisha viwango, na simamia sarafu kwa ujasiri',
      sendMoneyNow: 'Tuma pesa sasa',
      convertCurrency: 'Badilisha sarafu',
      sendMoneyCard: 'Tuma Pesa',
      sendMoneyDesc: 'Uhamisho wa kimataifa haraka na salama kwa viwango bora',
      compareRatesCard: 'Linganisha Viwango',
      compareRatesDesc: 'Ulinganisho wa viwango vya moja kwa moja kutoka kwa watoa huduma',
      currencyChartsCard: 'Chati za Sarafu',
      currencyChartsDesc: 'Fuatilia mienendo ya FX ya kihistoria na ya sasa',
      secureCard: 'Salama na Inaaminika',
      secureCardDesc: 'Usalama wa kiwango cha benki kwa kila uhamisho',
      popularCurrencies: 'Sarafu Maarufu',
      popularCurrenciesDesc: 'Fanya biashara na tuma pesa katika sarafu kuu za dunia',
    },
    sendMoney: {
      title: 'Uhamisho Salama wa Pesa Kimataifa',
      subtitle: 'Tuma pesa nchi zaidi ya 190 na viwango bora kuliko benki na ada nafuu',
      bankLevelSecurity: 'Usalama wa kiwango cha benki',
      fastDelivery: 'Uwasilishaji wa haraka',
      trusted: 'Inaaminika na mamilioni',
      youSend: 'Unatuma',
      recipientGets: 'Mpokeaji anapata',
      exchangeRate: 'Kiwango cha ubadilishaji',
      fee: 'Ada',
      deliveryTime: 'Muda wa kufika',
      withinMinutes: 'Ndani ya dakika chache',
      continue: 'Endelea',
    },
    converter: {
      title: 'Kigeuzi cha Sarafu cha Moja kwa Moja',
      subtitle: 'Badilisha kati ya sarafu kwa viwango vya soko la kati vya moja kwa moja',
      amount: 'Kiasi',
      from: 'Kutoka',
      to: 'Kwenda',
      convertCurrency: 'Badilisha Sarafu',
      calculating: 'Inahesabu...',
      midMarketRate: 'Kiwango cha soko la kati',
      updated: 'Imesasishwa',
      popularConversions: 'Ubadilishanaji Maarufu',
    },
    liveRates: {
      title: 'Viwango vya kubadilisha fedha moja kwa moja',
      subtitle: 'Linganisha sarafu zaidi ya 100 kwa wakati halisi na upate wakati mwafaka wa kutuma pesa',
      baseCurrency: 'Sarafu ya msingi',
      amount: 'Kiasi',
      currency: 'Sarafu',
      rate: 'Kiwango',
      change24h: 'Mabadiliko ya saa 24',
      trend: 'Mwelekeo',
      action: 'Hatua',
      send: 'Tuma',
      addCurrency: 'Ongeza sarafu',
      lastUpdated: 'Ilisasishwa mwisho',
      needToSend: 'Unahitaji kutuma pesa?',
      getGreatRates: 'Pata viwango bora na ada nafuu kwa uhamisho wako wa kimataifa',
      startSending: 'Anza kutuma sasa',
    },
  },
  es: {
    nav: {
      personal: 'Personal',
      business: 'Negocios',
      platform: 'Plataforma',
      help: 'Ayuda',
      login: 'Iniciar Sesión',
      getStarted: 'Empezar',
    },
    tabs: {
      liveExchangeRates: 'Tipos de cambio en vivo',
      currencyConverter: 'Conversor de divisas',
      currencyCharts: 'Gráficos de divisas',
      getRateAlerts: 'Alertas de tipo de cambio',
      sendMoney: 'Enviar dinero',
    },
    home: {
      title: 'Cambio de divisas global simplificado',
      subtitle: 'Envía dinero al extranjero, compara tasas y gestiona divisas con confianza',
      sendMoneyNow: 'Enviar dinero ahora',
      convertCurrency: 'Convertir moneda',
    },
    liveRates: {
      title: 'Tipos de cambio en vivo',
      subtitle: 'Compara más de 100 monedas en tiempo real y encuentra el momento adecuado para transferir',
      send: 'Enviar',
      addCurrency: 'Añadir moneda',
    },
  },
  fr: {
    nav: {
      personal: 'Personnel',
      business: 'Entreprise',
      platform: 'Plateforme',
      help: 'Aide',
      login: 'Connexion',
      getStarted: 'Commencer',
    },
    tabs: {
      liveExchangeRates: 'Taux de change en direct',
      currencyConverter: 'Convertisseur de devises',
      currencyCharts: 'Graphiques de devises',
      getRateAlerts: 'Alertes de taux',
      sendMoney: 'Envoyer de l\'argent',
    },
    home: {
      title: 'Échange de devises mondial simplifié',
      subtitle: 'Envoyez de l\'argent à l\'étranger, comparez les taux et gérez les devises en toute confiance',
      sendMoneyNow: 'Envoyer de l\'argent maintenant',
      convertCurrency: 'Convertir la devise',
    },
    liveRates: {
      title: 'Taux de change en direct',
      subtitle: 'Comparez plus de 100 devises en temps réel et trouvez le bon moment pour transférer',
      send: 'Envoyer',
      addCurrency: 'Ajouter une devise',
    },
  },
  de: {
    nav: {
      personal: 'Privat',
      business: 'Geschäft',
      platform: 'Plattform',
      help: 'Hilfe',
      login: 'Anmelden',
      getStarted: 'Loslegen',
    },
    tabs: {
      liveExchangeRates: 'Live-Wechselkurse',
      currencyConverter: 'Währungsrechner',
      currencyCharts: 'Währungsdiagramme',
      getRateAlerts: 'Kursalarme',
      sendMoney: 'Geld senden',
    },
    home: {
      title: 'Globaler Währungsaustausch vereinfacht',
      subtitle: 'Senden Sie Geld ins Ausland, vergleichen Sie Kurse und verwalten Sie Währungen sicher',
      sendMoneyNow: 'Jetzt Geld senden',
      convertCurrency: 'Währung umrechnen',
    },
    liveRates: {
      title: 'Live-Wechselkurse',
      subtitle: 'Vergleichen Sie über 100 Währungen in Echtzeit und finden Sie den richtigen Zeitpunkt',
      send: 'Senden',
      addCurrency: 'Währung hinzufügen',
    },
  },
  ar: {
    nav: {
      personal: 'شخصي',
      business: 'أعمال',
      platform: 'منصة',
      help: 'مساعدة',
      login: 'تسجيل الدخول',
      getStarted: 'ابدأ',
    },
    tabs: {
      liveExchangeRates: 'أسعار الصرف المباشرة',
      currencyConverter: 'محول العملات',
      currencyCharts: 'رسوم العملات البيانية',
      getRateAlerts: 'تنبيهات الأسعار',
      sendMoney: 'إرسال الأموال',
    },
    home: {
      title: 'تبادل العملات العالمي أصبح بسيطًا',
      subtitle: 'أرسل الأموال إلى الخارج، وقارن الأسعار، وأدر العملات بثقة',
      sendMoneyNow: 'أرسل الأموال الآن',
      convertCurrency: 'تحويل العملة',
    },
    liveRates: {
      title: 'أسعار الصرف المباشرة',
      subtitle: 'قارن أكثر من 100 عملة في الوقت الفعلي وابحث عن الوقت المناسب للتحويل',
      send: 'إرسال',
      addCurrency: 'إضافة عملة',
    },
  },
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (let k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        value = undefined;
        break;
      }
    }
    if (value) return value;
    
    // Fallback to English
    let fallback = translations['en'];
    for (let k of keys) {
      if (fallback && typeof fallback === 'object') {
        fallback = fallback[k];
      } else {
        fallback = undefined;
        break;
      }
    }
    return fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
