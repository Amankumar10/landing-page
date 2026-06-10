import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";
// import logo from "../assets/image.png";
import { cn } from "@/src/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Product", href: "/#product" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/#team" },
    { name: "Investors", href: "/#investors" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full shadow-lg"
      >
        <Link to="/" className="flex items-center gap-2 group">
         <img
  src="/image.png"
  alt="AllyNest Logo"
  className="h-24 w-auto object-contain"
/>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link 
            to="/#waitlist"
            className="px-5 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            Join Waitlist
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-20 left-4 right-4 glass p-6 rounded-2xl md:hidden flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-700 p-2 border-b border-slate-100"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/#waitlist"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full py-3 text-center text-white bg-primary rounded-xl font-semibold"
          >
            Join Waitlist 1
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
