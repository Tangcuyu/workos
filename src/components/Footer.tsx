import Link from "next/link";
import { WorkOSLogo, TwitterIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";

const footerLinks = {
  products: {
    title: "Products",
    links: [
      { label: "User Management", href: "/user-management" },
      { label: "Enterprise SSO", href: "/sso" },
      { label: "Directory Sync", href: "/directory-sync" },
      { label: "Admin Portal", href: "/admin-portal" },
      { label: "Audit Logs", href: "/audit-logs" },
      { label: "AuthKit", href: "/authkit" },
      { label: "Multi-Factor Authentication", href: "/mfa" },
      { label: "Radar", href: "/radar" },
      { label: "Vault", href: "/vault" },
    ],
  },
  developers: {
    title: "Developers",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Changelog", href: "/changelog" },
      { label: "API Status", href: "/status" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "Podcast", href: "/podcast" },
      { label: "Pricing", href: "/pricing" },
      { label: "Startups", href: "/startups" },
      { label: "Support Plans", href: "/support" },
      { label: "Enterprise SLA", href: "/enterprise-sla" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Customers", href: "/customers" },
      { label: "Careers", href: "/careers" },
      { label: "Security", href: "/security" },
      { label: "Legal", href: "/legal" },
      { label: "Trust Center", href: "/trust" },
      { label: "Contact", href: "/contact" },
    ],
  },
};

const socialLinks = [
  {
    label: "Twitter",
    href: "https://twitter.com/workos",
    icon: TwitterIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/workos",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/workos",
    icon: LinkedInIcon,
  },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-[#E8E8E8] bg-[#F9F9FB]">
      <div className="container-workos py-[60px]">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Products Column */}
          <FooterColumn {...footerLinks.products} />

          {/* Developers Column */}
          <FooterColumn {...footerLinks.developers} />

          {/* Resources Column */}
          <FooterColumn {...footerLinks.resources} />

          {/* Company Column */}
          <FooterColumn {...footerLinks.company} />
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-[#E8E8E8] pt-8 sm:flex-row">
          {/* Logo and Copyright */}
          <div className="flex items-center gap-4">
            <WorkOSLogo className="h-5 w-auto text-[#29363D]" />
            <span className="text-[14px] text-[#656B8A]">
              &copy; WorkOS, Inc.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#656B8A] transition-colors hover:text-[#6363F1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6363F1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F9FB]"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  links: Array<{ label: string; href: string }>;
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.8px] text-[#8F96BD]">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[14px] text-[#29363D] transition-colors hover:text-[#6363F1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6363F1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F9FB]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
