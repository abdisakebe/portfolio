import React from "react";
import { Mail, Linkedin, Github, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <section
      id="contact"
      className="pt-24 pb-12 bg-blue-600 text-white rounded-t-[4rem] md:rounded-t-[6rem]"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-8xl font-serif italic mb-6">
          Let’s Make It Happen
        </h2>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Always open to new opportunities, collaborations, and creative
          challenges. Let’s work together to bring your ideas to life.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl mb-24"
        >
          <Mail size={20} className="text-blue-600" />
          Get in Touch
        </Link>

        <div className="grid md:grid-cols-3 gap-12 text-left border-t border-blue-400/30 pt-16">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-200 mb-6">
              Follow Me
            </h4>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Globe size={24} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-200 mb-6">
              Location
            </h4>
            <p className="text-blue-50 font-medium">Digital Nomad / Remote</p>
            <p className="text-blue-200 text-sm">
              Working with clients worldwide
            </p>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-blue-200 text-sm mb-2">
              Ready to start a project?
            </p>
            <p className="text-xl font-bold">your@email.com</p>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-blue-400/20 flex flex-col md:flex-row justify-between items-center gap-6 text-blue-200 text-sm">
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors">
              Portfolio
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Blog
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <p>© {new Date().getFullYear()} Abdisa Kebe. All rights reserved.</p>
        </div>

        <div className="mt-20 overflow-hidden pointer-events-none select-none">
          <span className="text-[15vw] font-serif font-bold italic text-blue-500/30 whitespace-nowrap leading-none block ">
            Abdisa
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
