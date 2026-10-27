import React from 'react';
import { Link, CheckCircle } from 'lucide-react';

export default function ERPIntegrationsPage() {
  const integrations = [
    { name: 'Xero', logo: '💼', desc: 'Sync payments and invoices automatically' },
    { name: 'QuickBooks', logo: '📊', desc: 'Seamless accounting integration' },
    { name: 'SAP', logo: '🏢', desc: 'Enterprise resource planning connectivity' },
    { name: 'NetSuite', logo: '☁️', desc: 'Oracle NetSuite integration' },
    { name: 'Microsoft Dynamics', logo: '🪟', desc: 'Connect with Dynamics 365' },
    { name: 'Sage Intacct', logo: '📈', desc: 'Automate financial operations' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          Accounting and ERP Connection Setups
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Integrate GlobeRate with your existing business systems
        </p>
      </section>

      <section className="mb-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Link className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900">ERP Integrations</h2>
            </div>
            <p className="text-lg text-slate-600 mb-8">
              Automate your international payments and reconciliation with direct integrations to popular accounting and ERP platforms.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {integrations.map((integration, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200 hover:border-blue-400 transition-all">
                  <div className="text-3xl mb-2">{integration.logo}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{integration.name}</h3>
                  <p className="text-sm text-slate-600">{integration.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Integration Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Automated reconciliation', 'Real-time sync', 'Reduced manual entry', 'Error-free processing'].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">{benefit}</span>
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
