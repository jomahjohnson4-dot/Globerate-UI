import React from 'react';
import { HelpCircle, Search, MessageCircle, Mail, Phone } from 'lucide-react';

export default function HelpCentrePage() {
  const faqs = [
    { q: 'How do I send money?', a: 'Create an account, verify your identity, add a recipient, and make your transfer.' },
    { q: 'What are the fees?', a: 'Fees vary by currency pair and amount. View our pricing page for details.' },
    { q: 'How long do transfers take?', a: 'Most transfers arrive within minutes, some may take up to 1 business day.' },
    { q: 'Is it safe to send money?', a: 'Yes, we use bank-level encryption and are regulated in multiple jurisdictions.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          Help Centre
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Find answers to your questions or get in touch with our support team
        </p>
      </section>

      <section className="mb-12">
        <div className="max-w-3xl mx-auto">
          <div className="relative mb-8">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full bg-white border-2 border-slate-200 rounded-xl pl-12 pr-4 py-4 text-slate-900 shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 text-center hover-lift">
            <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Live Chat</h3>
            <p className="text-slate-600 mb-4">Chat with our support team</p>
            <button className="text-blue-600 hover:text-blue-700 font-semibold">Start Chat →</button>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 text-center hover-lift">
            <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Email Support</h3>
            <p className="text-slate-600 mb-4">support@globerate.com</p>
            <button className="text-blue-600 hover:text-blue-700 font-semibold">Send Email →</button>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 text-center hover-lift">
            <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Phone Support</h3>
            <p className="text-slate-600 mb-4">Available 24/7</p>
            <button className="text-blue-600 hover:text-blue-700 font-semibold">Call Us →</button>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition-colors">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
