"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

// Customer logos data
const customerLogos = [
  {
    name: "Vercel",
    src: "/images/customers/vercel.svg",
    width: 124,
    height: 28,
  },
  {
    name: "OpenAI",
    src: "/images/customers/openai.svg",
    width: 100,
    height: 27,
  },
  {
    name: "Clay",
    src: "/images/sections/clay-logo.png",
    width: 80,
    height: 28,
  },
];

// Additional customer logos as SVG components for better grayscale control
const PlaidLogo = () => (
  <svg
    width="80"
    height="28"
    viewBox="0 0 80 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-auto opacity-60 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
  >
    <text
      x="0"
      y="20"
      fontSize="18"
      fontWeight="500"
      fill="#29363D"
      fontFamily="Inter, sans-serif"
    >
      Plaid
    </text>
  </svg>
);

const WebflowLogo = () => (
  <svg
    width="100"
    height="28"
    viewBox="0 0 100 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-auto opacity-60 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
  >
    <text
      x="0"
      y="20"
      fontSize="18"
      fontWeight="500"
      fill="#29363D"
      fontFamily="Inter, sans-serif"
    >
      Webflow
    </text>
  </svg>
);

const NotionLogo = () => (
  <svg
    width="85"
    height="28"
    viewBox="0 0 85 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-auto opacity-60 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
  >
    <text
      x="0"
      y="20"
      fontSize="18"
      fontWeight="500"
      fill="#29363D"
      fontFamily="Inter, sans-serif"
    >
      Notion
    </text>
  </svg>
);

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-white via-[#FDFDFE] to-[#F9F9FB]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #29363D 1px, transparent 1px),
              linear-gradient(to bottom, #29363D 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradient orbs for depth */}
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-purple-100/40 to-transparent blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-blue-50/50 to-transparent blur-3xl" />

        {/* Hero pattern image */}
        <Image
          src="/images/sections/hero-pattern.avif"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Main content */}
      <div className="container-workos relative z-10 flex flex-col items-center px-5 pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-32">
        {/* Announcement Banner */}
        <Link
          href="/blog/auth-md"
          className="group mb-8 inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 transition-all duration-300 hover:bg-purple-100"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-workos-purple px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.8px] text-white">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            New
          </span>
          <span className="text-sm font-medium text-[#29363D]">
            Announcing auth.md
          </span>
          <ArrowRightIcon className="h-4 w-4 text-workos-purple transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>

        {/* Main Headline */}
        <h1 className="text-center">
          <span className="block text-h1 text-text-primary md:text-[64px] md:leading-[68px] lg:text-[80px] lg:leading-[84px]">
            Your app,{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-workos-purple via-[#6363F1] to-purple-500 bg-clip-text text-transparent">
                Enterprise Ready.
              </span>
              {/* Subtle underline effect */}
              <span className="absolute bottom-2 left-0 right-0 -z-0 h-3 bg-gradient-to-r from-purple-100/50 to-purple-50/50 blur-sm" />
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-[620px] text-center text-body-large text-text-secondary md:mt-8">
          Start selling to enterprise customers with just a few lines of code.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-3">
          <Link
            href="/dashboard/signup"
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-medium text-white",
              "bg-workos-purple transition-all duration-200",
              "hover:bg-[#4F4FE0] hover:shadow-lg hover:shadow-purple-500/25",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-workos-purple focus-visible:ring-offset-2",
              "active:scale-[0.98]"
            )}
          >
            Get started
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className={cn(
              "inline-flex items-center justify-center rounded-lg border border-[#E8E8E8] px-6 py-3 text-base font-medium text-text-primary",
              "bg-white transition-all duration-200",
              "hover:border-[#D0D0D0] hover:bg-[#F9F9FB]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-workos-purple focus-visible:ring-offset-2",
              "active:scale-[0.98]"
            )}
          >
            Talk to an expert
          </Link>
        </div>

        {/* Trusted By Section */}
        <div className="mt-16 flex w-full flex-col items-center md:mt-20 lg:mt-24">
          {/* Label */}
          <p className="text-allcaps text-text-muted mb-8">Trusted by</p>

          {/* Customer logos - horizontal scroll on mobile, centered row on desktop */}
          <div className="relative w-full max-w-4xl">
            {/* Gradient fade on mobile */}
            <div className="pointer-events-none absolute -left-1 top-0 bottom-0 z-10 w-8 bg-gradient-to-r from-white to-transparent md:hidden" />
            <div className="pointer-events-none absolute -right-1 top-0 bottom-0 z-10 w-8 bg-gradient-to-l from-white to-transparent md:hidden" />

            {/* Logos container */}
            <div className="flex animate-marquee items-center justify-center gap-12 overflow-x-auto pb-4 scrollbar-hide md:animate-none md:gap-16 md:overflow-visible lg:gap-20">
              {/* Vercel */}
              <div className="flex h-7 w-auto shrink-0 items-center opacity-50 grayscale transition-all duration-300 hover:opacity-70 hover:grayscale-0">
                <Image
                  src="/images/customers/vercel.svg"
                  alt="Vercel"
                  width={124}
                  height={28}
                  className="h-full w-auto"
                />
              </div>

              {/* OpenAI */}
              <div className="flex h-7 w-auto shrink-0 items-center opacity-50 grayscale transition-all duration-300 hover:opacity-70 hover:grayscale-0">
                <Image
                  src="/images/customers/openai.svg"
                  alt="OpenAI"
                  width={100}
                  height={27}
                  className="h-full w-auto"
                />
              </div>

              {/* Clay */}
              <div className="flex h-7 w-auto shrink-0 items-center opacity-50 grayscale transition-all duration-300 hover:opacity-70 hover:grayscale-0">
                <Image
                  src="/images/sections/clay-logo.png"
                  alt="Clay"
                  width={80}
                  height={28}
                  className="h-full w-auto"
                />
              </div>

              {/* Additional logos as inline SVGs */}
              <PlaidLogo />
              <WebflowLogo />
              <NotionLogo />

              {/* Duplicate logos for seamless marquee on mobile */}
              <div className="flex h-7 w-auto shrink-0 items-center opacity-50 grayscale transition-all duration-300 hover:opacity-70 hover:grayscale-0 md:hidden">
                <Image
                  src="/images/customers/vercel.svg"
                  alt="Vercel"
                  width={124}
                  height={28}
                  className="h-full w-auto"
                />
              </div>
              <div className="flex h-7 w-auto shrink-0 items-center opacity-50 grayscale transition-all duration-300 hover:opacity-70 hover:grayscale-0 md:hidden">
                <Image
                  src="/images/customers/openai.svg"
                  alt="OpenAI"
                  width={100}
                  height={27}
                  className="h-full w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8E8E8] to-transparent" />
    </section>
  );
}

export default HeroSection;
