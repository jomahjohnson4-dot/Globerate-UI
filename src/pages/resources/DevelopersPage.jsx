import React from 'react';
import { Terminal, Code, Book, GitBranch, MessageSquare } from 'lucide-react';

export default function DevelopersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          Developer Resources
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Everything you need to integrate with GlobeRate
        </p>
      </section>

      <section className="mb-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900">Developer Hub</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: Book, title: 'API Documentation', desc: 'Complete API reference with examples', link: '#' },
                { icon: Code, title: 'SDKs & Libraries', desc: 'Official SDKs for popular languages', link: '#' },
                { icon: GitBranch, title: 'GitHub', desc: 'Open source examples and tools', link: '#' },
                { icon: MessageSquare, title: 'Developer Community', desc: 'Join our Discord/Slack community', link: '#' },
              ].map((item, idx) => (
                <a key={idx} href={item.link} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all group">
                  <item.icon className="w-10 h-10 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </a>
              ))}
            </div>

            <div className="bg-slate-900 rounded-xl p-6 text-green-400 font-mono text-sm">
              <div className="text-slate-400 mb-2"># Quick start</div>
              <div>curl https://api.globerate.com/v1/rates/latest \</div>
              <div className="ml-4">-H "Authorization: Bearer YOUR_API_KEY"</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
