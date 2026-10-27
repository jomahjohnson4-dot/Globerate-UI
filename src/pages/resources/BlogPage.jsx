import React from 'react';
import { FileText, Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const posts = [
    { id: 1, title: 'Understanding Mid-Market Exchange Rates', date: '2024-01-15', author: 'Sarah Chen', excerpt: 'What are mid-market rates and how do they compare to bank rates?' },
    { id: 2, title: 'Best Practices for International Business Payments', date: '2024-01-10', author: 'Mike Johnson', excerpt: 'Tips for optimizing your cross-border payment strategy.' },
    { id: 3, title: 'Currency Hedging for Small Businesses', date: '2024-01-05', author: 'Emma Wilson', excerpt: 'How SMEs can protect against currency volatility.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          Blog
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Insights on foreign exchange, international payments, and global finance
        </p>
      </section>

      <section className="mb-12">
        <div className="max-w-5xl mx-auto space-y-6">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover-lift">
              <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2 hover:text-blue-600 cursor-pointer">{post.title}</h2>
              <p className="text-slate-600 mb-4">{post.excerpt}</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1">
                Read more <ArrowRight className="w-4 h-4" />
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
