import React, { useState } from 'react';
import { Clock, Calendar, Search } from 'lucide-react';

export default function HistoricalRatesPage() {
  const [date, setDate] = useState('2024-01-01');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          Historical Currency Rates Archive
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Look up past exchange rates for any date and currency pair
        </p>
      </section>

      <section className="mb-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-blue-600" />
              Rate Lookup
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Date</label>
                <div className="relative">
                  <Calendar className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl pl-10 pr-4 py-3 text-slate-900"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">From</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">🇺🇸</span>
                  <select
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl pl-10 pr-4 py-3 text-slate-900 font-semibold"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">To</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">🇪🇺</span>
                  <select
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl pl-10 pr-4 py-3 text-slate-900 font-semibold"
                  >
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Get Historical Rate
            </button>

            <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 text-center">
              <p className="text-slate-600 mb-2">Exchange rate on {date}</p>
              <p className="text-3xl font-bold text-slate-900">1 {from} = 0.9234 {to}</p>
              <p className="text-sm text-slate-500 mt-2">Mid-market rate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Recent Searches</h2>
          <div className="space-y-3">
            {[
              { date: '2024-01-01', pair: 'USD → EUR', rate: '0.9234' },
              { date: '2023-12-25', pair: 'GBP → USD', rate: '1.2715' },
              { date: '2023-12-01', pair: 'EUR → GBP', rate: '0.8612' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200 hover:bg-blue-50 hover:border-blue-300 transition-all">
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-slate-400" />
                  <div>
                    <div className="font-semibold text-slate-900">{item.pair}</div>
                    <div className="text-sm text-slate-600">{item.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-blue-700">{item.rate}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
