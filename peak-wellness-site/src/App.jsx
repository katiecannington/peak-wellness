import React, { useState, useEffect } from 'react';
import { config } from './config';

const PeakWellness = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'resources'
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      if (currentPage === 'home') {
        const sections = ['home', 'services', 'team', 'locations', 'contact'];
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element && window.scrollY >= element.offsetTop - 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const scrollToSection = (sectionId) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Contact form submission using Formspree
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      const response = await fetch(`https://formspree.io/f/${config.formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message
        })
      });
      
      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const [expandedService, setExpandedService] = useState(null);
  const [hoveredTeam, setHoveredTeam] = useState(null);

  // Resources Page Component
  const ResourcesPage = () => (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      {/* FAQ Section */}
      <section style={styles.resourceSection}>
        <div style={styles.sectionContainer}>
          <span style={styles.sectionLabel}>Frequently Asked Questions</span>
          <h2 style={styles.sectionTitle}>FAQ</h2>
          <p style={styles.sectionSubtitle}>
            Find answers to common questions about our services and what to expect.
          </p>
          
          <div style={styles.faqContainer}>
            {config.faqItems.map((item, index) => (
              <div 
                key={index} 
                style={styles.faqItem}
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <div style={styles.faqQuestion}>
                  <h4 style={styles.faqQuestionText}>{item.question}</h4>
                  <span style={{
                    ...styles.faqToggle,
                    transform: expandedFaq === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>▼</span>
                </div>
                {expandedFaq === index && (
                  <div style={styles.faqAnswer}>
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Info Section */}
      <section id="insurance" style={{ ...styles.resourceSection, background: 'linear-gradient(180deg, #F7F5F0 0%, #FFFDF9 100%)' }}>
        <div style={styles.sectionContainer}>
          <span style={styles.sectionLabel}>Coverage</span>
          <h2 style={styles.sectionTitle}>Insurance Information</h2>
          <p style={styles.sectionSubtitle}>
            We work with many insurance providers to make counseling accessible.
          </p>
          
          <div style={styles.insuranceGrid}>
            {config.insuranceProviders.map((provider, index) => (
              <div key={index} style={styles.insuranceCard}>
                <span style={styles.insuranceIcon}>✓</span>
                <span style={styles.insuranceName}>{provider}</span>
              </div>
            ))}
          </div>
          
          <div style={styles.insuranceNote}>
            <h4>Verify Your Coverage</h4>
            <p>
              Coverage varies by plan. We recommend contacting your insurance provider or 
              calling our office at <a href={`tel:${config.phoneRaw}`} style={styles.inlineLink}>{config.phone}</a> to 
              verify your specific benefits before your first appointment.
            </p>
            <p style={{ marginTop: '16px', fontStyle: 'italic' }}>
              <strong>Note:</strong> Marriage counseling is typically not covered by insurance 
              as it usually doesn't meet medical necessity requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Patient Rights Section */}
      <section id="patient-rights" style={styles.resourceSection}>
        <div style={styles.sectionContainer}>
          <span style={styles.sectionLabel}>Your Rights</span>
          <h2 style={styles.sectionTitle}>Patient Rights & Protections</h2>
          
          <div style={styles.rightsContainer}>
            <div style={styles.rightsCard}>
              <h3>Your Rights as a Patient</h3>
              <ul style={styles.rightsList}>
                <li>The right to receive respectful, compassionate care</li>
                <li>The right to confidentiality of your health information</li>
                <li>The right to be informed about your treatment options</li>
                <li>The right to participate in decisions about your care</li>
                <li>The right to refuse treatment</li>
                <li>The right to access your medical records</li>
                <li>The right to file a complaint without retaliation</li>
              </ul>
            </div>
            
            <div style={styles.rightsCard}>
              <h3>Protection Against Surprise Medical Bills</h3>
              <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
                You have the right to receive a "Good Faith Estimate" explaining how much your 
                medical care will cost. Under the law, health care providers need to give patients 
                who don't have insurance or who are not using insurance an estimate of the bill 
                for medical items and services.
              </p>
              <p style={{ lineHeight: '1.7' }}>
                For questions or more information about your right to a Good Faith Estimate, 
                visit <a href="https://www.cms.gov/nosurprises" target="_blank" rel="noopener noreferrer" style={styles.inlineLink}>www.cms.gov/nosurprises</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" style={{ ...styles.resourceSection, background: 'linear-gradient(180deg, #F7F5F0 0%, #FFFDF9 100%)' }}>
        <div style={styles.sectionContainer}>
          <span style={styles.sectionLabel}>Privacy</span>
          <h2 style={styles.sectionTitle}>Privacy Policy</h2>
          
          <div style={styles.privacyContainer}>
            <div style={styles.privacySection}>
              <h3>Confidentiality</h3>
              <p>
                Your privacy is of utmost importance to us. All information shared during therapy 
                sessions is kept strictly confidential, with limited exceptions required by law. 
                These exceptions include situations involving imminent danger to yourself or others, 
                suspected child or elder abuse, or when required by court order.
              </p>
            </div>
            
            <div style={styles.privacySection}>
              <h3>HIPAA Compliance</h3>
              <p>
                Peak Wellness Centers is fully compliant with the Health Insurance Portability and 
                Accountability Act (HIPAA). We maintain strict protocols to protect your protected 
                health information (PHI) in both physical and electronic formats.
              </p>
            </div>
            
            <div style={styles.privacySection}>
              <h3>Telehealth Privacy</h3>
              <p>
                Our telehealth services use secure, HIPAA-compliant video platforms to ensure your 
                sessions remain private. We recommend using a private space and secure internet 
                connection for telehealth appointments.
              </p>
            </div>
            
            <div style={styles.privacySection}>
              <h3>Website Data</h3>
              <p>
                This website does not collect personal information unless you voluntarily submit it 
                through our contact form. Information submitted through the contact form is used 
                solely to respond to your inquiry and is not shared with third parties.
              </p>
            </div>
            
            <div style={styles.privacySection}>
              <h3>Questions?</h3>
              <p>
                If you have questions about our privacy practices, please contact us at{' '}
                <a href={`mailto:${config.email}`} style={styles.inlineLink}>{config.email}</a> or 
                call <a href={`tel:${config.phoneRaw}`} style={styles.inlineLink}>{config.phone}</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.resourceCtaSection}>
        <div style={styles.sectionContainer}>
          <h2 style={styles.resourceCtaTitle}>Ready to Begin Your Journey?</h2>
          <p style={styles.resourceCtaText}>
            We're here to answer any questions and help you take the first step.
          </p>
          <button onClick={() => scrollToSection('contact')} style={styles.resourceCtaButton}>
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );

  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes mountainRise {
          from { opacity: 0; transform: translateY(100px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        .mountain-1 { animation: mountainRise 1.5s ease-out 0.2s forwards; opacity: 0; }
        .mountain-2 { animation: mountainRise 1.5s ease-out 0.4s forwards; opacity: 0; }
        .mountain-3 { animation: mountainRise 1.5s ease-out 0.6s forwards; opacity: 0; }
        
        .fade-in { animation: fadeInUp 0.8s ease-out forwards; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        
        .nav-link { transition: all 0.2s ease; }
        .nav-link:hover { color: #5B8A72 !important; transform: translateY(-1px); }
        .nav-link.active { color: #5B8A72 !important; }
        
        .cta-button { transition: all 0.3s ease; }
        .cta-button:hover { transform: translateY(-3px); box-shadow: 0 15px 35px rgba(91, 138, 114, 0.4); }
        
        .service-card { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .service-card:hover { transform: translateY(-8px); box-shadow: 0 25px 50px rgba(45, 80, 72, 0.15); }
        
        .team-card { transition: all 0.3s ease; }
        .team-card:hover { transform: scale(1.03); background: rgba(91, 138, 114, 0.05); }
        
        .location-card { transition: all 0.3s ease; }
        .location-card:hover { background: linear-gradient(135deg, #5B8A72 0%, #2D5048 100%); }
        .location-card:hover h4, .location-card:hover p { color: white !important; }
        
        .testimonial-card { transition: all 0.3s ease; }
        .testimonial-card:hover { transform: translateY(-5px); background: rgba(255,255,255,0.1); }
        
        .faq-item { transition: all 0.3s ease; }
        .faq-item:hover { background: rgba(91, 138, 114, 0.03); }
        
        .mobile-menu { transition: all 0.3s ease; transform: translateX(100%); }
        .mobile-menu.open { transform: translateX(0); }
        
        input:focus, textarea:focus {
          border-color: #5B8A72 !important;
          box-shadow: 0 0 0 3px rgba(91, 138, 114, 0.1);
        }
        
        .submit-btn { transition: all 0.3s ease; }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(91, 138, 114, 0.3); }
        .submit-btn:active { transform: translateY(0); }
        
        .secondary-cta { transition: all 0.2s ease; }
        .secondary-cta:hover { transform: translateX(5px); }
        
        .footer-link { transition: all 0.2s ease; }
        .footer-link:hover { color: white !important; transform: translateX(3px); }
        
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .team-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .locations-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .insurance-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .locations-grid { grid-template-columns: 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .hero-stats { flex-direction: column; gap: 30px !important; }
          .footer-main { flex-direction: column; gap: 40px !important; }
          .footer-links { flex-direction: column; gap: 30px !important; }
          .insurance-grid { grid-template-columns: 1fr !important; }
          .rights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Navigation */}
      <nav style={{
        ...styles.nav,
        background: isScrolled ? 'rgba(255, 253, 250, 0.98)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        boxShadow: isScrolled ? '0 4px 30px rgba(45, 80, 72, 0.08)' : 'none'
      }}>
        <div style={styles.navContainer}>
          <div style={styles.logo} onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}>
            <span style={styles.logoIcon}>⛰️</span>
            <span style={styles.logoText}>{config.businessName}</span>
          </div>
          
          <div className="desktop-nav" style={styles.navLinks}>
            {['Home', 'Services', 'Team', 'Locations', 'Resources', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (item === 'Resources') {
                    setCurrentPage('resources');
                    window.scrollTo(0, 0);
                  } else {
                    scrollToSection(item.toLowerCase());
                  }
                }}
                className={`nav-link ${activeSection === item.toLowerCase() || (item === 'Resources' && currentPage === 'resources') ? 'active' : ''}`}
                style={{
                  ...styles.navLink,
                  color: activeSection === item.toLowerCase() || (item === 'Resources' && currentPage === 'resources') ? '#5B8A72' : '#2D3B35'
                }}
              >
                {item}
              </button>
            ))}
            <button onClick={() => scrollToSection('contact')} className="cta-button" style={styles.navCta}>
              Schedule Now
            </button>
          </div>
          
          <button 
            className="mobile-toggle"
            style={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} style={styles.mobileMenu}>
        {['Home', 'Services', 'Team', 'Locations', 'Resources', 'Contact'].map((item) => (
          <button
            key={item}
            onClick={() => {
              if (item === 'Resources') {
                setCurrentPage('resources');
                window.scrollTo(0, 0);
                setMobileMenuOpen(false);
              } else {
                scrollToSection(item.toLowerCase());
              }
            }}
            style={styles.mobileMenuItem}
          >
            {item}
          </button>
        ))}
        <button onClick={() => scrollToSection('contact')} style={styles.mobileCta}>
          Schedule Now
        </button>
      </div>

      {/* Conditional Page Rendering */}
      {currentPage === 'resources' ? (
        <ResourcesPage />
      ) : (
        <>
          {/* Hero Section */}
          <section id="home" style={styles.hero}>
            <div style={styles.heroBackground}>
              <svg style={styles.mountainsSvg} viewBox="0 0 1440 400" preserveAspectRatio="none">
                <path className="mountain-1" d="M0,400 L0,280 Q180,200 360,240 T720,180 T1080,220 T1440,200 L1440,400 Z" fill="rgba(45, 80, 72, 0.08)" />
                <path className="mountain-2" d="M0,400 L0,300 Q240,220 480,270 T960,210 T1440,250 L1440,400 Z" fill="rgba(91, 138, 114, 0.1)" />
                <path className="mountain-3" d="M0,400 L0,320 Q300,260 600,300 T1200,270 T1440,290 L1440,400 Z" fill="rgba(168, 198, 182, 0.12)" />
              </svg>
            </div>
            
            <div style={styles.heroContent} className="fade-in">
              <p style={styles.heroTagline}>{config.tagline}</p>
              <h1 style={styles.heroTitle}>
                Find Your Path to
                <span style={styles.heroTitleAccent}> Wellness</span>
              </h1>
              <p style={styles.heroSubtitle}>
                Compassionate counseling grounded in faith and backed by clinical expertise. 
                Serving individuals, couples, and families across Western North Carolina.
              </p>
              <div style={styles.heroCtas}>
                <button onClick={() => scrollToSection('contact')} className="cta-button" style={styles.primaryCta}>
                  Begin Your Journey
                </button>
                <button onClick={() => scrollToSection('services')} className="secondary-cta" style={styles.secondaryCta}>
                  Explore Services →
                </button>
              </div>
            </div>
            
            <div className="hero-stats" style={styles.heroStats}>
              {[
                { number: `${config.team.length}+`, label: "Licensed Counselors" },
                { number: config.locations.length.toString(), label: "Convenient Locations" },
                { number: config.telehealthStates.length.toString(), label: "States via Telehealth" }
              ].map((stat, i) => (
                <div key={i} style={styles.statItem} className={`fade-in delay-${i + 1}`}>
                  <span style={styles.statNumber}>{stat.number}</span>
                  <span style={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* About Section */}
          <section style={styles.aboutSection}>
            <div className="about-grid" style={styles.aboutContainer}>
              <div style={styles.aboutContent}>
                <span style={styles.sectionLabel}>Who We Are</span>
                <h2 style={styles.aboutTitle}>Healing Rooted in Faith, Guided by Excellence</h2>
                <p style={styles.aboutText}>
                  Our practice is built on the hope and wisdom of the Christian faith, with Scripture 
                  as our guiding foundation. While faith is central to our approach, we welcome and 
                  serve individuals from all backgrounds with compassion, respect, and clinically sound care.
                </p>
                <p style={styles.aboutText}>
                  We provide counseling in multiple locations throughout Western North Carolina and via 
                  Telehealth in {config.telehealthStates.join(', ')} for those seeking to move to the next level of personal 
                  and relationship development.
                </p>
                <div style={styles.aboutFeatures}>
                  {["In-network with major insurance providers", "Licensed, experienced counselors", "Flexible scheduling options"].map((feature, i) => (
                    <div key={i} style={styles.featureItem}>
                      <span style={styles.featureIcon}>✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={styles.aboutVisual}>
                <div style={styles.visualCard}>
                  <div style={styles.visualQuote}>"Come to me, all who labor and are heavy laden, and I will give you rest."</div>
                  <div style={styles.visualAttribution}>— Matthew 11:28</div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" style={styles.servicesSection}>
            <div style={styles.sectionContainer}>
              <span style={styles.sectionLabel}>Our Services</span>
              <h2 style={styles.sectionTitle}>Comprehensive Care for Your Journey</h2>
              <p style={styles.sectionSubtitle}>We offer a range of therapeutic services tailored to meet you where you are.</p>
              
              <div className="services-grid" style={styles.servicesGrid}>
                {config.services.map((service, index) => (
                  <div 
                    key={index} 
                    className="service-card" 
                    style={styles.serviceCard}
                    onClick={() => setExpandedService(expandedService === index ? null : index)}
                  >
                    <span style={styles.serviceIcon}>{service.icon}</span>
                    <h3 style={styles.serviceTitle}>{service.title}</h3>
                    <p style={styles.serviceDescription}>{service.description}</p>
                    
                    {expandedService === index && (
                      <div style={styles.serviceDetails}>
                        {service.details.map((detail, i) => (
                          <span key={i} style={styles.serviceTag}>{detail}</span>
                        ))}
                      </div>
                    )}
                    
                    <button onClick={(e) => { e.stopPropagation(); scrollToSection('contact'); }} style={styles.serviceLink}>
                      Get Started →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section id="team" style={styles.teamSection}>
            <div style={styles.sectionContainer}>
              <span style={styles.sectionLabel}>Our Team</span>
              <h2 style={styles.sectionTitle}>Meet Our Counselors</h2>
              <p style={styles.sectionSubtitle}>A dedicated team of licensed professionals committed to your wellbeing.</p>
              
              <div className="team-grid" style={styles.teamGrid}>
                {config.team.map((member, index) => (
                  <div 
                    key={index} 
                    className="team-card" 
                    style={{
                      ...styles.teamCard,
                      background: hoveredTeam === index ? 'rgba(91, 138, 114, 0.05)' : 'transparent'
                    }}
                    onMouseEnter={() => setHoveredTeam(index)}
                    onMouseLeave={() => setHoveredTeam(null)}
                  >
                    <div style={{
                      ...styles.teamAvatar,
                      transform: hoveredTeam === index ? 'scale(1.1)' : 'scale(1)',
                      transition: 'transform 0.3s ease'
                    }}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h4 style={styles.teamName}>{member.name}</h4>
                    <p style={styles.teamRole}>{member.role}</p>
                    <span style={styles.teamSpecialty}>{member.specialty}</span>
                  </div>
                ))}
              </div>
              
              <p style={styles.teamNote}>
                Our counselors maintain flexible schedules across all locations. 
                <button onClick={() => scrollToSection('contact')} style={styles.inlineLink}> Contact us</button> to find the right fit for you.
              </p>
            </div>
          </section>

          {/* Testimonials Section */}
          <section style={styles.testimonialsSection}>
            <div style={styles.sectionContainer}>
              <span style={styles.sectionLabelLight}>Testimonials</span>
              <h2 style={styles.sectionTitleLight}>Stories of Transformation</h2>
              
              <div className="testimonials-grid" style={styles.testimonialsGrid}>
                {config.testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-card" style={styles.testimonialCard}>
                    <div style={styles.testimonialQuote}>"</div>
                    <p style={styles.testimonialText}>{testimonial.quote}</p>
                    <p style={styles.testimonialAuthor}>{testimonial.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Locations Section */}
          <section id="locations" style={styles.locationsSection}>
            <div style={styles.sectionContainer}>
              <span style={styles.sectionLabel}>Locations</span>
              <h2 style={styles.sectionTitle}>Find Us Near You</h2>
              <p style={styles.sectionSubtitle}>
                Multiple convenient locations throughout Western North Carolina, plus Telehealth 
                services available in {config.telehealthStates.join(', ')}.
              </p>
              
              <div className="locations-grid" style={styles.locationsGrid}>
                {config.locations.map((location, index) => (
                  <div key={index} className="location-card" style={styles.locationCard}>
                    <h4 style={styles.locationCity}>{location.city}</h4>
                    <p style={styles.locationAddress}>{location.address}</p>
                    <p style={styles.locationPhone}>{location.phone}</p>
                  </div>
                ))}
              </div>
              
              <div style={styles.telehealthBanner}>
                <span style={styles.telehealthIcon}>💻</span>
                <div>
                  <h4 style={styles.telehealthTitle}>Telehealth Available</h4>
                  <p style={styles.telehealthText}>Secure video sessions for clients in {config.telehealthStates.join(', ')}</p>
                </div>
                <button onClick={() => scrollToSection('contact')} style={styles.telehealthCta}>
                  Schedule Telehealth →
                </button>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" style={styles.contactSection}>
            <div className="contact-grid" style={styles.contactContainer}>
              <div style={styles.contactInfo}>
                <span style={styles.sectionLabelLight}>Get Started</span>
                <h2 style={styles.contactTitle}>Begin Your Journey Today</h2>
                <p style={styles.contactText}>
                  Taking the first step toward wellness can feel daunting, but you don't have 
                  to do it alone. Reach out to schedule your first appointment or ask any questions.
                </p>
                
                <div style={styles.contactDetails}>
                  <a href={`tel:${config.phoneRaw}`} style={styles.contactItem}>
                    <span style={styles.contactIcon}>📞</span>
                    <div>
                      <p style={styles.contactLabel}>Phone</p>
                      <p style={styles.contactValue}>{config.phone}</p>
                    </div>
                  </a>
                  <a href={`mailto:${config.email}`} style={styles.contactItem}>
                    <span style={styles.contactIcon}>✉️</span>
                    <div>
                      <p style={styles.contactLabel}>Email</p>
                      <p style={styles.contactValue}>{config.email}</p>
                    </div>
                  </a>
                  <div style={styles.contactItem}>
                    <span style={styles.contactIcon}>🕐</span>
                    <div>
                      <p style={styles.contactLabel}>Hours</p>
                      <p style={styles.contactValue}>{config.hours}</p>
                    </div>
                  </div>
                </div>
                
                <div style={styles.emergencyBox}>
                  <h4 style={styles.emergencyTitle}>Crisis Support</h4>
                  <p style={styles.emergencyText}>
                    If you're experiencing an emergency, please call 911 or the 
                    National Suicide Prevention Lifeline at <strong>988</strong>.
                  </p>
                </div>
              </div>
              
              <div style={styles.contactForm}>
                <h3 style={styles.formTitle}>Send Us a Message</h3>
                <p style={styles.formNote}>Please do not include private health information.</p>
                
                {formStatus === 'success' ? (
                  <div style={styles.successMessage}>
                    <span style={styles.successIcon}>✓</span>
                    <h4>Message Sent!</h4>
                    <p>We'll get back to you within 24 hours.</p>
                  </div>
                ) : formStatus === 'error' ? (
                  <div style={styles.errorMessage}>
                    <span style={styles.errorIcon}>!</span>
                    <h4>Something went wrong</h4>
                    <p>Please try again or call us directly.</p>
                  </div>
                ) : (
                  <form style={styles.form} onSubmit={handleSubmit}>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>Your Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        style={styles.formInput} 
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={styles.formInput} 
                        placeholder="(828) 555-0123"
                        required
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={styles.formInput} 
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>Message</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        style={styles.formTextarea} 
                        rows={4} 
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="submit-btn" 
                      style={styles.submitButton}
                      disabled={formStatus === 'submitting'}
                    >
                      {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div className="footer-main" style={styles.footerMain}>
            <div style={styles.footerBrand}>
              <span style={styles.footerLogo}>⛰️ {config.businessName}</span>
              <p style={styles.footerTagline}>{config.tagline}</p>
            </div>
            <div className="footer-links" style={styles.footerLinks}>
              <div style={styles.footerColumn}>
                <h4 style={styles.footerHeading}>Services</h4>
                {config.services.map((service, i) => (
                  <button key={i} onClick={() => scrollToSection('services')} className="footer-link" style={styles.footerLink}>
                    {service.title}
                  </button>
                ))}
              </div>
              <div style={styles.footerColumn}>
                <h4 style={styles.footerHeading}>Resources</h4>
                <button onClick={() => { setCurrentPage('resources'); window.scrollTo(0, 0); }} className="footer-link" style={styles.footerLink}>FAQ</button>
                <button onClick={() => { setCurrentPage('resources'); window.scrollTo(0, 0); }} className="footer-link" style={styles.footerLink}>Insurance Info</button>
                <button onClick={() => { setCurrentPage('resources'); window.scrollTo(0, 0); }} className="footer-link" style={styles.footerLink}>Patient Rights</button>
                <button onClick={() => { setCurrentPage('resources'); window.scrollTo(0, 0); }} className="footer-link" style={styles.footerLink}>Privacy Policy</button>
              </div>
              <div style={styles.footerColumn}>
                <h4 style={styles.footerHeading}>Connect</h4>
                <a href={`tel:${config.phoneRaw}`} className="footer-link" style={styles.footerLink}>{config.phone}</a>
                <a href={`mailto:${config.email}`} className="footer-link" style={styles.footerLink}>{config.email}</a>
              </div>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <p style={styles.footerCopyright}>© {new Date().getFullYear()} {config.businessName}, PLLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Styles object (comprehensive)
const styles = {
  container: {
    fontFamily: "'Outfit', sans-serif",
    background: '#FFFDF9',
    color: '#2D3B35',
    minHeight: '100vh',
    overflowX: 'hidden'
  },
  
  // Navigation
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '16px 0',
    transition: 'all 0.3s ease'
  },
  navContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer'
  },
  logoIcon: { fontSize: '28px' },
  logoText: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '24px',
    fontWeight: '600',
    color: '#2D5048'
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px'
  },
  navLink: {
    background: 'none',
    border: 'none',
    color: '#2D3B35',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: '500',
    fontFamily: "'Outfit', sans-serif",
    padding: '8px 0'
  },
  navCta: {
    background: 'linear-gradient(135deg, #5B8A72 0%, #2D5048 100%)',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '30px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    fontFamily: "'Outfit', sans-serif"
  },
  mobileToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#2D3B35',
    padding: '8px'
  },
  mobileMenu: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: '280px',
    background: 'white',
    zIndex: 999,
    padding: '80px 32px 32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    boxShadow: '-10px 0 30px rgba(0,0,0,0.1)'
  },
  mobileMenuItem: {
    background: 'none',
    border: 'none',
    textAlign: 'left',
    padding: '16px 0',
    fontSize: '18px',
    fontWeight: '500',
    color: '#2D3B35',
    cursor: 'pointer',
    fontFamily: "'Outfit', sans-serif",
    borderBottom: '1px solid rgba(45, 80, 72, 0.1)'
  },
  mobileCta: {
    background: 'linear-gradient(135deg, #5B8A72 0%, #2D5048 100%)',
    color: 'white',
    padding: '16px 24px',
    borderRadius: '30px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: "'Outfit', sans-serif",
    marginTop: '24px'
  },
  
  // Hero
  hero: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '120px 32px 80px',
    overflow: 'hidden'
  },
  heroBackground: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, #F7F5F0 0%, #FFFDF9 100%)',
    zIndex: 0
  },
  mountainsSvg: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '400px'
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    maxWidth: '800px'
  },
  heroTagline: {
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: '#5B8A72',
    marginBottom: '24px'
  },
  heroTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(42px, 8vw, 80px)',
    fontWeight: '400',
    lineHeight: '1.1',
    color: '#2D3B35',
    marginBottom: '24px'
  },
  heroTitleAccent: {
    color: '#5B8A72',
    fontStyle: 'italic'
  },
  heroSubtitle: {
    fontSize: '18px',
    lineHeight: '1.7',
    color: '#5A6B62',
    marginBottom: '40px',
    maxWidth: '600px',
    margin: '0 auto 40px'
  },
  heroCtas: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  primaryCta: {
    display: 'inline-block',
    background: 'linear-gradient(135deg, #5B8A72 0%, #2D5048 100%)',
    color: 'white',
    padding: '18px 40px',
    borderRadius: '40px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: "'Outfit', sans-serif",
    boxShadow: '0 8px 25px rgba(91, 138, 114, 0.3)'
  },
  secondaryCta: {
    display: 'inline-flex',
    alignItems: 'center',
    color: '#5B8A72',
    padding: '18px 32px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: "'Outfit', sans-serif"
  },
  heroStats: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    gap: '60px',
    marginTop: '80px',
    paddingTop: '40px',
    borderTop: '1px solid rgba(45, 80, 72, 0.1)'
  },
  statItem: { textAlign: 'center' },
  statNumber: {
    display: 'block',
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '42px',
    fontWeight: '600',
    color: '#5B8A72'
  },
  statLabel: {
    fontSize: '14px',
    color: '#5A6B62',
    fontWeight: '500'
  },
  
  // About Section
  aboutSection: {
    padding: '120px 32px',
    background: '#FFFDF9'
  },
  aboutContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '80px',
    alignItems: 'center'
  },
  aboutContent: {},
  sectionLabel: {
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: '#5B8A72',
    marginBottom: '16px'
  },
  aboutTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(32px, 5vw, 44px)',
    fontWeight: '500',
    lineHeight: '1.2',
    color: '#2D3B35',
    marginBottom: '24px'
  },
  aboutText: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#5A6B62',
    marginBottom: '20px'
  },
  aboutFeatures: {
    marginTop: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '15px',
    color: '#2D3B35'
  },
  featureIcon: {
    color: '#5B8A72',
    fontWeight: '700'
  },
  aboutVisual: {
    display: 'flex',
    justifyContent: 'center'
  },
  visualCard: {
    background: 'linear-gradient(135deg, #5B8A72 0%, #2D5048 100%)',
    padding: '60px 50px',
    borderRadius: '24px',
    maxWidth: '400px',
    boxShadow: '0 30px 60px rgba(45, 80, 72, 0.2)'
  },
  visualQuote: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(22px, 3vw, 28px)',
    fontStyle: 'italic',
    color: 'white',
    lineHeight: '1.5',
    marginBottom: '24px'
  },
  visualAttribution: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500'
  },
  
  // Services Section
  servicesSection: {
    padding: '120px 32px',
    background: 'linear-gradient(180deg, #F7F5F0 0%, #FFFDF9 100%)'
  },
  sectionContainer: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  sectionTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(36px, 5vw, 48px)',
    fontWeight: '500',
    color: '#2D3B35',
    marginBottom: '16px',
    textAlign: 'center'
  },
  sectionSubtitle: {
    fontSize: '17px',
    color: '#5A6B62',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto 60px',
    lineHeight: '1.7'
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '24px'
  },
  serviceCard: {
    background: 'white',
    padding: '40px 32px',
    borderRadius: '20px',
    boxShadow: '0 8px 30px rgba(45, 80, 72, 0.06)',
    cursor: 'pointer'
  },
  serviceIcon: {
    fontSize: '40px',
    marginBottom: '20px',
    display: 'block'
  },
  serviceTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '24px',
    fontWeight: '600',
    color: '#2D3B35',
    marginBottom: '12px'
  },
  serviceDescription: {
    fontSize: '15px',
    color: '#5A6B62',
    lineHeight: '1.7',
    marginBottom: '20px'
  },
  serviceDetails: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '20px'
  },
  serviceTag: {
    background: 'rgba(91, 138, 114, 0.1)',
    color: '#5B8A72',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600'
  },
  serviceLink: {
    fontSize: '14px',
    color: '#5B8A72',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    fontFamily: "'Outfit', sans-serif",
    padding: 0
  },
  
  // Team Section
  teamSection: {
    padding: '120px 32px',
    background: '#FFFDF9'
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '24px',
    marginBottom: '40px'
  },
  teamCard: {
    textAlign: 'center',
    padding: '32px 16px',
    borderRadius: '16px',
    cursor: 'pointer'
  },
  teamAvatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #A8C6B6 0%, #5B8A72 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px',
    fontSize: '24px',
    fontWeight: '600',
    color: 'white',
    fontFamily: "'Cormorant Garamond', serif"
  },
  teamName: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '18px',
    fontWeight: '600',
    color: '#2D3B35',
    marginBottom: '4px'
  },
  teamRole: {
    fontSize: '13px',
    color: '#5A6B62',
    marginBottom: '8px'
  },
  teamSpecialty: {
    fontSize: '12px',
    color: '#5B8A72',
    fontWeight: '600',
    background: 'rgba(91, 138, 114, 0.1)',
    padding: '6px 12px',
    borderRadius: '20px',
    display: 'inline-block'
  },
  teamNote: {
    textAlign: 'center',
    fontSize: '15px',
    color: '#5A6B62'
  },
  inlineLink: {
    color: '#5B8A72',
    fontWeight: '600',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontFamily: "'Outfit', sans-serif",
    fontSize: 'inherit',
    textDecoration: 'underline'
  },
  
  // Testimonials Section
  testimonialsSection: {
    padding: '120px 32px',
    background: 'linear-gradient(135deg, #2D5048 0%, #1A3530 100%)'
  },
  sectionLabelLight: {
    display: 'block',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: '#A8C6B6',
    marginBottom: '16px',
    textAlign: 'center'
  },
  sectionTitleLight: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(36px, 5vw, 48px)',
    fontWeight: '500',
    color: 'white',
    marginBottom: '60px',
    textAlign: 'center'
  },
  testimonialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px'
  },
  testimonialCard: {
    background: 'rgba(255,255,255,0.05)',
    padding: '40px',
    borderRadius: '20px',
    backdropFilter: 'blur(10px)'
  },
  testimonialQuote: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '64px',
    color: '#5B8A72',
    lineHeight: '0.5',
    marginBottom: '20px'
  },
  testimonialText: {
    fontSize: '16px',
    color: 'rgba(255,255,255,0.9)',
    lineHeight: '1.8',
    fontStyle: 'italic',
    marginBottom: '20px'
  },
  testimonialAuthor: {
    fontSize: '14px',
    color: '#A8C6B6',
    fontWeight: '600'
  },
  
  // Locations Section
  locationsSection: {
    padding: '120px 32px',
    background: '#FFFDF9'
  },
  locationsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    marginBottom: '40px'
  },
  locationCard: {
    background: 'white',
    padding: '32px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(45, 80, 72, 0.06)',
    cursor: 'pointer',
    border: '1px solid rgba(45, 80, 72, 0.08)'
  },
  locationCity: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '24px',
    fontWeight: '600',
    color: '#2D3B35',
    marginBottom: '8px',
    transition: 'color 0.3s ease'
  },
  locationAddress: {
    fontSize: '14px',
    color: '#5A6B62',
    marginBottom: '4px',
    transition: 'color 0.3s ease'
  },
  locationPhone: {
    fontSize: '14px',
    color: '#5B8A72',
    fontWeight: '600',
    transition: 'color 0.3s ease'
  },
  telehealthBanner: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    background: 'linear-gradient(135deg, rgba(91, 138, 114, 0.1) 0%, rgba(168, 198, 182, 0.1) 100%)',
    padding: '32px 40px',
    borderRadius: '16px',
    border: '1px solid rgba(91, 138, 114, 0.2)',
    flexWrap: 'wrap'
  },
  telehealthIcon: { fontSize: '40px' },
  telehealthTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '22px',
    fontWeight: '600',
    color: '#2D3B35',
    marginBottom: '4px'
  },
  telehealthText: {
    fontSize: '15px',
    color: '#5A6B62'
  },
  telehealthCta: {
    marginLeft: 'auto',
    background: 'linear-gradient(135deg, #5B8A72 0%, #2D5048 100%)',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '30px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    fontFamily: "'Outfit', sans-serif"
  },
  
  // Contact Section
  contactSection: {
    padding: '120px 32px',
    background: 'linear-gradient(180deg, #2D5048 0%, #1A3530 100%)'
  },
  contactContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '80px'
  },
  contactInfo: {},
  contactTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(32px, 5vw, 44px)',
    fontWeight: '500',
    color: 'white',
    marginBottom: '20px'
  },
  contactText: {
    fontSize: '16px',
    color: 'rgba(255,255,255,0.8)',
    lineHeight: '1.8',
    marginBottom: '40px'
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    marginBottom: '40px'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    textDecoration: 'none',
    cursor: 'pointer'
  },
  contactIcon: { fontSize: '24px' },
  contactLabel: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.6)',
    marginBottom: '2px'
  },
  contactValue: {
    fontSize: '16px',
    color: 'white',
    fontWeight: '500'
  },
  emergencyBox: {
    background: 'rgba(255,255,255,0.08)',
    padding: '24px',
    borderRadius: '12px',
    borderLeft: '3px solid #A8C6B6'
  },
  emergencyTitle: {
    fontSize: '16px',
    color: '#A8C6B6',
    fontWeight: '600',
    marginBottom: '8px'
  },
  emergencyText: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.8)',
    lineHeight: '1.6'
  },
  contactForm: {
    background: 'white',
    padding: '48px',
    borderRadius: '24px',
    boxShadow: '0 30px 60px rgba(0,0,0,0.2)'
  },
  formTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '28px',
    fontWeight: '600',
    color: '#2D3B35',
    marginBottom: '8px'
  },
  formNote: {
    fontSize: '13px',
    color: '#5A6B62',
    marginBottom: '32px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  formLabel: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#2D3B35'
  },
  formInput: {
    padding: '14px 18px',
    borderRadius: '10px',
    border: '1px solid rgba(45, 80, 72, 0.2)',
    fontSize: '15px',
    fontFamily: "'Outfit', sans-serif",
    outline: 'none'
  },
  formTextarea: {
    padding: '14px 18px',
    borderRadius: '10px',
    border: '1px solid rgba(45, 80, 72, 0.2)',
    fontSize: '15px',
    fontFamily: "'Outfit', sans-serif",
    resize: 'vertical',
    minHeight: '120px',
    outline: 'none'
  },
  submitButton: {
    background: 'linear-gradient(135deg, #5B8A72 0%, #2D5048 100%)',
    color: 'white',
    padding: '16px 32px',
    borderRadius: '30px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: "'Outfit', sans-serif",
    cursor: 'pointer',
    marginTop: '8px'
  },
  successMessage: {
    textAlign: 'center',
    padding: '60px 20px'
  },
  successIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #5B8A72 0%, #2D5048 100%)',
    color: 'white',
    fontSize: '28px',
    marginBottom: '20px'
  },
  errorMessage: {
    textAlign: 'center',
    padding: '60px 20px'
  },
  errorIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: '#e74c3c',
    color: 'white',
    fontSize: '28px',
    marginBottom: '20px'
  },
  
  // Footer
  footer: {
    background: '#1A2E28',
    padding: '80px 32px 40px'
  },
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  footerMain: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '60px'
  },
  footerBrand: {},
  footerLogo: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '24px',
    fontWeight: '600',
    color: 'white',
    display: 'block',
    marginBottom: '8px'
  },
  footerTagline: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.5)'
  },
  footerLinks: {
    display: 'flex',
    gap: '80px'
  },
  footerColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  footerHeading: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#A8C6B6',
    marginBottom: '8px'
  },
  footerLink: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.7)',
    textDecoration: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontFamily: "'Outfit', sans-serif",
    textAlign: 'left',
    padding: 0
  },
  footerBottom: {
    paddingTop: '32px',
    borderTop: '1px solid rgba(255,255,255,0.1)'
  },
  footerCopyright: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.4)',
    textAlign: 'center'
  },
  
  // Resources Page Styles
  resourceSection: {
    padding: '100px 32px',
    background: '#FFFDF9'
  },
  faqContainer: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  faqItem: {
    background: 'white',
    borderRadius: '12px',
    marginBottom: '16px',
    overflow: 'hidden',
    boxShadow: '0 2px 10px rgba(45, 80, 72, 0.05)',
    cursor: 'pointer'
  },
  faqQuestion: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px',
    gap: '16px'
  },
  faqQuestionText: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '20px',
    fontWeight: '600',
    color: '#2D3B35',
    margin: 0
  },
  faqToggle: {
    color: '#5B8A72',
    fontSize: '12px',
    transition: 'transform 0.3s ease'
  },
  faqAnswer: {
    padding: '0 24px 24px',
    color: '#5A6B62',
    lineHeight: '1.7'
  },
  insuranceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    marginBottom: '40px'
  },
  insuranceCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    background: 'white',
    padding: '20px 24px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(45, 80, 72, 0.05)'
  },
  insuranceIcon: {
    color: '#5B8A72',
    fontWeight: '700',
    fontSize: '18px'
  },
  insuranceName: {
    fontSize: '16px',
    color: '#2D3B35',
    fontWeight: '500'
  },
  insuranceNote: {
    background: 'white',
    padding: '32px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(45, 80, 72, 0.06)',
    lineHeight: '1.7',
    color: '#5A6B62'
  },
  rightsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '32px'
  },
  rightsCard: {
    background: 'white',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(45, 80, 72, 0.06)'
  },
  rightsList: {
    paddingLeft: '20px',
    lineHeight: '2',
    color: '#5A6B62'
  },
  privacyContainer: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  privacySection: {
    background: 'white',
    padding: '32px',
    borderRadius: '16px',
    marginBottom: '24px',
    boxShadow: '0 4px 20px rgba(45, 80, 72, 0.06)'
  },
  resourceCtaSection: {
    padding: '80px 32px',
    background: 'linear-gradient(135deg, #5B8A72 0%, #2D5048 100%)',
    textAlign: 'center'
  },
  resourceCtaTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(32px, 5vw, 44px)',
    fontWeight: '500',
    color: 'white',
    marginBottom: '16px'
  },
  resourceCtaText: {
    fontSize: '18px',
    color: 'rgba(255,255,255,0.9)',
    marginBottom: '32px'
  },
  resourceCtaButton: {
    background: 'white',
    color: '#2D5048',
    padding: '18px 40px',
    borderRadius: '40px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: "'Outfit', sans-serif"
  }
};

export default PeakWellness;
