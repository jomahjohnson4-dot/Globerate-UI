import React from 'react';
import { Users, Handshake, Globe, Award } from 'lucide-react';

export default function PartnershipsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          Business Partnership Opportunities
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Grow your business with GlobeRate partnership programs
        </p>
      </section>

      <section className="mb-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <Handshake className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Partner With Us</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Join our partner network and offer competitive FX solutions to your customers while earning revenue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Users, title: 'Referrals', desc: 'Earn commissions for customer referrals' },
                { icon: Globe, title: 'White Label', desc: 'Brand our solution as your own' },
                { icon: Award, title: 'Enterprise', desc: 'Custom solutions for large partners' },
              ].map((partner, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 text-center">
                  <partner.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{partner.title}</h3>
                  <p className="text-slate-600">{partner.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg">
                Apply for Partnership
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
