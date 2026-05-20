import { motion } from "motion/react";
import { Linkedin, Globe, MessageCircle } from "lucide-react";

export default function Team() {
  const founders = [
    {
      name: "TBD",
      role: "Founder & Mission Architect",
      bio: "Mission-driven builder focused on creating human-centered AI systems. Leading the vision at AllyNest to bridge the emotional gap between humans and machines.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop",
      links: { linkedin: "#", twitter: "#" }
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
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-[32px] overflow-hidden shadow-2xl border-4 border-white rotate-3">
                  <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                </div>
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
                <div className="flex justify-center md:justify-start gap-4">
                  <a href={founder.links.linkedin} className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-600 hover:text-primary transition-all text-xs font-bold uppercase tracking-wider">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a href={founder.links.twitter} className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-600 hover:text-primary transition-all text-xs font-bold uppercase tracking-wider">
                    <MessageCircle className="w-4 h-4" />
                    Story
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
