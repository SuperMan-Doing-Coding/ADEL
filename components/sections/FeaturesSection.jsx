"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Bot, Sparkles, Activity, Layers, Presentation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const coreFeatures = [
  {
    title: "Vision AI Accuracy",
    description: "Detects bubbles, handwriting, and diagrams even on low-light captures.",
    icon: Bot,
    tags: ["OMR", "Subjective", "Hybrid"]
  },
  {
    title: "Compliance Ready",
    description: "Role-based permissions, audit trails, and encrypted student data by default.",
    icon: Shield,
    tags: ["Audit", "Policy", "Secure"]
  },
  {
    title: "Insights Fabric",
    description: "Auto-build reports for classes, centers, and school clusters in seconds.",
    icon: Activity,
    tags: ["Benchmarks", "Drilldowns"]
  },
  {
    title: "Curriculum Templates",
    description: "CBSE, ICSE, State Boards, olympiads—all pre-modeled to go live instantly.",
    icon: Layers,
    tags: ["CBSE", "State", "Custom"]
  }
];

const differentiators = [
  {
    label: "Scans / day",
    value: "50K",
    caption: "Proven throughput"
  },
  {
    label: "AI models",
    value: "16",
    caption: "Specialized pipelines"
  },
  {
    label: "Languages",
    value: "12",
    caption: "Regional support"
  }
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="features" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start"
        >
          <div>
            <p className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-emerald-50 text-emerald-600 mb-5">
              Built for school-scale reliability
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Features teams actually launch
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              We blend AI, automation, and compliance so your evaluation pipeline stays lightning fast and audit proof.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {coreFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Card className="h-full border-gray-100 shadow-sm">
                      <CardContent className="p-6 space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">{feature.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {feature.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-[32px] p-1"
          >
            <div className="bg-gray-900 rounded-[30px] p-10 text-white space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">ADEL DIFFERENCE</p>
                <h3 className="text-3xl font-bold mt-3 mb-4">Always-on intelligence</h3>
                <p className="text-white/80">
                  Pre-trained models, proactive alerts, and policy compliance form a single command center for examinations.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {differentiators.map((diff) => (
                  <div key={diff.label} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <p className="text-3xl font-bold text-white">{diff.value}</p>
                    <p className="text-xs uppercase tracking-wide text-white/70">{diff.label}</p>
                    <p className="text-[11px] text-white/60 mt-1">{diff.caption}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {[
                  { title: "Auto-refresh dashboards", icon: Presentation },
                  { title: "Smart escalation routing", icon: Sparkles }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-lg font-semibold">{item.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
