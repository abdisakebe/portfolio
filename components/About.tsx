
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-slate-900 mb-8">
              Pushing Boundaries <span className="italic text-slate-400">since 2011</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                I’m a UX/UI expert and senior frontend developer with a passion for building 
                <strong className="text-slate-900 font-semibold"> user-centered, visually clean, and high-performing digital products</strong>.
              </p>
              <p>
                I help startups, agencies, and businesses transform ideas into polished interfaces—handling 
                everything from UX research and UI design to production-ready frontend code. 
                My approach blends design thinking with engineering discipline.
              </p>
              <p>
                I focus on clarity, simplicity, and results—designs that users understand instantly and 
                code that developers can maintain confidently.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-blue-50 rounded-[4rem] p-8 md:p-12 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/30 rounded-full -mr-20 -mt-20 blur-3xl" />
               <div className="relative z-10 grid gap-8">
                  <div className="flex justify-between items-end border-b border-blue-100 pb-4">
                     <span className="text-slate-400 font-medium">Product Designer</span>
                     <span className="text-slate-900 font-bold">2023 &rarr; Now</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-blue-100 pb-4">
                     <span className="text-slate-400 font-medium">UI/UX Designer</span>
                     <span className="text-slate-900 font-bold">2022 &rarr; 2023</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-blue-100 pb-4">
                     <span className="text-slate-400 font-medium">Visual Designer</span>
                     <span className="text-slate-900 font-bold">2021 &rarr; 2022</span>
                  </div>
                  <div className="flex justify-between items-end pb-4">
                     <span className="text-slate-400 font-medium">Junior UX Researcher</span>
                     <span className="text-slate-900 font-bold">2020 &rarr; 2021</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
