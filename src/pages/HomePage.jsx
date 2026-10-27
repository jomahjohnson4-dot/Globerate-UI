import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Send, BarChart3, Shield, Globe, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          {t('home.title')}
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto mb-8">
          {t('home.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/send-money"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover-lift inline-flex items-center justify-center gap-2"
          >
            {t('home.sendMoneyNow')} <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/currency-converter"
            className="bg-white/10 backdrop-blur hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 hover-lift"
          >
            {t('home.convertCurrency')}
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/send-money" className="bg-white rounded-xl p-6 shadow-lg hover-lift border border-slate-200 group">
            <Send className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">{t('home.sendMoneyCard')}</h3>
            <p className="text-slate-600">{t('home.sendMoneyDesc')}</p>
          </Link>
          <Link to="/compare-rates" className="bg-white rounded-xl p-6 shadow-lg hover-lift border border-slate-200 group">
            <BarChart3 className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">{t('home.compareRatesCard')}</h3>
            <p className="text-slate-600">{t('home.compareRatesDesc')}</p>
          </Link>
          <Link to="/currency-charts" className="bg-white rounded-xl p-6 shadow-lg hover-lift border border-slate-200 group">
            <TrendingUp className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">{t('home.currencyChartsCard')}</h3>
            <p className="text-slate-600">{t('home.currencyChartsDesc')}</p>
          </Link>
          <Link to="/security" className="bg-white rounded-xl p-6 shadow-lg hover-lift border border-slate-200 group">
            <Shield className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">{t('home.secureCard')}</h3>
            <p className="text-slate-600">{t('home.secureCardDesc')}</p>
          </Link>
        </div>
      </section>

      <section className="mb-16 bg-white rounded-2xl p-8 md:p-12 shadow-xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('home.popularCurrencies')}</h2>
          <p className="text-lg text-slate-600">{t('home.popularCurrenciesDesc')}</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {[
            { code: 'USD', name: 'US Dollar', flag: '🇺🇸', delay: '0s' },
            { code: 'EUR', name: 'Euro', flag: '🇪🇺', delay: '0.1s' },
            { code: 'GBP', name: 'British Pound', flag: '🇬🇧', delay: '0.2s' },
            { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵', delay: '0.3s' },
            { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺', delay: '0.4s' },
            { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', delay: '0.5s' },
            { code: 'CHF', name: 'Swiss Franc', flag: '🇨🇭', delay: '0.6s' },
            { code: 'TZS', name: 'Tanzanian Shilling', flag: '🇹🇿', delay: '0.7s' },
          ].map((curr) => (
            <div key={curr.code} className="flex flex-col items-center gap-2 group cursor-pointer animate-float" style={{ animationDelay: curr.delay }}>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-white to-slate-100 shadow-lg border-2 border-slate-200 flex items-center justify-center text-3xl md:text-4xl group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                {curr.flag}
              </div>
              <div className="text-center">
                <div className="font-bold text-slate-900">{curr.code}</div>
                <div className="text-xs text-slate-600">{curr.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl shadow-blue-900/30 overflow-hidden">
            <div className="p-6 md:p-8 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Live exchange rates</h2>
                <p className="text-slate-600">Compare 100+ currencies in real time & find the right moment to transfer funds</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-50">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Currency</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Rate</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">24h Change</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Trend</th>
                    <th className="text-right py-4 px-6 text-sm font-semibold text-slate-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { code: 'EUR', name: 'Euro', flag: '🇪🇺', rate: 0.9205, change: +0.33, symbol: '€' },
                    { code: 'GBP', name: 'British Pound', flag: '🇬🇧', rate: 0.7912, change: +0.18, symbol: '£' },
                    { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵', rate: 149.45, change: -0.055, symbol: '¥' },
                    { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', rate: 1.3542, change: +0.12, symbol: 'C$' },
                    { code: 'TZS', name: 'Tanzanian Shilling', flag: '🇹🇿', rate: 2658.50, change: +0.15, symbol: 'TSh' },
                    { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺', rate: 1.5238, change: -0.08, symbol: 'A$' },
                  ].map((currency, idx) => (
                    <tr key={idx} className="border-b border-slate-100 hover:bg-blue-50/50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{currency.flag}</span>
                          <div>
                            <div className="font-semibold text-slate-900">{currency.name}</div>
                            <div className="text-sm text-slate-600">{currency.code}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-lg font-semibold text-slate-900">{currency.symbol}{(currency.rate * 1).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })}</div>
                        <div className="text-sm text-slate-500">1 USD = {currency.rate} {currency.code}</div>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-sm font-semibold ${currency.change >= 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          {currency.change >= 0 ? '+' : ''}{currency.change}%
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <svg width="60" height="24" viewBox="0 0 60 24" className="inline-block">
                          <path d={currency.change >= 0 ? "M2 18 L12 12 L22 14 L32 8 L42 6 L58 4" : "M2 4 L12 10 L22 8 L32 14 L42 16 L58 20"} stroke={currency.change >= 0 ? "#10b981" : "#ef4444"} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <Link to="/send-money" className="inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                          Send <ArrowRight className="w-4 h-4" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                + Add currency
              </button>
              <p className="text-sm text-slate-600">Last updated: {new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
