"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "Teacher workflows", href: "#teacher" },
      { label: "Get started", href: "#get-started" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Security", href: "/security" },
      { label: "Help center", href: "/help" },
      { label: "Case studies", href: "/stories" },
      { label: "API status", href: "/status" }
    ]
  }
];

const socials = [
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Linkedin, href: "https://linkedin.com" }
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">ADEL</p>
              <h3 className="text-2xl font-bold mt-2">AI-powered evaluation</h3>
            </div>
            <p className="text-white/70">
              Replace legacy OMR workflows with instant, intelligent assessment infrastructure purpose-built for schools.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> support@adel.ai
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Bengaluru • Delhi • Remote
              </p>
            </div>
          </motion.div>

          {footerLinks.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <h4 className="text-lg font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-3 text-white/70">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-white/10 pt-8">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} ADEL Technologies. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.href}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
