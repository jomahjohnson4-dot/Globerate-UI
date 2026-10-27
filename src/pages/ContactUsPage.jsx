import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function ContactUsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight max-w-5xl mx-auto text-white">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Get in touch with our team - we're here to help
        </p>
      </section>

      <section className="mb-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                <input type="email" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                <select className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Business Inquiry</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500"></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 rounded-xl">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">Email</h3>
                  <p className="text-slate-600 mb-2">Send us an email anytime</p>
                  <p className="text-blue-600 font-semibold">support@globerate.com</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">Phone</h3>
                  <p className="text-slate-600 mb-2">Mon-Fri from 8am to 6pm</p>
                  <p className="text-blue-600 font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">Live Chat</h3>
                  <p className="text-slate-600 mb-2">Available 24/7</p>
                  <button className="text-blue-600 font-semibold hover:underline">Start Chat</button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">Office</h3>
                  <p className="text-slate-600">123 Financial District<br />London, EC2V 8AY<br />United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
