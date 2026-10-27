import React from 'react';
import { LineChart, TrendingUp, Calendar } from 'lucide-react';

export default function CurrencyChartsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          Historical and Live Currency Trend Visualization
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Track exchange rate movements with interactive charts
        </p>
      </section>

      <section className="mb-12">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇺🇸</span>
                  <select className="bg-slate-50 border-2 border-slate-200 rounded-lg px-3 py-2 text-slate-900 font-semibold">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                  </select>
                </div>
                <span className="text-slate-400">to</span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇪🇺</span>
                  <select className="bg-slate-50 border-2 border-slate-200 rounded-lg px-3 py-2 text-slate-900 font-semibold">
                    <option>EUR</option>
                    <option>USD</option>
                    <option>GBP</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-2">
                {['1D', '1W', '1M', '3M', '1Y', '5Y'].map((period) => (
                  <button key={period} className="px-3 py-1.5 bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 rounded-lg text-sm font-medium transition-colors">
                    {period}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-baseline gap-3">
                <h2 className="text-3xl font-bold text-slate-900">1 USD = 0.9200 EUR</h2>
                <span className="text-green-600 font-semibold flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  +0.12%
                </span>
              </div>
              <p className="text-slate-600">24h change</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 h-96 flex items-center justify-center border border-slate-200">
              <div className="text-center">
                <LineChart className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <p className="text-slate-600">Interactive chart visualization</p>
                <p className="text-sm text-slate-500 mt-1">Live and historical data displayed here</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { label: 'Open', value: '0.9195' },
                { label: 'High', value: '0.9210' },
                { label: 'Low', value: '0.9188' },
                { label: 'Close', value: '0.9200' },
              ].map((stat) => (
                <div key={stat.label} className="bg-slate-50 rounded-lg p-3 text-center border border-slate-200">
                  <div className="text-sm text-slate-600">{stat.label}</div>
                  <div className="font-semibold text-slate-900">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
