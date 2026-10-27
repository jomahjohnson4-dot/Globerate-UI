import React, { useState } from 'react';
import { Bell, Plus, Trash2, Mail, Smartphone } from 'lucide-react';

export default function RateAlertsPage() {
  const [alerts, setAlerts] = useState([
    { id: 1, pair: 'USD → EUR', target: 0.9200, current: 0.9205, condition: 'below', active: true },
    { id: 2, pair: 'GBP → USD', target: 1.2800, current: 1.2650, condition: 'above', active: true },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          Custom User Rate Notification Settings
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Get alerted when exchange rates reach your target
        </p>
      </section>

      <section className="mb-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Bell className="w-6 h-6 text-blue-600" />
                My Rate Alerts
              </h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-semibold">
                <Plus className="w-4 h-4" />
                Create Alert
              </button>
            </div>

            {alerts.length === 0 ? (
              <div className="text-center py-12">
                <Bell className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600 mb-4">No alerts yet</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
                  Create your first alert
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div key={alert.id} className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:bg-blue-50 hover:border-blue-300 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">🇺🇸</span>
                          <span className="text-xl">🇪🇺</span>
                          <span className="font-semibold text-slate-900">{alert.pair}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${alert.active ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-600'}`}>
                          {alert.active ? 'Active' : 'Paused'}
                        </span>
                      </div>
                      <button className="text-red-600 hover:text-red-700 p-2">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-slate-600">Current rate:</span>
                        <span className="font-semibold text-slate-900 ml-2">{alert.current}</span>
                      </div>
                      <div>
                        <span className="text-slate-600">Alert when:</span>
                        <span className="font-semibold text-slate-900 ml-2">{alert.condition} {alert.target}</span>
                      </div>
                      <div>
                        <span className="text-slate-600">Notify via:</span>
                        <span className="font-semibold text-slate-900 ml-2 flex items-center gap-1">
                          <Mail className="w-3 h-3" /> Email, <Smartphone className="w-3 h-3" /> Push
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">How rate alerts work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Plus className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm text-slate-700">Set your target rate</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Bell className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm text-slate-700">We monitor rates 24/7</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm text-slate-700">Get notified instantly</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
