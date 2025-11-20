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
    <section className="overflow-hidden relative flex items-center justify-center pt-5 min-h-[100vh] lg:min-h-screen">
      <GradientBackground />
      <FloatingElements />

      <div className="z-10 relative mx-auto px-4 py-20 max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
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
              className="inline-flex items-center px-4 py-2 bg-blue-50 border-blue-200 rounded-full space-x-2 border"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">
                AI-Powered Evaluation System
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
                Transform Exam Evaluation with{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
                  Artificial Intelligence
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                No more expensive OMR sheets. Get instant results with deep
                insights. Make examination faster, smarter, and affordable for
                every school.
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
                  <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link href="/register">
                <Button size="lg" className="group">
                  Get Started Free
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
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
              className="flex items-center pt-4 space-x-6"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full border-2 border-white"
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
                className="z-50 absolute p-6 w-64 h-35 bg-white rounded-xl border-gray-100 shadow-2xl -top-7 -left-3 border md:block"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-500">
                    Accuracy Rate
                  </span>
                  <span className="text-green-500 text-xs font-semibold">
                    ↑ 12%
                  </span>
                </div>

                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text">
                  99.9%
                </div>

                <div className="overflow-hidden mt-2 h-2 bg-gray-100 rounded-full">
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
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, 2, -2, 0],
                  boxShadow: [
                    "0 8px 36px 0 rgba(40, 94, 255, 0.15)",
                    "0 16px 52px 0 rgba(100, 59, 255, 0.19)",
                    "0 8px 36px 0 rgba(40, 94, 255, 0.15)",
                  ],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
                className="z-50 absolute p-6 w-64 h-40 bg-white rounded-xl border-gray-100 shadow-2xl -bottom-10 -right-3 border md:block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex items-center justify-between mb-4"
                >
                  <motion.span
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.25, duration: 0.7, type: "spring" }}
                    className="text-sm font-medium text-gray-500"
                  >
                    Sheets Processed
                  </motion.span>
                  <motion.span
                    initial={{ x: 30, opacity: 0, scale: 0.8 }}
                    animate={{ x: 0, opacity: 1, scale: 1.1 }}
                    transition={{ delay: 1.45, duration: 0.5, type: "spring" }}
                    className="text-blue-500 text-xs font-semibold"
                  >
                    Today
                  </motion.span>
                </motion.div>

                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  1,247
                </div>

                {/* Animated Bars */}
                <div className="flex mt-2 space-x-1">
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
              <div className="overflow-visible relative p-8 w-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-gray-100 shadow-2xl aspect-square border">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-32 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg animate-pulse" />
                    <div className="w-24 h-8 bg-gray-200 rounded-lg" />
                  </div>

                  {/* Advanced Animated Graph */}
                  <div className="overflow-visible relative p-4 h-52 bg-white rounded-xl shadow-sm">
                    {/* Y Axis Labels */}
                    <div className="absolute left-0 top-0 flex flex-col justify-between py-2 h-full select-none -translate-x-10">
                      {[100, 75, 50, 25, 0].map((v, idx) => (
                        <span key={idx} className="text-xs text-gray-400">
                          {v}
                        </span>
                      ))}
                    </div>
                    {/* Graph Bars & Lines */}
                    <div className="relative flex items-end justify-between h-full space-x-2">
                      {/* Animated Bar Chart */}
                      {chartHeights.map((h, i, arr) => (
                        <motion.div
                          key={i}
                          initial={{
                            height: 0,
                            filter: "brightness(0.7)",
                            scaleX: 1.15,
                          }}
                          animate={{
                            height: `${h}%`,
                            filter: "brightness(1)",
                            scaleX: 1,
                          }}
                          transition={{
                            duration: 1.1,
                            delay: 1.2 + i * 0.16,
                            type: "spring",
                          }}
                          className="relative flex-1 bg-gradient-to-t from-blue-500 via-blue-400 to-purple-500 rounded-t-lg shadow-md group"
                        >
                          {/* Glow on top of the bar */}
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 0.28, y: 0 }}
                            transition={{ delay: 2 + i * 0.12, duration: 0.4 }}
                            className="absolute left-1/2 top-0 w-4/5 h-3 bg-white rounded-full blur-sm pointer-events-none -translate-x-1/2"
                          />
                          {/* Bar Value Tooltip */}
                          <motion.div
                            initial={{ opacity: 0, y: 7 }}
                            animate={{ opacity: 1, y: -8 }}
                            transition={{
                              delay: 2 + i * 0.18,
                              duration: 0.4,
                              type: "spring",
                            }}
                            className="absolute left-1/2 px-2 py-0.5 text-blue-600 text-xs font-semibold bg-blue-50 rounded-lg pointer-events-none -translate-x-1/2 -top-6 shadow group-hover:opacity-100"
                          >
                            {Math.round(h)}
                          </motion.div>
                        </motion.div>
                      ))}
                      {/* Animated Polyline (Line Graph Overlay) */}
                      <svg
                        className="absolute left-0 top-0 w-full h-full pointer-events-none"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <motion.polyline
                          points={chartHeights
                            .map((h, i) => {
                              const x = (i / (chartHeights.length - 1)) * 100;
                              const y = 100 - h;
                              return `${x},${y}`;
                            })
                            .join(" ")}
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{
                            delay: 2.1,
                            duration: 1,
                            type: "spring",
                          }}
                          fill="none"
                          stroke="#7c3aed"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          style={{ filter: "drop-shadow(0 2px 6px #a78bfa44)" }}
                        />
                        {/* Animated Bubble Points */}
                        {chartHeights.map((h, i) => {
                          const x = (i / (chartHeights.length - 1)) * 100;
                          const y = 100 - h;
                          return (
                            <motion.circle
                              key={i}
                              cx={x}
                              cy={y}
                              r="2.7"
                              fill="#3b82f6"
                              stroke="#fff"
                              strokeWidth="0.9"
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1.15 }}
                              transition={{
                                delay: 2.3 + i * 0.08,
                                type: "spring",
                              }}
                            />
                          );
                        })}
                      </svg>
                    </div>
                    {/* X Axis labels */}
                    <div className="flex justify-between pt-2 text-xs text-gray-400 select-none">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                        (d, i) => (
                          <span key={i} className="flex-1 text-center">
                            {d}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2].map((i) => (
                      <div
                        key={i}
                        className="p-4 bg-white rounded-lg shadow-sm"
                      >
                        <div className="mb-2 w-full h-4 bg-gray-200 rounded" />
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
