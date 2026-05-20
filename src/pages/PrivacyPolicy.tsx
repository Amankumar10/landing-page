import { motion } from "motion/react";

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-white min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Trust & Security</span>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 tracking-tight">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Introduction</h2>
            <p>Welcome to AllyNest. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and protect your data when you use our services including Compatifi.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. What Data We Collect</h2>
            <p>We collect information that you provide directly to us, such as your email address when you join our waitlist. For our Emotion AI services, we process communication data to provide real-time insights.</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Contact information (email address)</li>
              <li>Communication data (processed for emotional analysis)</li>
              <li>Usage data and cookies for service improvement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. How We Use Emotion AI Data</h2>
            <p>Our Emotion AI platform is designed with privacy at its core. Communication data analyzed for emotional tone and intent is processed in real-time. We do not store raw message logs indefinitely; they are used solely to derive emotional insights for your benefit.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. User Privacy Commitment</h2>
            <p>AllyNest never sells user data to third parties. We believe your emotional data is a private asset. We use enterprise-grade encryption to secure all data processing pipelines.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. You can contact us at any time to exercise these rights.</p>
          </section>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mt-12">
            <h3 className="font-bold text-slate-900 mb-2">Questions?</h3>
            <p className="text-sm">If you have any questions about this policy, please contact us at <a href="mailto:privacy@allynest.com" className="text-primary font-bold">privacy@allynest.com</a></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
