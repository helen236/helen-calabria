// =============================================================================
// content.ts — Edit this file to update all website text
// =============================================================================


// ── Site-wide ─────────────────────────────────────────────────────────────────

export const site = {
  name:      "Helen Calabria",
  domain:    "HelenCalabria.com",
  email:     "helen@helencalabria.com",
  copyright: "© 2026 Helen Calabria",
};


// ── Hero (home page banner) ───────────────────────────────────────────────────

export const hero = {
  name:         "Helen Calabria, MA",
  tagline:      "Parent Coach · Co-Parenting · Neurodivergence Support",
  heading:      "Supporting families when they need it most",
  copyIntro:    "I provide coaching to parents and caregivers navigating a range of challenges including:",
  copyBullets:  [
    "Emotional dysregulation",
    "Power struggles",
    "Neurodivergence",
    "Multiple children",
    "Shared goals and responsibility",

    "Significant transitions such as loss, separation, and/or relocation",
    "Single/Co-parenting",
  ],
  copyOutro:    "With 15+ years of experience working directly with parents and children, I know that one size does not fit all. I am here to help you discover solutions that work best for you and your family.",
  ctaPrimary:   "Start with a free 20-min call",
  ctaSecondary: "How sessions work",
};


// ── Home page — session cards (brief overview) ────────────────────────────────

export const homeSessionCards = [
  {
    title:       "Just for you",
    subtitle:    "Individual · 50 min",
    description: "For one parent navigating co-parenting dynamics, everyday parenting challenges, and/or neurodivergence (in children and/or adults).",
    price:       "Sliding scale pricing",
    bookLabel:   "Book",
  },
  {
    title:       "Both (or more) of you",
    subtitle:    "Joint · 90 min",
    description: "Both (or more) parents/caregivers on the call, working together to address parenting concerns, reduce conflict, and create consistency within or across households.",
    price:       "Sliding scale pricing",
    bookLabel:   "Book",
  },
  {
    title:       "Ongoing support",
    subtitle:    "Package · 4 sessions",
    description: "Sustained progress over a month — building routines, strengthening communication, and reducing family reactivity step by step.",
    price:       "Sliding scale pricing",
    bookLabel:   "Book",
  },
];


// ── Home page — testimonials ──────────────────────────────────────────────────
// Set to true to show the Kind Words section on the home page

export const showTestimonials = false;

export const testimonials = [
  {
    quote: "Helen helped us go from constant conflict to actually co-parenting. Our kids feel it. We feel it. I wish we'd found her sooner.",
    name:  "— A grateful parent",
  },
  {
    quote: "I came to Helen completely overwhelmed. She gave me practical tools and, more than that, she made me feel like I could do this.",
    name:  "— A parent, after 3 sessions",
  },
];


// ── Home page — contact section ───────────────────────────────────────────────

export const homeContact = {
  sectionLabel: "Get in touch",
  heading:      "Not sure where to start?",
  body:         "A free 20-minute intro call is the best first step. We'll talk about what's going on and whether working together makes sense.",
  ctaPrimary:   "Book a free 20-min intro call",
};


// ── Sessions page ─────────────────────────────────────────────────────────────

export const sessionDetails = [
  {
    title:     "Just for you",
    label:     "Individual Session · 50 min",
    whoFor:    "One parent looking for support — whether you're navigating co-parenting dynamics, everyday parenting challenges, and/or neurodivergence (in children and/or adults).",
    expect:    "We'll explore what's feeling hard, identify patterns in what's happening at home or across households, and develop practical strategies you can use right away.",
    price:     "Sliding scale pricing",
    bookLabel: "Book now",
  },
  {
    title:     "Both (or more) of you",
    label:     "Joint Session · 90 min",
    whoFor:    "Both (or more) parents/caregivers, together — whether you're together in one household, newly separated, step-parenting, and/or long-divorced. If you are looking to improve how you support each other and the children you care for, coaching you as a team can help.",
    expect:    "A structured, guided conversation focused on building communication, reducing conflict, and creating consistency within or across households. Helen holds a calm, neutral space for everyone.",
    price:     "Sliding scale pricing",
    bookLabel: "Book now",
  },
  {
    title:     "Ongoing support",
    label:     "4-Session Package · Over a month",
    whoFor:    "Parents and caregivers who want sustained progress — not just one conversation, but real, lasting change in how your family functions.",
    expect:    "Four sessions with reflection between each one. We set goals, track progress, and adjust as life changes. Most families see meaningful shifts within the first month.",
    price:     "Sliding scale pricing",
    bookLabel: "Book now",
  },
];

export const sessionsCta = {
  heading: "Not sure which is right for you?",
  body:    "A free 20-minute intro call is the best way to figure it out. No commitment, no pressure — just a conversation about what you need.",
  button:  "Book a free 20-min intro call",
};


// ── About page ────────────────────────────────────────────────────────────────

export const about = {
  name:  "Helen Calabria, MA",
  title: "Parent Coach, Neurodiversity & Co-Parenting Support Specialist",

  credentials: [
    "MA in Education",
    "15+ Years Supporting Families",
    "Parent Educator · 10+ Years",
    "Restorative Practices Trained",
    "Neurodiversity Coach",
    "Mediation Training",
    "Coaching & Facilitation for Individuals and Groups of 2 or More",
    "Online · Nationwide",
  ],

  // Each string is one paragraph in the bio section
  bio: [
    "I'm a parent coach with more than 15 years of experience working with parents, children, and school communities. I hold a Master's degree in Education and have spent over a decade as a Parent Educator, supporting families as they navigate everyday parenting challenges, co-parenting, neurodivergence, and unexpected obstacles or transitions.",
    "With a background spanning preschool and K–12 settings, I now work with families online, nationwide. I help adults strengthen communication, reduce conflict, and create consistent environments where children can thrive. I specialize in working with parents and caregivers across all family structures — especially those raising children with ADHD, autism, or anxiety — helping them develop structured routines, improve communication, and build aligned approaches within or across households.",
    "I am trained in positive discipline, neurodiversity coaching, restorative practices, conflict resolution, and mediation.",
  ],

  topics: [
    "Emotional regulation and managing big feelings",
    "Establishing routines and daily structure",
    "Power struggles and limit-setting",
    "Tantrums and challenging behaviors",
    "Sibling conflict and parent-child communication",
    "Navigating transitions and change",
    "Supporting children with anxiety",
    "Differences in parenting styles",
    "Co-parenting support within or across households",
    "Supporting neurodivergent children & adults",
    "Positive discipline and reducing family reactivity",
  ],

  faqs: [
    {
      q: "What if my co-parent won't join?",
      a: "That's very common — and it's okay. Individual sessions are designed for exactly this. We focus on what you can control: your own responses, communication strategies, and the environment you create for your children. Change in one parent often shifts the dynamic for everyone.",
    },
    {
      q: "Is this therapy?",
      a: "No. Coaching is forward-focused and practical. We're not exploring your past or diagnosing anything — we're identifying what's hard right now and building tools and strategies to move forward. If I think you'd benefit from therapy, I'll say so.",
    },
    {
      q: "How is coaching different from mediation?",
      a: "Mediation is typically a legal process that helps you reach formal agreements, often with an attorney or mediator present. Coaching is ongoing, relational support — we work on communication, patterns, and parenting alignment over time, not just in one session.",
    },
    {
      q: "Do you work with neurodivergent families?",
      a: "Yes — this is one of my areas of deepest focus. I specialize in supporting neurodivergent families, including parents and children with ADHD, autism, and anxiety, and am trained in neurodiversity coaching.",
    },
    {
      q: "What happens in a free intro call?",
      a: "We spend about 20 minutes talking about what's going on for your family, what you're hoping for from coaching, and whether working together feels like a good fit. There's no pressure. You leave with a clearer sense of your next step.",
    },
  ],
};
