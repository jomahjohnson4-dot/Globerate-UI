import React from 'react';
import { Database, BarChart3, Clock, Zap } from 'lucide-react';

export default function CurrencyDataAPIPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          Currency Data API
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Real-time and historical exchange rate data
        </p>
      </section>

      <section className="mb-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900">Currency Data API</h2>
            </div>
            <p className="text-lg text-slate-600 mb-8">
              Access live mid-market rates, historical data, and currency conversion for 170+ currencies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-cyan-400 font-mono text-sm">
                <div className="mb-2 text-slate-400">// Get latest rates</div>
                <div>GET /v1/rates/latest?base=USD</div>
                <div className="mt-4 text-slate-400">// Response</div>
                <div>{`{ "USD": 1.0, "EUR": 0.92, ... }`}</div>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Zap, title: 'Real-time Rates', desc: 'Updated every minute' },
                  { icon: Clock, title: 'Historical Data', desc: '20+ years of history' },
                  { icon: BarChart3, title: 'Reliable Source', desc: 'Mid-market rates' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <item.icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
              Explore API
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
