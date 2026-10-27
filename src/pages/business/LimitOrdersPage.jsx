import React from 'react';
import { Sliders, Bell, Target } from 'lucide-react';

export default function LimitOrdersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          Limit Orders
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Automate your currency trades at your desired exchange rate
        </p>
      </section>

      <section className="mb-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Trade When Rates Hit Your Target</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Set a limit order and we'll automatically execute your trade when the market reaches your desired rate.
                </p>
                <ul className="space-y-3 mb-6">
                  {['No need to monitor markets 24/7', 'Execute at your preferred rate', 'Set and forget', 'Full control over your strategy'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-blue-600" />
                  Create Limit Order
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Buy</label>
                      <select className="w-full bg-white border-2 border-slate-200 rounded-lg px-3 py-2 text-slate-900">
                        <option>🇪🇺 EUR</option>
                        <option>🇺🇸 USD</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Sell</label>
                      <select className="w-full bg-white border-2 border-slate-200 rounded-lg px-3 py-2 text-slate-900">
                        <option>🇺🇸 USD</option>
                        <option>🇬🇧 GBP</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Amount</label>
                    <input type="number" className="w-full bg-white border-2 border-slate-200 rounded-lg px-3 py-2 text-slate-900" placeholder="10000" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Target Rate (1 USD = ? EUR)</label>
                    <input type="number" step="0.0001" className="w-full bg-white border-2 border-slate-200 rounded-lg px-3 py-2 text-slate-900" placeholder="0.9250" />
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                    <Bell className="w-4 h-4" />
                    Set Limit Order
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
