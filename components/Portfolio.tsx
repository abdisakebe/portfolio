
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Best Projects</span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-slate-900">Selected Works</h2>
          </div>
          <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            See All Projects &rarr;
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[3rem] bg-white aspect-[4/3] mb-8 shadow-sm">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-900 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <ExternalLink size={24} />
                   </div>
                </div>
              </div>
              <div className="flex justify-between items-start px-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-slate-500 text-sm max-w-sm mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white border border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-400 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded-full shrink-0">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
