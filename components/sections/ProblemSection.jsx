"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  X,
  Check,
  DollarSign,
  Clock,
  AlertCircle,
  TrendingDown,
  FileX,
  Users
} from "lucide-react";

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const problems = [
    { icon: DollarSign, title: "High Cost", description: "₹5-10 per OMR sheet" },
    { icon: Clock, title: "Time Consuming", description: "3-7 days for results" },
    { icon: AlertCircle, title: "Error Prone", description: "Manual checking mistakes" },
    { icon: TrendingDown, title: "No Insights", description: "Zero analytics or feedback" }
  ];

  const solutions = [
    { icon: Check, title: "90% Cheaper", description: "₹0.50 per sheet" },
    { icon: Check, title: "Instant Results", description: "Under 5 minutes" },
    { icon: Check, title: "99.9% Accurate", description: "AI-powered validation" },
    { icon: Check, title: "Deep Analytics", description: "Rich insights for all" }
  ];

  return (
    <section ref={ref} id="problem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-600 mb-5">
            Why Schools Switch to ADEL
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            The Problem with{" "}
            <span className="text-red-600">Traditional OMR</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schools waste time and money on outdated evaluation systems. ADEL removes manual work,
            dramatically lowers cost, and unlocks rich analytics for every stakeholder.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 h-full shadow-lg shadow-red-100/50">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-red-500 font-semibold">Traditional</p>
                  <h3 className="text-2xl font-bold text-gray-900">What Schools Face Today</h3>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {problems.map((problem, index) => {
                  const Icon = problem.icon;
                  return (
                    <motion.div
                      key={problem.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.2 + index * 0.05 }}
                    >
                      <Card className="h-full border-red-100 bg-white/80">
                        <CardContent className="p-5 space-y-3">
                          <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-red-600" />
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900">{problem.title}</h4>
                          <p className="text-gray-600 text-sm">{problem.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-white/70 border border-red-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-sm text-red-500 font-semibold">Outcome</p>
                  <p className="text-base text-gray-700">
                    Students wait days for results and schools overspend every exam cycle.
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-red-600">₹5L+</p>
                  <p className="text-sm text-gray-500">Average yearly waste per school</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-600 rounded-2xl p-1 h-full shadow-xl shadow-blue-200/60">
              <div className="bg-white rounded-2xl h-full p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-blue-500 font-semibold">With ADEL</p>
                    <h3 className="text-2xl font-bold text-gray-900">Modern, AI-Powered Evaluation</h3>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {solutions.map((solution, index) => (
                    <motion.div
                      key={solution.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.05 }}
                    >
                      <Card className="h-full border-blue-100 bg-slate-50/70">
                        <CardContent className="p-5 space-y-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                            <Check className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900">{solution.title}</h4>
                          <p className="text-gray-600 text-sm">{solution.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                  {[
                    { label: "Cost Saving", value: "90%" },
                    { label: "Result Speed", value: "<5 min" },
                    { label: "Accuracy", value: "99.9%" }
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4 rounded-xl border border-blue-100 bg-white">
                      <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600">
            Replace expensive hardware, eliminate manual work, and deliver transparent analytics to parents,
            teachers, and principals in minutes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}