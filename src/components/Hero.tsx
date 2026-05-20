import { motion } from "motion/react";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Building the Emotional Layer for AI</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
        >
          AI that understands <br />
          <span className="gradient-text">emotions</span>, not just words.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Helping people communicate better through real-time Emotion AI. Build healthier relationships, decode intent, and understand the "why" behind every word.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group">
            Join Early Access
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 glass text-slate-700 rounded-full font-bold hover:bg-white/90 transition-all flex items-center justify-center gap-2 group border border-slate-200">
            <Play className="w-4 h-4 fill-slate-700" />
            Watch Demo
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="glass rounded-[32px] p-2 md:p-4 shadow-2xl overflow-hidden aspect-video flex items-center justify-center border border-white/40">
            <div className="bg-slate-100 w-full h-full rounded-[24px] flex flex-col items-center justify-center relative overflow-hidden group">
              {/* Mockup UI components */}
              <div className="absolute top-8 left-8 w-64 glass p-4 rounded-xl shadow-lg border border-white/50 text-left">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Real-time Analysis</span>
                </div>
                <p className="text-xs font-semibold text-slate-700 mb-1">Tone Detected: Sincere</p>
                <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="h-full bg-primary" 
                  />
                </div>
              </div>

              <div className="absolute bottom-8 right-8 w-72 glass p-4 rounded-xl shadow-lg border border-white/50 text-left">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 italic text-right">Compatifi Insight</p>
                <p className="text-xs text-slate-600 bg-white/50 p-3 rounded-lg border border-slate-100">
                  "The recipient seems receptive but hesitant. Try clarifying the intent and using more collaborative language."
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-4 mx-auto rotate-12 group-hover:rotate-0 transition-transform duration-700">
                   <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Emotional Intelligence Layer</p>
              </div>
              
              {/* Abstract waves */}
              <svg className="absolute bottom-0 w-full h-24 opacity-20" viewBox="0 0 1440 320">
                <path fill="#4F8DFF" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
          </div>
          
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass px-6 py-2 rounded-full shadow-lg border border-white/60">
            <p className="text-xs font-medium text-slate-500 whitespace-nowrap">
              <span className="text-primary font-bold">50+</span> founding users already joined
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
