import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { config } from './config';

// Clean SVG Icons
const Icons = {
  person: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>
    </svg>
  ),
  heart: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 21C12 21 4 14 4 8.5C4 5.5 6.5 3 9.5 3C11 3 12 4 12 4C12 4 13 3 14.5 3C17.5 3 20 5.5 20 8.5C20 14 12 21 12 21Z"/>
    </svg>
  ),
  shield: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3L4 7V12C4 16.4 7.4 20.5 12 21.5C16.6 20.5 20 16.4 20 12V7L12 3Z"/>
      <path d="M9 12L11 14L15 10"/>
    </svg>
  ),
  family: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="6" r="2.5"/>
      <circle cx="16" cy="6" r="2.5"/>
      <path d="M3 18c0-3 2.5-4.5 5-4.5s5 1.5 5 4.5"/>
      <path d="M11 18c0-3 2.5-4.5 5-4.5s5 1.5 5 4.5"/>
    </svg>
  ),
  cross: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 4V20M8 8H16"/>
    </svg>
  ),
  video: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="6" width="13" height="12" rx="2"/>
      <path d="M15 10L22 6V18L15 14"/>
    </svg>
  )
};

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Team', path: '/team' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav style={{
        ...styles.nav,
        background: isScrolled ? 'rgba(255, 253, 250, 0.98)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        boxShadow: isScrolled ? '0 4px 30px rgba(45, 80, 72, 0.08)' : 'none'
      }}>
        <div style={styles.navContainer}>
          <Link to="/" style={styles.logo}>
            <img src="/peak_icon.png" alt="Peak Wellness" style={styles.logoImage} />
            <span style={styles.logoText}>{config.businessName}</span>
          </Link>
          
          <div className="desktop-nav" style={styles.navLinks}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                style={{
                  ...styles.navLink,
                  color: location.pathname === item.path ? '#5B8A72' : '#2D3B35'
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="cta-button" style={styles.navCta}>
              Schedule Now
            </Link>
          </div>
          
          <button 
            className="mobile-toggle"
            style={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} 
        style={{
          ...styles.mobileMenu,
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)'
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            style={styles.mobileMenuItem}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        <Link to="/contact" style={styles.mobileCta} onClick={() => setMobileMenuOpen(false)}>
          Schedule Now
        </Link>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div 
          style={styles.mobileOverlay} 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

// Footer Component
const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.footerContainer}>
      <div className="footer-main" style={styles.footerMain}>
        <div style={styles.footerBrand}>
          <div style={styles.footerLogoWrapper}>
            <img src="/peak_full.png" alt={config.businessName} style={styles.footerLogoImage} />
          </div>
          <p style={styles.footerTagline}>{config.tagline}</p>
        </div>
        <div className="footer-links" style={styles.footerLinks}>
          <div style={styles.footerColumn}>
            <h4 style={styles.footerHeading}>Services</h4>
            <Link to="/services" className="footer-link" style={styles.footerLink}>Individual Therapy</Link>
            <Link to="/services" className="footer-link" style={styles.footerLink}>Marriage Counseling</Link>
            <Link to="/services" className="footer-link" style={styles.footerLink}>Family Therapy</Link>
            <Link to="/services" className="footer-link" style={styles.footerLink}>Telehealth</Link>
          </div>
          <div style={styles.footerColumn}>
            <h4 style={styles.footerHeading}>Resources</h4>
            <Link to="/resources" className="footer-link" style={styles.footerLink}>FAQ</Link>
            <Link to="/resources#insurance" className="footer-link" style={styles.footerLink}>Insurance Info</Link>
            <Link to="/resources#rights" className="footer-link" style={styles.footerLink}>Patient Rights</Link>
            <Link to="/resources#privacy" className="footer-link" style={styles.footerLink}>Privacy Policy</Link>
          </div>
          <div style={styles.footerColumn}>
            <h4 style={styles.footerHeading}>Contact</h4>
            <a href={`tel:${config.phoneRaw}`} className="footer-link" style={styles.footerLink}>{config.phone}</a>
            <a href={`mailto:${config.email}`} className="footer-link" style={styles.footerLink}>{config.email}</a>
            <p style={styles.footerAddress}>
              {config.address.street}<br/>
              {config.address.city}, {config.address.state} {config.address.zip}
            </p>
          </div>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p style={styles.footerCopyright}>© {new Date().getFullYear()} {config.businessName}. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// HOME PAGE
const HomePage = () => {
  const navigate = useNavigate();
  
  return (
    <>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroBackground}>
          <svg style={styles.mountainsSvg} viewBox="0 0 1440 400" preserveAspectRatio="none">
            <path className="mountain-1" d="M0,400 L0,280 Q180,200 360,240 T720,180 T1080,220 T1440,200 L1440,400 Z" fill="rgba(45, 80, 72, 0.08)" />
            <path className="mountain-2" d="M0,400 L0,300 Q240,220 480,270 T960,210 T1440,250 L1440,400 Z" fill="rgba(91, 138, 114, 0.1)" />
            <path className="mountain-3" d="M0,400 L0,320 Q300,260 600,300 T1200,270 T1440,290 L1440,400 Z" fill="rgba(168, 198, 182, 0.12)" />
          </svg>
        </div>
        
        <div style={styles.heroContent} className="fade-in">
          <p style={styles.heroTagline}>{config.tagline}</p>
          <h1 style={styles.heroTitle}>{config.heroHeadline}</h1>
          <p style={styles.heroSubtitle}>{config.heroSubhead}</p>
          <div style={styles.heroCtas}>
            <button onClick={() => navigate('/contact')} className="cta-button" style={styles.primaryCta}>
              Get Started
            </button>
            <button onClick={() => navigate('/services')} className="secondary-cta" style={styles.secondaryCta}>
              Our Services →
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.aboutSection}>
        <div className="about-grid" style={styles.aboutContainer}>
          <div style={styles.aboutContent}>
            <span style={styles.sectionLabel}>Who We Are</span>
            <h2 style={styles.aboutTitle}>{config.aboutTitle}</h2>
            {config.aboutText.map((text, i) => (
              <p key={i} style={styles.aboutText}>{text}</p>
            ))}
            <div style={styles.aboutFeatures}>
              {config.benefits.map((benefit, i) => (
                <div key={i} style={styles.featureItem}>
                  <span style={styles.featureIcon}>✓</span>
                  <div>
                    <strong>{benefit.title}</strong>
                    <p style={{ margin: '4px 0 0', color: '#5A6B62', fontSize: '14px' }}>{benefit.description}</p>
                  </div>
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

      {/* Photo Gallery Section */}
      {config.stockPhotos && config.stockPhotos.length > 0 && (
        <section style={styles.photoGallerySection}>
          <div style={styles.photoGalleryGrid}>
            {config.stockPhotos.slice(0, 6).map((photo, index) => (
              <div key={index} style={styles.photoGalleryItem}>
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  style={styles.photoGalleryImage}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Services Preview */}
      <section style={styles.servicesSection}>
        <div style={styles.sectionContainer}>
          <span style={styles.sectionLabel}>Our Services</span>
          <h2 style={styles.sectionTitle}>Comprehensive Care for Your Journey</h2>
          <p style={styles.sectionSubtitle}>We offer a range of therapeutic services tailored to meet you where you are.</p>
          
          <div className="services-grid" style={styles.servicesGrid}>
            {config.services.map((service, index) => (
              <div key={index} className="service-card" style={styles.serviceCard}>
                <div style={styles.serviceIconWrapper}>
                  {Icons[service.icon] || Icons.person}
                </div>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceDescription}>{service.description}</p>
                <Link to="/contact" style={styles.serviceLink}>Get Started →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - only shown when showTestimonials is true */}
      {config.showTestimonials && config.testimonials.length > 0 && (
        <section style={styles.testimonialsSection}>
          <div style={styles.sectionContainer}>
            <span style={styles.sectionLabelLight}>Testimonials</span>
            <h2 style={styles.sectionTitleLight}>What Our Clients Are Saying</h2>
            
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
      )}

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.sectionContainer}>
          <h2 style={styles.ctaTitle}>Ready to Begin Your Journey?</h2>
          <p style={styles.ctaText}>Take the first step toward healing today.</p>
          <button onClick={() => navigate('/contact')} style={styles.ctaButton}>
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
};

// SERVICES PAGE
const ServicesPage = () => {
  const navigate = useNavigate();
  
  return (
    <div style={{ paddingTop: '80px' }}>
      <section style={styles.pageHeader}>
        <span style={styles.sectionLabel}>What We Offer</span>
        <h1 style={styles.pageTitle}>Our Services</h1>
        <p style={styles.pageSubtitle}>Comprehensive, faith-integrated counseling tailored to your needs.</p>
      </section>

      <section style={styles.servicesPageSection}>
        <div style={styles.sectionContainer}>
          <div className="services-grid" style={styles.servicesGridLarge}>
            {config.services.map((service, index) => (
              <div key={index} className="service-card" style={styles.serviceCardLarge}>
                <div style={styles.serviceIconWrapperLarge}>
                  {Icons[service.icon] || Icons.person}
                </div>
                <div>
                  <h3 style={styles.serviceTitleLarge}>{service.title}</h3>
                  <p style={styles.serviceDescriptionLarge}>{service.description}</p>
                  <div style={styles.serviceDetails}>
                    {service.details.map((detail, i) => (
                      <span key={i} style={styles.serviceTag}>{detail}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Telehealth Banner */}
      <section style={{ padding: '60px 32px', background: '#FFFDF9' }}>
        <div style={styles.sectionContainer}>
          <div style={styles.telehealthBanner}>
            <div style={styles.telehealthIconWrapper}>
              {Icons.video}
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={styles.telehealthTitle}>Telehealth Available</h4>
              <p style={styles.telehealthText}>Secure video sessions for clients in {config.telehealthStates.join(', ')}</p>
            </div>
            <button onClick={() => navigate('/contact')} style={styles.telehealthCta}>
              Schedule Telehealth →
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <div style={styles.sectionContainer}>
          <h2 style={styles.ctaTitle}>Ready to Get Started?</h2>
          <p style={styles.ctaText}>Contact us to schedule your first appointment.</p>
          <button onClick={() => navigate('/contact')} style={styles.ctaButton}>
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

// TEAM PAGE
const TeamPage = () => {
  const navigate = useNavigate();

  const TeamMemberCard = ({ member }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    
    return (
      <div className="team-card" style={styles.teamCardPage}>
        <div style={styles.teamImageWrapperPage}>
          {!imageError && (
            <img 
              src={member.image} 
              alt={member.name}
              style={{
                ...styles.teamImagePage,
                opacity: imageLoaded ? 1 : 0,
              }}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          )}
          <div style={{
            ...styles.teamAvatarFallback,
            display: (imageError || !imageLoaded) ? 'flex' : 'none',
            position: 'absolute',
            top: 0,
            left: 0
          }}>
            {member.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
        <h4 style={styles.teamNamePage}>{member.name}</h4>
        <p style={styles.teamRolePage}>{member.role}</p>
        <span style={styles.teamSpecialtyPage}>{member.specialty}</span>
      </div>
    );
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      <section style={styles.pageHeader}>
        <span style={styles.sectionLabel}>Our Team</span>
        <h1 style={styles.pageTitle}>Meet the Team</h1>
        <p style={styles.pageSubtitle}>Our team combines diverse expertise with a shared belief: that true healing begins when faith meets professional care.</p>
      </section>

      <section style={{ padding: '60px 32px', background: '#FFFDF9' }}>
        <div style={styles.sectionContainer}>
          <div className="team-grid-3" style={styles.teamGridPage}>
            {config.team.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <div style={styles.sectionContainer}>
          <h2 style={styles.ctaTitle}>Ready to Connect?</h2>
          <p style={styles.ctaText}>Schedule an appointment with one of our team members.</p>
          <button onClick={() => navigate('/contact')} style={styles.ctaButton}>
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

// CONTACT PAGE
const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      const response = await fetch(`https://formspree.io/f/${config.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setFormStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      <section style={styles.pageHeader}>
        <span style={styles.sectionLabel}>Get In Touch</span>
        <h1 style={styles.pageTitle}>Contact Us</h1>
        <p style={styles.pageSubtitle}>Take the first step toward healing. We're here to help.</p>
      </section>

      <section style={styles.contactPageSection}>
        <div className="contact-grid" style={styles.contactPageGrid}>
          <div style={styles.contactPageInfo}>
            <h2 style={styles.contactPageTitle}>Let's Connect</h2>
            <p style={styles.contactPageText}>
              Whether you're ready to schedule an appointment or just have questions, 
              we'd love to hear from you.
            </p>
            
            <div style={styles.contactPageDetails}>
              <a href={`tel:${config.phoneRaw}`} style={styles.contactPageItem}>
                <span style={styles.contactPageIcon}>📞</span>
                <div>
                  <p style={styles.contactPageLabel}>Phone</p>
                  <p style={styles.contactPageValue}>{config.phone}</p>
                </div>
              </a>
              <a href={`mailto:${config.email}`} style={styles.contactPageItem}>
                <span style={styles.contactPageIcon}>✉️</span>
                <div>
                  <p style={styles.contactPageLabel}>Email</p>
                  <p style={styles.contactPageValue}>{config.email}</p>
                </div>
              </a>
              <div style={styles.contactPageItem}>
                <span style={styles.contactPageIcon}>📍</span>
                <div>
                  <p style={styles.contactPageLabel}>Address</p>
                  <p style={styles.contactPageValue}>
                    {config.address.street}<br/>
                    {config.address.city}, {config.address.state} {config.address.zip}
                  </p>
                </div>
              </div>
              <div style={styles.contactPageItem}>
                <span style={styles.contactPageIcon}>🕐</span>
                <div>
                  <p style={styles.contactPageLabel}>Hours</p>
                  <p style={styles.contactPageValue}>{config.hours}</p>
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
          
          <div style={styles.contactPageForm}>
            <h3 style={styles.formTitle}>Send Us a Message</h3>
            <p style={styles.formNote}>Please do not include private health information.</p>
            
            {formStatus === 'success' ? (
              <div style={styles.successMessage}>
                <span style={styles.successIcon}>✓</span>
                <h4>Message Sent!</h4>
                <p>We'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setFormStatus('idle')} 
                  style={{ ...styles.submitButton, marginTop: '20px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : formStatus === 'error' ? (
              <div style={styles.errorMessage}>
                <span style={styles.errorIcon}>!</span>
                <h4>Something went wrong</h4>
                <p>Please try again or call us directly.</p>
                <button 
                  onClick={() => setFormStatus('idle')} 
                  style={{ ...styles.submitButton, marginTop: '20px' }}
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form style={styles.form} onSubmit={handleSubmit}>
                <div className="form-row" style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>First Name *</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      style={styles.formInput} 
                      required
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>Last Name *</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      style={styles.formInput} 
                      required
                    />
                  </div>
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={styles.formInput} 
                    required
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={styles.formInput} 
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>How Can We Help You?</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    style={styles.formTextarea} 
                    rows={5} 
                  />
                </div>
                <button 
                  type="submit" 
                  className="submit-btn" 
                  style={styles.submitButton}
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Submit'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

// RESOURCES PAGE
const ResourcesPage = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <div style={{ paddingTop: '80px' }}>
      <section style={styles.pageHeader}>
        <span style={styles.sectionLabel}>Resources</span>
        <h1 style={styles.pageTitle}>Helpful Information</h1>
        <p style={styles.pageSubtitle}>Find answers to common questions and important information about our services.</p>
      </section>

      {/* FAQ Section */}
      <section id="faq" style={styles.resourceSection}>
        <div style={styles.sectionContainer}>
          <h2 style={styles.resourceSectionTitle}>Frequently Asked Questions</h2>
          
          <div style={styles.faqContainer}>
            {config.faqItems.map((item, index) => (
              <div 
                key={index} 
                className="faq-item"
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

      {/* Insurance Section */}
      <section id="insurance" style={{ ...styles.resourceSection, background: 'linear-gradient(180deg, #F7F5F0 0%, #FFFDF9 100%)' }}>
        <div style={styles.sectionContainer}>
          <h2 style={styles.resourceSectionTitle}>Insurance Information</h2>
          <p style={styles.resourceSectionSubtitle}>We work with many insurance providers to make counseling accessible.</p>
          
          <div className="insurance-grid" style={styles.insuranceGrid}>
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
      <section id="rights" style={styles.resourceSection}>
        <div style={styles.sectionContainer}>
          <h2 style={styles.resourceSectionTitle}>Patient Rights & Protections</h2>
          
          <div className="rights-grid" style={styles.rightsContainer}>
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
                medical care will cost.
              </p>
              <p style={{ lineHeight: '1.7' }}>
                For more information, visit{' '}
                <a href="https://www.cms.gov/nosurprises" target="_blank" rel="noopener noreferrer" style={styles.inlineLink}>
                  www.cms.gov/nosurprises
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" style={{ ...styles.resourceSection, background: 'linear-gradient(180deg, #F7F5F0 0%, #FFFDF9 100%)' }}>
        <div style={styles.sectionContainer}>
          <h2 style={styles.resourceSectionTitle}>Privacy Policy</h2>
          
          <div style={styles.privacyContainer}>
            <div style={styles.privacySection}>
              <h3>Confidentiality</h3>
              <p>
                Your privacy is of utmost importance to us. All information shared during therapy 
                sessions is kept strictly confidential, with limited exceptions required by law.
              </p>
            </div>
            
            <div style={styles.privacySection}>
              <h3>HIPAA Compliance</h3>
              <p>
                {config.businessName} is fully compliant with the Health Insurance Portability and 
                Accountability Act (HIPAA).
              </p>
            </div>
            
            <div style={styles.privacySection}>
              <h3>Telehealth Privacy</h3>
              <p>
                Our telehealth services use secure, HIPAA-compliant video platforms to ensure your 
                sessions remain private.
              </p>
            </div>
            
            <div style={styles.privacySection}>
              <h3>Questions?</h3>
              <p>
                Contact us at{' '}
                <a href={`mailto:${config.email}`} style={styles.inlineLink}>{config.email}</a> or 
                call <a href={`tel:${config.phoneRaw}`} style={styles.inlineLink}>{config.phone}</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// MAIN APP COMPONENT
const App = () => {
  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        a { text-decoration: none; }
        
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
        
        .nav-link { transition: all 0.2s ease; text-decoration: none; }
        .nav-link:hover { color: #5B8A72 !important; }
        
        .cta-button { transition: all 0.3s ease; }
        .cta-button:hover { transform: translateY(-3px); box-shadow: 0 15px 35px rgba(91, 138, 114, 0.4); }
        
        .service-card { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .service-card:hover { transform: translateY(-8px); box-shadow: 0 25px 50px rgba(45, 80, 72, 0.15); }
        
        .team-card { transition: all 0.3s ease; }
        .team-card:hover { transform: scale(1.02); }
        
        .testimonial-card { transition: all 0.3s ease; }
        .testimonial-card:hover { transform: translateY(-5px); background: rgba(255,255,255,0.1); }
        
        .faq-item { transition: all 0.3s ease; cursor: pointer; }
        .faq-item:hover { background: rgba(91, 138, 114, 0.03); }
        
        .footer-link { transition: all 0.2s ease; display: block; }
        .footer-link:hover { color: white !important; }
        
        .secondary-cta { transition: all 0.2s ease; }
        .secondary-cta:hover { transform: translateX(5px); }
        
        .submit-btn { transition: all 0.3s ease; }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(91, 138, 114, 0.3); }
        
        input:focus, textarea:focus {
          border-color: #5B8A72 !important;
          box-shadow: 0 0 0 3px rgba(91, 138, 114, 0.1);
          outline: none;
        }
        
        /* MOBILE STYLES */
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .team-grid, .team-grid-3 { grid-template-columns: repeat(3, 1fr) !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .insurance-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .rights-grid { grid-template-columns: 1fr !important; }
        }
        
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
          
          .services-grid { grid-template-columns: 1fr !important; }
          .team-grid, .team-grid-3 { grid-template-columns: 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .insurance-grid { grid-template-columns: 1fr !important; }
          
          .form-row { grid-template-columns: 1fr !important; }
          
          .footer-main { 
            flex-direction: column !important; 
            gap: 40px !important;
            text-align: center;
          }
          .footer-links { 
            flex-direction: column !important; 
            gap: 32px !important;
            width: 100%;
          }
          .footer-column {
            align-items: center;
          }
          .footer-link {
            text-align: center;
          }
          .footer-address {
            text-align: center;
          }
          
          .hero-content {
            padding: 0 16px;
          }
          
          .telehealth-banner {
            flex-direction: column !important;
            text-align: center;
            gap: 20px !important;
          }
          .telehealth-banner > div {
            text-align: center;
          }
          .telehealth-banner button {
            margin-left: 0 !important;
          }
          
          .photo-gallery-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>

      <ScrollToTop />
      <Navigation />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
};

// STYLES
const styles = {
  container: {
    fontFamily: "'Outfit', sans-serif",
    background: '#FFFDF9',
    color: '#2D3B35',
    minHeight: '100vh'
  },
  
  // Navigation
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '12px 0',
    transition: 'all 0.3s ease'
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none'
  },
  logoImage: {
    height: '40px',
    width: 'auto'
  },
  logoText: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '18px',
    fontWeight: '600',
    color: '#2D5048'
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '28px'
  },
  navLink: {
    background: 'none',
    border: 'none',
    color: '#2D3B35',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    fontFamily: "'Outfit', sans-serif",
    padding: '8px 0'
  },
  navCta: {
    background: 'linear-gradient(135deg, #5B8A72 0%, #2D5048 100%)',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '30px',
    fontSize: '14px',
    fontWeight: '600'
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
    zIndex: 1001,
    padding: '80px 32px 32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease'
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
    borderBottom: '1px solid rgba(45, 80, 72, 0.1)',
    display: 'block',
    textDecoration: 'none'
  },
  mobileCta: {
    background: 'linear-gradient(135deg, #5B8A72 0%, #2D5048 100%)',
    color: 'white',
    padding: '16px 24px',
    borderRadius: '30px',
    fontSize: '16px',
    fontWeight: '600',
    marginTop: '24px',
    textAlign: 'center',
    display: 'block'
  },
  mobileOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.3)',
    zIndex: 1000
  },

  // Hero
  hero: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '120px 24px 80px',
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
    maxWidth: '700px'
  },
  heroTagline: {
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: '#5B8A72',
    marginBottom: '20px'
  },
  heroTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(36px, 7vw, 64px)',
    fontWeight: '400',
    lineHeight: '1.1',
    color: '#2D3B35',
    marginBottom: '24px'
  },
  heroSubtitle: {
    fontSize: '17px',
    lineHeight: '1.7',
    color: '#5A6B62',
    marginBottom: '36px'
  },
  heroCtas: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  primaryCta: {
    background: 'linear-gradient(135deg, #5B8A72 0%, #2D5048 100%)',
    color: 'white',
    padding: '16px 32px',
    borderRadius: '40px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: "'Outfit', sans-serif"
  },
  secondaryCta: {
    color: '#5B8A72',
    padding: '16px 24px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: "'Outfit', sans-serif"
  },

  // About Section
  aboutSection: {
    padding: '100px 24px',
    background: '#FFFDF9'
  },
  aboutContainer: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
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
    fontSize: 'clamp(26px, 4vw, 36px)',
    fontWeight: '500',
    lineHeight: '1.2',
    color: '#2D3B35',
    marginBottom: '24px'
  },
  aboutText: {
    fontSize: '15px',
    lineHeight: '1.8',
    color: '#5A6B62',
    marginBottom: '16px'
  },
  aboutFeatures: {
    marginTop: '28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    fontSize: '14px',
    color: '#2D3B35'
  },
  featureIcon: {
    color: '#5B8A72',
    fontWeight: '700',
    marginTop: '2px'
  },
  aboutVisual: {
    display: 'flex',
    justifyContent: 'center'
  },
  visualCard: {
    background: 'linear-gradient(135deg, #5B8A72 0%, #2D5048 100%)',
    padding: '48px 40px',
    borderRadius: '20px',
    maxWidth: '360px',
    boxShadow: '0 25px 50px rgba(45, 80, 72, 0.2)'
  },
  visualQuote: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(18px, 2.5vw, 24px)',
    fontStyle: 'italic',
    color: 'white',
    lineHeight: '1.5',
    marginBottom: '20px'
  },
  visualAttribution: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500'
  },

  // Photo Gallery Section
  photoGallerySection: {
    padding: '0',
    background: '#FFFDF9',
    overflow: 'hidden'
  },
  photoGalleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '4px'
  },
  photoGalleryItem: {
    aspectRatio: '1',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #A8C6B6 0%, #5B8A72 100%)'
  },
  photoGalleryImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
    display: 'block'
  },

  // Services Section
  servicesSection: {
    padding: '100px 24px',
    background: 'linear-gradient(180deg, #F7F5F0 0%, #FFFDF9 100%)'
  },
  sectionContainer: {
    maxWidth: '1100px',
    margin: '0 auto'
  },
  sectionTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(28px, 5vw, 40px)',
    fontWeight: '500',
    color: '#2D3B35',
    marginBottom: '16px',
    textAlign: 'center'
  },
  sectionSubtitle: {
    fontSize: '16px',
    color: '#5A6B62',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto 50px',
    lineHeight: '1.7'
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px'
  },
  serviceCard: {
    background: 'white',
    padding: '32px 24px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(45, 80, 72, 0.06)',
    border: '1px solid rgba(45, 80, 72, 0.06)'
  },
  serviceIconWrapper: {
    width: '52px',
    height: '52px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, rgba(91, 138, 114, 0.1) 0%, rgba(45, 80, 72, 0.1) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    color: '#5B8A72'
  },
  serviceTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '20px',
    fontWeight: '600',
    color: '#2D3B35',
    marginBottom: '12px'
  },
  serviceDescription: {
    fontSize: '14px',
    color: '#5A6B62',
    lineHeight: '1.7',
    marginBottom: '16px'
  },
  serviceLink: {
    fontSize: '14px',
    color: '#5B8A72',
    fontWeight: '600'
  },

  // Services Page
  servicesPageSection: {
    padding: '60px 24px',
    background: '#FFFDF9'
  },
  servicesGridLarge: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '24px'
  },
  serviceCardLarge: {
    background: 'white',
    padding: '36px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(45, 80, 72, 0.06)',
    border: '1px solid rgba(45, 80, 72, 0.06)',
    display: 'flex',
    gap: '28px',
    alignItems: 'flex-start'
  },
  serviceIconWrapperLarge: {
    width: '64px',
    height: '64px',
    minWidth: '64px',
    borderRadius: '14px',
    background: 'linear-gradient(135deg, rgba(91, 138, 114, 0.1) 0%, rgba(45, 80, 72, 0.1) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#5B8A72'
  },
  serviceTitleLarge: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '24px',
    fontWeight: '600',
    color: '#2D3B35',
    marginBottom: '8px'
  },
  serviceDescriptionLarge: {
    fontSize: '15px',
    color: '#5A6B62',
    lineHeight: '1.7',
    marginBottom: '16px'
  },
  serviceDetails: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  serviceTag: {
    background: 'rgba(91, 138, 114, 0.1)',
    color: '#5B8A72',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600'
  },

  // Team Page
  teamGridPage: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
    maxWidth: '900px',
    margin: '0 auto'
  },
  teamCardPage: {
    textAlign: 'center',
    padding: '32px 24px',
    borderRadius: '16px',
    background: 'white',
    boxShadow: '0 4px 20px rgba(45, 80, 72, 0.06)',
    border: '1px solid rgba(45, 80, 72, 0.06)'
  },
  teamImageWrapperPage: {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '0 auto 20px',
    background: 'linear-gradient(135deg, #A8C6B6 0%, #5B8A72 100%)',
    position: 'relative'
  },
  teamImagePage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  },
  teamAvatarFallback: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '36px',
    fontWeight: '600',
    color: 'white',
    fontFamily: "'Cormorant Garamond', serif"
  },
  teamNamePage: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '22px',
    fontWeight: '600',
    color: '#2D3B35',
    marginBottom: '4px'
  },
  teamRolePage: {
    fontSize: '14px',
    color: '#5A6B62',
    marginBottom: '12px'
  },
  teamSpecialtyPage: {
    fontSize: '12px',
    color: '#5B8A72',
    fontWeight: '600',
    background: 'rgba(91, 138, 114, 0.1)',
    padding: '6px 14px',
    borderRadius: '20px',
    display: 'inline-block'
  },

  // Testimonials
  testimonialsSection: {
    padding: '100px 24px',
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
    fontSize: 'clamp(28px, 5vw, 40px)',
    fontWeight: '500',
    color: 'white',
    marginBottom: '50px',
    textAlign: 'center'
  },
  testimonialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px'
  },
  testimonialCard: {
    background: 'rgba(255,255,255,0.05)',
    padding: '32px',
    borderRadius: '16px'
  },
  testimonialQuote: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '48px',
    color: '#5B8A72',
    lineHeight: '0.5',
    marginBottom: '16px'
  },
  testimonialText: {
    fontSize: '15px',
    color: 'rgba(255,255,255,0.9)',
    lineHeight: '1.8',
    fontStyle: 'italic',
    marginBottom: '16px'
  },
  testimonialAuthor: {
    fontSize: '14px',
    color: '#A8C6B6',
    fontWeight: '600'
  },

  // CTA Section
  ctaSection: {
    padding: '80px 24px',
    background: 'linear-gradient(135deg, #5B8A72 0%, #2D5048 100%)',
    textAlign: 'center'
  },
  ctaTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(26px, 4vw, 36px)',
    fontWeight: '500',
    color: 'white',
    marginBottom: '16px'
  },
  ctaText: {
    fontSize: '17px',
    color: 'rgba(255,255,255,0.9)',
    marginBottom: '28px'
  },
  ctaButton: {
    background: 'white',
    color: '#2D5048',
    padding: '16px 36px',
    borderRadius: '40px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: '600',
    fontFamily: "'Outfit', sans-serif"
  },

  // Page Headers
  pageHeader: {
    padding: '80px 24px 60px',
    background: 'linear-gradient(180deg, #F7F5F0 0%, #FFFDF9 100%)',
    textAlign: 'center'
  },
  pageTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(32px, 6vw, 48px)',
    fontWeight: '500',
    color: '#2D3B35',
    marginBottom: '16px'
  },
  pageSubtitle: {
    fontSize: '17px',
    color: '#5A6B62',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.7'
  },

  // Contact Page
  contactPageSection: {
    padding: '60px 24px 100px',
    background: '#FFFDF9'
  },
  contactPageGrid: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px'
  },
  contactPageInfo: {},
  contactPageTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '28px',
    fontWeight: '500',
    color: '#2D3B35',
    marginBottom: '16px'
  },
  contactPageText: {
    fontSize: '15px',
    color: '#5A6B62',
    lineHeight: '1.8',
    marginBottom: '32px'
  },
  contactPageDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '32px'
  },
  contactPageItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '14px',
    textDecoration: 'none',
    color: 'inherit'
  },
  contactPageIcon: { fontSize: '20px' },
  contactPageLabel: {
    fontSize: '12px',
    color: '#5A6B62',
    marginBottom: '2px'
  },
  contactPageValue: {
    fontSize: '15px',
    color: '#2D3B35',
    fontWeight: '500'
  },
  emergencyBox: {
    background: 'rgba(91, 138, 114, 0.08)',
    padding: '20px',
    borderRadius: '12px',
    borderLeft: '3px solid #5B8A72'
  },
  emergencyTitle: {
    fontSize: '15px',
    color: '#2D5048',
    fontWeight: '600',
    marginBottom: '8px'
  },
  emergencyText: {
    fontSize: '14px',
    color: '#5A6B62',
    lineHeight: '1.6'
  },
  contactPageForm: {
    background: 'white',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 40px rgba(45, 80, 72, 0.08)',
    border: '1px solid rgba(45, 80, 72, 0.06)'
  },
  formTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '24px',
    fontWeight: '600',
    color: '#2D3B35',
    marginBottom: '8px'
  },
  formNote: {
    fontSize: '13px',
    color: '#5A6B62',
    marginBottom: '28px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px'
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  formLabel: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#2D3B35'
  },
  formInput: {
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid rgba(45, 80, 72, 0.2)',
    fontSize: '15px',
    fontFamily: "'Outfit', sans-serif",
    width: '100%'
  },
  formTextarea: {
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid rgba(45, 80, 72, 0.2)',
    fontSize: '15px',
    fontFamily: "'Outfit', sans-serif",
    resize: 'vertical',
    minHeight: '120px',
    width: '100%'
  },
  submitButton: {
    background: 'linear-gradient(135deg, #5B8A72 0%, #2D5048 100%)',
    color: 'white',
    padding: '14px 28px',
    borderRadius: '30px',
    border: 'none',
    fontSize: '15px',
    fontWeight: '600',
    fontFamily: "'Outfit', sans-serif",
    cursor: 'pointer',
    marginTop: '8px'
  },
  successMessage: {
    textAlign: 'center',
    padding: '40px 20px'
  },
  successIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #5B8A72 0%, #2D5048 100%)',
    color: 'white',
    fontSize: '24px',
    marginBottom: '16px'
  },
  errorMessage: {
    textAlign: 'center',
    padding: '40px 20px'
  },
  errorIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    background: '#e74c3c',
    color: 'white',
    fontSize: '24px',
    marginBottom: '16px'
  },

  // Telehealth
  telehealthBanner: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    background: 'linear-gradient(135deg, rgba(91, 138, 114, 0.08) 0%, rgba(168, 198, 182, 0.08) 100%)',
    padding: '28px 36px',
    borderRadius: '16px',
    border: '1px solid rgba(91, 138, 114, 0.15)',
    flexWrap: 'wrap'
  },
  telehealthIconWrapper: {
    color: '#5B8A72'
  },
  telehealthTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '20px',
    fontWeight: '600',
    color: '#2D3B35',
    marginBottom: '4px'
  },
  telehealthText: {
    fontSize: '14px',
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

  // Resources Page
  resourceSection: {
    padding: '60px 24px',
    background: '#FFFDF9'
  },
  resourceSectionTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '28px',
    fontWeight: '500',
    color: '#2D3B35',
    marginBottom: '16px',
    textAlign: 'center'
  },
  resourceSectionSubtitle: {
    fontSize: '15px',
    color: '#5A6B62',
    textAlign: 'center',
    marginBottom: '40px'
  },
  faqContainer: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  faqItem: {
    background: 'white',
    borderRadius: '12px',
    marginBottom: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 10px rgba(45, 80, 72, 0.05)',
    border: '1px solid rgba(45, 80, 72, 0.06)'
  },
  faqQuestion: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 24px',
    gap: '16px'
  },
  faqQuestionText: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '18px',
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
    padding: '0 24px 20px',
    color: '#5A6B62',
    lineHeight: '1.7',
    fontSize: '15px'
  },
  insuranceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px',
    marginBottom: '32px',
    maxWidth: '700px',
    margin: '0 auto 32px'
  },
  insuranceCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: 'white',
    padding: '16px 20px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(45, 80, 72, 0.05)',
    border: '1px solid rgba(45, 80, 72, 0.06)'
  },
  insuranceIcon: {
    color: '#5B8A72',
    fontWeight: '700',
    fontSize: '16px'
  },
  insuranceName: {
    fontSize: '14px',
    color: '#2D3B35',
    fontWeight: '500'
  },
  insuranceNote: {
    background: 'white',
    padding: '28px',
    borderRadius: '14px',
    boxShadow: '0 4px 20px rgba(45, 80, 72, 0.06)',
    lineHeight: '1.7',
    color: '#5A6B62',
    fontSize: '15px',
    border: '1px solid rgba(45, 80, 72, 0.06)',
    maxWidth: '700px',
    margin: '0 auto'
  },
  inlineLink: {
    color: '#5B8A72',
    fontWeight: '600',
    textDecoration: 'underline'
  },
  rightsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
    maxWidth: '900px',
    margin: '0 auto'
  },
  rightsCard: {
    background: 'white',
    padding: '32px',
    borderRadius: '14px',
    boxShadow: '0 4px 20px rgba(45, 80, 72, 0.06)',
    border: '1px solid rgba(45, 80, 72, 0.06)'
  },
  rightsList: {
    paddingLeft: '20px',
    lineHeight: '2',
    color: '#5A6B62',
    fontSize: '14px'
  },
  privacyContainer: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  privacySection: {
    background: 'white',
    padding: '28px',
    borderRadius: '14px',
    marginBottom: '16px',
    boxShadow: '0 4px 20px rgba(45, 80, 72, 0.06)',
    border: '1px solid rgba(45, 80, 72, 0.06)',
    fontSize: '15px',
    lineHeight: '1.7',
    color: '#5A6B62'
  },

  // Footer
  footer: {
    background: '#1A2E28',
    padding: '60px 24px 36px'
  },
  footerContainer: {
    maxWidth: '1100px',
    margin: '0 auto'
  },
  footerMain: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '40px',
    flexWrap: 'wrap',
    gap: '40px'
  },
  footerBrand: {},
  footerLogoWrapper: {
    marginBottom: '12px'
  },
  footerLogoImage: {
    height: '45px',
    width: 'auto'
  },
  footerTagline: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.5)'
  },
  footerLinks: {
    display: 'flex',
    gap: '50px',
    flexWrap: 'wrap'
  },
  footerColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  footerHeading: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#A8C6B6',
    marginBottom: '8px'
  },
  footerLink: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.7)',
    textDecoration: 'none'
  },
  footerAddress: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.7)',
    lineHeight: '1.6'
  },
  footerBottom: {
    paddingTop: '28px',
    borderTop: '1px solid rgba(255,255,255,0.1)'
  },
  footerCopyright: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.4)',
    textAlign: 'center'
  }
};

export default App;
