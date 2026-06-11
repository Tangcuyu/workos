"use client";

import * as React from "react";
import Image from "next/image";

// Directory Sync feature card data
const directoryFeatures = [
  {
    title: "SCIM provisioning",
    description: "with Okta, Entra ID, ADFS, and more",
    image: "/images/sections/scim-provisioning.png",
  },
  {
    title: "HRIS integration",
    description: "with Bamboo, Rippling, and others",
    image: "/images/sections/hris-integration.png",
  },
];

// Feature card component for Directory Sync
interface DirectoryFeatureCardProps {
  title: string;
  description: string;
  image: string;
}

function DirectoryFeatureCard({
  title,
  description,
  image,
}: DirectoryFeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-[#E8E8E8] bg-white transition-all duration-300 hover:border-[#D0D0D0] hover:shadow-lg">
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F9F9FB]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-lg font-medium text-text-primary">{title}</h3>
        <p className="text-sm text-text-secondary">{description}</p>
      </div>
    </div>
  );
}

export function DirectorySyncSection() {
  return (
    <section className="section-gray relative py-20 md:py-24">
      <div className="container-workos">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-h2 mb-4 text-text-primary">Directory Sync</h2>
          <p className="text-body-large mb-2 text-workos-purple">
            SCIM and HRIS integrations? No sweat.
          </p>
          <p className="mx-auto max-w-2xl text-base text-text-secondary">
            Quickly enable full user lifecycle management by connecting WorkOS
            to your customers&apos; identity providers.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {directoryFeatures.map((feature, index) => (
            <DirectoryFeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
      </div>

      {/* Optional decorative vertical line connecting to section below */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
        <div className="h-12 w-px bg-gradient-to-b from-[#E8E8E8] to-transparent" />
      </div>
    </section>
  );
}

export default DirectorySyncSection;
