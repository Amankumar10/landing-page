import { Link } from "react-router-dom";
import { Brain, Linkedin, Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="bg-primary p-1.5 rounded-lg">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">AllyNest</span>
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Building the Emotional Layer for AI. Helping people improve communication, emotional understanding, and relationships.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 text-slate-400 hover:text-primary transition-colors bg-white rounded-full shadow-sm border border-slate-100">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 text-slate-400 hover:text-primary transition-colors bg-white rounded-full shadow-sm border border-slate-100">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 text-slate-400 hover:text-primary transition-colors bg-white rounded-full shadow-sm border border-slate-100">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6 uppercase text-[10px] tracking-widest">Product</h4>
          <ul className="space-y-4">
            <li><Link to="/#product" className="text-sm text-slate-500 hover:text-primary transition-colors">Compatifi</Link></li>
            <li><Link to="/#features" className="text-sm text-slate-500 hover:text-primary transition-colors">Features</Link></li>
            <li><Link to="/#demo" className="text-sm text-slate-500 hover:text-primary transition-colors">Watch Demo</Link></li>
            <li><Link to="/#waitlist" className="text-sm text-slate-500 hover:text-primary transition-colors">Waitlist</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6 uppercase text-[10px] tracking-widest">Company</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-sm text-slate-500 hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/#team" className="text-sm text-slate-500 hover:text-primary transition-colors">Team</Link></li>
            <li><Link to="/careers" className="text-sm text-slate-500 hover:text-primary transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="text-sm text-slate-500 hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6 uppercase text-[10px] tracking-widest">Legal</h4>
          <ul className="space-y-4">
            <li><Link to="/privacy" className="text-sm text-slate-500 hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-sm text-slate-500 hover:text-primary transition-colors">Terms of Service</Link></li>
            <li><Link to="/faq" className="text-sm text-slate-500 hover:text-primary transition-colors">FAQ</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-400 uppercase tracking-wider">
          © {currentYear} AllyNest. All rights reserved.
        </p>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Mail className="w-3 h-3" />
          <span>founders@allynest.com</span>
        </div>
      </div>
    </footer>
  );
}
