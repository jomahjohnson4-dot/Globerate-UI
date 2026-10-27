import React, { useState } from 'react';
import { ArrowRight, Plus, TrendingUp, TrendingDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const currencies = [
  { code: 'EUR', name: 'Euro', flag: '🇪🇺', rate: 0.9205, change: +0.33, symbol: '€' },
  { code: 'GBP', name: 'British Pound Sterling', flag: '🇬🇧', rate: 0.7912, change: +0.18, symbol: '£' },
  { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵', rate: 149.45, change: -0.055, symbol: '¥' },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', rate: 1.3542, change: +0.12, symbol: 'C$' },
  { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺', rate: 1.5238, change: -0.08, symbol: 'A$' },
  { code: 'CHF', name: 'Swiss Franc', flag: '🇨🇭', rate: 0.8795, change: +0.24, symbol: 'Fr' },
  { code: 'TZS', name: 'Tanzanian Shilling', flag: '🇹🇿', rate: 2658.50, change: +0.15, symbol: 'TSh' },
  { code: 'CNY', name: 'Chinese Yuan', flag: '🇨🇳', rate: 7.2345, change: -0.03, symbol: '¥' },
  { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳', rate: 83.12, change: +0.07, symbol: '₹' },
];

const Sparkline = ({ positive }) => (
  <svg width="60" height="24" viewBox="0 0 60 24" className="inline-block">
    <path
      d={positive ? "M2 18 L12 12 L22 14 L32 8 L42 6 L58 4" : "M2 4 L12 10 L22 8 L32 14 L42 16 L58 20"}
      stroke={positive ? "#10b981" : "#ef4444"}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function LiveExchangeRatesPage() {
  const { t } = useLanguage();
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [amount, setAmount] = useState(1);

  const baseCurrencies = [
    { code: 'USD', name: 'US Dollar', flag: '🇺🇸', symbol: '$' },
    { code: 'EUR', name: 'Euro', flag: '🇪🇺', symbol: '€' },
    { code: 'GBP', name: 'British Pound', flag: '🇬🇧', symbol: '£' },
  ];

  const currentBase = baseCurrencies.find(c => c.code === baseCurrency) || baseCurrencies[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          {t('liveRates.title')}
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          {t('liveRates.subtitle')}
        </p>
      </section>

      <section className="mb-16">
        <div className="w-full max-w-7xl mx-auto">
          <div className="mb-4 flex items-center justify-between">
            <button className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 rounded-lg text-sm font-medium text-slate-700 transition-colors shadow-sm border border-slate-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              Inverse
            </button>
            <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
              <span className="w-32 text-right">Amount</span>
              <span className="w-32 text-center">Change (24h)</span>
              <span className="w-20">(24h)</span>
              <button className="text-blue-600 hover:text-blue-700 font-medium">Edit</button>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-t-lg px-6 py-4 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇺🇸</span>
              <span className="font-semibold text-lg">US Dollar</span>
            </div>
            <span className="font-semibold text-lg">1</span>
          </div>

          <div className="bg-white divide-y divide-slate-100 shadow-xl">
            {currencies.map((currency, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center md:justify-between px-6 py-4 hover:bg-blue-50/40 transition-colors gap-3">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className="text-2xl flex-shrink-0">{currency.flag}</span>
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-900 truncate">{currency.name}</div>
                    <div className="text-sm text-slate-600">{currency.code}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-6 flex-wrap">
                  <div className="text-right min-w-[80px]">
                    <div className="text-lg font-semibold text-slate-900">
                      {currency.symbol}{(currency.rate).toFixed(4)}
                    </div>
                  </div>
                  <div className="min-w-[100px] flex justify-center">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                        currency.change >= 0
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {currency.change >= 0 ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                      {currency.change >= 0 ? '+' : ''}{currency.change}%
                    </span>
                  </div>
                  <div className="hidden md:block min-w-[60px]">
                    <Sparkline positive={currency.change >= 0} />
                  </div>
                  <div className="min-w-[80px] flex justify-end">
                    <Link
                      to="/send-money"
                      className="inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-colors shadow-sm"
                    >
                      {t('liveRates.send')}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-2">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 rounded-lg text-sm font-semibold text-blue-600 transition-colors shadow-sm border border-slate-200">
              <Plus className="w-4 h-4" />
              {t('liveRates.addCurrency')}
            </button>
            <p className="text-sm text-slate-100">
              {t('liveRates.lastUpdated')}: {new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">{t('liveRates.needToSend')}</h2>
            <p className="text-blue-100 mb-6">{t('liveRates.getGreatRates')}</p>
            <Link
              to="/send-money"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover-lift"
            >
              {t('liveRates.startSending')} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
