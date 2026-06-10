import { motion } from "motion/react";
import { Linkedin, Globe, MessageCircle } from "lucide-react";

export default function Team() {
  const founders = [
    {
      name: "AMAN KUMAR",
      role: "Founder",
      bio: "Mission-driven builder focused on creating human-centered AI systems. Leading the vision at AllyNest to bridge the emotional gap between humans and machines."
      
    }
  ];

  return (
    <section className="py-24 px-6 bg-white" id="team">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-4">Founders</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">The Minds Behind AllyNest</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            A startup journey driven by the belief that AI should understand humans emotionally.
          </p>
        </div>

        <div className="flex justify-center">
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-2xl w-full bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-100 flex flex-col md:flex-row gap-10 items-center md:items-start"
            >
              <div className="relative">
            
                <div className="absolute -bottom-4 -right-4 bg-primary text-white p-3 rounded-2xl shadow-lg ring-4 ring-white">
                  <Globe className="w-5 h-5" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{founder.name}</h3>
                <p className="text-primary font-bold text-sm uppercase tracking-widest mb-6">{founder.role}</p>
                <p className="text-slate-600 mb-8 leading-relaxed italic text-sm md:text-base">
                  "{founder.bio}"
                </p>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
