import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Send,
  ArrowRight,
  BarChart3,
  Smartphone,
  RefreshCw,
  LineChart,
  Clock,
  Bell,
  HelpCircle,
  DollarSign,
  Shield,
  Globe,
  CreditCard,
  Layers,
  ShieldCheck,
  TrendingUp,
  Sliders,
  Users,
  Briefcase,
  Code,
  Database,
  Link as LinkIcon,
  FileText,
  Video,
  BookOpen,
  Terminal,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';
import { useLanguage, languages } from '../contexts/LanguageContext';

const personalMenu = {
  title: 'Personal',
  sections: [
    {
      heading: 'Money transfers',
      items: [
        { name: 'Send money', icon: Send, path: '/send-money' },
        { name: 'Large transfers', icon: ArrowRight, path: '/large-transfers' },
        { name: 'Compare rates', icon: BarChart3, path: '/compare-rates' },
        { name: 'Money transfer app', icon: Smartphone, path: '/money-transfer-app' },
      ],
    },
    {
      heading: 'Currency tools',
      items: [
        { name: 'Currency converter', icon: RefreshCw, path: '/currency-converter' },
        { name: 'Currency charts', icon: LineChart, path: '/currency-charts' },
        { name: 'Historical currency rates', icon: Clock, path: '/historical-rates' },
        { name: 'Rate alerts', icon: Bell, path: '/rate-alerts' },
      ],
    },
    {
      heading: 'Resources',
      items: [
        { name: 'Help centre', icon: HelpCircle, path: '/help-centre' },
        { name: 'Contact us', icon: HelpCircle, path: '/contact-us' },
        { name: 'About us', icon: Users, path: '/about-us' },
        { name: 'Fees & pricing', icon: DollarSign, path: '/fees-pricing' },
        { name: 'Security', icon: Shield, path: '/security' },
      ],
    },
  ],
  promo: {
    title: 'Stay connected abroad',
    description: 'Get an eSIM for affordable data in 190+ countries',
    action: 'Learn more',
    path: '/esim',
  },
};

const businessMenu = {
  title: 'Business',
  sections: [
    {
      heading: 'Business payments',
      items: [
        { name: 'International payments', icon: Globe, path: '/business/international-payments' },
        { name: 'Multi-currency accounts', icon: CreditCard, path: '/business/multi-currency-accounts' },
        { name: 'Batch payments', icon: Layers, path: '/business/batch-payments' },
      ],
    },
    {
      heading: 'Risk management',
      items: [
        { name: 'Explore risk management', icon: ShieldCheck, path: '/business/risk-management' },
        { name: 'Forwards', icon: TrendingUp, path: '/business/forwards' },
        { name: 'Limit orders', icon: Sliders, path: '/business/limit-orders' },
      ],
    },
    {
      heading: 'Partnerships',
      items: [
        { name: 'Explore partnerships', icon: Users, path: '/business/partnerships' },
        { name: 'Affiliate partnerships', icon: Briefcase, path: '/business/affiliate-partnerships' },
      ],
    },
  ],
  promo: {
    title: 'Talk to our experts',
    description: 'Get tailored solutions for your business needs',
    action: 'Contact sales',
    path: '/business/contact-sales',
  },
};

const platformMenu = {
  title: 'Platform',
  sections: [
    {
      heading: 'Products',
      items: [
        { name: 'Payments API', icon: Code, path: '/platform/payments-api' },
        { name: 'Currency Data API', icon: Database, path: '/platform/currency-data-api' },
        { name: 'ERP integrations', icon: LinkIcon, path: '/platform/erp-integrations' },
      ],
    },
    {
      heading: 'Resources',
      items: [
        { name: 'Blog', icon: FileText, path: '/resources/blog' },
        { name: 'Webinars', icon: Video, path: '/resources/webinars' },
        { name: 'Case studies', icon: BookOpen, path: '/resources/case-studies' },
        { name: 'Developers', icon: Terminal, path: '/resources/developers' },
      ],
    },
  ],
  promo: {
    title: 'Build with GlobeRate',
    description: 'Power your platform with reliable FX infrastructure',
    action: 'View documentation',
    path: '/platform/docs',
  },
};

const navTabs = [
  { nameKey: 'tabs.liveExchangeRates', path: '/live-exchange-rates' },
  { nameKey: 'tabs.currencyConverter', path: '/currency-converter' },
  { nameKey: 'tabs.currencyCharts', path: '/currency-charts' },
  { nameKey: 'tabs.getRateAlerts', path: '/rate-alerts' },
  { nameKey: 'tabs.sendMoney', path: '/send-money' },
];

export default function MainLayout({ children }) {
  const [activeMenu, setActiveMenu] = React.useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const menuTimeoutRef = React.useRef(null);
  const langTimeoutRef = React.useRef(null);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const handleMenuEnter = (menu) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleMenuContentEnter = () => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }
  };

  const handleLangEnter = () => {
    if (langTimeoutRef.current) {
      clearTimeout(langTimeoutRef.current);
      langTimeoutRef.current = null;
    }
    setLangOpen(true);
  };

  const handleLangLeave = () => {
    langTimeoutRef.current = setTimeout(() => {
      setLangOpen(false);
    }, 150);
  };

  const renderMegaMenu = () => {
    if (!activeMenu) return null;
    let menu;
    if (activeMenu === 'Personal') menu = personalMenu;
    else if (activeMenu === 'Business') menu = businessMenu;
    else if (activeMenu === 'Platform') menu = platformMenu;
    else return null;

    return (
      <div
        className="absolute left-0 right-0 top-full animate-slide-down"
        style={{ marginTop: '0', zIndex: 99999 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-b-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border-x border-b border-slate-200 overflow-hidden relative z-[99999]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-9 p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {menu.sections.map((section, idx) => (
                    <div key={idx}>
                      <h3 className="text-sm font-semibold text-slate-900 mb-3">{section.heading}</h3>
                      <ul className="space-y-1.5">
                        {section.items.map((item, i) => {
                          const Icon = item.icon;
                          return (
                            <li key={i}>
                              <Link
                                to={item.path}
                                onClick={() => setActiveMenu(null)}
                                className="flex items-center gap-2.5 w-full text-left px-2 py-2 rounded-lg hover:bg-blue-50 transition-colors group"
                              >
                                <span className="text-blue-600 group-hover:text-blue-700">
                                  <Icon className="w-4 h-4" />
                                </span>
                                <span className="text-sm text-slate-700 group-hover:text-slate-900">{item.name}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-3 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border-l border-slate-200">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">{menu.promo.title}</h3>
                    <p className="text-sm text-slate-600 mb-4">{menu.promo.description}</p>
                    <Link
                      to={menu.promo.path}
                      onClick={() => setActiveMenu(null)}
                      className="text-sm font-semibold text-blue-700 hover:text-blue-800 hover:underline transition-colors"
                    >
                      {menu.promo.action} →
                    </Link>
                  </div>
                  <div className="pt-4 border-t border-blue-200/60">
                    <div className="flex items-center gap-2 text-slate-700 mb-2">
                      <HelpCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium">{t('megaMenu.needAssistance')}</span>
                    </div>
                    <Link
                      to="/help-centre"
                      onClick={() => setActiveMenu(null)}
                      className="text-sm text-blue-700 hover:text-blue-800 hover:underline transition-colors"
                    >
                      {t('megaMenu.visitHelpCentre')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#002699] via-[#001a73] to-[#00114d] text-slate-100">
      <header className="sticky top-0 z-[99998] overflow-visible">
        <div className="border-b border-blue-800/40 bg-[#00114d]/95 backdrop-blur-lg overflow-visible">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-8 lg:gap-10">
                <div className="flex items-center">
                  <Link to="/" className="text-2xl font-extrabold tracking-tight text-white">
                    GlobeRate
                  </Link>
                </div>
                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                  {[
                    { name: t('nav.personal'), key: 'Personal' },
                    { name: t('nav.business'), key: 'Business' },
                    { name: t('nav.platform'), key: 'Platform' },
                  ].map((category) => (
                    <div
                      key={category.key}
                      className="relative"
                    >
                      <button
                        onClick={() => setActiveMenu(activeMenu === category.key ? null : category.key)}
                        className="text-slate-200 hover:text-white font-medium transition-colors text-sm flex items-center gap-1 py-2"
                      >
                        {category.name}
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </nav>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 relative" style={{ overflow: 'visible', zIndex: 99999 }}>
                <div className="relative" style={{ overflow: 'visible', zIndex: 99999 }}>
                  <button
                    onClick={() => setLangOpen(!langOpen)}
                    className="hidden sm:flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors text-sm px-2 py-1"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{languages.find(l => l.code === language)?.flag} {languages.find(l => l.code === language)?.code.toUpperCase()}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  {langOpen && (
                    <div
                      className="absolute right-0 w-72 bg-white rounded-lg shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-slate-200 py-1 max-h-[32rem] overflow-y-auto"
                      style={{ position: 'absolute', top: 'calc(100% + 12px)', zIndex: 99999, backgroundColor: '#ffffff' }}
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setLangOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 text-sm hover:bg-blue-50 flex items-center gap-2 ${
                            language === lang.code ? 'bg-blue-50 text-blue-700' : 'text-slate-700'
                          }`}
                        >
                          <span className="text-base">{lang.flag}</span>
                          <div className="flex-1">
                            <div className="font-medium">{lang.name}</div>
                            <div className="text-xs text-slate-500">{lang.region}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <Link to="/help-centre" className="text-slate-200 hover:text-white transition-colors text-sm px-2 py-1">
                  {t('nav.help')}
                </Link>
                <button className="text-slate-200 hover:text-white transition-colors text-sm px-2 py-1">{t('nav.login')}</button>
                <button className="bg-white text-blue-900 hover:bg-blue-50 px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg">
                  {t('nav.getStarted')}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#001a73]/95 backdrop-blur-lg border-b border-blue-800/40 overflow-visible">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-1 overflow-x-auto">
              {navTabs.map((tab) => (
                <Link
                  key={tab.nameKey}
                  to={tab.path}
                  className={`relative px-2 py-2.5 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    location.pathname === tab.path
                      ? 'text-white'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  <span
                    className={`inline-flex items-center px-4 py-1.5 rounded-lg transition-all duration-200 ${
                      location.pathname === tab.path
                        ? 'bg-[#000d33] shadow-inner'
                        : 'hover:bg-blue-800/40'
                    }`}
                  >
                    {t(tab.nameKey)}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {renderMegaMenu()}
      </header>

      <main>{children}</main>
    </div>
  );
}
