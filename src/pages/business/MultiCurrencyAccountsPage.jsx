import React from 'react';
import { CreditCard, Globe, ArrowLeftRight, Plus } from 'lucide-react';

export default function MultiCurrencyAccountsPage() {
  const accounts = [
    { currency: 'USD', flag: '🇺🇸', balance: '25,430.50', symbol: '$' },
    { currency: 'EUR', flag: '🇪🇺', balance: '18,920.30', symbol: '€' },
    { currency: 'GBP', flag: '🇬🇧', balance: '12,450.75', symbol: '£' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          Global Business Accounts Management
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Hold, manage, and exchange multiple currencies in one account
        </p>
      </section>

      <section className="mb-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-blue-600" />
                Multi-Currency Accounts
              </h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-semibold">
                <Plus className="w-4 h-4" />
                Add Currency
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {accounts.map((acc, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{acc.flag}</span>
                    <span className="font-bold text-slate-900">{acc.currency}</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">
                    {acc.symbol}{acc.balance}
                  </div>
                  <div className="text-sm text-slate-600">Available balance</div>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <ArrowLeftRight className="w-5 h-5 text-blue-600" />
                Currency Exchange
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">From</label>
                  <select className="w-full bg-white border-2 border-slate-200 rounded-lg px-3 py-2 text-slate-900">
                    <option>🇺🇸 USD</option>
                    <option>🇪🇺 EUR</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Amount</label>
                  <input type="number" className="w-full bg-white border-2 border-slate-200 rounded-lg px-3 py-2 text-slate-900" placeholder="1000" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">To</label>
                  <select className="w-full bg-white border-2 border-slate-200 rounded-lg px-3 py-2 text-slate-900">
                    <option>🇪🇺 EUR</option>
                    <option>🇺🇸 USD</option>
                  </select>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold">
                  Exchange
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
