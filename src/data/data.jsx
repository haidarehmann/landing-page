// =========================================================
// CLIENT LOGOS / SERVICES
// =========================================================

import { images, productVideos, serviceVideos } from "../assets/images";

import cl1 from "../assets/cl1.png";
import cl2 from "../assets/cl2.png";
import cl3 from "../assets/cl3.png";
import cl4 from "../assets/cl4.png";


// =========================================================
// Services Videos
// =========================================================
import {
  Receipt,
  TrendingUp,
  ClipboardCheck,
  ShieldAlert,
  BrainCircuit,
  Target,
} from 'lucide-react';

export const services = [
  {
    video: serviceVideos.sv10,
    icon: Receipt,
    title: "Tax Advisory",
    desc: "Expert, up-to-date guidance on tax planning and compliance, helping you stay ahead of regulatory changes while minimizing liabilities and maximizing long-term savings.",
  },
  {
    video: serviceVideos.sv4,
    icon: TrendingUp,
    title: "Financial Advisory",
    desc: "Strategic financial guidance tailored to your business goals, covering growth planning, stability, and decision-making support at every stage of your journey.",
  },
  {
    video: serviceVideos.sv5,
    icon: ClipboardCheck,
    title: "Auditing",
    desc: "Thorough and reliable audit services designed to ensure transparency, strengthen internal controls, and give stakeholders confidence in your financial statements.",
  },
  {
    video: serviceVideos.sv2,
    icon: ShieldAlert,
    title: "Risk Management",
    desc: "Proactive identification and mitigation of risk across your financial operations, protecting your business from disruptions before they become costly problems.",
  },
  {
    video: serviceVideos.sv9,
    icon: BrainCircuit,
    title: "AI Governance",
    desc: "Responsible, practical frameworks for adopting AI at the leadership level, balancing innovation with accountability, security, and regulatory alignment.",
  },
  {
    video: serviceVideos.sv11,
    icon: Target,
    title: "Strategic Planning",
    desc: "Long-term, actionable roadmaps built around sustainable business growth, aligning leadership vision with measurable, achievable milestones.",
  },
];

// =========================================================
// Client logos
// =========================================================

export const programs = [
  {
    img: images.km16,
  },
  {
    img: images.km11,
  },
  {
    img: images.km17,
    
  },
  {
    img: images.km12,
    
  },
  {
    img: images.km13,
   
  },
  {
    img: images.km6,
  },
  {
    img: images.km7,
  },
  {
    img: images.km9,
  },
  {
    img: images.km3,
  },
];


// =========================================================
// TESTIMONIALS
// =========================================================

export const testimonials = [
  {
    name: "Yesaya",
    username: "yesaya_mena",
    role: "Co-Founding Partner",
    location: "MENA Region",
    quote:
      "Working together brought real clarity to how we approach AI adoption at the leadership level. The engagement felt tailored to our region's realities, not a generic playbook.",
    image: cl1,
    color: "#E8D9FF",
    rating: 5,
    tag: "STRATEGY",
  },
  {
    name: "M.A. Chaudhari",
    username: "ma_chaudhari",
    role: "Managing Partner",
    location: "Lahore, Pakistan",
    quote:
      "A rigorous, governance-first perspective that balanced ambition with practical execution. Every recommendation came with a clear rationale we could defend to our board.",
    image: cl2,
    color: "#D6EFFF",
    rating: 4,
    tag: "GOVERNANCE",
  },
  {
    name: "Wajda",
    username: "wajda_ksa",
    role: "Strategy Lead",
    location: "KSA",
    quote:
      "Helped us think about transformation strategically, not just technically. The roadmap they built is still guiding our decisions months later.",
    image: cl3,
    color: "#FFF3C4",
    rating: 5,
    tag: "TRANSFORMATION",
  },
  {
    name: "Khaldun",
    username: "khaldun_uae",
    role: "Operations Director",
    location: "UAE",
    quote:
      "Brought structure to a process that felt overwhelming, without slowing us down. Our teams adopted the new workflow faster than we expected.",
    image: cl4,
    color: "#D7F5E3",
    rating: 4,
    tag: "OPERATIONS",
  },
];

// =========================================================
// ACCREDITATION
// =========================================================

export const credentials = [
  {
    logo: images.oxf,
    name: "University of Oxford",
    program: "Executive Education – AI Foundations for Business Professionals",
    description:
      "Executive programme on AI strategy, digital transformation, and responsible AI adoption at leadership level.",
  },
  {
    logo: images.harv,
    name: "Harvard University",
    program: "Executive Education – CS50: Introduction to Computer Science",
    description:
      "Foundational programme in computational thinking, algorithms, and the technical literacy behind AI-driven leadership.",
  },
  {
    logo: images.lon,
    name: "London Business School",
    program: "Executive Education – AI for Business Leadership / Future Ready Company",
    description:
      "Programme on leading AI-enabled transformation, organizational readiness, and future-ready leadership capability.",
  },
  {
    logo: images.camb,
    name: "Cambridge Judge Business School",
    program: "Executive Education – Ethical AI & Responsible Automation",
    description:
      "Programme on responsible AI adoption, ethical risk frameworks, and governance for automated systems.",
  },
];

// =========================================================
// COAST / AI PRODUCTS
// =========================================================

export const products = [
  {
    id: "orbital",
    number: "01",
    name: "ORBITAL",
    type: "Diagnostic Intelligence",

    tagline:
      "Understand what is structurally happening — before you decide anything.",

    description:
      "ORBITAL maps the structural mechanics of a business. Not surface metrics — the underlying mechanisms that drive outcomes, create fragility, and determine what actually moves the needle. Every decision improvement begins with structural understanding. ORBITAL provides it.",

    video: productVideos.orbital,

    functions: [
      {
        title: "Mechanism Mapping",
        text:
          "Identifies what actually drives outcomes, not what appears to — distinguishing genuine levers from correlated noise.",
      },
      {
        title: "Fragility Detection",
        text:
          "Locates structural exposures and single points of failure before they surface as operational crises.",
      },
      {
        title: "Structural Prediction",
        text:
          "Models how current structural conditions lead to future states — not trend extrapolation, but causal reasoning.",
      },
    ],
  },

  {
    id: "magnus",
    number: "02",
    name: "MAGNUS",
    type: "Forensic Intelligence",

    tagline:
      "Detect the gap between what is claimed and what the data actually shows.",

    description:
      "MAGNUS applies forensic intelligence to financial, operational, and strategic data — from the perspective of an investor or due diligence analyst. It finds where narrative diverges from reality, where numbers contradict each other, and where risk is being obscured rather than managed.",

    video: productVideos.magnus,

    functions: [
      {
        title: "Narrative vs. Reality Analysis",
        text:
          "Compares stated business position against underlying data signals to surface divergence between story and substance.",
      },
      {
        title: "Financial Pattern Forensics",
        text:
          "Identifies anomalies, inconsistencies, and structural irregularities across financial statements and operational data.",
      },
      {
        title: "Risk Obscuration Detection",
        text:
          "Finds where risk is being systematically minimised, deferred, or hidden within normal-looking operational patterns.",
      },
    ],
  },

  {
    id: "simfore",
    number: "03",
    name: "SIMFORE",
    type: "Simulation Intelligence",

    tagline:
      "Model what happens before you commit to a decision.",

    description:
      "SIMFORE simulates the downstream consequences of decisions before they are made. It builds conditional scenario models — mapping how changes in strategy, inputs, or market conditions propagate through the business system — giving leadership the ability to test choices before committing to them.",

    video: productVideos.simfore,

    functions: [
      {
        title: "Scenario Construction",
        text:
          "Builds structured, internally consistent models of alternative futures — not optimistic projections, but honest simulations.",
      },
      {
        title: "Conditional Outcome Simulation",
        text:
          "Models what happens if key variables change — interest rates, demand, costs, regulation, competitive pressure.",
      },
      {
        title: "Decision Consequence Mapping",
        text:
          "Traces the second and third-order effects of specific choices before they are implemented.",
      },
    ],
  },
];


// =========================================================
// COMPETITOR
// =========================================================

export const oldWay = [
  "Generic frameworks applied without context.",
  "AI recommendations with no governance lens.",
  "Limited regional (MENA) experience.",
  "One-size-fits-all engagement models.",
  "Reports handed over, then silence.",
];

export const newWay = [
  "Strategy built around your specific risk and structure.",
  "Every AI decision filtered through governance and compliance.",
  "A decade of hands-on experience across KSA, UAE, USA & Pakistan.",
  "Engagements shaped around your actual goals.",
  "Ongoing partnership through implementation, not just advice.",
];


// =========================================================
// FAQ
// =========================================================

export const faqs = [
  {
    question: "Who do you typically work with?",
    answer:
      "I partner with CEOs, boards, and leadership teams across finance, healthcare, and education who are serious about adopting AI responsibly — not experimenting, but building it into how they actually operate and govern.",
  },
  {
    question: "What does a typical engagement look like?",
    answer:
      "It starts with understanding where you are today — your data, your risk appetite, your leadership readiness. From there, we build a roadmap that's specific to your organization, not a generic template. Engagements range from a focused strategy sprint to a multi-month transformation partnership.",
  },
  {
    question: "Do you only work with clients in Pakistan?",
    answer:
      "No. Over the past decade, I've advised organizations across KSA, UAE, USA, and Pakistan. Distance isn't a barrier — most of the work happens through structured workshops, calls, and documentation regardless of where you're based.",
  },
  {
    question: "How is this different from hiring a traditional consultant?",
    answer:
      "Most consultants bring frameworks. I bring executive-level AI and governance expertise combined with real board-level experience — so the strategy we build isn't just technically sound, it's something your leadership team can actually defend and act on.",
  },
  {
    question: "What happens after I reach out?",
    answer:
      "You'll hear back within one business day to schedule a short discovery call. No pitch, no pressure — just a conversation to understand your situation and see if there's a genuine fit before anything moves forward.",
  },
];


// =========================================================
// PRICING
// =========================================================

import React from "react";
import {
  FaRegLightbulb,
  FaCrown,
  FaBuilding,
} from "react-icons/fa";

export const plans = [
  {
    name: "Advisory Essentials",
    price: "$1,500",
    period: "/ engagement",
    description:
      "For teams starting their AI and governance journey.",
    icon: <FaRegLightbulb />,
    features: [
      "Initial AI readiness assessment",
      "1 strategy workshop session",
      "Governance risk overview",
      "Email support (2 weeks)",
    ],
    featured: false,
    badge: "Great Start",
    cta: "Get Started",
  },

  {
    name: "Transformation Partner",
    price: "$4,800",
    period: "/ engagement",
    description:
      "For organizations driving full-scale AI transformation.",
    icon: <FaCrown />,
    features: [
      "Full AI & digital transformation roadmap",
      "4 strategy workshop sessions",
      "Board-level governance framework",
      "Risk & compliance deep-dive",
      "Priority support (8 weeks)",
    ],
    featured: true,
    badge: "Most Popular",
    cta: "Book a Consultation",
  },

  {
    name: "Enterprise Retainer",
    price: "Custom",
    period: "/ month",
    description:
      "Ongoing advisory for large-scale, multi-market operations.",
    icon: <FaBuilding />,
    features: [
      "Dedicated advisory partnership",
      "Unlimited strategy sessions",
      "Custom AI governance systems",
      "Cross-market (MENA) support",
      "Direct line to leadership",
    ],
    featured: false,
    badge: "Best for Scale",
    cta: "Contact Us",
  },
];


// =========================================================
// SOFTWARE / SERVICES
// =========================================================

export const servicesRow1 = [
  "Corporate Finance",
  "Tax Accounting",
  "Project Planning",
  "Auditing",
  "Corporate Law",
  "Corporate Tax",
  "AI Literacy",
  "Risk Management",
];

export const servicesRow2 = [
  "Digital Transformation",
  "Tax Advisory",
  "Educational Technology",
  "EdTech",
  "Digital Literacy",
  "Curriculum Development",
  "Schools",
  "IFRS9",
  "Machine Learning",
];



