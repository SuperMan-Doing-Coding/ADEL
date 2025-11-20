"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import GradientBackground from "@/components/GradientBackground";
import FloatingElements from "@/components/FloatingElements";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const [chartHeights, setChartHeights] = useState([]);
  const [smallBars, setSmallBars] = useState([]);

  // Generate all random values on CLIENT only to avoid hydration mismatch
  useEffect(() => {
    setChartHeights([40, 65, 45, 80, 55, 90, 70]); // static — but safe
    setSmallBars(
      [...Array(12)].map(() => Math.floor(Math.random() * 40 + 20)) // 20–60 random
    );
  }, []);

  return (
    <section className="relative lg:min-h-screen min-h-[120vh] flex items-center justify-center overflow-hidden pt-16">
      <GradientBackground />
      <FloatingElements />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">
                AI-Powered Evaluation System
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transform Exam Evaluation with{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Artificial Intelligence
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                No more expensive OMR sheets. Get instant results with deep insights. 
                Make examination faster, smarter, and affordable for every school.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              {[
                "90% cheaper than traditional OMR systems",
                "Results in under 5 minutes",
                "99.9% accuracy with AI validation",
                "Deep analytics for teachers and students",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/register">
                <Button size="lg" className="group">
                  Get Started Free
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="#how-it-works">
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </Link>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center space-x-6 pt-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white"
                  />
                ))}
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Trusted by 500+ schools
                </p>
                <p className="text-xs text-gray-500">
                  Join thousands of teachers & students
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">

              {/* Top Floating Card (hidden on small screens) */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="hidden md:block absolute -top-10 -left-10 w-64 h-40 bg-white rounded-xl shadow-2xl p-6 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-500">Accuracy Rate</span>
                  <span className="text-green-500 text-xs font-semibold">↑ 12%</span>
                </div>

                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  99.9%
                </div>

                <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "99.9%" }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                  />
                </div>
              </motion.div>

              {/* Bottom Floating Card (hidden on small screens) */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="hidden md:block absolute -bottom-10 -right-10 w-64 h-40 bg-white rounded-xl shadow-2xl p-6 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-500">Sheets Processed</span>
                  <span className="text-blue-500 text-xs font-semibold">Today</span>
                </div>

                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  1,247
                </div>

                {/* Animated Bars */}
                <div className="mt-2 flex space-x-1">
                  {smallBars.map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height }}
                      transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                      className="flex-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-sm"
                    />
                  ))}
                </div>
              </motion.div>

              {/* MAIN MOCKUP */}
              <div className="relative w-full aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-4">

                  <div className="flex items-center justify-between">
                    <div className="w-32 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg" />
                    <div className="w-24 h-8 bg-gray-200 rounded-lg" />
                  </div>

                  <div className="h-48 bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-end justify-between h-full space-x-2">
                      {chartHeights.map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.8, delay: 1.5 + i * 0.1 }}
                          className="flex-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2].map((i) => (
                      <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="w-full h-4 bg-gray-200 rounded mb-2" />
                        <div className="w-3/4 h-8 bg-gradient-to-r from-blue-300 to-purple-300 rounded" />
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
