"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { PenTool, MessageSquare, Stamp, Workflow, ClipboardList, Headphones } from "lucide-react";

const examinerFlows = [
  {
    id: "objective",
    title: "Objective Papers",
    summary: "Bubble sheets, MCQs, and hybrid patterns evaluated in seconds.",
    bullets: [
      "AI auto-validates roll numbers",
      "Bulk sheet uploads from phones",
      "Instant discrepancy flagging"
    ],
    icon: PenTool
  },
  {
    id: "subjective",
    title: "Subjective Answers",
    summary: "Rubric-guided scoring with AI assistance and human oversight.",
    bullets: [
      "Highlight mis-matched rubrics",
      "Smart comment bank for feedback",
      "Multi-evaluator consensus view"
    ],
    icon: ClipboardList
  },
  {
    id: "viva",
    title: "Viva & Practical",
    summary: "Structured observations, audio notes, and result publishing in one log.",
    bullets: [
      "Voice-to-text transcripts",
      "Center-level moderation",
      "Automated certificate drafts"
    ],
    icon: Headphones
  }
];

const assurance = [
  { label: "Moderation time", value: "-65%", caption: "vs manual" },
  { label: "Rechecks required", value: "<1%", caption: "AI assisted" },
  { label: "Teacher NPS", value: "+72", caption: "Post adoption" }
];

export default function TeacherExamineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="teacher" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-orange-50 text-orange-600 mb-5">
            Built with teachers, for teachers
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Examiners finish more in less time</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful workflows wrap around every evaluation type so teachers can focus on academic judgement—not paperwork.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 rounded-3xl p-6"
          >
            <Tabs defaultValue="objective" className="space-y-6">
              <TabsList className="bg-white rounded-2xl p-2 w-full justify-start">
                {examinerFlows.map((flow) => (
                  <TabsTrigger key={flow.id} value={flow.id} className="px-4 py-2 rounded-xl">
                    {flow.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {examinerFlows.map((flow) => {
                const Icon = flow.icon;
                return (
                  <TabsContent key={flow.id} value={flow.id} className="bg-white rounded-2xl border border-gray-100 p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 text-white flex items-center justify-center">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900">{flow.title}</h3>
                        <p className="text-gray-600">{flow.summary}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {flow.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3 text-gray-700">
                          <Workflow className="w-5 h-5 text-orange-500 mt-1" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                );
              })}
            </Tabs>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-purple-600 via-blue-600 to-emerald-500 rounded-[32px] p-1"
          >
            <div className="bg-white rounded-[30px] p-10 space-y-8 h-full flex flex-col">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold mb-4">
                  <Stamp className="w-4 h-4" />
                  Moderation proof
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Every script accounted for</h3>
                <p className="text-gray-600">
                  Auto-generated audit trails capture every edit, annotation, and publish event. Admins can review disagreements in a single click with side-by-side comparisons.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {assurance.map((metric) => (
                  <Card key={metric.label} className="text-center border-gray-100">
                    <CardContent className="p-5">
                      <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
                      <p className="text-xs uppercase tracking-wide text-gray-500">{metric.label}</p>
                      <p className="text-[11px] text-gray-400 mt-1">{metric.caption}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                <p className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-purple-500" />
                  Teacher testimonial
                </p>
                <p className="text-gray-600 text-sm">
                  “ADEL reduced our night checks from 5 hours to 45 minutes while giving us clearer insights for every student.”
                </p>
                <p className="text-sm text-gray-500">— Examination Head, Delhi Public School</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
