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
  tagline:      "Parent Coach · Co-Parenting Support",
  heading:      "Parenting support when you need it most",
  copyIntro:    "I provide parent coaching and co-parenting support for families experiencing a range of challenges including:",
  copyBullets:  [
    "Emotional dysregulation",
    "Power struggles",
    "Neurodivergence",
    "Division of responsibility and shared goals among caregivers",
    "Multiple children",

    "Significant transitions such as loss, separation, or relocation",
  ],
  copyOutro:    "With 15+ years of experience working directly with parents and children, I know that one size does not fit all. I will meet you where you are and help you discover solutions that work for you and your family.",
  ctaPrimary:   "Start with a free call",
  ctaSecondary: "How sessions work",
};


// ── Home page — session cards (brief overview) ────────────────────────────────

export const homeSessionCards = [
  {
    title:       "Just for you",
    subtitle:    "Individual · 50 min",
    description: "For one parent navigating co-parenting dynamics, everyday parenting challenges, or raising a neurodivergent child.",
    price:       "Book a free intro call to discuss",
    bookLabel:   "Book",
  },
  {
    title:       "Both of you",
    subtitle:    "Joint · 90 min",
    description: "Both parents on the call, working together to build alignment, reduce conflict, and create consistency within or across households.",
    price:       "Book a free intro call to discuss",
    bookLabel:   "Book",
  },
  {
    title:       "Ongoing support",
    subtitle:    "Package · 4 sessions",
    description: "Sustained progress over a month — building routines, strengthening communication, and reducing family reactivity step by step.",
    price:       "Book a free intro call to discuss",
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
  ctaPrimary:   "Book a free intro call",
};


// ── Sessions page ─────────────────────────────────────────────────────────────

export const sessionDetails = [
  {
    title:     "Just for you",
    label:     "Individual Session · 50 min",
    whoFor:    "One parent looking for support — whether you're navigating co-parenting dynamics, everyday parenting challenges, or raising a neurodivergent child.",
    expect:    "We'll explore what's feeling hard, identify patterns in what's happening at home or across households, and develop practical strategies you can use right away.",
    price:     "Reach out to discuss pricing",
    bookLabel: "Book now",
  },
  {
    title:     "Both of you",
    label:     "Joint Session · 90 min",
    whoFor:    "Both co-parents, together — whether you're newly separated or long-divorced and looking to improve how you support each other and your children.",
    expect:    "A structured, guided conversation focused on building communication, reducing conflict, and creating consistency across households. Helen holds a calm, neutral space for both of you.",
    price:     "Reach out to discuss pricing",
    bookLabel: "Book now",
  },
  {
    title:     "Ongoing support",
    label:     "4-Session Package · Over a month",
    whoFor:    "Parents who want sustained progress — not just one conversation, but real, lasting change in how your family functions.",
    expect:    "Four sessions with reflection between each one. We set goals, track progress, and adjust as life changes. Most families see meaningful shifts within the first month.",
    price:     "Reach out to discuss pricing",
    bookLabel: "Book now",
  },
];

export const sessionsCta = {
  heading: "Not sure which is right for you?",
  body:    "A free 20-minute intro call is the best way to figure it out. No commitment, no pressure — just a conversation about what you need.",
  button:  "Book a free intro call",
};


// ── About page ────────────────────────────────────────────────────────────────

export const about = {
  name:  "Helen Calabria, MA",
  title: "Parent Coach, Neurodiversity & Co-Parenting Support Specialist",

  credentials: [
    "MA in Education",
    "15+ Years Supporting Families",
    "Parent Educator · 10+ Years",
    "Co-Parenting Support",
    "Restorative Practices Trained",
    "Neurodiversity Coach (in training)",
    "Basic Mediation Training",
    "Senior Trainer, Bullying Prevention (K-12) · 10+ Years",
    "Provides Individual and Group Coaching, Training & Facilitation",
"Online · Nationwide",
  ],

  // Each string is one paragraph in the bio section
  bio: [
    "I'm a parent coach and co-parenting support specialist with more than 15 years of experience working with families, children, and school communities. I hold a Master's degree in Education and have spent over a decade as a Parent Educator, supporting families navigating separation, co-parenting challenges, and the unique needs of neurodivergent children.",
    "My work spans preschool and K–12 settings, where I help adults strengthen communication, reduce conflict, and create consistent environments where children can thrive. I specialize in working with separated and divorced parents — especially those raising children with ADHD, autism, or anxiety — helping them develop structured routines, improve communication, and build aligned approaches across households.",
    "I am trained in restorative practices and am currently pursuing neurodiversity coach certification, deepening my ability to support the families I care most about.",
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
    "Co-parenting support across households",
    "Supporting neurodivergent children",
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
      q: "Do you work with families raising neurodivergent children?",
      a: "Yes — this is one of my areas of deepest focus. I specialize in supporting parents of children with ADHD, autism, and anxiety. I'm also currently pursuing neurodiversity coach certification to deepen this work further.",
    },
    {
      q: "What happens in a free intro call?",
      a: "We spend about 20 minutes talking about what's going on for your family, what you're hoping for from coaching, and whether working together feels like a good fit. There's no pressure. You leave with a clearer sense of your next step.",
    },
  ],
};
