"use client";

import * as React from "react";
import Image from "next/image";
import {
  ShieldIcon,
  PaletteIcon,
  GlobeIcon,
  SparkleIcon,
  BookIcon,
  PuzzleIcon,
} from "@/components/icons";

// Admin Portal feature data
const adminFeatures = [
  {
    icon: ShieldIcon,
    description: "Effortlessly connect any identity provider or directory",
  },
  {
    icon: PaletteIcon,
    description: "Customize the look and feel to match your brand",
  },
  {
    icon: GlobeIcon,
    description: "Host on your custom domain (CNAME)",
  },
  {
    icon: SparkleIcon,
    description: "A polished experience for IT administrators",
  },
  {
    icon: BookIcon,
    description: "Step-by-step setup guides with detailed screenshots",
  },
  {
    icon: PuzzleIcon,
    description: "Seamlessly integrates into your existing application",
  },
];

// Feature item component for Admin Portal
interface AdminFeatureItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
}

function AdminFeatureItem({ icon: Icon, description }: AdminFeatureItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center text-workos-purple">
        <Icon className="h-5 w-5" />
      </div>
      <p className="text-sm text-text-secondary leading-relaxed pt-1">
        {description}
      </p>
    </div>
  );
}

export function AdminPortalSection() {
  return (
    <section className="section-light py-20 md:py-24">
      <div className="container-workos">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-h2 mb-4 text-text-primary">Frictionless set up</h2>
          <p className="text-body-large mb-2 text-workos-purple">
            The IT admin&apos;s admin
          </p>
          <p className="mx-auto max-w-2xl text-base text-text-secondary">
            Free your support team from the ongoing headache of configuring
            enterprise SSO for each customer.
          </p>
        </div>

        {/* Admin Portal Screenshot */}
        <div className="mb-12 md:mb-16">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border border-[#E8E8E8] bg-white shadow-xl">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/sections/admin-portal-setup.png"
                alt="Admin Portal Setup Interface"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {adminFeatures.map((feature, index) => (
              <AdminFeatureItem
                key={index}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminPortalSection;
