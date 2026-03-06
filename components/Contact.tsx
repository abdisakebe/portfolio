import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Mail,
  Phone,
  ArrowLeft,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import {
  contactFormSchema,
  type ContactFormValues,
} from "../schemas/contact-form-schema";
import { sendEmailAction } from "../app/actions/contact";

const services = [
  { value: "fd", label: "Frontend Development" },
  { value: "bd", label: "Backend Development" },
  { value: "web", label: "Web Development" },
  { value: "design", label: "UI/UX Design" },
  { value: "pm", label: "Product Management" },
  { value: "Other", label: "Other" },
];

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const selectedService = watch("service");

  const toast_error = (message: string) =>
    toast.error(message, { theme: "colored" });

  const toast_success = (message: string) =>
    toast.success(message, { theme: "colored" });

  async function onSubmit(data: ContactFormValues) {
    try {
      const result = await sendEmailAction(data);

      if (result.success) {
        toast_success(result.message);
        reset();
      } else {
        toast_error(
          result.message || "An error occurred while sending your message.",
        );
      }
    } catch (error) {
      toast_error(
        "An error occurred while sending your message. Please try again later.",
      );
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
    >
      <ToastContainer position="bottom-right" />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -mr-64 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full -ml-64 -mb-32 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 animate-in fade-in slide-in-from-left-4 duration-500">
          <h1 className="text-5xl md:text-7xl font-serif text-slate-900 dark:text-white mb-6 italic">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Have a project in mind or just want to chat? I'm always open to new
            opportunities and creative collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form Container */}
          <div className="lg:col-span-2 border border-slate-200 dark:border-slate-800 p-8 md:p-12 rounded-[3.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-none bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest pl-2">
                    Full Name
                  </label>
                  <input
                    {...register("fullName")}
                    placeholder="John Doe"
                    className={`w-full bg-slate-100 dark:bg-slate-800/50 border ${
                      errors.fullName ? "border-red-500" : "border-transparent"
                    } py-5 px-8 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder:text-slate-400 dark:text-white`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-500 mt-2 pl-2 font-medium">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest pl-2">
                    Email Address
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="john@example.com"
                    className={`w-full bg-slate-100 dark:bg-slate-800/50 border ${
                      errors.email ? "border-red-500" : "border-transparent"
                    } py-5 px-8 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder:text-slate-400 dark:text-white`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-2 pl-2 font-medium">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest pl-2">
                  Interested In
                </label>
                <div className="relative group">
                  <select
                    {...register("service")}
                    className={`w-full bg-slate-100 dark:bg-slate-800/50 border ${
                      errors.service ? "border-red-500" : "border-transparent"
                    } py-5 px-8 rounded-3xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-slate-700 dark:text-slate-300 cursor-pointer`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-blue-500 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
                {errors.service && (
                  <p className="text-xs text-red-500 mt-2 pl-2 font-medium">
                    {errors.service.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest pl-2">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className={`w-full bg-slate-100 dark:bg-slate-800/50 border ${
                    errors.message ? "border-red-500" : "border-transparent"
                  } py-6 px-8 rounded-[2.5rem] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder:text-slate-400 dark:text-white min-h-[200px] resize-none`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-2 pl-2 font-medium">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-12 py-5 bg-slate-900 dark:bg-blue-600 text-white font-bold rounded-3xl hover:bg-blue-600 dark:hover:bg-blue-500 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 rotate-180 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="bg-slate-900 dark:bg-blue-600 text-white p-12 rounded-[3.5rem] shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700" />

              <h3 className="text-3xl font-serif italic mb-10">
                Contact Details
              </h3>

              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-white/20 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 dark:text-blue-100 text-xs font-bold uppercase tracking-widest mb-1">
                      Email Me
                    </p>
                    <a
                      href="mailto:kiyakebe799@gmail.com"
                      className="text-lg font-medium hover:underline"
                    >
                      kiyakebe799@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-white/20 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 dark:text-blue-100 text-xs font-bold uppercase tracking-widest mb-1">
                      Call Me
                    </p>
                    <a
                      href="tel:+251941709090"
                      className="text-lg font-medium hover:underline"
                    >
                      +251 941 709 090
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-white/10">
                <p className="text-sm text-blue-200 dark:text-blue-100 mb-6 font-bold uppercase tracking-widest">
                  Follow Me
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-4 bg-white/10 rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-4 bg-white/10 rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-4 bg-white/10 rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-300"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-12 rounded-[3.5rem] shadow-lg shadow-slate-200/50 dark:shadow-none">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Located in
              </h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed italic">
                Addis Ababa, Ethiopia
                <br />
                Available for remote work worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Simple Page Footer */}
        <div className="mt-24 pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm">
          <div className="flex gap-8">
            <Link
              to="/"
              className="hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </Link>
            <a
              href="/#about"
              className="hover:text-blue-600 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="/#portfolio"
              className="hover:text-blue-600 transition-colors font-medium"
            >
              Portfolio
            </a>
          </div>
          <p>© {new Date().getFullYear()} Abdisa Kebe. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
