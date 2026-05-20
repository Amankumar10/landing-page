import { motion } from "motion/react";
import { MessageSquareOff, HelpCircle, UserX, Ghost } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: "Misunderstood Messages",
      desc: "Digital text lacks the nuance of body language and tone.",
      example: '"Fine." One word. A dozen different meanings.'
    },
    {
      icon: <Ghost className="w-6 h-6" />,
      title: "Dry Texts & Ghosting",
      desc: "Communication gaps lead to anxiety and disconnection.",
      example: "Was that a joke? Are they mad? Is it just me?"
    },
    {
      icon: <UserX className="w-6 h-6" />,
      title: "Emotional Disconnect",
      desc: "Most conflicts start with misunderstanding—not lack of care.",
      example: "Talking past each other instead of to each other."
    },
    {
      icon: <MessageSquareOff className="w-6 h-6" />,
      title: "Overthinking",
      desc: "Spending hours drafting a text to avoid a wrong impression.",
      example: "The 'Read 2 hours ago' mental loop."
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Misunderstanding is the root of conflict.
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto italic">
            "Most conflicts start with misunderstanding—not lack of care"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div className="bg-slate-50 w-12 h-12 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{problem.title}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">{problem.desc}</p>
              
              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-primary/20">
                <p className="text-xs font-mono text-slate-400 mb-1 uppercase tracking-wider">The Reality:</p>
                <p className="text-sm font-medium text-slate-700 italic">{problem.example}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
