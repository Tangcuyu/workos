"use client";

import * as React from "react";
import {
  TerminalIcon,
  WebhookIcon,
  PackageIcon,
  LayersIcon,
  GridIcon,
  DashboardIcon,
} from "@/components/icons";

// Developer feature data
const developerFeatures = [
  {
    title: "RESTful APIs",
    description: "RESTful APIs, JSON responses, and normalized objects",
    icon: TerminalIcon,
  },
  {
    title: "Dashboard Integration",
    description: "Dashboard seamlessly integrates WorkOS into your application",
    icon: DashboardIcon,
  },
  {
    title: "Realtime Updates",
    description: "Realtime updates from directory services with webhook events",
    icon: WebhookIcon,
  },
  {
    title: "Modern SDKs",
    description: "Modern SDKs for Node.js, Ruby, Python, .NET, Go and more",
    icon: PackageIcon,
  },
  {
    title: "Multiple Environments",
    description:
      "Multiple environments to map to your application development process",
    icon: LayersIcon,
  },
  {
    title: "20+ Enterprise Services",
    description:
      "Supports 20+ enterprise services with a single integration point",
    icon: GridIcon,
  },
];

// Provider logos as inline SVGs
const ProviderLogos = {
  Okta: () => (
    <svg
      viewBox="0 0 100 40"
      fill="currentColor"
      className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
    >
      <text
        x="10"
        y="28"
        fontSize="22"
        fontWeight="500"
        fontFamily="Inter, sans-serif"
      >
        Okta
      </text>
    </svg>
  ),
  Azure: () => (
    <svg
      viewBox="0 0 100 40"
      fill="currentColor"
      className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
    >
      <text
        x="10"
        y="28"
        fontSize="20"
        fontWeight="500"
        fontFamily="Inter, sans-serif"
      >
        Azure AD
      </text>
    </svg>
  ),
  Google: () => (
    <svg
      viewBox="0 0 120 40"
      fill="currentColor"
      className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
    >
      <text
        x="10"
        y="28"
        fontSize="20"
        fontWeight="500"
        fontFamily="Inter, sans-serif"
      >
        Google
      </text>
    </svg>
  ),
  SAML: () => (
    <svg
      viewBox="0 0 80 40"
      fill="currentColor"
      className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
    >
      <text
        x="10"
        y="28"
        fontSize="20"
        fontWeight="500"
        fontFamily="Inter, sans-serif"
      >
        SAML
      </text>
    </svg>
  ),
  OneLogin: () => (
    <svg
      viewBox="0 0 110 40"
      fill="currentColor"
      className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
    >
      <text
        x="10"
        y="28"
        fontSize="20"
        fontWeight="500"
        fontFamily="Inter, sans-serif"
      >
        OneLogin
      </text>
    </svg>
  ),
  ADFS: () => (
    <svg
      viewBox="0 0 80 40"
      fill="currentColor"
      className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
    >
      <text
        x="10"
        y="28"
        fontSize="20"
        fontWeight="500"
        fontFamily="Inter, sans-serif"
      >
        ADFS
      </text>
    </svg>
  ),
};

// Circuit board pattern component
function CircuitBoardPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="circuit-pattern"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          {/* Horizontal lines */}
          <path
            d="M0 50 H40 M60 50 H100"
            stroke="rgba(99, 99, 241, 0.3)"
            strokeWidth="1"
            fill="none"
          />
          {/* Vertical lines */}
          <path
            d="M50 0 V40 M50 60 V100"
            stroke="rgba(99, 99, 241, 0.3)"
            strokeWidth="1"
            fill="none"
          />
          {/* Connection nodes */}
          <circle
            cx="50"
            cy="50"
            r="3"
            fill="rgba(99, 99, 241, 0.4)"
          />
          <circle
            cx="40"
            cy="50"
            r="2"
            fill="rgba(99, 99, 241, 0.3)"
          />
          <circle
            cx="60"
            cy="50"
            r="2"
            fill="rgba(99, 99, 241, 0.3)"
          />
          <circle
            cx="50"
            cy="40"
            r="2"
            fill="rgba(99, 99, 241, 0.3)"
          />
          <circle
            cx="50"
            cy="60"
            r="2"
            fill="rgba(99, 99, 241, 0.3)"
          />
          {/* Diagonal connections */}
          <path
            d="M25 25 L35 35 M75 25 L65 35 M25 75 L35 65 M75 75 L65 65"
            stroke="rgba(99, 99, 241, 0.2)"
            strokeWidth="1"
            fill="none"
          />
          {/* Small dots */}
          <circle
            cx="25"
            cy="25"
            r="1.5"
            fill="rgba(99, 99, 241, 0.25)"
          />
          <circle
            cx="75"
            cy="25"
            r="1.5"
            fill="rgba(99, 99, 241, 0.25)"
          />
          <circle
            cx="25"
            cy="75"
            r="1.5"
            fill="rgba(99, 99, 241, 0.25)"
          />
          <circle
            cx="75"
            cy="75"
            r="1.5"
            fill="rgba(99, 99, 241, 0.25)"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
    </svg>
  );
}

// Animated circuit lines component
function AnimatedCircuitLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Glowing accent points */}
      <div className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-workos-purple/30 animate-pulse" />
      <div
        className="absolute top-3/4 right-1/4 w-2 h-2 rounded-full bg-workos-teal/30 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-3/4 w-2 h-2 rounded-full bg-workos-purple/30 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-workos-teal/30 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute top-1/6 right-1/3 w-2 h-2 rounded-full bg-workos-purple/30 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />
    </div>
  );
}

// Chip logo component
function ChipLogo() {
  return (
    <div className="absolute bottom-8 right-8 opacity-20 hover:opacity-40 transition-opacity duration-500">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Chip body */}
        <rect
          x="15"
          y="15"
          width="50"
          height="50"
          rx="8"
          stroke="rgba(99, 99, 241, 0.4)"
          strokeWidth="2"
          fill="none"
        />
        {/* Inner chip */}
        <rect
          x="25"
          y="25"
          width="30"
          height="30"
          rx="4"
          stroke="rgba(99, 99, 241, 0.3)"
          strokeWidth="1"
          fill="none"
        />
        {/* Pins - top */}
        <path d="M30 15 V8" stroke="rgba(99, 99, 241, 0.4)" strokeWidth="1.5" />
        <path d="M40 15 V8" stroke="rgba(99, 99, 241, 0.4)" strokeWidth="1.5" />
        <path d="M50 15 V8" stroke="rgba(99, 99, 241, 0.4)" strokeWidth="1.5" />
        {/* Pins - bottom */}
        <path
          d="M30 65 V72"
          stroke="rgba(99, 99, 241, 0.4)"
          strokeWidth="1.5"
        />
        <path
          d="M40 65 V72"
          stroke="rgba(99, 99, 241, 0.4)"
          strokeWidth="1.5"
        />
        <path
          d="M50 65 V72"
          stroke="rgba(99, 99, 241, 0.4)"
          strokeWidth="1.5"
        />
        {/* Pins - left */}
        <path d="M15 30 H8" stroke="rgba(99, 99, 241, 0.4)" strokeWidth="1.5" />
        <path d="M15 40 H8" stroke="rgba(99, 99, 241, 0.4)" strokeWidth="1.5" />
        <path d="M15 50 H8" stroke="rgba(99, 99, 241, 0.4)" strokeWidth="1.5" />
        {/* Pins - right */}
        <path
          d="M65 30 H72"
          stroke="rgba(99, 99, 241, 0.4)"
          strokeWidth="1.5"
        />
        <path
          d="M65 40 H72"
          stroke="rgba(99, 99, 241, 0.4)"
          strokeWidth="1.5"
        />
        <path
          d="M65 50 H72"
          stroke="rgba(99, 99, 241, 0.4)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

// Feature card component
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <div className="card-dark group cursor-default">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-workos-purple-light group-hover:text-workos-teal transition-colors duration-300">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-medium text-white mb-1">{title}</h3>
          <p className="text-sm leading-relaxed text-text-light">{description}</p>
        </div>
      </div>
    </div>
  );
}

// Main Developer Section component
export function DeveloperSection() {
  return (
    <section className="relative overflow-hidden bg-workos-dark py-24 md:py-32">
      {/* Circuit board background */}
      <CircuitBoardPattern />

      {/* Animated elements */}
      <AnimatedCircuitLines />

      {/* Chip logo decoration */}
      <ChipLogo />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-workos-dark via-transparent to-workos-dark pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-workos-purple/5 via-transparent to-workos-teal/5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container-workos">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-h2 text-white mb-4">
            Developer-first design
          </h2>
          <p className="text-body-large text-text-light max-w-2xl mx-auto">
            A unified platform with modern APIs
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16 md:mb-20">
          {developerFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>

        {/* Provider logos section */}
        <div className="text-center">
          <p className="text-small text-text-muted uppercase tracking-wider mb-8">
            Trusted integrations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-white/60">
            <ProviderLogos.Okta />
            <ProviderLogos.Azure />
            <ProviderLogos.Google />
            <ProviderLogos.SAML />
            <ProviderLogos.OneLogin />
            <ProviderLogos.ADFS />
          </div>
        </div>
      </div>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-workos-purple/30 to-transparent" />
    </section>
  );
}

export default DeveloperSection;
