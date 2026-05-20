import { ShieldCheck, Eye, Lock, HeartHandshake } from "lucide-react";

export default function TrustSection() {
  const trustPoints = [
    { icon: <ShieldCheck className="w-5 h-5" />, title: "Privacy First", text: "Your emotional data is your own. We never sell or share user data." },
    { icon: <Eye className="w-5 h-5" />, title: "Transparent AI", text: "Clear visibility into how models derive insights and analysis." },
    { icon: <Lock className="w-5 h-5" />, title: "Secure Data", text: "Enterprise-grade encryption for all communications and processing." },
    { icon: <HeartHandshake className="w-5 h-5" />, title: "Ethical AI", text: "Committed to building safe, human-centered intelligence for good." }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-start gap-12">
          {trustPoints.map((point, idx) => (
            <div key={idx} className="flex-1 min-w-[280px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary">{point.icon}</div>
                <h4 className="font-bold text-slate-800 text-base">{point.title}</h4>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 pt-12 border-t border-slate-200 flex flex-wrap justify-center items-center gap-10 opacity-40 grayscale filter">
           {/* Placeholder logos for social proof */}
           <span className="text-xl font-black italic tracking-tighter text-slate-400">GOOGLE CLOUD</span>
           <span className="text-xl font-black italic tracking-tighter text-slate-400 opacity-60 italic">Y COMBINATOR</span>
           <span className="text-xl font-black italic tracking-tighter text-slate-400">TECHSTARS</span>
           <span className="text-xl font-black italic tracking-tighter text-slate-400 opacity-60 italic">AI21 LABS</span>
        </div>
      </div>
    </section>
  );
}
