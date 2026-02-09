
import React from 'react';
import { Layout, Code, Zap, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

const IconMap: Record<string, any> = {
  Layout: Layout,
  Code: Code,
  Zap: Zap,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Services</span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 italic">
            Focus is on blending clear strategy, <br />
            <span className="not-italic text-slate-400">thoughtful design, and user empathy</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = IconMap[service.icon];
            return (
              <div key={idx} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">{service.title}</h3>
                <ul className="space-y-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-500 text-sm">
                      <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
