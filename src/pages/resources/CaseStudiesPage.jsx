import React from 'react';
import { BookOpen, TrendingUp, DollarSign } from 'lucide-react';

export default function CaseStudiesPage() {
  const studies = [
    { company: 'TechStart Inc.', result: '60% reduction in payment fees', industry: 'Technology' },
    { company: 'GlobalTrade Co.', result: '$2M saved annually', industry: 'Import/Export' },
    { company: 'EduWorld', result: 'Faster payroll for 2000+ employees', industry: 'Education' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          Case Studies
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          See how businesses succeed with GlobeRate
        </p>
      </section>

      <section className="mb-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {studies.map((study, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover-lift">
              <BookOpen className="w-10 h-10 text-blue-600 mb-3" />
              <h2 className="text-xl font-bold text-slate-900 mb-2">{study.company}</h2>
              <p className="text-sm text-slate-600 mb-3">{study.industry}</p>
              <div className="bg-green-50 rounded-lg p-3 mb-4 border border-green-200">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-700">{study.result}</span>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">Read case study →</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
