import { motion } from "motion/react";
import { TrendingUp, Users, Target, Globe } from "lucide-react";

export default function InvestorSection() {
  const metrics = [
    { icon: <TrendingUp className="w-5 h-5" />, label: "Emotion AI Market", value: "$37B+", note: "Est. by 2030" },
    { icon: <Users className="w-5 h-5" />, label: "Digital Disconnect", value: "85%", note: "Growth in anxiety" },
    { icon: <Target className="w-5 h-5" />, label: "Product Goal", value: "10M+", note: "Users by 2028" },
    { icon: <Globe className="w-5 h-5" />, label: "Market Opportunity", value: "Global", note: "Multi-language" }
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden" id="investors">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h4 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">Investor focus</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Why AllyNest, Why Now?</h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-bold italic">01</div>
                <div>
                   <h4 className="font-bold text-slate-900 mb-1">Surge in AI Adoption</h4>
                   <p className="text-sm text-slate-500">The world is ready for AI that feels more human and less robotic.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary font-bold italic">02</div>
                <div>
                   <h4 className="font-bold text-slate-900 mb-1">Communication Breakdown</h4>
                   <p className="text-sm text-slate-500">Digital-first interactions have created a massive gap in emotional understanding.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 font-bold italic">03</div>
                <div>
                   <h4 className="font-bold text-slate-900 mb-1">The Emotional Data Layer</h4>
                   <p className="text-sm text-slate-500">Proprietary infrastructure providing unique insights unavailable elsewhere.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -z-0" />
               <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Strategic Vision</h4>
               <p className="text-white/60 text-sm italic mb-6 leading-relaxed">
                 "AllyNest is building the essential emotional intelligence foundation that will power all future human-machine interactions."
               </p>
               <button className="text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors flex items-center gap-2">
                 Download Pitch Deck (Coming Soon)
               </button>
            </div>
          </div>

          <div className="relative">
             <div className="grid grid-cols-2 gap-4 md:gap-8">
               {metrics.map((metric, idx) => (
                 <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all"
                 >
                   <div className="text-slate-400 mb-4 group-hover:text-primary transition-colors">{metric.icon}</div>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{metric.label}</p>
                   <p className="text-3xl font-bold text-slate-900 mb-1">{metric.value}</p>
                   <p className="text-[10px] italic text-slate-500">{metric.note}</p>
                 </motion.div>
               ))}
             </div>
             
             {/* Abstract Chart Background */}
             <div className="mt-12 bg-white rounded-[32px] border border-slate-100 p-8 h-64 relative overflow-hidden shadow-sm">
                <div className="flex items-center justify-between mb-8">
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Market Growth Potential</p>
                   <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                     <TrendingUp className="w-4 h-4 text-green-500" />
                   </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full flex items-end justify-between px-8 pb-4 gap-2">
                  {[40, 60, 45, 80, 100, 140, 180, 220].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: h }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 1 }}
                      className="w-full bg-slate-100 rounded-t-lg group-hover:bg-primary/20 transition-colors"
                    />
                  ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
