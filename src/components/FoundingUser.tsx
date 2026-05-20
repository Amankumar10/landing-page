import { motion } from "motion/react";
import { Rocket, BadgeCheck, Zap, Lock, MessageSquarePlus } from "lucide-react";

export default function FoundingUser() {
  const benefits = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Early Access",
      desc: "Be the first to test new Emotion AI models."
    },
    {
      icon: <BadgeCheck className="w-5 h-5" />,
      title: "Founding Badge",
      desc: "Exclusive digital badge for early supporters."
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Priority Features",
      desc: "Get access to premium tools before launch."
    },
    {
      icon: <MessageSquarePlus className="w-5 h-5" />,
      title: "Direct Feedback",
      desc: "Co-build with the founding engineering team."
    }
  ];

  return (
    <section className="py-24 px-6 overflow-hidden" id="waitlist">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[48px] p-8 md:p-16 relative overflow-hidden">
          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-0" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/10 rounded-full mb-8">
                <Rocket className="w-4 h-4 text-white" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">Limited Slots Available</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Become a <br />Founding User 🚀</h2>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">
                Join our exclusive founding cohort and help us define the future of conversational intelligence. Priority access to the Emotion AI ecosystem for life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full sm:flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <button className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-blue-600 transition-all hover:scale-105 shadow-xl shadow-primary/20">
                  Join Waitlist
                </button>
              </div>
              
              <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Privacy focused. We never share your data.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-white/5 border border-white/5 rounded-3xl backdrop-blur-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="text-white font-bold mb-2">{benefit.title}</h4>
                  <p className="text-white/40 text-sm">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
