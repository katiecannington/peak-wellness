// ============================================================
// PEAK WELLNESS CENTERS PLLC - WEBSITE CONFIGURATION
// ============================================================
// Edit this file to update your website content!
// After making changes, save the file and redeploy to Vercel.
// ============================================================

export const config = {
  // ----------------------
  // BUSINESS INFO
  // ----------------------
  businessName: "Peak Wellness Centers PLLC",
  tagline: "Mind, Body, and Spirit",
  heroHeadline: "Caring for the Whole Person",
  heroSubhead: "Faith-based counseling designed for real life. Evidence-based, compassionate, and centered on lasting change.",
  
  // ----------------------
  // CONTACT INFORMATION
  // ----------------------
  phone: "(828) 555-1234",
  phoneRaw: "828551234",
  email: "hello@peakwellnesscenters.org",
  
  // ----------------------
  // FORM SETUP (Formspree)
  // ----------------------
  // 1. Go to https://formspree.io and create a free account
  // 2. Click "New Form" and give it a name like "Peak Wellness Contact"
  // 3. Copy the form ID (the part after /f/ in your form URL)
  // 4. Paste it below, replacing mnjpqjvq
  // 5. When someone submits the form, you'll get an email!
  formspreeId: "mnjpqjvq",
  
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
    "Peak Wellness Centers PLLC was built on Christian compassion and clinical excellence.",
    "We believe every person deserves access to care that honors both professional integrity and spiritual truth.",
    "Our counselors combine evidence-based methods with faith-centered wisdom to help individuals, couples, and families find hope, healing, and renewed purpose."
  ],
  
  // ----------------------
  // TEAM MEMBERS
  // ----------------------
  // Images should be uploaded to the /public folder on GitHub
  // Use the exact filename you uploaded (e.g., "kevin_picture.png")
  team: [
    {
      name: "Kevin Wimbush",
      role: "Founder",
      specialty: "Marriage & Family Therapy",
      image: "/kevin_picture.png"
    },
    {
      name: "Morgan Nichols",
      role: "Licensed Counselor",
      specialty: "Clinical Counseling",
      image: "/morgan_picture.png"
    },
    {
      name: "Allen Williams",
      role: "Business Manager",
      specialty: "Operations",
      image: "/allen_picture.png"
    }
  ],
  
  // ----------------------
  // LOCATIONS
  // ----------------------
  locations: [
    {
      city: "Asheville",
      address: "38 Rosscraggon Road",
      phone: "(828) 555-1234"
    }
  ],
  
  // ----------------------
  // TELEHEALTH STATES
  // ----------------------
  telehealthStates: ["NC", "SC", "TN", "FL"],
  
  // ----------------------
  // SERVICES (using cleaner icons)
  // ----------------------
  services: [
    {
      title: "Individual Therapy",
      description: "Navigate anxiety, depression, life transitions, and personal growth with compassionate one-on-one support.",
      icon: "person",
      details: ["Anxiety & Depression", "Life Transitions", "Grief & Loss", "Personal Growth"]
    },
    {
      title: "Marriage Counseling",
      description: "Strengthen your relationship through improved communication, conflict resolution, and deeper connection.",
      icon: "heart",
      details: ["Communication Skills", "Conflict Resolution", "Premarital Counseling", "Relationship Restoration"]
    },
    {
      title: "Trauma & Addiction Recovery",
      description: "Find healing from past wounds and break free from cycles of addiction with faith-centered support.",
      icon: "shield",
      details: ["Trauma Recovery", "Addiction Support", "PTSD Treatment", "Healing & Restoration"]
    },
    {
      title: "Family & Teen Support",
      description: "Build healthier family dynamics and support your teens through life's challenges.",
      icon: "family",
      details: ["Parenting Support", "Teen Counseling", "Family Dynamics", "Young Adult Therapy"]
    },
    {
      title: "Faith & Spiritual Guidance",
      description: "Integrate your faith journey with mental health support for whole-person healing.",
      icon: "cross",
      details: ["Spiritual Direction", "Faith Integration", "Biblical Counseling", "Purpose & Meaning"]
    },
    {
      title: "Telehealth Sessions",
      description: "Access quality care from anywhere in NC, SC, TN, or FL through secure video sessions.",
      icon: "video",
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
      answer: "You can schedule an appointment by calling our office at (828) 555-1234, sending us an email, or filling out our contact form. We offer same-week appointments and will get back to you within 24 hours."
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
