import React from 'react';
import { TrendingUp, Calendar, Shield } from 'lucide-react';

export default function ForwardsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          Forward Contracts
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Lock in exchange rates for future currency transactions
        </p>
      </section>

      <section className="mb-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Lock In Your Rate</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Protect against adverse currency movements by securing today's rate for a transaction up to 12 months in the future.
                </p>
                <ul className="space-y-3 mb-6">
                  {['Fixed exchange rate', 'Up to 12 month tenor', 'No margin calls', 'Budget with certainty'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  Forward Contract Calculator
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Amount</label>
                    <input type="number" className="w-full bg-white border-2 border-slate-200 rounded-lg px-3 py-2 text-slate-900" placeholder="50000" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">From</label>
                      <select className="w-full bg-white border-2 border-slate-200 rounded-lg px-3 py-2 text-slate-900">
                        <option>🇺🇸 USD</option>
                        <option>🇬🇧 GBP</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">To</label>
                      <select className="w-full bg-white border-2 border-slate-200 rounded-lg px-3 py-2 text-slate-900">
                        <option>🇪🇺 EUR</option>
                        <option>🇬🇧 GBP</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Settlement Date</label>
                    <input type="date" className="w-full bg-white border-2 border-slate-200 rounded-lg px-3 py-2 text-slate-900" />
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
                    Get Forward Rate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
