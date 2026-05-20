import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function CareersPage() {
  const positions = [
    { title: "Founding AI Engineer", team: "Engineering", type: "Full-time", location: "Remote / Hybrid" },
    { title: "Product Designer", team: "Design", type: "Full-time", location: "Remote" },
    { title: "Summer Internship 2026", team: "General", type: "Internship", location: "Remote" }
  ];

  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Waitlist for Talent</span>
          <h1 className="text-4xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">Join the <br />Emotional Revolution.</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We are looking for mission-driven builders, designers, and researchers who believe AI should understand humans emotionally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-slate-50 p-8 md:p-12 rounded-[48px] border border-slate-100">
             <h3 className="text-2xl font-bold mb-6">Our Culture</h3>
             <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary shadow-sm"><Sparkles className="w-4 h-4" /></div>
                  <p className="text-slate-600"><strong>Mission-Driven:</strong> We build for human well-being, not just engagement metrics.</p>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary shadow-sm"><Sparkles className="w-4 h-4" /></div>
                  <p className="text-slate-600"><strong>Radical Empathy:</strong> We practice what we build—understanding is at the core of our team.</p>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary shadow-sm"><Sparkles className="w-4 h-4" /></div>
                  <p className="text-slate-600"><strong>Async-First:</strong> We value deep work and respect boundaries across timezones.</p>
                </li>
             </ul>
          </div>
          <div className="bg-primary p-8 md:p-12 rounded-[48px] text-white overflow-hidden relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
             <h3 className="text-2xl font-bold mb-6">Internship Program</h3>
             <p className="text-white/80 mb-8 leading-relaxed">
               Each summer, we welcome a cohort of designers and engineers to help us build the next version of the Emotional Layer. Gain hands-on experience in a fast-paced AI startup.
             </p>
             <button className="px-6 py-3 bg-white text-primary rounded-full font-bold hover:scale-105 transition-all">
               Apply for Internship
             </button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-8 pl-4">Open Opportunities</h3>
          {positions.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-white border border-slate-100 rounded-[32px] hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col md:flex-row justify-between items-center gap-6"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/5 px-2 py-0.5 rounded-full">{job.team}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{job.location}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900">{job.title}</h4>
              </div>
              <button className="flex items-center gap-2 text-primary font-bold hover:translate-x-2 transition-transform">
                View Role <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
