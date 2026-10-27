import React, { useState } from 'react';
import { ArrowLeftRight, TrendingUp } from 'lucide-react';
import CurrencySelector from '../components/CurrencySelector';

const API_BASE = 'http://localhost:5000/api';

export default function CurrencyConverterPage() {
  const [amount, setAmount] = useState(1000);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [resultData, setResultData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleConvert = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const url = `${API_BASE}/convert?from=${from}&to=${to}&amount=${amount}`;
      const res = await fetch(url);
      const data = await res.json();
      if (res.ok) {
        setResultData(data);
      } else {
        setError(data.error || 'Conversion failed');
      }
    } catch (err) {
      setError('Network error connecting to backend');
    } finally {
      setLoading(false);
    }
  };

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          Live Currency Converter
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Convert between currencies at live mid-market exchange rates
        </p>
      </section>

      <section className="mb-12 animate-scale-in">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl shadow-blue-900/30 overflow-visible relative">
            <div className="p-6 md:p-8 lg:p-10">
              <form onSubmit={handleConvert} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-0 items-end relative">
                  <div className="lg:col-span-3">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Amount</label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-lg font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>

                  <div className="lg:col-span-3 lg:pl-4">
                    <CurrencySelector label="From" value={from} onChange={setFrom} />
                  </div>

                  <div className="lg:col-span-2 flex justify-center relative z-10 -my-2 lg:my-0">
                    <button
                      type="button"
                      onClick={handleSwap}
                      className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 border-4 border-white rounded-full shadow-xl text-white hover:rotate-180 transition-transform duration-300"
                      aria-label="Swap currencies"
                    >
                      <ArrowLeftRight className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="lg:col-span-3">
                    <CurrencySelector label="To" value={to} onChange={setTo} />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-4 rounded-xl transition-all shadow-lg text-lg disabled:opacity-50"
                >
                  {loading ? 'Calculating...' : 'Convert Currency'}
                </button>
              </form>

              {error && (
                <div className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-700 text-sm">
                  {error}
                </div>
              )}

              {resultData && (
                <div className="mt-8 p-6 md:p-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 border-2 border-blue-200 rounded-xl shadow-inner">
                  <div className="text-center space-y-3">
                    <p className="text-lg md:text-xl text-slate-700 font-medium">
                      {Number(amount).toLocaleString()} {resultData.base} {currencyFlags[resultData.base]} = {resultData.convertedAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 })} {resultData.target} {currencyFlags[resultData.target]}
                    </p>
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                      <span className="text-slate-900">1.00 {resultData.base} = </span>
                      <span className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                        {Number(resultData.conversionRate).toLocaleString(undefined, { minimumFractionDigits: 6, maximumFractionDigits: 6 })} {resultData.target}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-slate-600">
                      <TrendingUp className="w-4 h-4" />
                      <p className="text-sm font-medium">Mid-market rate • Updated: {resultData.lastUpdated}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Popular Conversions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { from: 'USD', to: 'EUR', flag1: '🇺🇸', flag2: '🇪🇺' },
              { from: 'USD', to: 'GBP', flag1: '🇺🇸', flag2: '🇬🇧' },
              { from: 'EUR', to: 'USD', flag1: '🇪🇺', flag2: '🇺🇸' },
              { from: 'GBP', to: 'USD', flag1: '🇬🇧', flag2: '🇺🇸' },
            ].map((pair, idx) => (
              <button
                key={idx}
                onClick={() => { setFrom(pair.from); setTo(pair.to); }}
                className="bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-xl p-4 text-left transition-all"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span>{pair.flag1}</span>
                  <span className="font-semibold text-slate-900">{pair.from}</span>
                  <span className="text-slate-400">→</span>
                  <span>{pair.flag2}</span>
                  <span className="font-semibold text-slate-900">{pair.to}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
