import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Star, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Menu, X, ChevronRight, Scissors, Sparkles, Heart, Users, Award, Shield, Zap } from 'lucide-react';

const StudioEliteSalon = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Hero slider images
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      title: "Transform Your Look",
      subtitle: "Expert styling for everyone"
    },
    {
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "Premium Hair Care",
      subtitle: "Luxury treatments for all hair types"
    },
    {
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Unisex Excellence",
      subtitle: "Modern styles for men and women"
    }
  ];

  // Services data
  const services = [
    {
      category: "Hair Services",
      icon: <Scissors className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      items: [
        { name: "Haircut & Styling", price: "$45-80", duration: "60 min", description: "Professional cuts tailored to your face shape" },
        { name: "Hair Coloring", price: "$85-150", duration: "120 min", description: "Vibrant colors with premium products" },
        { name: "Highlights", price: "$95-180", duration: "150 min", description: "Natural-looking highlights and lowlights" },
        { name: "Hair Treatment", price: "$65-120", duration: "90 min", description: "Deep conditioning and repair treatments" },
        { name: "Blowout", price: "$35-55", duration: "45 min", description: "Professional styling for any occasion" }
      ]
    },
    {
      category: "Beauty Services",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-pink-500 to-rose-600",
      items: [
        { name: "Facial Treatment", price: "$75-120", duration: "75 min", description: "Customized facials for all skin types" },
        { name: "Eyebrow Shaping", price: "$25-35", duration: "30 min", description: "Perfect brow shaping and styling" },
        { name: "Makeup Application", price: "$55-85", duration: "60 min", description: "Professional makeup for special events" },
        { name: "Face Cleanup", price: "$45-65", duration: "45 min", description: "Deep cleansing and exfoliation" }
      ]
    },
    {
      category: "Spa Services",
      icon: <Heart className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-600",
      items: [
        { name: "Manicure", price: "$35-55", duration: "45 min", description: "Complete nail care and polish" },
        { name: "Pedicure", price: "$45-65", duration: "60 min", description: "Relaxing foot care treatment" },
        { name: "Head Massage", price: "$40-60", duration: "30 min", description: "Stress-relieving scalp massage" },
        { name: "Body Massage", price: "$85-125", duration: "90 min", description: "Full body relaxation therapy" }
      ]
    }
  ];

  // Features
  const features = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Expert Professionals",
      description: "Certified stylists with years of experience in the industry"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Premium Products",
      description: "Only the finest quality products for all treatments"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Modern Techniques",
      description: "Latest styling techniques and beauty innovations"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Personalized Care",
      description: "Tailored services to meet your unique needs"
    }
  ];

  // Team members
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Master Stylist",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      specialties: ["Color Specialist", "Bridal Styling"],
      bio: "Sarah brings creativity and precision to every cut and color."
    },
    {
      name: "Mike Rodriguez",
      role: "Senior Barber",
      experience: "6+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      specialties: ["Beard Styling", "Classic Cuts"],
      bio: "Mike specializes in traditional and modern men's grooming."
    },
    {
      name: "Emma Wilson",
      role: "Beauty Therapist",
      experience: "5+ years",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      specialties: ["Facial Treatments", "Skincare"],
      bio: "Emma is passionate about helping clients achieve healthy, glowing skin."
    },
    {
      name: "David Chen",
      role: "Hair Colorist",
      experience: "7+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      specialties: ["Balayage", "Creative Colors"],
      bio: "David creates stunning color transformations with artistic flair."
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Jennifer Park",
      rating: 5,
      text: "Amazing experience! The staff is so professional and friendly. Sarah did an incredible job with my hair coloring. Highly recommend!",
      service: "Hair Coloring",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Robert Smith",
      rating: 5,
      text: "Best barber shop in town! Mike knows exactly what he's doing. Great atmosphere and excellent service every time.",
      service: "Haircut",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Maria Garcia",
      rating: 5,
      text: "Love this place! Emma's facials are the best. The salon is clean, modern, and the staff makes you feel so welcome.",
      service: "Facial Treatment",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  // Gallery images
  const galleryImages = [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handle scroll for animations
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-3 rounded-xl shadow-lg">
                <Scissors className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">Studio Elite</span>
                <span className="text-xs text-gray-500 tracking-wide">UNISEX SALON</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {['home', 'about', 'services', 'team', 'gallery', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-all duration-300 hover:text-purple-600 relative ${
                    activeSection === item ? 'text-purple-600' : 'text-gray-700'
                  }`}
                >
                  {item}
                  {activeSection === item && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
                  )}
                </button>
              ))}
            </nav>

            {/* Book Now Button */}
            <button className="hidden lg:flex items-center space-x-2 btn-primary">
              <Calendar className="w-5 h-5" />
              <span>Book Now</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                {['home', 'about', 'services', 'team', 'gallery', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="capitalize text-left py-3 px-4 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 font-medium"
                  >
                    {item}
                  </button>
                ))}
                <button className="btn-primary mt-4 justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </button>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
            </div>
          </div>
        ))}
        
        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
          <div className="max-w-5xl mx-auto px-4">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mb-8 opacity-90 font-light">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="btn-primary text-lg px-10 py-4">
                  <Calendar className="w-6 h-6 mr-3" />
                  Book Appointment
                </button>
                <button className="btn-secondary text-lg px-10 py-4">
                  <ChevronRight className="w-6 h-6 mr-3" />
                  View Services
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4 rounded-xl mx-auto w-20 h-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">About Studio Elite</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Your premier destination for unisex beauty and grooming services. We combine modern techniques with personalized care to help you look and feel your best.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl opacity-20 blur-xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Salon interior"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="space-y-8">
                <h3 className="text-3xl lg:text-4xl font-bold leading-tight">Excellence in Every Service</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Since our establishment, Studio Elite has been committed to providing exceptional beauty and grooming services for both men and women. Our experienced team of stylists and beauty professionals use the latest techniques and premium products to ensure every client leaves feeling confident and beautiful.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center p-6 bg-purple-50 rounded-2xl">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-xl mb-2">500+ Happy Clients</h4>
                    <p className="text-gray-600">Trusted by hundreds</p>
                  </div>
                  <div className="text-center p-6 bg-pink-50 rounded-2xl">
                    <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-pink-600" />
                    </div>
                    <h4 className="font-bold text-xl mb-2">5-Star Reviews</h4>
                    <p className="text-gray-600">Consistently excellent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive beauty and grooming services tailored for everyone. From haircuts to spa treatments, we've got you covered.
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-16">
            {services.map((category, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-center mb-12">
                  <div className={`bg-gradient-to-r ${category.color} text-white p-4 rounded-2xl mr-6 shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold">{category.category}</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="card p-8 hover:scale-105 transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-bold text-xl">{service.name}</h4>
                        <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent font-bold text-lg`}>
                          {service.price}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our skilled professionals are passionate about helping you achieve your desired look with expertise and care.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="card overflow-hidden group hover:scale-105 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                    <p className="text-purple-600 font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-500 text-sm mb-3">{member.experience}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specIndex) => (
                        <span
                          key={specIndex}
                          className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio showcasing the transformations and beautiful results we create for our clients.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Full Size
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.service}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your look? Contact us to book your appointment or ask any questions.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className="space-y-8">
                <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center p-6 bg-white rounded-2xl shadow-lg">
                    <div className="bg-purple-100 p-4 rounded-xl mr-6">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Address</h4>
                      <span className="text-gray-600">123 Beauty Street, Downtown City, ST 12345</span>
                    </div>
                  </div>
                  <div className="flex items-center p-6 bg-white rounded-2xl shadow-lg">
                    <div className="bg-purple-100 p-4 rounded-xl mr-6">
                      <Phone className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Phone</h4>
                      <span className="text-gray-600">(555) 123-4567</span>
                    </div>
                  </div>
                  <div className="flex items-center p-6 bg-white rounded-2xl shadow-lg">
                    <div className="bg-purple-100 p-4 rounded-xl mr-6">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Email</h4>
                      <span className="text-gray-600">info@studioelite.com</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-xl mb-6">Opening Hours</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-medium">Monday - Friday</span>
                      <span className="text-purple-600 font-semibold">9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-medium">Saturday</span>
                      <span className="text-purple-600 font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-medium">Sunday</span>
                      <span className="text-purple-600 font-semibold">10:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-xl mb-6">Follow Us</h4>
                  <div className="flex space-x-4">
                    <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                      <Instagram className="w-6 h-6" />
                    </button>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                      <Facebook className="w-6 h-6" />
                    </button>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                      <Twitter className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-bold mb-8">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 focus:outline-none transition-all duration-300"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 focus:outline-none transition-all duration-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 focus:outline-none transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 focus:outline-none transition-all duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
                    <select className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 focus:outline-none transition-all duration-300">
                      <option>Select Service</option>
                      <option>Haircut & Styling</option>
                      <option>Hair Coloring</option>
                      <option>Facial Treatment</option>
                      <option>Manicure/Pedicure</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows="5"
                      className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Tell us about your desired service..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4 justify-center"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white section-padding">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-3 rounded-xl">
                    <Scissors className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold">Studio Elite</span>
                    <p className="text-xs text-gray-400 tracking-wide">UNISEX SALON</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Your premier destination for unisex beauty and grooming services. Excellence in every service, care in every detail.
                </p>
                <div className="flex space-x-4">
                  <button className="bg-gray-800 hover:bg-purple-600 text-gray-400 hover:text-white p-3 rounded-lg transition-all duration-300">
                    <Instagram className="w-5 h-5" />
                  </button>
                  <button className="bg-gray-800 hover:bg-purple-600 text-gray-400 hover:text-white p-3 rounded-lg transition-all duration-300">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="bg-gray-800 hover:bg-purple-600 text-gray-400 hover:text-white p-3 rounded-lg transition-all duration-300">
                    <Twitter className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {['Home', 'About', 'Services', 'Team', 'Gallery', 'Contact'].map((link) => (
                    <li key={link}>
                      <button 
                        onClick={() => scrollToSection(link.toLowerCase())}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6">Popular Services</h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="hover:text-white transition-colors cursor-pointer">Haircut & Styling</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Hair Coloring</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Facial Treatments</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Manicure & Pedicure</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Spa Services</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Bridal Packages</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6">Contact Info</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-purple-400 mt-1" />
                    <span className="text-gray-400 text-sm leading-relaxed">123 Beauty Street, Downtown City, ST 12345</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-400 text-sm">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-400 text-sm">info@studioelite.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 Studio Elite. All rights reserved. | 
                <span className="hover:text-white cursor-pointer transition-colors"> Privacy Policy</span> | 
                <span className="hover:text-white cursor-pointer transition-colors"> Terms of Service</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Book Button */}
      <button className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 z-50 group">
        <Calendar className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default StudioEliteSalon;