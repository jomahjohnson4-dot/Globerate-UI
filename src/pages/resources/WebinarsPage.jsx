import React from 'react';
import { Video, Calendar, Clock, Users } from 'lucide-react';

export default function WebinarsPage() {
  const webinars = [
    { title: 'FX Risk Management for Growing Businesses', date: '2024-02-01', time: '2:00 PM GMT', attendees: '450+' },
    { title: 'Optimizing International Payment Flows', date: '2024-02-15', time: '3:00 PM GMT', attendees: '320+' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          Webinars
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Live and on-demand educational sessions
        </p>
      </section>

      <section className="mb-12">
        <div className="max-w-4xl mx-auto space-y-4">
          {webinars.map((webinar, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Video className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-slate-900 mb-2">{webinar.title}</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{webinar.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{webinar.attendees} registered</span>
                    </div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
