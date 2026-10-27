import React from 'react';
import { Layers, Upload, Download, Users, FileText } from 'lucide-react';

export default function BatchPaymentsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          Bulk & Payroll Transfer Portal
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Pay multiple recipients in one go with our batch payment solution
        </p>
      </section>

      <section className="mb-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Layers className="w-8 h-8 text-blue-600" />
              Batch Payments
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Upload a CSV file with up to 10,000 payments and send them all at once. Perfect for payroll, vendor payments, and mass payouts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 border-dashed rounded-xl p-8 text-center">
                <Upload className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Upload CSV File</h3>
                <p className="text-slate-600 mb-4">Drag and drop or click to upload</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold">
                  Choose File
                </button>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Download className="w-5 h-5 text-blue-600" />
                  Template
                </h3>
                <p className="text-slate-600 mb-4">Download our CSV template to ensure correct formatting</p>
                <button className="bg-white hover:bg-slate-100 border-2 border-blue-600 text-blue-700 px-4 py-2 rounded-lg font-semibold">
                  Download Template
                </button>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-sm text-slate-600">Required fields: Recipient Name, Account/IBAN, Amount, Currency</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Users, title: 'Up to 10,000 payments', desc: 'Send in one batch' },
                { icon: FileText, title: 'Review before sending', desc: 'Verify all payments' },
                { icon: Layers, title: 'Bulk discounts', desc: 'Lower fees for large batches' },
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
        </div>
      </section>
    </div>
  );
}
