import React from 'react';
import { Code, Key, Book, Zap } from 'lucide-react';

export default function PaymentsAPIPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          Payments API Documentation & API Key Portal
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Integrate global payments into your platform
        </p>
      </section>

      <section className="mb-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900">Payments API</h2>
            </div>
            <p className="text-lg text-slate-600 mb-8">
              Build powerful payment experiences with our RESTful API. Send money, check rates, and manage transactions programmatically.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-green-400 font-mono text-sm overflow-x-auto">
                <div className="mb-2 text-slate-400">// Create a payment</div>
                <div>POST https://api.globerate.com/v1/payments</div>
                <div className="mt-4 text-slate-400">// Response</div>
                <div>{`{ "id": "pay_123", "status": "pending" }`}</div>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Zap, title: 'Fast & Reliable', desc: '99.9% uptime SLA' },
                  { icon: Key, title: 'Secure Authentication', desc: 'API key based auth' },
                  { icon: Book, title: 'Comprehensive Docs', desc: 'Detailed guides and examples' },
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

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                <Book className="w-4 h-4" />
                View Documentation
              </button>
              <button className="bg-white hover:bg-slate-50 border-2 border-blue-600 text-blue-700 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                <Key className="w-4 h-4" />
                Get API Keys
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
