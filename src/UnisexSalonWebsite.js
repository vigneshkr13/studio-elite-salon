import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Star, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Menu, X, ChevronRight, Scissors, Sparkles, Heart, Users } from 'lucide-react';

const UnisexSalonWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);

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
      items: [
        { name: "Haircut & Styling", price: "$45-80", duration: "60 min" },
        { name: "Hair Coloring", price: "$85-150", duration: "120 min" },
        { name: "Highlights", price: "$95-180", duration: "150 min" },
        { name: "Hair Treatment", price: "$65-120", duration: "90 min" },
        { name: "Blowout", price: "$35-55", duration: "45 min" }
      ]
    },
    {
      category: "Beauty Services",
      icon: <Sparkles className="w-8 h-8" />,
      items: [
        { name: "Facial Treatment", price: "$75-120", duration: "75 min" },
        { name: "Eyebrow Shaping", price: "$25-35", duration: "30 min" },
        { name: "Makeup Application", price: "$55-85", duration: "60 min" },
        { name: "Face Cleanup", price: "$45-65", duration: "45 min" }
      ]
    },
    {
      category: "Spa Services",
      icon: <Heart className="w-8 h-8" />,
      items: [
        { name: "Manicure", price: "$35-55", duration: "45 min" },
        { name: "Pedicure", price: "$45-65", duration: "60 min" },
        { name: "Head Massage", price: "$40-60", duration: "30 min" },
        { name: "Body Massage", price: "$85-125", duration: "90 min" }
      ]
    }
  ];

  // Team members
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Master Stylist",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      specialties: ["Color Specialist", "Bridal Styling"]
    },
    {
      name: "Mike Rodriguez",
      role: "Senior Barber",
      experience: "6+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      specialties: ["Beard Styling", "Classic Cuts"]
    },
    {
      name: "Emma Wilson",
      role: "Beauty Therapist",
      experience: "5+ years",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      specialties: ["Facial Treatments", "Skincare"]
    },
    {
      name: "David Chen",
      role: "Hair Colorist",
      experience: "7+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      specialties: ["Balayage", "Creative Colors"]
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Jennifer Park",
      rating: 5,
      text: "Amazing experience! The staff is so professional and friendly. Sarah did an incredible job with my hair coloring. Highly recommend!",
      service: "Hair Coloring"
    },
    {
      name: "Robert Smith",
      rating: 5,
      text: "Best barber shop in town! Mike knows exactly what he's doing. Great atmosphere and excellent service every time.",
      service: "Haircut"
    },
    {
      name: "Maria Garcia",
      rating: 5,
      text: "Love this place! Emma's facials are the best. The salon is clean, modern, and the staff makes you feel so welcome.",
      service: "Facial Treatment"
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-2 rounded-lg">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Studio Elite
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'services', 'team', 'gallery', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-purple-600 ${
                    activeSection === item ? 'text-purple-600' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Book Now Button */}
            <button className="hidden md:block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Book Now
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {['home', 'about', 'services', 'team', 'gallery', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="capitalize text-left py-2 hover:text-purple-600 transition-colors"
                  >
                    {item}
                  </button>
                ))}
                <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full mt-4">
                  Book Now
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
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        ))}
        
        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Book Appointment
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Services
              </button>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">About Studio Elite</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Your premier destination for unisex beauty and grooming services. We combine modern techniques with personalized care to help you look and feel your best.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Salon interior"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6">Excellence in Every Service</h3>
                <p className="text-gray-600 mb-6">
                  Since our establishment, Studio Elite has been committed to providing exceptional beauty and grooming services for both men and women. Our experienced team of stylists and beauty professionals use the latest techniques and premium products to ensure every client leaves feeling confident and beautiful.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="font-semibold">500+ Happy Clients</h4>
                  </div>
                  <div className="text-center">
                    <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="w-8 h-8 text-pink-600" />
                    </div>
                    <h4 className="font-semibold">5-Star Reviews</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive beauty and grooming services tailored for everyone. From haircuts to spa treatments, we've got you covered.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {services.map((category, index) => (
              <div key={index} className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-3 rounded-lg mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-lg">{service.name}</h4>
                        <span className="text-purple-600 font-bold">{service.price}</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
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
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our skilled professionals are passionate about helping you achieve your desired look with expertise and care.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-purple-600 font-medium mb-2">{member.role}</p>
                    <p className="text-gray-500 text-sm mb-3">{member.experience}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specIndex) => (
                        <span
                          key={specIndex}
                          className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs"
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
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio showcasing the transformations and beautiful results we create for our clients.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg hover:shadow-lg transition-shadow">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.service}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to transform your look? Contact us to book your appointment or ask any questions.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                    <span>123 Beauty Street, Downtown City, ST 12345</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-purple-600 mr-3" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-purple-600 mr-3" />
                    <span>info@studioelite.com</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Opening Hours</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>10:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <button className="bg-purple-100 text-purple-600 p-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors">
                      <Instagram className="w-5 h-5" />
                    </button>
                    <button className="bg-purple-100 text-purple-600 p-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button className="bg-purple-100 text-purple-600 p-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors">
                      <Twitter className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"
                  />
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none">
                    <option>Select Service</option>
                    <option>Haircut & Styling</option>
                    <option>Hair Coloring</option>
                    <option>Facial Treatment</option>
                    <option>Manicure/Pedicure</option>
                    <option>Other</option>
                  </select>
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-2 rounded-lg">
                    <Scissors className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold">Studio Elite</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Your premier destination for unisex beauty and grooming services. Excellence in every service.
                </p>
                <div className="flex space-x-4">
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {['Home', 'About', 'Services', 'Team', 'Gallery', 'Contact'].map((link) => (
                    <li key={link}>
                      <button 
                        onClick={() => scrollToSection(link.toLowerCase())}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Haircut & Styling</li>
                  <li>Hair Coloring</li>
                  <li>Facial Treatments</li>
                  <li>Manicure & Pedicure</li>
                  <li>Spa Services</li>
                  <li>Bridal Packages</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Contact Info</h4>
                <div className="space-y-2 text-gray-400">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">123 Beauty Street, Downtown City</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">info@studioelite.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 Studio Elite. All rights reserved. | Privacy Policy | Terms of Service
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Book Button */}
      <button className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40">
        <Calendar className="w-6 h-6" />
      </button>
    </div>
  );
};

export default UnisexSalonWebsite;