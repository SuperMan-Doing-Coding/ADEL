"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Upload, Brain, BarChart3 } from "lucide-react";

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = [
    {
      icon: Camera,
      title: "Scan Any Answer Sheet",
      description: "Teachers simply capture sheets using any smartphone or webcam—no special hardware needed.",
    },
    {
      icon: Upload,
      title: "Secure Cloud Upload",
      description: "AI auto-detects responses, validates student info, and flags incomplete entries instantly.",
    },
    {
      icon: Brain,
      title: "AI Evaluation",
      description: "Our vision models evaluate OMR bubbles, short answers, and rubric-based questions with human-level precision.",
    },
    {
      icon: BarChart3,
      title: "Insights & Publish",
      description: "Share rich dashboards with teachers, students, and parents in under five minutes.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-blue-50 text-blue-600 mb-5">
            4 steps. 5 minutes. Instant results.
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            How <span className="text-blue-600">ADEL</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful AI flows packaged inside a simple workflow any teacher can follow without training.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * index }}
                  className="relative pl-14"
                >
                  <div className="absolute left-0 top-1">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    {index < steps.length - 1 && (
                      <span className="block w-px h-20 bg-gradient-to-b from-blue-200 to-transparent mx-auto" />
                    )}
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <p className="text-sm font-semibold text-blue-500 mb-1">Step {index + 1}</p>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-500 rounded-[30px] p-1"
          >
            <div className="bg-white rounded-[28px] p-10 h-full flex flex-col justify-between space-y-10">
              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">Straightforward Ops</p>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Launch school-wide digitization in a single afternoon.
                </h3>
                <p className="text-gray-600">
                  Built-in safeguards automatically flag blurry captures, duplicate uploads, and anomaly scores so teachers can focus on guidance—not grunt work.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Avg setup time", value: "45 min" },
                  { label: "Teacher training", value: "0 hrs" },
                  { label: "Devices supported", value: "300+" },
                  { label: "Offline queue", value: "Yes" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-2xl border border-gray-100 bg-gray-50">
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
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
