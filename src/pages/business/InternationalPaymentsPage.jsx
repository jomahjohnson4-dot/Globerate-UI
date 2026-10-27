import React from 'react';
import { Globe, Shield, Clock, TrendingDown } from 'lucide-react';

export default function InternationalPaymentsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          Fast and Secure Business Payments
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Streamline international payments for your business
        </p>
      </section>

      <section className="mb-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Global Business Payments Made Easy</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Pay suppliers, partners, and employees worldwide with competitive rates and reliable delivery.
                </p>
                <ul className="space-y-3 mb-6">
                  {['Pay to 190+ countries', 'Competitive FX rates', 'Batch payment processing', 'Real-time tracking'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg">
                  Get started for business
                </button>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: Globe, title: 'Global Reach', desc: 'Send payments worldwide' },
                  { icon: Shield, title: 'Secure & Compliant', desc: 'Regulated and protected' },
                  { icon: Clock, title: 'Fast Settlement', desc: 'Quick delivery times' },
                  { icon: TrendingDown, title: 'Cost Effective', desc: 'Lower fees than banks' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 flex items-start gap-3 border border-blue-200">
                    <item.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
