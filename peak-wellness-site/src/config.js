// ============================================================
// PEAK WELLNESS CENTERS - WEBSITE CONFIGURATION
// ============================================================
// Edit this file to update your website content!
// After making changes, save the file and redeploy to Vercel.
// ============================================================

export const config = {
  // ----------------------
  // BUSINESS INFO
  // ----------------------
  businessName: "Peak Wellness Centers",
  tagline: "Mind, Body, and Spirit",
  heroHeadline: "Caring for the Whole Person",
  heroSubhead: "Faith-based counseling designed for real life. Evidence-based, compassionate, and centered on lasting change.",
  
  // ----------------------
  // CONTACT INFORMATION
  // ----------------------
  phone: "(828) 333-1285",
  phoneRaw: "8283331285",
  email: "contact@peakwellnesscenters.com",
  
  // Contact form - Formspree (free, easy) - Sign up at formspree.io
  formspreeId: "YOUR_FORMSPREE_ID", // Replace with your Formspree form ID
  
  // ----------------------
  // ADDRESS
  // ----------------------
  address: {
    street: "38 Rosscraggon Road",
    city: "Asheville",
    state: "NC",
    zip: "28803"
  },
  
  // ----------------------
  // HOURS
  // ----------------------
  hours: "Mon–Fri, 9am–5pm",
  afterHoursNote: "Messages left on Friday will be returned the following Monday.",
  
  // ----------------------
  // ABOUT SECTION
  // ----------------------
  aboutTitle: "Our Commitment to Faith-Integrated Counseling",
  aboutText: [
    "Peak Wellness Centers was built on Christian compassion and clinical excellence.",
    "We believe every person deserves access to care that honors both professional integrity and spiritual truth.",
    "Our counselors combine evidence-based methods with faith-centered wisdom to help individuals, couples, and families find hope, healing, and renewed purpose."
  ],
  
  // ----------------------
  // TEAM MEMBERS
  // ----------------------
  team: [
    {
      name: "Rev. Kevin Wimbish, MS, LMFT",
      role: "Founder",
      specialty: "Marriage & Family Therapy"
    },
    {
      name: "Michael Reed, LPC",
      role: "Couples & Family Specialist",
      specialty: "Couples & Families"
    },
    {
      name: "Sarah Brooks, LCSW",
      role: "Trauma & Grief Counselor",
      specialty: "Trauma & Grief"
    },
    {
      name: "Jessie Logan, MA, LCMHCA",
      role: "Teen & Young Adult Therapist",
      specialty: "Teens & Young Adults"
    },
    {
      name: "Rachel Coleman",
      role: "Intake & Care Coordination",
      specialty: "Client Support"
    },
    {
      name: "Allen Williams",
      role: "Business Manager",
      specialty: "Operations"
    }
  ],
  
  // ----------------------
  // LOCATIONS
  // ----------------------
  locations: [
    {
      city: "Asheville",
      address: "38 Rosscraggon Road",
      phone: "(828) 333-1285"
    }
  ],
  
  // ----------------------
  // TELEHEALTH STATES
  // ----------------------
  telehealthStates: ["NC", "SC", "TN", "FL"],
  
  // ----------------------
  // SERVICES
  // ----------------------
  services: [
    {
      title: "Individual Therapy",
      description: "Navigate anxiety, depression, life transitions, and personal growth with compassionate one-on-one support.",
      icon: "🌱",
      details: ["Anxiety & Depression", "Life Transitions", "Grief & Loss", "Personal Growth"]
    },
    {
      title: "Marriage Counseling",
      description: "Strengthen your relationship through improved communication, conflict resolution, and deeper connection.",
      icon: "💫",
      details: ["Communication Skills", "Conflict Resolution", "Premarital Counseling", "Relationship Restoration"]
    },
    {
      title: "Trauma & Addiction Recovery",
      description: "Find healing from past wounds and break free from cycles of addiction with faith-centered support.",
      icon: "🕊️",
      details: ["Trauma Recovery", "Addiction Support", "PTSD Treatment", "Healing & Restoration"]
    },
    {
      title: "Family & Teen Support",
      description: "Build healthier family dynamics and support your teens through life's challenges.",
      icon: "🏔️",
      details: ["Parenting Support", "Teen Counseling", "Family Dynamics", "Young Adult Therapy"]
    },
    {
      title: "Faith & Spiritual Guidance",
      description: "Integrate your faith journey with mental health support for whole-person healing.",
      icon: "✝️",
      details: ["Spiritual Direction", "Faith Integration", "Biblical Counseling", "Purpose & Meaning"]
    },
    {
      title: "Telehealth Sessions",
      description: "Access quality care from anywhere in NC, SC, TN, or FL through secure video sessions.",
      icon: "💻",
      details: ["Secure Platform", "Flexible Scheduling", "Same Quality Care", "Multi-State Licensed"]
    }
  ],
  
  // ----------------------
  // BENEFITS / FEATURES
  // ----------------------
  benefits: [
    {
      title: "Faith-Driven Care",
      description: "Our clinicians integrate biblical truth with proven therapy approaches—no need to choose between your faith and your mental health."
    },
    {
      title: "Experienced Clinicians",
      description: "Licensed professionals with years of experience in trauma, marriage, and family therapy; trained to serve from a Christian worldview."
    },
    {
      title: "Accessible & Flexible",
      description: "Same-week appointments, telehealth options, and easy online scheduling make it simple to get started—wherever you are."
    }
  ],
  
  // ----------------------
  // TESTIMONIALS
  // ----------------------
  testimonials: [
    {
      quote: "Peak Wellness gave us tools to rebuild our marriage while growing stronger in our faith.",
      author: "— Emily & Mark T."
    },
    {
      quote: "I felt understood, not judged, and left each session with hope.",
      author: "— J.S."
    },
    {
      quote: "The combination of professional guidance and prayer changed everything.",
      author: "— Carol S."
    }
  ],
  
  // ----------------------
  // INSURANCE PROVIDERS
  // ----------------------
  insuranceProviders: [
    "Blue Cross Blue Shield",
    "Aetna",
    "Cigna",
    "United Healthcare",
    "Medicare",
    "Medicaid"
  ],
  
  // ----------------------
  // FAQ ITEMS
  // ----------------------
  faqItems: [
    {
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment by calling our office at (828) 333-1285, sending us an email, or filling out our contact form. We offer same-week appointments and will get back to you within 24 hours."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes! We are in-network with several major insurance providers including Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, Medicare, and Medicaid. Contact us to verify your specific coverage."
    },
    {
      question: "What should I expect at my first appointment?",
      answer: "Your first session is an opportunity for us to get to know you and understand your goals. We'll discuss what brings you to counseling, your history, and what you hope to achieve. This helps us create a personalized treatment plan."
    },
    {
      question: "How long are therapy sessions?",
      answer: "Individual therapy sessions are typically 50-55 minutes. Couples and family sessions may be 60-90 minutes depending on your needs and what your counselor recommends."
    },
    {
      question: "Is marriage counseling covered by insurance?",
      answer: "Marriage counseling is typically not reimbursable by insurance because it usually doesn't meet requirements for medical necessity. Please contact our office if you have questions about this."
    },
    {
      question: "Do you offer telehealth services?",
      answer: "Yes! We offer secure video sessions for clients in North Carolina, South Carolina, Tennessee, and Florida. Telehealth provides the same quality care with added convenience."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We ask for 24-hour notice for cancellations. Late cancellations or no-shows may be subject to a fee. We understand emergencies happen, so please contact us as soon as possible if you need to reschedule."
    },
    {
      question: "Is everything I share confidential?",
      answer: "Yes, confidentiality is fundamental to our practice. What you share in therapy stays between you and your counselor, with limited exceptions required by law (such as imminent danger to yourself or others)."
    },
    {
      question: "How is faith integrated into counseling?",
      answer: "Our counselors integrate biblical truth with evidence-based therapy approaches. We honor your faith journey while providing professional clinical care. You don't have to choose between your faith and your mental health."
    }
  ],
  
  // ----------------------
  // SOCIAL MEDIA (optional)
  // ----------------------
  socialMedia: {
    facebook: "",
    instagram: "",
    linkedin: ""
  }
};
