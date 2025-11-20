"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, ShieldCheck, BarChart2, Mail, Star } from "lucide-react";

const portalData = [
  {
    title: "Teacher Portal",
    icon: GraduationCap,
    description: "Instant evaluation, AI feedback, and automated grading flows designed for high-volume exams.",
    highlights: ["Upload from any device", "AI rubric suggestions", "Collaboration notes"],
    accent: "from-orange-500 to-pink-500",
  },
  {
    title: "Student Portal",
    icon: Users,
    description: "Personalized report cards with growth recommendations and parent-ready summaries.",
    highlights: ["Strength vs. improvement areas", "Practice sets", "Performance badges"],
    accent: "from-blue-500 to-purple-500",
  },
  {
    title: "Leadership Portal",
    icon: ShieldCheck,
    description: "Real-time compliance, center performance, and budget dashboards on one secure screen.",
    highlights: ["Exam day pulse", "Budget insights", "Center benchmarking"],
    accent: "from-emerald-500 to-cyan-500",
  },
];

export default function PortalsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="portals" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-purple-50 text-purple-600 mb-5">
            One platform, tailored portals
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Purpose-built experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every stakeholder gets a dedicated workspace that feels custom-made for their daily decisions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portalData.map((portal, index) => {
            const Icon = portal.icon;
            return (
              <motion.div
                key={portal.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="h-full border-none shadow-xl bg-white/80 backdrop-blur">
                  <CardContent className="p-8 space-y-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${portal.accent} flex items-center justify-center text-white`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{portal.title}</h3>
                      <p className="text-gray-600">{portal.description}</p>
                    </div>
                    <div className="space-y-3">
                      {portal.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center space-x-2 text-gray-700 text-sm">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>Auto alerts enabled</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BarChart2 className="w-4 h-4" />
                        <span>Live dashboards</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
