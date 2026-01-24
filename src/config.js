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
  heroSubhead: "Christian counseling designed for real life. Evidence-based, compassionate, and centered on lasting change.",
  
  // ----------------------
  // CONTACT INFORMATION
  // ----------------------
  phone: "(828) 333-1285",
  phoneRaw: "8283331285",
  email: "hello@peakwellnesscenters.org",
  
  // ----------------------
  // FORM SETUP (Formspree)
  // ----------------------
  // 1. Go to https://formspree.io and create a free account
  // 2. Click "New Form" and give it a name like "Peak Wellness Contact"
  // 3. Copy the form ID (the part after /f/ in your form URL)
  // 4. Paste it below, replacing YOUR_FORMSPREE_ID
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
  aboutTitle: "Our Commitment to Christ-Centered Counseling",
  aboutText: [
    "Peak Wellness Centers PLLC was built on Christian compassion and clinical excellence.",
    "We believe every person deserves access to care that honors both professional integrity and spiritual truth.",
    "As a Christian-based counseling practice, we serve clients from all walks of life, providing support with dignity and respect.",
    "Our counselors combine evidence-based methods with Christ-centered wisdom to help individuals, couples, and families find hope, healing, and renewed purpose."
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
      phone: "(828) 333-1285"
    }
  ],
  
  // ----------------------
  // TELEHEALTH STATES
  // ----------------------
  telehealthStates: ["TN", "LA"],
  
  // ----------------------
  // SERVICES
  // ----------------------
  services: [
    {
      title: "Individual Therapy",
      description: "Navigate anxiety, depression, life transitions, and personal growth with compassionate one-on-one support.",
      icon: "person",
      details: ["Anxiety & Depression", "Life Transitions", "Grief & Loss", "Personal Growth"],
      image: "/photo1.png"
    },
    {
      title: "Marriage Counseling",
      description: "Strengthen your relationship through improved communication, conflict resolution, and deeper connection.",
      icon: "heart",
      details: ["Communication Skills", "Conflict Resolution", "Premarital Counseling", "Relationship Restoration"],
      image: "/photo2.png"
    },
    {
      title: "Family & Teen Support",
      description: "Build healthier family dynamics and support your teens through life's challenges.",
      icon: "family",
      details: ["Parenting Support", "Teen Counseling", "Family Dynamics", "Young Adult Therapy"],
      image: "/photo3.png"
    },
    {
      title: "Faith & Spiritual Guidance",
      description: "Integrate your faith journey with mental health support for whole-person healing.",
      icon: "cross",
      details: ["Spiritual Direction", "Faith Integration", "Biblical Counseling", "Purpose & Meaning"],
      image: "/photo4.png"
    },
    {
      title: "Telehealth Sessions",
      description: "Access quality care from anywhere in TN or LA through secure video sessions.",
      icon: "video",
      details: ["Secure Platform", "Flexible Scheduling", "Same Quality Care", "Multi-State Licensed"],
      image: "/photo5.png"
    }
  ],
  
  // ----------------------
  // BENEFITS / FEATURES
  // ----------------------
  benefits: [
    {
      title: "Christ-Centered Care",
      description: "Our clinicians integrate biblical truth with proven therapy approaches—no need to choose between your faith and your mental health."
    },
    {
      title: "Experienced Clinicians",
      description: "Licensed professionals with years of experience in marriage and family therapy; trained to serve from a Christian worldview."
    },
    {
      title: "Accessible & Flexible",
      description: "Same-week appointments, telehealth options, and easy online scheduling make it simple to get started—wherever you are."
    }
  ],
  
  // ----------------------
  // TESTIMONIALS (hidden for now - uncomment when ready)
  // ----------------------
  testimonials: [
    // {
    //   quote: "Peak Wellness gave us tools to rebuild our marriage while growing stronger in our faith.",
    //   author: "— Emily & Mark T."
    // },
  ],
  showTestimonials: false, // Set to true when you have testimonials to show
  
  // ----------------------
  // INSURANCE PROVIDERS
  // ----------------------
  showInsuranceProviders: false, // Set to true when you accept insurance
  insuranceProviders: [
    "Blue Cross Blue Shield",
    "Aetna",
    "Cigna",
    "United Healthcare",
    "Medicare",
    "Medicaid"
  ],
  insuranceMessage: "We are currently working towards accepting insurance in Tennessee. In the meantime, we offer competitive self-pay rates. Contact us to discuss payment options.",
  
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
      answer: "We will be working towards accepting insurance in TN soon. Contact us to discuss payment options and verify coverage availability."
    },
    {
      question: "What should I expect at my first appointment?",
      answer: "Your first session is an opportunity for us to get to know you and understand your goals. We'll discuss what brings you to counseling, your history, and what you hope to achieve. This helps us create a personalized treatment plan."
    },
    {
      question: "How long are therapy sessions?",
      answer: "Therapy sessions are typically 50-55 minutes."
    },
    {
      question: "Do you offer telehealth services?",
      answer: "Yes! We offer secure video sessions for clients in Tennessee and Louisiana. Telehealth provides the same quality care with added convenience."
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
      answer: "Our counselors integrate biblical truth with evidence-based therapy approaches. We honor your faith journey while providing professional clinical care. As a Christian-based practice, we also welcome and serve clients from all backgrounds with dignity and respect."
    },
    {
      question: "Do I have to be a Christian to receive services?",
      answer: "No. As a Christian-based counseling practice, we serve clients from all walks of life, providing support with dignity and respect. Our approach is rooted in Christian values, but we welcome everyone."
    }
  ],
  
  // ----------------------
  // STOCK PHOTOS FOR HOMEPAGE
  // ----------------------
  // Upload these to the /public folder:
  // photo1.png - person smiling
  // photo2.png - couple
  // photo3.png - family or teen
  // photo4.png - person in reflection/prayer
  // photo5.png - person talking with counselor
  // photo6.png - person showing emotion (crying)
  stockPhotos: [
    { src: "/photo1.png", alt: "Individual finding hope through counseling" },
    { src: "/photo2.png", alt: "Couple strengthening their relationship" },
    { src: "/photo3.png", alt: "Family support and teen counseling" },
    { src: "/photo4.png", alt: "Faith and spiritual guidance" },
    { src: "/photo5.png", alt: "Professional counseling session" },
    { src: "/photo6.png", alt: "Emotional healing and support" }
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
