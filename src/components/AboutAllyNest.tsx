import { motion } from "motion/react";
import { Globe, Layers, ShieldCheck } from "lucide-react";

export default function AboutAllyNest() {
  const pillars = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Universal Emotional Layer",
      desc: "Creating a standard language for emotional understanding in machine-human interactions."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Ecosystem First",
      desc: "From communication (Compatifi) to visual intelligence (CannyCam) and core AI infrastructure."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Human-Centered AI",
      desc: "Building systems that prioritize human well-being, privacy, and authentic connection."
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
             <div className="grid grid-cols-1 gap-8">
               {pillars.map((pillar, idx) => (
                 <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
                 >
                   <div className="flex items-center gap-4 mb-4">
                     <div className="text-primary">{pillar.icon}</div>
                     <h3 className="text-xl font-bold text-slate-900">{pillar.title}</h3>
                   </div>
                   <p className="text-slate-500 leading-relaxed">{pillar.desc}</p>
                 </motion.div>
               ))}
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <h4 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">The Vision</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Building the Emotional Layer for AI</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              AllyNest is on a mission to help AI understand humans emotionally. We believe the next frontier of artificial intelligence isn't just better logic—it's deeper empathy.
            </p>
            <p className="text-slate-500 mb-10 leading-relaxed italic border-l-4 border-secondary pl-6 py-2 bg-secondary/5 rounded-r-lg">
              "We're building an ecosystem where communication, healthcare, and safety become smarter and more human-centered."
            </p>
            
            <div className="flex items-center gap-6">
               <div className="px-6 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Product 01</span>
                 <span className="text-sm font-bold text-slate-800">Compatifi</span>
               </div>
               <div className="px-6 py-2 bg-white rounded-full border border-slate-200 shadow-sm opacity-50 grayscale">
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Product 02</span>
                 <span className="text-sm font-bold text-slate-800 italic">CannyCam</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
