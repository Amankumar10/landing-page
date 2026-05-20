import { motion } from "motion/react";
import { 
  Zap, 
  Activity, 
  LineChart, 
  Users, 
  ShieldAlert, 
  BrainCircuit 
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Tone Detection",
      desc: "Real-time identification of emotional nuances like sarcasm, sincerity, or frustration in digital communication."
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "Emotional Insights",
      desc: "Deep-dive analysis into why messages resonate certain ways and how to bridge the emotional gap."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Communication Patterns",
      desc: "Understand your relationship dynamics over time with intelligent pattern recognition and data-driven visibility."
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Compatibility Analysis",
      desc: "Measure how your communication styles align and where you can adapt for better harmony."
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: "Conflict Detection",
      desc: "Early warning system for rising tension before it escalates into full-blown misunderstanding."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Emotion AI",
      desc: "Flagship engine powered by AllyNest's proprietary emotional layer for the next generation of human-AI synergy."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white" id="product">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Understand beyond words.</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Compatifi gives you the tools to master self-awareness and social intelligence in a digital-first world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[32px] bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all border border-transparent hover:border-slate-100 group"
            >
              <div className="mb-6 w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
