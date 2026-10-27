import React, { useState } from 'react';
import { Send, Shield, Clock, CreditCard, CheckCircle, Globe } from 'lucide-react';

export default function SendMoneyPage() {
  const [amount, setAmount] = useState(1000);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');

  const currencies = [
    { code: 'USD', name: 'US Dollar', flag: '🇺🇸', symbol: '$' },
    { code: 'EUR', name: 'Euro', flag: '🇪🇺', symbol: '€' },
    { code: 'GBP', name: 'British Pound', flag: '🇬🇧', symbol: '£' },
    { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵', symbol: '¥' },
    { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺', symbol: 'A$' },
    { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', symbol: 'C$' },
    { code: 'TZS', name: 'Tanzanian Shilling', flag: '🇹🇿', symbol: 'TSh' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          Secure International Money Transfers
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto mb-6">
          Send money to 190+ countries with bank-beating rates and low fees
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center text-blue-100">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span>Bank-level security</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>Fast delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>Trusted by millions</span>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl shadow-blue-900/30 overflow-hidden">
            <div className="p-6 md:p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Send className="w-6 h-6 text-blue-600" />
                Send Money
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">You send</label>
                  <div className="flex gap-3">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="flex-1 bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-lg font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500"
                    />
                    <select
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value)}
                      className="bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500"
                    >
                      {currencies.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Recipient gets</label>
                  <div className="flex gap-3">
                    <input
                      type="number"
                      value={(amount * 0.92).toFixed(2)}
                      readOnly
                      className="flex-1 bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-lg font-semibold"
                    />
                    <select
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value)}
                      className="bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500"
                    >
                      {currencies.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Exchange rate</span>
                    <span className="font-semibold text-slate-900">1 {fromCurrency} = 0.9200 {toCurrency}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Fee</span>
                    <span className="font-semibold text-slate-900">$4.99</span>
                  </div>
                  <div className="flex justify-between text-sm pt-2 border-t border-blue-200">
                    <span className="text-slate-600">Delivery time</span>
                    <span className="font-semibold text-green-700">Within minutes</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-4 rounded-xl transition-all shadow-lg text-lg">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Secure Transfers</h3>
            <p className="text-slate-600">256-bit encryption and regulatory compliance in every market</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
            <Globe className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Global Network</h3>
            <p className="text-slate-600">Send to 190+ countries and territories worldwide</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
            <CreditCard className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Multiple Payment Methods</h3>
            <p className="text-slate-600">Bank transfer, debit card, and more options available</p>
          </div>
        </div>
      </section>
    </div>
  );
}
