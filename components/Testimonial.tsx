
import React from 'react';
import { Quote } from 'lucide-react';

const Testimonial: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-slate-50 p-12 md:p-20 rounded-[4rem] relative">
            <Quote className="absolute top-10 right-10 text-blue-200" size={60} />
            <p className="text-2xl md:text-3xl font-serif italic text-slate-800 leading-relaxed mb-10 relative z-10">
              “Professional, detail-oriented, and easy to work with. Delivered exactly what we needed on time and exceeded expectations in terms of performance.”
            </p>
            <div className="flex items-center gap-4">
              <img src="https://picsum.photos/seed/sarah/100/100" className="w-14 h-14 rounded-full" alt="Sarah Nguyen" />
              <div>
                <h4 className="font-bold text-slate-900">Sarah Nguyen</h4>
                <p className="text-slate-500 text-sm">Product Manager at FlowSync</p>
              </div>
            </div>
          </div>
          <div className="space-y-12">
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Why work with me</span>
              <h2 className="text-4xl font-serif text-slate-900 italic mb-8">Building trust through quality</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                  <p className="text-slate-600">Strong UX + engineering mindset for seamless collaboration</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                  <p className="text-slate-600">Clean, maintainable, scalable code designed for the future</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                  <p className="text-slate-600">Clear communication and reliable project management</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                  <p className="text-slate-600">Business-focused design decisions that drive actual ROI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
