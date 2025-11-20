export const FEATURES = [
  {
    icon: "Brain",
    title: "AI OMR Reading",
    description: "Accurately detects filled bubbles using advanced computer vision technology"
  },
  {
    icon: "ScanText",
    title: "OCR Roll Detection",
    description: "Reads handwritten roll numbers to automatically map sheets to students"
  },
  {
    icon: "Upload",
    title: "Bulk Processing",
    description: "Upload 50-200 sheets at once with intelligent sorting and filtering"
  },
  {
    icon: "Shield",
    title: "Auto Quality Check",
    description: "Detects low-light, blurry, or duplicate sheets automatically"
  },
  {
    icon: "LineChart",
    title: "Deep Analytics",
    description: "Generate detailed insights for both teachers and students instantly"
  },
  {
    icon: "AlertTriangle",
    title: "Fraud Detection",
    description: "AI-powered anomaly detection identifies suspicious patterns"
  }
];

export const PORTALS = [
  {
    id: "admin",
    name: "Admin Portal",
    color: "blue",
    features: [
      "Add and manage schools",
      "Monitor teacher activity",
      "View analytics across schools",
      "One-click school onboarding",
      "System-level dashboard"
    ]
  },
  {
    id: "teacher",
    name: "Teacher Portal",
    color: "purple",
    features: [
      "Create tests with answer keys",
      "Upload answer sheets in bulk",
      "AI auto-checking of sheets",
      "Examine individual student reports",
      "Class-level analytics",
      "Generate question banks"
    ]
  },
  {
    id: "student",
    name: "Student Portal",
    color: "green",
    features: [
      "Download report cards",
      "View AI-powered insights",
      "Track performance trends",
      "Topic-wise weakness analysis",
      "Personalized study recommendations",
      "Achievement badges"
    ]
  }
];

export const STATS = [
  { value: 90, suffix: "%", label: "Cost Reduction" },
  { value: 99.9, suffix: "%", label: "Accuracy Rate" },
  { value: 10, suffix: "x", label: "Faster Results" },
  { value: 100, suffix: "+", label: "Sheets/Minute" }
];

export const WORKFLOW_STEPS = [
  {
    step: 1,
    title: "Admin Adds Schools",
    description: "Admin logs in and onboards schools with automatic credential generation",
    icon: "Building2"
  },
  {
    step: 2,
    title: "Teachers Register",
    description: "Teachers create accounts, select their school, and access dashboard",
    icon: "UserPlus"
  },
  {
    step: 3,
    title: "Create Tests",
    description: "Teachers add tests with answer keys, metadata, and instructions",
    icon: "FileText"
  },
  {
    step: 4,
    title: "Students Take Test",
    description: "Students write exams on simple printed sheets - no expensive OMR",
    icon: "PenTool"
  },
  {
    step: 5,
    title: "Bulk Upload",
    description: "Teachers upload all answer sheet photos at once for processing",
    icon: "Upload"
  },
  {
    step: 6,
    title: "AI Processing",
    description: "AI reads bubbles, extracts IDs, validates answers automatically",
    icon: "Cpu"
  },
  {
    step: 7,
    title: "Instant Results",
    description: "Reports generated with marks, insights, and analytics for all",
    icon: "TrendingUp"
  }
];

export const COMPARISON = [
  {
    feature: "Cost per sheet",
    traditional: "₹5-10",
    adel: "₹0.50"
  },
  {
    feature: "Result time",
    traditional: "3-7 days",
    adel: "Under 5 minutes"
  },
  {
    feature: "Accuracy",
    traditional: "85-90%",
    adel: "99.9%"
  },
  {
    feature: "Analytics",
    traditional: "None",
    adel: "Deep insights"
  },
  {
    feature: "Sheet quality",
    traditional: "Premium paper",
    adel: "Regular paper"
  },
  {
    feature: "Manual work",
    traditional: "Hours of checking",
    adel: "Fully automated"
  }
];