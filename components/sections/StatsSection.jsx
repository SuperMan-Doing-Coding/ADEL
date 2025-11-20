"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Building2, Award } from "lucide-react";

const statHighlights = [
  { label: "Papers Evaluated", value: 240000, suffix: "+" },
  { label: "Schools Onboarded", value: 530, suffix: "+" },
  { label: "Teacher Hours Saved", value: 18000, suffix: "hrs" },
  { label: "Parent Satisfaction", value: 98, suffix: "%" }
];

const credibility = [
  {
    icon: Trophy,
    title: "Govt. backed pilots",
    description: "Ran district-wide board exam evaluations in 2024."
  },
  {
    icon: Users,
    title: "Teacher councils",
    description: "Co-built rubrics with 120+ senior educators."
  },
  {
    icon: Building2,
    title: "Trusted partners",
    description: "Large school chains and coaching centers rely on ADEL daily."
  }
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="stats" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-emerald-50 text-emerald-600 mb-5">
            Proven at scale
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Impact in numbers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ADEL isn't a prototype—it is the preferred evaluation engine for fast-moving schools and authorities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {statHighlights.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index }}
              className="rounded-3xl bg-white border border-gray-100 shadow-sm p-6 text-center"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm uppercase tracking-wide text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">Operational excellence baked in</h3>
            <p className="text-lg text-gray-600">
              Automated reconciliations, anomaly detection, and versioned audit logs make it easy to pass compliance
              reviews and board inspections with confidence.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {credibility.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="border-gray-100">
                    <CardContent className="p-5 space-y-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-[36px] p-1"
          >
            <div className="bg-white rounded-[34px] p-10 space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Accuracy Verified</p>
                  <p className="text-4xl font-bold text-gray-900">99.9%</p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
              <p className="text-gray-600">
                Independent audit labs benchmarked ADEL against human examiners across 12 subjects and found zero
                statistically significant deviations.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { label: "Regions", value: "22" },
                  { label: "Languages", value: "12" },
                  { label: "Centers", value: "1.2K" }
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
                    <p className="text-xs uppercase tracking-wide text-gray-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
