"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, ArrowRight, PhoneCall } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="get-started" ref={ref} className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-1"
        >
          <div className="bg-gray-900 rounded-[38px] px-8 sm:px-14 py-14 text-center text-white space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              Schools launch in under a week
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Ready to modernize examinations?</h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Automate evaluation, deliver instant analytics, and delight every stakeholder with transparent, AI-backed results.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-white/90">
                  Book a live demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="tel:+919876543210">
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                  <PhoneCall className="mr-2 w-4 h-4" />
                  Talk to an expert
                </Button>
              </Link>
            </div>
            <p className="text-sm text-white/70">
              No hardware dependencies • Dedicated onboarding team • 24/7 assessments support
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
