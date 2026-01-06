"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  brands: [
    { label: "Social Spot", href: "/social-spot" },
    { label: "Cosmic Monkey Studios", href: "/cosmic-monkey" },
  ],
  services: [
    { label: "Strategy & Branding", href: "/services#strategy" },
    { label: "Creative Production", href: "/services#production" },
    { label: "Digital Experiences", href: "/services#digital" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <span className="text-4xl font-bold tracking-tight">
                <span className="text-white">TG</span>
                <span className="text-[#c8ff00]">.</span>
              </span>
            </Link>
            <p className="text-white/60 text-lg leading-relaxed max-w-md mb-8">
              A future-ready creative agency blending human creative ingenuity 
              with AI augmentation to deliver high-end content, campaigns, and 
              visuals—faster, smarter, and more efficiently.
            </p>
            <div className="flex flex-col gap-4">
              <a 
                href="mailto:hello@tgen.in" 
                className="flex items-center gap-3 text-white/60 hover:text-[#c8ff00] transition-colors"
              >
                <Mail size={18} />
                <span>hello@tgen.in</span>
              </a>
              <a 
                href="tel:+919876543210" 
                className="flex items-center gap-3 text-white/60 hover:text-[#c8ff00] transition-colors"
              >
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <MapPin size={18} />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Company</h4>
                <ul className="space-y-4">
                  {footerLinks.company.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href}
                        className="text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Brands</h4>
                <ul className="space-y-4">
                  {footerLinks.brands.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href}
                        className="text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Services</h4>
                <ul className="space-y-4">
                  {footerLinks.services.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href}
                        className="text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} TG Entertainment. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-white/5 py-8"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white/20 text-sm">
              Human Creativity × AI Efficiency
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
