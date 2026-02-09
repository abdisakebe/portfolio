
import React from 'react';
import { BRANDS } from '../constants';

const Marquee: React.FC = () => {
  return (
    <div className="py-12 border-y border-slate-100 bg-white overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex gap-16 md:gap-32 px-12 items-center grayscale opacity-40">
          {[...BRANDS, ...BRANDS].map((brand, idx) => (
            <span key={idx} className="text-2xl font-serif font-bold italic tracking-tighter text-slate-900">
              {brand}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
