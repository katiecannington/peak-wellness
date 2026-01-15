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
  tagline: "Christian Values · Clinical Excellence",
  
  // ----------------------
  // CONTACT INFORMATION
  // ----------------------
  phone: "(828) 692-6383",
  phoneRaw: "8286926383", // No dashes, used for tel: links
  email: "contact@peakwellnesscenters.com",
  
  // Contact form - Choose ONE option:
  // Option 1: Formspree (free, easy) - Sign up at formspree.io
  formspreeId: "YOUR_FORMSPREE_ID", // Replace with your Formspree form ID
  // Option 2: Email directly (requires backend setup)
  
  // ----------------------
  // HOURS
  // ----------------------
  hours: "Mon–Fri, 9am–5pm",
  afterHoursNote: "Messages left on Friday will be returned the following Monday.",
  
  // ----------------------
  // TEAM MEMBERS
  // ----------------------
  // Add, remove, or edit team members here
  team: [
    {
      name: "Dr. Sarah Mitchell",
      role: "Clinical Director",
      specialty: "Anxiety & Depression"
    },
    {
      name: "James Crawford",
      role: "Licensed Counselor",
      specialty: "Couples & Families"
    },
    {
      name: "Amanda Chen",
      role: "Licensed Therapist",
      specialty: "Trauma & PTSD"
    },
    {
      name: "Michael Torres",
      role: "Licensed Counselor",
      specialty: "Life Transitions"
    },
    {
      name: "Rachel Kim",
      role: "Licensed Therapist",
      specialty: "Eating Disorders"
    },
    {
      name: "David Williams",
      role: "Licensed Counselor",
      specialty: "Addiction Recovery"
    }
  ],
  
  // ----------------------
  // LOCATIONS
  // ----------------------
  // Add, remove, or edit locations here
  locations: [
    {
      city: "Asheville",
      address: "1293 Mountain View Dr, Suite 200",
      phone: "(828) 692-6383"
    },
    {
      city: "Hendersonville",
      address: "456 Blue Ridge Parkway, Building B",
      phone: "(828) 692-6384"
    },
    {
      city: "Marion",
      address: "789 Valley Springs Road",
      phone: "(828) 692-6385"
    },
    {
      city: "Spruce Pine",
      address: "321 Highland Avenue",
      phone: "(828) 692-6386"
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
      title: "Couples Counseling",
      description: "Strengthen your relationship through improved communication, conflict resolution, and deeper connection.",
      icon: "💫",
      details: ["Communication Skills", "Conflict Resolution", "Premarital Counseling", "Infidelity Recovery"]
    },
    {
      title: "Family Therapy",
      description: "Build healthier dynamics, navigate transitions, and foster understanding across generations.",
      icon: "🏔️",
      details: ["Parenting Support", "Blended Families", "Teen Issues", "Aging Parents"]
    },
    {
      title: "Telehealth",
      description: "Access quality care from anywhere in NC, SC, TN, or FL through secure video sessions.",
      icon: "✨",
      details: ["Secure Platform", "Flexible Scheduling", "Same Quality Care", "Multi-State Licensed"]
    }
  ],
  
  // ----------------------
  // TESTIMONIALS
  // ----------------------
  testimonials: [
    {
      quote: "Peak Wellness has been transformative for our family. The counselors truly care and provide practical tools we use every day.",
      author: "— Sarah M., Asheville"
    },
    {
      quote: "I finally found a therapist who understands me. The combination of faith and clinical excellence is exactly what I needed.",
      author: "— Michael T., Hendersonville"
    },
    {
      quote: "After years of struggling, I'm finally seeing real progress. The team here is exceptional.",
      author: "— Jennifer R., Marion"
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
      answer: "You can schedule an appointment by calling our office at (828) 692-6383, sending us an email, or filling out our contact form. We'll get back to you within 24 hours to find a time that works for you."
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
    }
  ],
  
  // ----------------------
  // SOCIAL MEDIA (optional)
  // ----------------------
  socialMedia: {
    facebook: "", // e.g., "https://facebook.com/peakwellness"
    instagram: "", // e.g., "https://instagram.com/peakwellness"
    linkedin: ""
  }
};
