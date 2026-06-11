"use client";

import * as React from "react";
import { CheckIcon } from "@/components/icons";

// Key points data
const keyPoints = [
  {
    title: "Ship faster",
    description: "Get enterprise features in days, not months",
  },
  {
    title: "Lower costs",
    description: "No need to build and maintain complex infrastructure",
  },
  {
    title: "Better experience",
    description: "Polished UI that enterprise customers expect",
  },
];

// Decorative grid pattern component
function DecorativeGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 99, 241, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 99, 241, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Dots at intersections */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(99, 99, 241, 0.5) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-workos-dark" />
      <div className="absolute inset-0 bg-gradient-to-t from-workos-dark via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-workos-dark via-transparent to-transparent" />
    </div>
  );
}

// Floating decorative elements
function FloatingElements() {
  return (
    <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none overflow-hidden">
      {/* Large gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-workos-purple/20 to-workos-teal/10 blur-3xl animate-pulse" />

      {/* Smaller accent orbs */}
      <div
        className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-workos-purple/15 blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/5 w-24 h-24 rounded-full bg-workos-teal/15 blur-2xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Abstract shapes */}
      <div className="absolute top-1/3 right-1/6 w-20 h-20 border border-workos-purple/20 rounded-lg rotate-12 opacity-40" />
      <div
        className="absolute bottom-1/3 right-1/4 w-16 h-16 border border-workos-teal/20 rounded-full opacity-40"
        style={{ transform: "rotate(45deg)" }}
      />
      <div
        className="absolute top-2/3 right-1/5 w-12 h-12 border border-workos-purple/15 rounded opacity-30"
        style={{ transform: "rotate(-15deg)" }}
      />

      {/* Floating dots */}
      <div className="absolute top-1/4 right-1/6 w-2 h-2 rounded-full bg-workos-purple/40" />
      <div
        className="absolute top-1/2 right-1/5 w-1.5 h-1.5 rounded-full bg-workos-teal/40"
        style={{ marginTop: "20px" }}
      />
      <div
        className="absolute bottom-1/3 right-1/6 w-2 h-2 rounded-full bg-workos-purple/30"
        style={{ marginLeft: "10px" }}
      />
    </div>
  );
}

// Key point component
interface KeyPointProps {
  title: string;
  description: string;
}

function KeyPoint({ title, description }: KeyPointProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-workos-purple/20 flex items-center justify-center mt-0.5">
        <CheckIcon className="w-3.5 h-3.5 text-workos-purple" />
      </div>
      <div>
        <h3 className="text-lg font-medium text-white mb-1">{title}</h3>
        <p className="text-text-light leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function WhyWorkOSSection() {
  return (
    <section className="relative overflow-hidden bg-workos-dark py-24 md:py-32">
      {/* Background decorative grid */}
      <DecorativeGrid />

      {/* Floating decorative elements */}
      <FloatingElements />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-workos-dark via-workos-dark/95 to-workos-dark/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container-workos">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text content */}
          <div className="max-w-xl">
            {/* Section label */}
            <p className="text-allcaps text-workos-purple mb-4">
              Why WorkOS?
            </p>

            {/* Main title */}
            <h2 className="text-h2 text-white mb-4">
              Expand your market
            </h2>

            {/* Description */}
            <p className="text-body-large text-text-light mb-10">
              In the past, building for the enterprise was complex, time-consuming, and expensive. WorkOS changes that.
            </p>

            {/* Key points */}
            <div className="space-y-6">
              {keyPoints.map((point, index) => (
                <KeyPoint
                  key={index}
                  title={point.title}
                  description={point.description}
                />
              ))}
            </div>
          </div>

          {/* Right side - Reserved for decorative elements on larger screens */}
          <div className="hidden lg:block relative h-80">
            {/* Additional visual elements can be added here */}
            {/* The FloatingElements component provides the decorative visuals */}
          </div>
        </div>
      </div>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-workos-purple/30 to-transparent" />
    </section>
  );
}

export default WhyWorkOSSection;
