import { motion } from "motion/react";
import { Eye, Search, PenTool, Heart } from "lucide-react";

export default function SolutionSection() {
  const steps = [
    {
      step: "01",
      icon: <Eye className="w-6 h-6" />,
      title: "Understand Emotional Tone",
      desc: "Identify the hidden subtext, mood, and emotional resonance in any message."
    },
    {
      step: "02",
      icon: <Search className="w-6 h-6" />,
      title: "Decode Intent",
      desc: "Stop guessing. AI helps you see what's actually being requested or felt."
    },
    {
      step: "03",
      icon: <PenTool className="w-6 h-6" />,
      title: "Improve Communication",
      desc: "Get suggestions on how to respond more effectively and empathetically."
    },
    {
      step: "04",
      icon: <Heart className="w-6 h-6" />,
      title: "Build Healthier Relationships",
      desc: "Turn every interaction into an opportunity for deeper connection."
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="solution">
       {/* Background accent */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
              Open Minds.<br />
              <span className="gradient-text">Real Connections.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Compatifi is an Emotion AI platform focused on helping people improve communication, emotional understanding, and relationships using real-time AI insights.
            </p>
            
            <div className="space-y-8">
              {steps.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500 max-w-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-[40px] p-8 shadow-2xl border border-slate-100 overflow-hidden group">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold">Compatifi Chat</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Active Analysis</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-red-400 fill-red-400" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                   <div className="bg-slate-50 p-4 rounded-2xl rounded-bl-none max-w-[80%] border border-slate-100">
                    <p className="text-sm text-slate-700">"I'm fine, you don't need to worry about the dinner plan."</p>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2"
                  >
                    <div className="px-3 py-1 bg-blue-50 text-[10px] font-bold text-primary rounded-full uppercase tracking-widest">Detected: Defensive / Unmet Need</div>
                  </motion.div>
                </div>

                <div className="flex justify-end space-y-2">
                   <div className="bg-primary p-4 rounded-2xl rounded-br-none max-w-[80%] text-white">
                    <p className="text-sm">"Are you sure? It sounds like something is on your mind. I really want to make sure we're both happy with the plan."</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-50 flex items-center gap-4">
                  <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ width: ["20%", "95%", "95%"] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="h-full bg-primary" 
                    />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Connection: 95%</span>
                </div>
              </div>
            </div>
            
            {/* Decoded badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl border border-white/50 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2 mb-1">
                <Search className="w-4 h-4 text-secondary" />
                <span className="text-xs font-bold text-slate-800">Intent Decoded</span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium">Underlying need for validation <br /> detected in subtext.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
