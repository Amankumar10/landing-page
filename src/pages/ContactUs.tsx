import { motion } from "motion/react";
import { Mail, MapPin, Linkedin, Twitter, Send } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Get in touch</span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">Let's talk about <br /><span className="gradient-text">Emotional AI.</span></h1>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Whether you're interested in our founding user program, partnership opportunities, or just want to learn more about AllyNest, we're here to listen.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-primary border border-slate-100">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                  <p className="text-sm text-slate-500">founders@allynest.com</p>
                  <p className="text-sm text-slate-500">support@allynest.com</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-primary border border-slate-100">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                  <p className="text-sm text-slate-500">AI Innovation District</p>
                  <p className="text-sm text-slate-500">Global Remote First</p>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-12 border-t border-slate-100">
               <h4 className="font-bold text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-4">Follow our journey</h4>
               <div className="flex gap-4">
                  <a href="#" className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-slate-400 hover:text-primary transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-slate-400 hover:text-primary transition-all">
                    <Twitter className="w-5 h-5" />
                  </a>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-50 rounded-[48px] p-8 md:p-12 border border-slate-100 shadow-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-2">First Name</label>
                  <input type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:outline-none transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-2">Last Name</label>
                  <input type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-2">Email Address</label>
                <input type="email" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-2">Inquiry Type</label>
                <select className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:outline-none transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Founding User Program</option>
                  <option>Partnership</option>
                  <option>Investor Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-2">Message</label>
                <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:outline-none transition-all resize-none" placeholder="Tell us more..."></textarea>
              </div>
              <button className="w-full py-5 bg-primary text-white rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
