import FAQ from "@/src/components/FAQ";

export default function FAQPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <FAQ />
      
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto bg-white p-12 rounded-[48px] border border-slate-100 text-center shadow-sm">
           <h3 className="text-2xl font-bold mb-4 text-slate-900">Still have questions?</h3>
           <p className="text-slate-500 mb-8 leading-relaxed">
             Our team is always happy to help you understand more about our vision and products.
           </p>
           <button className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20">
             Contact Support
           </button>
        </div>
      </section>
    </div>
  );
}
