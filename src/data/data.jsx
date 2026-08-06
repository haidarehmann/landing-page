//clientlogo
import { images } from '../assets/images';

export const programs = [
    {
        img: images.km16,
        title: "Tax Advisory",
        desc: "Expert support for tax planning and compliance."
    },
    {
        img: images.km11,
        title: "Financial Advisory",
        desc: "Strategic guidance for business growth and financial stability."
    },
    {
        img: images.km17,
        title: "Tax Accounting",
        desc: "Accurate tax records and financial reporting solutions."
    },
    {
        img: images.km12,
        title: "Auditing",
        desc: "Reliable audit services for compliance and transparency."
    },
    {
        img: images.km13,
        title: "Corporate Finance",
        desc: "Smart financial solutions for business growth and investment."
    },
    {
        img: images.km6,
        title: "Risk Management",
        desc: "Identifying and mitigating risk across financial operations."
    },
    {
        img: images.km7,
        title: "AI Governance",
        desc: "Responsible frameworks for adopting AI at the leadership level."
    },
    {
        img: images.km9,
        title: "Digital Transformation",
        desc: "Guiding organizations through technology-driven change."
    },
    {
        img: images.km3,
        title: "Strategic Planning",
        desc: "Long-term roadmaps built for sustainable business growth."
    }
];


//accrediation

export const credentials = [
  {
    logo: images.ox1,
    name: "University of Oxford",
    program: "Executive Education  AI & Digital Strategy",
  },
  {
    logo: images.hb1,
    name: "Harvard Business School",
    program: "Executive Education  Digital Transformation",
  },
  {
    logo: images.lb1,
    name: "London Business School",
    program: "Executive Education  Responsible Automation",
  },
  {
    logo: images.cu1,
    name: "University of Cambridge",
    program: "Executive Education  AI & Governance",
  },
];


//coast
export const products = [
  {
    title: "ORBITAL",
    subtitle: "Diagnostics Intelligence",
    description: "Discover hidden operational insights and identify risks before they impact your business.",
    initials: "OR"
  },
  {
    title: "MAGNUS",
    subtitle: "Forensic Intelligence",
    description: "Analyze business performance with precision and detect hidden operational inefficiencies.",
    initials: "MA"
  },
  {
    title: "SIMFORE",
    subtitle: "Simulation Intelligence",
    description: "Model complex business scenarios and evaluate strategies before taking critical decisions.",
    initials: "SI"
  },
];


//competitor
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


//faq
export const faqs = [
  {
    question: "Who do you typically work with?",
    answer:
      "I partner with CEOs, boards, and leadership teams across finance, healthcare, and education who are serious about adopting AI responsibly  not experimenting, but building it into how they actually operate and govern.",
  },
  {
    question: "What does a typical engagement look like?",
    answer:
      "It starts with understanding where you are today  your data, your risk appetite, your leadership readiness. From there, we build a roadmap that's specific to your organization, not a generic template. Engagements range from a focused strategy sprint to a multi-month transformation partnership.",
  },
  {
    question: "Do you only work with clients in Pakistan?",
    answer:
      "No. Over the past decade, I've advised organizations across KSA, UAE, USA, and Pakistan. Distance isn't a barrier  most of the work happens through structured workshops, calls, and documentation regardless of where you're based.",
  },
  {
    question: "How is this different from hiring a traditional consultant?",
    answer:
      "Most consultants bring frameworks. I bring executive-level AI and governance expertise combined with real board-level experience  so the strategy we build isn't just technically sound, it's something your leadership team can actually defend and act on.",
  },
  {
    question: "What happens after I reach out?",
    answer:
      "You'll hear back within one business day to schedule a short discovery call. No pitch, no pressure  just a conversation to understand your situation and see if there's a genuine fit before anything moves forward.",
  },
];


//pricing
import React from "react";
import { FaRegLightbulb, FaCrown, FaBuilding } from "react-icons/fa";

export const plans = [
  {
    name: "Advisory Essentials",
    price: "$1,500",
    period: "/ engagement",
    description: "For teams starting their AI and governance journey.",
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
    description: "For organizations driving full-scale AI transformation.",
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
    description: "Ongoing advisory for large-scale, multi-market operations.",
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


//software
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


//testimonials
export const testimonials = [
  {
    name: "Yesaya",
    role: "Co-Founding Partner",
    location: "MENA Region",
    quote:
      "Working together brought real clarity to how we approach AI adoption at the leadership level.",
  },
  {
    name: "M.A. Chaudhari",
    role: "Managing Partner",
    location: "Lahore, Pakistan",
    quote:
      "A rigorous, governance-first perspective that balanced ambition with practical execution.",
  },
  {
    name: "Wajda",
    role: "Strategy Lead",
    location: "KSA",
    quote:
      "Helped us think about transformation strategically, not just technically.",
  },
  {
    name: "Khaldun",
    role: "Operations Director",
    location: "UAE",
    quote:
      "Brought structure to a process that felt overwhelming, without slowing us down.",
  },
];