
import React from 'react';
import { ArrowUpRight, Trophy } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-mesh">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white px-4 py-1.5 rounded-full mb-8 shadow-sm">
            <Trophy size={14} className="text-amber-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Google Website Of The Day 2025</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-serif text-slate-900 mb-8 max-w-5xl leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700">
            UX/UI Designer & <span className="italic font-light text-slate-400">Senior</span> <span className="relative">
              Frontend
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-blue-100 -z-10"></span>
            </span> Developer
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-12 text-balance leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-700 delay-100">
            I design intuitive user experiences and build fast, scalable front-end applications that turn ideas into real products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
            <a
              href="#portfolio"
              className="group px-8 py-4 bg-slate-900 text-white rounded-full font-semibold flex items-center gap-2 hover:bg-blue-600 transition-all shadow-xl shadow-slate-200"
            >
              View My Work
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold hover:border-blue-300 hover:bg-blue-50 transition-all"
            >
              Hire Me
            </a>
          </div>

          <div className="mt-20 flex flex-col items-center animate-in fade-in duration-1000 delay-300">
            <div className="relative inline-block mb-4">
              <img
                src="https://picsum.photos/seed/elian/400/400"
                alt="Abdisa Kebe"
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-[3rem] shadow-2xl rotate-3"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-slate-700 uppercase">Available for work</span>
              </div>
            </div>
            <p className="text-slate-500 italic text-sm mt-8 max-w-sm">
              Passionate about creating intuitive digital experiences that connect users with value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
