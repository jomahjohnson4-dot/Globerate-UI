import React from 'react';
import { ArrowRight, Shield, Users, FileText, CheckCircle } from 'lucide-react';

export default function LargeTransfersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          High-Value / Large Currency Exchange
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Dedicated service for large transfers with personalized rates and expert support
        </p>
      </section>

      <section className="mb-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Large Transfer Service</h2>
                <p className="text-lg text-slate-600 mb-6">
                  For transfers over $10,000 or equivalent, enjoy dedicated support, better rates, and tailored solutions.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    { icon: ArrowRight, text: 'Competitive rates for high-value transactions' },
                    { icon: Users, text: 'Dedicated account manager' },
                    { icon: Shield, text: 'Enhanced security and verification' },
                    { icon: FileText, text: 'Flexible settlement options' },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <item.icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-slate-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg">
                  Speak to a specialist
                </button>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Get a quote</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Amount to send</label>
                    <input
                      type="number"
                      placeholder="10000"
                      className="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">From</label>
                      <select className="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900">
                        <option>🇺🇸 USD</option>
                        <option>🇬🇧 GBP</option>
                        <option>🇪🇺 EUR</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">To</label>
                      <select className="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900">
                        <option>🇪🇺 EUR</option>
                        <option>🇬🇧 GBP</option>
                        <option>🇺🇸 USD</option>
                      </select>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
                    Request quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Benefits of Large Transfers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Lower fees per transaction',
              'Rate alerts and forward contracts',
              'Same-day or next-day settlement',
              'Dedicated relationship manager',
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
