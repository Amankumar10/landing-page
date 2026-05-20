import { motion } from "motion/react";

export default function Roadmap() {
  const years = [
    {
      year: "2025",
      title: "Research & Validation",
      status: "COMPLETED",
      items: ["Emotion AI core model training", "Focus groups & user research", "Strategic partnership formation"]
    },
    {
      year: "2026",
      title: "Beta Launch",
      status: "IN PROGRESS",
      items: ["Compatifi early access rollout", "Founding user community launch", "Initial data feedback loop integration"]
    },
    {
      year: "FUTURE",
      title: "Emotion AI Ecosystem",
      status: "PLANNED",
      items: ["CannyCam visual intelligence", "Developer API for Emotion AI", "Healthcare & Safety expansions"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-900 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 text-center tracking-tight">Our Mission Timeline</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {years.map((y, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative p-8 rounded-3xl bg-white/5 border border-white/10"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-primary">{y.year}</span>
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${
                  y.status === 'COMPLETED' ? 'bg-green-500/20 text-green-400' :
                  y.status === 'IN PROGRESS' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-white/10 text-white/40'
                }`}>
                  {y.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-6 underline underline-offset-8 decoration-primary/30 decoration-2">{y.title}</h3>
              <ul className="space-y-4">
                {y.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/50 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
