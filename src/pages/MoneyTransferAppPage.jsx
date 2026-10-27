import React from 'react';
import { Smartphone, Download, Star, Shield, Zap, Globe, CheckCircle } from 'lucide-react';

export default function MoneyTransferAppPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          Mobile App Download & eSIM Showcase
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Send money on the go with our award-winning mobile app
        </p>
      </section>

      <section className="mb-12">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Send Money Anytime, Anywhere
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Download the GlobeRate app for fast, secure international transfers at your fingertips.
                </p>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-slate-700 font-semibold">4.9/5 • 250k+ reviews</span>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    'Instant money transfers',
                    'Track your transfers in real-time',
                    'Best rates with low fees',
                    'Multi-currency wallet',
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold">
                    <Download className="w-5 h-5" />
                    Download for iOS
                  </button>
                  <button className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold">
                    <Download className="w-5 h-5" />
                    Download for Android
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white rounded-2xl p-6 space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Smartphone className="w-6 h-6 text-blue-600" />
                      <span className="font-semibold text-slate-900">GlobeRate</span>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <div className="text-sm text-slate-600 mb-1">You send</div>
                      <div className="text-2xl font-bold text-slate-900">$1,000 🇺🇸</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="text-sm text-slate-600 mb-1">They receive</div>
                      <div className="text-2xl font-bold text-blue-700">€920.00 🇪🇺</div>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold">Send Money</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
              <Globe className="w-8 h-8" />
              Free eSIM for International Travelers
            </h2>
            <p className="text-xl text-blue-100">Stay connected in 190+ countries with affordable data plans</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Zap, title: 'Instant Activation', desc: 'Get your eSIM in seconds' },
              { icon: Globe, title: 'Global Coverage', desc: '190+ countries and regions' },
              { icon: Shield, title: 'Secure Connection', desc: 'Reliable network partners' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <item.icon className="w-12 h-12 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg">
              Get Your Free eSIM
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
