"use client";

import * as React from "react";
import {
  SSOIcon,
  UsersIcon,
  GlobeIcon,
  KeyIcon,
  MailIcon,
  LockIcon,
} from "@/components/icons";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="card-feature group cursor-pointer">
      <div className="mb-4 flex h-8 w-8 items-center justify-center text-workos-purple">
        {icon}
      </div>
      <h3 className="mb-2 text-base font-medium text-text-primary">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-text-secondary">
        {description}
      </p>
    </div>
  );
}

const features: FeatureCardProps[] = [
  {
    icon: <SSOIcon className="h-8 w-8" />,
    title: "Auth for all SSO providers",
    description:
      "Support any SAML or OIDC identity provider with a single integration",
  },
  {
    icon: <UsersIcon className="h-8 w-8" />,
    title: "Complete User Management",
    description:
      "Manage users and organizations, set policies, and support all auth types",
  },
  {
    icon: <GlobeIcon className="h-8 w-8" />,
    title: "Social authentication",
    description:
      "Sign in to your app with Microsoft, Google, and more",
  },
  {
    icon: <KeyIcon className="h-8 w-8" />,
    title: "AuthKit",
    description:
      "Flexible authentication UI powered by WorkOS and Radix",
  },
  {
    icon: <MailIcon className="h-8 w-8" />,
    title: "Magic Auth",
    description:
      "Passwordless auth with a six-digit code sent via email",
  },
  {
    icon: <LockIcon className="h-8 w-8" />,
    title: "Multi-Factor Auth",
    description:
      "Add an extra layer of security with MFA",
  },
];

export function FeaturesSection() {
  return (
    <section className="section-gray py-20 md:py-24">
      <div className="container-workos">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-h2 mb-4 text-text-primary">
            The all-in-one solution
          </h2>
          <p className="text-body-large mb-2 text-workos-purple">
            Enterprise SSO (and a whole lot more)
          </p>
          <p className="mx-auto max-w-2xl text-base text-text-secondary">
            WorkOS is a set of building blocks for quickly adding enterprise
            features to your application.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
