import { motion } from "motion/react";

export default function TermsConditions() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-white min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-4 block">Ground Rules</span>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 tracking-tight">Terms & Conditions</h1>
        
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using AllyNest services, you agree to be bound by these Terms. If you do not agree, you may not use our platform.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. User Responsibilities</h2>
            <p>You are responsible for your use of the platform and any content you provide. You agree not to use the service for any unlawful purposes or in any way that violates the rights of others.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. AI Limitations Disclaimer</h2>
            <p className="bg-blue-50/50 p-6 rounded-2xl border-l-4 border-primary">
              Compatifi provides AI-generated insights for informational purposes. While we strive for accuracy, AI models can make mistakes. These insights should not replace professional medical, legal, or therapeutic advice. Users should use their own judgment when interpreting emotional analysis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Intellectual Property</h2>
            <p>All content, technology, and branding associated with AllyNest and Compatifi are the exclusive property of AllyNest. You may not copy, modify, or distribute our intellectual property without written consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Account Terms</h2>
            <p>You must provide accurate information when creating an account. You are responsible for maintaining the security of your account credentials.</p>
          </section>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mt-12">
            <p className="text-sm">Last Updated: May 2026</p>
            <p className="text-sm">For legal inquiries: <a href="mailto:legal@allynest.com" className="text-primary font-bold">legal@allynest.com</a></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
