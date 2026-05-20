import { motion } from "motion/react";
import AboutAllyNest from "@/src/components/AboutAllyNest";
import Team from "@/src/components/Team";

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutAllyNest />
      
      <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-bold mb-12 tracking-tight"
          >
            The world needs <br /> <span className="text-primary italic">more empathy</span>, not just more data.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-white/60 leading-relaxed">
                We envision a future where technology acts as an emotional bridge rather than a barrier. Where AI enhances our ability to connect, understand, and care for one another.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Our Story</h3>
              <p className="text-white/60 leading-relaxed">
                AllyNest was born from a simple observation: we are communicating more than ever, but understanding each other less. We set out to build the emotional primitives for the AI age.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Team />
    </div>
  );
}
