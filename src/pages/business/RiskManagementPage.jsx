import React from 'react';
import { ShieldCheck, TrendingUp, Sliders, FileText } from 'lucide-react';

export default function RiskManagementPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          Corporate Forex Hedging Tools
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Protect your business from currency volatility with our risk management solutions
        </p>
      </section>

      <section className="mb-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Manage Currency Risk</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: TrendingUp, title: 'Forwards', desc: 'Lock in exchange rates for future transactions', link: '/business/forwards' },
                { icon: Sliders, title: 'Limit Orders', desc: 'Automate trades at your desired rate', link: '/business/limit-orders' },
                { icon: ShieldCheck, title: 'Risk Analysis', desc: 'Assess and mitigate exposure', link: '/business/risk-management' },
              ].map((tool, idx) => (
                <a key={idx} href={tool.link} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all group">
                  <tool.icon className="w-10 h-10 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{tool.title}</h3>
                  <p className="text-slate-600">{tool.desc}</p>
                </a>
              ))}
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Why hedge currency risk?</h3>
              <p className="text-slate-700">
                Currency fluctuations can significantly impact your business margins. Our hedging tools help you plan with certainty, protect profits, and manage cash flow effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
