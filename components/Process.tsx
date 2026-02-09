
import React from 'react';
import { PROCESS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Our Projects Explained</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 italic">Here’s how it works</h2>
        </div>

        <div className="relative flex flex-col md:flex-row gap-8 justify-between">
          {/* Path Line (SVG) for desktop */}
          <svg className="hidden md:block absolute top-1/4 left-0 w-full h-32 -z-10 pointer-events-none opacity-20" preserveAspectRatio="none">
             <path d="M 100 80 Q 300 -40 600 80 T 1100 80" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="8 8" />
          </svg>

          {PROCESS.map((step) => (
            <div key={step.id} className="flex-1 bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative group">
              <span className="text-5xl font-serif italic text-blue-200 group-hover:text-blue-400 transition-colors mb-4 block">{step.id}</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
