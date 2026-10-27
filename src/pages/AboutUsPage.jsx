import React from 'react';
import { Users, Globe, Shield, Award } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Making international money transfers faster, cheaper, and more transparent
        </p>
      </section>

      <section className="mb-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 mb-6">
              GlobeRate was founded with a simple mission: to make international currency exchange and money transfers accessible, affordable, and transparent for everyone. We believe that sending money across borders shouldn't be expensive or complicated.
            </p>
            <p className="text-lg text-slate-600">
              By combining cutting-edge technology with deep financial expertise, we've built a platform that offers bank-beating rates, low fees, and a seamless user experience.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, title: '10M+', desc: 'Customers worldwide' },
            { icon: Globe, title: '190+', desc: 'Countries served' },
            { icon: Shield, title: '100%', desc: 'Secure transfers' },
            { icon: Award, title: '4.9/5', desc: 'Customer rating' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 text-center">
              <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.title}</div>
              <div className="text-slate-600">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="max-w-5xl mx-auto bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Transparency</h3>
              <p className="text-slate-600">No hidden fees. What you see is what you pay.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Security</h3>
              <p className="text-slate-600">Your money and data are protected with enterprise-grade security.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Innovation</h3>
              <p className="text-slate-600">Constantly improving to deliver the best experience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
