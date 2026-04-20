"use client";

import { useState } from "react";

// Gradient text component
function GradientText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`gradient-text ${className}`}>
      {children}
    </span>
  );
}

// Navigation
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-[#151515]">THIS IS</span>
          <span className="text-lg font-bold tracking-tight gradient-text">KREATIVE</span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-[#151515]/70 hover:text-[#151515] transition">About</a>
          <a href="#services" className="text-sm font-medium text-[#151515]/70 hover:text-[#151515] transition">Services</a>
          <a href="#work" className="text-sm font-medium text-[#151515]/70 hover:text-[#151515] transition">Work</a>
          <a href="#contact" className="text-sm font-medium text-[#151515]/70 hover:text-[#151515] transition">Contact</a>
        </div>

        <a href="#contact" className="hidden md:inline-flex px-5 py-2.5 text-sm font-semibold text-white gradient-bg rounded-full hover:opacity-90 transition">
          Get in Touch
        </a>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
          <a href="#about" className="block text-sm font-medium text-[#151515]/70" onClick={() => setIsOpen(false)}>About</a>
          <a href="#services" className="block text-sm font-medium text-[#151515]/70" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#work" className="block text-sm font-medium text-[#151515]/70" onClick={() => setIsOpen(false)}>Work</a>
          <a href="#contact" className="block text-sm font-medium text-[#151515]/70" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="#contact" className="inline-block px-5 py-2.5 text-sm font-semibold text-white gradient-bg rounded-full" onClick={() => setIsOpen(false)}>
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#151515]/50 uppercase mb-6">Creative Agency</p>
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[1] mb-8">
          We build brands that <GradientText>move culture</GradientText>.
        </h1>
        <p className="text-lg md:text-xl text-[#151515]/55 font-light max-w-xl mx-auto mb-12 leading-relaxed">
          Strategy, design, and content that helps ambitious brands show up bold and stay remembered.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a href="#work" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white gradient-bg rounded-full hover:opacity-90 transition w-full sm:w-auto">
            See Our Work
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold gradient-text border-2 border-current rounded-full hover:opacity-80 transition w-full sm:w-auto">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold tracking-widest text-[#151515]/60 uppercase mb-4">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Creatives who <GradientText>mean business</GradientText>.
            </h2>
            <p className="text-lg text-[#151515]/70 leading-relaxed mb-6">
              We started THIS IS KREATIVE because we're tired of generic agencies delivering generic results. 
              We're a team of strategists, designers, and producers who believe in doing things differently.
            </p>
            <p className="text-lg text-[#151515]/70 leading-relaxed">
              Every brand has a story worth telling. We help you tell it in a way that actually connects, 
              converts, and creates lasting impression.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Speed + Quality</h3>
                <p className="text-[#151515]/60">We move fast without cutting corners. Quality work delivered on time, every time.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">You First</h3>
                <p className="text-[#151515]/60">Your goals are our goals. We build relationships, not just deliverables.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Creative Excellence</h3>
                <p className="text-[#151515]/60">Bold ideas, refined execution. We don't settle for good enough.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function Services() {
  const services = [
    {
      title: "Organic Social Media",
      description: "Building authentic audiences through strategic content, community engagement, and storytelling across platforms.",
    },
    {
      title: "Paid Social Media",
      description: "Data-driven campaigns that convert. We design, launch, and optimize paid social strategies across Meta, TikTok, and beyond.",
    },
    {
      title: "Branding",
      description: "From logo to voice, we craft cohesive brand identities that resonate and endure.",
    },
    {
      title: "Editing",
      description: "Premium post-production that elevates your content. Color, sound, pacing — every frame intentional.",
    },
    {
      title: "Podcast Setup & Creation",
      description: "End-to-end podcast production: concept, recording setup, editing, and publishing.",
    },
    {
      title: "Promotional Videos",
      description: "Short-form content that sells. We create scroll-stopping promos for products, services, and events.",
    },
    {
      title: "Content Creation",
      description: "Full-funnel content strategy and production for brands that want to show up and be remembered.",
    },
    {
      title: "Website Design & Development",
      description: "Custom websites built to perform — from landing pages to full brand sites, designed to convert and built to last.",
    },
    {
      title: "Graphic Design",
      description: "Visual design that speaks before you do. From social graphics to print collateral, we make every touchpoint count.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-[#151515]/60 uppercase mb-4">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Our <GradientText>Services</GradientText>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:shadow-black/5 transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-3 gradient-text">{service.title}</h3>
              <p className="text-[#151515]/60 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Portfolio Section
function Portfolio() {
  const projects = [
    {
      name: "ADRA",
      category: "Branding & Content",
      tagline: "Amplifying a global humanitarian mission through bold visual identity and storytelling",
      color: "bg-gradient-to-br from-[#E31853] to-[#EF5B5A]",
    },
    {
      name: "ASI",
      category: "Social Media",
      tagline: "Building a stronger digital presence for Adventist professionals nationwide",
      color: "bg-gradient-to-br from-[#F48C60] to-[#FFC25F]",
    },
    {
      name: "Lineage Journey",
      category: "Branding & Video",
      tagline: "Crafting a brand identity and video content that brings family history to life",
      color: "bg-gradient-to-br from-[#EF5B5A] to-[#F48C60]",
    },
    {
      name: "Luminate",
      category: "Podcast & Content",
      tagline: "End-to-end podcast production for a top-rated Christian audio experience",
      color: "bg-gradient-to-br from-[#E31853] to-[#FFC25F]",
    },
    {
      name: "Beautiful Minds Wellness",
      category: "Branding",
      tagline: "A rebrand that captures the heart of compassionate mental health care",
      color: "bg-gradient-to-br from-[#F48C60] to-[#FFC25F]",
    },
    {
      name: "Paramount Pools",
      category: "Social Media",
      tagline: "Growing a California pool company's reach through targeted social content",
      color: "bg-gradient-to-br from-[#E31853] to-[#EF5B5A]",
    },
  ];

  return (
    <section id="work" className="py-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-[#151515]/60 uppercase mb-4">Our Work</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Selected <GradientText>Projects</GradientText>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-square"
            >
              <div className={`absolute inset-0 ${project.color} opacity-90`} />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-semibold tracking-wider uppercase opacity-80 mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-sm opacity-90">{project.tagline}</p>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", service: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new URLSearchParams({
      "form-name": "contact",
      name: form.name,
      email: form.email,
      service: form.service,
      message: form.message,
    });
    await fetch("/", { method: "POST", body: data.toString(), headers: { "Content-Type": "application/x-www-form-urlencoded" } });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-[#151515]/60 uppercase mb-4">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let's Create <GradientText>Something</GradientText>.
          </h2>
        </div>

        {submitted ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full gradient-bg mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
            <p className="text-[#151515]/60">We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} name="contact" data-netlify="true" className="space-y-6">
            <input type="hidden" name="form-name" value="contact" />
            <p style={{display:"none"}}><label>Don’t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E31853] transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E31853] transition"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Service Interested In</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E31853] transition bg-white"
              >
                <option value="">Select a service</option>
                <option value="organic">Organic Social Media</option>
                <option value="paid">Paid Social Media</option>
                <option value="branding">Branding</option>
                <option value="editing">Editing</option>
                <option value="podcast">Podcast Setup & Creation</option>
                <option value="video">Promotional Videos</option>
                <option value="content">Content Creation</option>
                <option value="webdev">Website Design &amp; Development</option>
                <option value="graphic">Graphic Design</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E31853] transition resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 text-base font-semibold text-white gradient-bg rounded-full hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="mt-16 text-center">
          <p className="text-sm text-[#151515]/40">We respond within 24 hours.</p>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-[#151515]">THIS IS</span>
            <span className="text-lg font-bold tracking-tight gradient-text">KREATIVE</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#E31853] hover:text-[#E31853] transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#E31853] hover:text-[#E31853] transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#E31853] hover:text-[#E31853] transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>

          <p className="text-sm text-[#151515]/50">
            © 2024 THIS IS KREATIVE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}