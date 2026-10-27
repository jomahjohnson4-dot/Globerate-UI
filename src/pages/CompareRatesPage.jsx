import React from 'react';
import { BarChart3, TrendingUp, ArrowRight } from 'lucide-react';

export default function CompareRatesPage() {
  const providers = [
    { name: 'GlobeRate', rate: 0.9200, fee: 4.99, total: 924.01, highlight: true },
    { name: 'Bank A', rate: 0.9150, fee: 15.00, total: 915.00 },
    { name: 'Bank B', rate: 0.9125, fee: 25.00, total: 912.50 },
    { name: 'MoneyTransfer X', rate: 0.9185, fee: 8.99, total: 918.51 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          Live Rate Comparison Dashboard
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Compare exchange rates from leading providers in real-time
        </p>
      </section>

      <section className="mb-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Send amount</label>
                <div className="flex gap-2">
                  <input type="number" defaultValue="1000" className="flex-1 bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-semibold" />
                  <select className="bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900">
                    <option>🇺🇸 USD</option>
                    <option>🇬🇧 GBP</option>
                  </select>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-slate-400 mt-7" />
              <div className="flex-1">
                <label className="block text-sm font-semibold text-slate-700 mb-2">To</label>
                <select className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900">
                  <option>🇪🇺 EUR</option>
                  <option>🇬🇧 GBP</option>
                </select>
              </div>
            </div>

            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-blue-600" />
              Provider Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Provider</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Exchange Rate</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Fee</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Recipient gets</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700"></th>
                  </tr>
                </thead>
                <tbody>
                  {providers.map((provider, idx) => (
                    <tr key={idx} className={`border-b border-slate-100 hover:bg-blue-50/50 transition-colors ${provider.highlight ? 'bg-blue-50' : ''}`}>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-900">{provider.name}</span>
                          {provider.highlight && <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium">Best rate</span>}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-slate-700">1 USD = {provider.rate} EUR</td>
                      <td className="py-4 px-4 text-slate-700">${provider.fee}</td>
                      <td className="py-4 px-4 font-semibold text-slate-900">€{provider.total.toFixed(2)}</td>
                      <td className="py-4 px-4 text-right">
                        <button className={`px-4 py-2 rounded-lg font-semibold transition-colors ${provider.highlight ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-200 hover:bg-slate-300 text-slate-900'}`}>
                          Send now
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4">* Rates are indicative and may change. Updated just now.</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
            <TrendingUp className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Real-time Rates</h3>
            <p className="text-slate-600 text-sm">Live mid-market rates updated continuously</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
            <BarChart3 className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Full Transparency</h3>
            <p className="text-slate-600 text-sm">See all fees and charges upfront</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
            <ArrowRight className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Easy Comparison</h3>
            <p className="text-slate-600 text-sm">Find the best deal for your transfer</p>
          </div>
        </div>
      </section>
    </div>
  );
}
