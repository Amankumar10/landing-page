import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "What is Compatifi?",
      a: "Compatifi is our flagship Emotion AI platform. It analyzes real-time user communications to help decode emotional intent, improve tone, and build healthier relationships through intelligent insights."
    },
    {
      q: "How does Emotion AI work?",
      a: "Our proprietary 'Emotional Layer' analyzes linguistic patterns, sentiment shifts, and contextual cues in real-time to build a map of the underlying emotional landscape of a conversation."
    },
    {
      q: "Who is this for?",
      a: "Compatifi is built for anyone who wants to improve their social intelligence—from couples wanting better communication to professionals navigating high-stakes digital negotiations."
    },
    {
      q: "How do you handle privacy?",
      a: "Privacy is our DNA. All emotional processing is strictly anonymous and encrypted. We do not store message history once analysis is complete, and we never share your data with third parties."
    },
    {
      q: "When is the launch?",
      a: "We are currently in a closed beta with our founding cohort. We plan to expand access throughout 2026. Join our waitlist to be part of the early waves."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight text-center">Frequently Asked Questions</h2>
          <p className="text-slate-500">Everything you need to know about the future of Emotion AI.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={`faq-${idx}`}>
              <FAQItem faq={faq} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-3xl border border-slate-100 transition-all ${isOpen ? 'bg-slate-50 shadow-sm' : 'bg-white'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-8 py-6 flex items-center justify-between"
      >
        <span className="font-bold text-slate-800">{faq.q}</span>
        {isOpen ? <Minus className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-slate-400" />}
      </button>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="px-8 pb-6"
        >
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            {faq.a}
          </p>
        </motion.div>
      )}
    </div>
  );
}
