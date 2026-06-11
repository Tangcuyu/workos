"use client";

import * as React from "react";
import Image from "next/image";

// Testimonial data
const testimonials = [
  {
    quote: "WorkOS helped us close enterprise deals 3x faster. The integration was seamless and our customers love the polished SSO experience.",
    author: "Jane Doe",
    title: "CTO",
    company: "Vercel",
    logo: "/images/customers/vercel.svg",
  },
  {
    quote: "The best decision we made for our enterprise strategy. WorkOS gave us enterprise-ready auth in days instead of months of development.",
    author: "John Smith",
    title: "Head of Engineering",
    company: "OpenAI",
    logo: "/images/customers/openai.svg",
  },
  {
    quote: "We were able to meet all our enterprise customers' SSO requirements with a single integration. The ROI was immediate.",
    author: "Sarah Chen",
    title: "VP of Engineering",
    company: "Vercel",
    logo: "/images/customers/vercel.svg",
  },
  {
    quote: "WorkOS understands what it takes to sell to enterprises. Their platform helped us unlock a completely new market segment.",
    author: "Michael Park",
    title: "Co-founder & CEO",
    company: "OpenAI",
    logo: "/images/customers/openai.svg",
  },
];

// Testimonial card component
interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company: string;
  logo: string;
  isActive: boolean;
}

function TestimonialCard({ quote, author, title, company, logo, isActive }: TestimonialCardProps) {
  return (
    <div
      className={`flex-shrink-0 w-full md:w-[600px] bg-white rounded-xl border border-[#E8E8E8] p-8 md:p-10 transition-all duration-500 ${
        isActive ? "opacity-100 scale-100" : "opacity-60 scale-95"
      }`}
    >
      {/* Quote */}
      <blockquote className="text-xl md:text-2xl font-medium text-text-primary leading-relaxed mb-8">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author info and logo */}
      <div className="flex items-center justify-between">
        {/* Author details */}
        <div className="flex items-center gap-4">
          {/* Avatar placeholder */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-workos-purple/20 to-workos-teal/20 flex items-center justify-center">
            <span className="text-workos-purple font-medium text-lg">
              {author.charAt(0)}
            </span>
          </div>

          <div>
            <p className="font-medium text-text-primary">{author}</p>
            <p className="text-sm text-text-secondary">
              {title}, {company}
            </p>
          </div>
        </div>

        {/* Company logo */}
        <div className="h-6 w-auto opacity-60">
          <Image
            src={logo}
            alt={`${company} logo`}
            width={100}
            height={24}
            className="h-full w-auto"
          />
        </div>
      </div>
    </div>
  );
}

// Navigation dot component
interface NavigationDotProps {
  isActive: boolean;
  onClick: () => void;
}

function NavigationDot({ isActive, onClick }: NavigationDotProps) {
  return (
    <button
      onClick={onClick}
      className={`w-2 h-2 rounded-full transition-all duration-300 ${
        isActive
          ? "bg-workos-purple w-6"
          : "bg-[#E8E8E8] hover:bg-[#D0D0D0]"
      }`}
      aria-label={`Go to testimonial ${isActive ? "current" : "next"}`}
    />
  );
}

export function CustomerSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const carouselRef = React.useRef<HTMLDivElement>(null);

  // Auto-rotate testimonials
  React.useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Scroll to active testimonial
  React.useEffect(() => {
    if (carouselRef.current) {
      const scrollPosition = activeIndex * (carouselRef.current.scrollWidth / testimonials.length);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <section className="section-gray py-20 md:py-28">
      <div className="container-workos">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Label */}
          <p className="text-allcaps text-text-muted mb-4">
            Trusted by industry leaders
          </p>

          {/* Title */}
          <h2 className="text-h2 text-text-primary">
            Powered by WorkOS
          </h2>
        </div>

        {/* Testimonial carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel container */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-5 px-5 md:justify-center md:overflow-visible"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="snap-center flex-shrink-0">
                <TestimonialCard
                  {...testimonial}
                  isActive={index === activeIndex}
                />
              </div>
            ))}
          </div>

          {/* Gradient fade on mobile */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-[#F9F9FB] to-transparent md:hidden" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-[#F9F9FB] to-transparent md:hidden" />
        </div>

        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <NavigationDot
              key={index}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerSection;
