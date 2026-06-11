"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  ArrowDownIcon,
  MenuIcon,
  CloseIcon,
  ExternalLinkIcon,
  UserManagementIcon,
  EnterpriseSSOIcon,
  RadarIcon,
  AuthKitIcon,
  DirectorySyncIcon,
  RBACIcon,
  MCPAuthIcon,
  AdminPortalIcon,
  VaultIcon,
  DocumentationIcon,
  ChangelogIcon,
  APIStatusIcon,
  BlogIcon,
  GuidesIcon,
  PodcastIcon,
  CustomersIcon,
  CompanyIcon,
  CareersIcon,
  SecurityNavIcon,
  SupportPlansIcon,
  PricingIcon,
} from "@/components/icons";

// Product data for the Products dropdown
const productsData = [
  {
    name: "User Management",
    description: "Complete auth & user management platform",
    href: "/user-management",
    icon: UserManagementIcon,
    color: "#6363F1",
  },
  {
    name: "Enterprise SSO",
    description: "Unified SSO integration for any identity provider",
    href: "/sso",
    icon: EnterpriseSSOIcon,
    color: "#23F0C3",
  },
  {
    name: "Radar",
    description: "Real-time protection against bots, fraud, and abuse",
    href: "/radar",
    icon: RadarIcon,
    color: "#FF6B6B",
  },
  {
    name: "AuthKit",
    description: "Customizable UI for all authentication types",
    href: "/authkit",
    icon: AuthKitIcon,
    color: "#6B7AFF",
  },
  {
    name: "Directory Sync",
    description: "User lifecycle management from corporate directories",
    href: "/directory-sync",
    icon: DirectorySyncIcon,
    color: "#4ECDC4",
  },
  {
    name: "Role-Based Access Control",
    description: "Powerful and flexible permissions",
    href: "/rbac",
    icon: RBACIcon,
    color: "#FFD93D",
  },
  {
    name: "MCP Auth",
    description: "Secure auth for MCP servers",
    href: "/mcp-auth",
    icon: MCPAuthIcon,
    color: "#6363F1",
  },
  {
    name: "Admin Portal",
    description: "Self-serve onboarding for corporate IT admins",
    href: "/admin-portal",
    icon: AdminPortalIcon,
    color: "#C9B1FF",
  },
  {
    name: "Vault",
    description: "EKM for encrypting and optionally storing objects",
    href: "/vault",
    icon: VaultIcon,
    color: "#845EC2",
  },
];

// Developers dropdown data
const developersData = [
  {
    name: "Documentation",
    href: "/docs",
    icon: DocumentationIcon,
  },
  {
    name: "Changelog",
    href: "/changelog",
    icon: ChangelogIcon,
  },
  {
    name: "API Status",
    href: "https://status.workos.com",
    icon: APIStatusIcon,
    external: true,
  },
];

// Resources dropdown data
const resourcesData = [
  { name: "Blog", href: "/blog", icon: BlogIcon },
  { name: "Guides", href: "/guides", icon: GuidesIcon },
  { name: "Podcast", href: "/podcast", icon: PodcastIcon },
  { name: "Customers", href: "/customers", icon: CustomersIcon },
  { name: "Company", href: "/company", icon: CompanyIcon },
  { name: "Careers", href: "/careers", icon: CareersIcon },
  { name: "Security", href: "/security", icon: SecurityNavIcon },
  { name: "Support Plans", href: "/support", icon: SupportPlansIcon },
  { name: "Pricing", href: "/pricing", icon: PricingIcon },
];

// Dropdown menu component
interface DropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  width?: string;
}

function DropdownMenu({
  trigger,
  children,
  isOpen,
  onOpenChange,
  width = "auto",
}: DropdownMenuProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOpenChange(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onOpenChange]);

  return (
    <div ref={ref} className="relative">
      <button
        className="flex items-center gap-1 nav-link"
        onMouseEnter={() => onOpenChange(true)}
        onMouseLeave={() => onOpenChange(false)}
        onClick={() => onOpenChange(!isOpen)}
        aria-expanded={isOpen}
      >
        {trigger}
        <ArrowDownIcon
          className={cn(
            "transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "absolute top-full left-0 pt-2 transition-all duration-200",
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        )}
        onMouseEnter={() => onOpenChange(true)}
        onMouseLeave={() => onOpenChange(false)}
        style={{ width }}
      >
        <div className="bg-white rounded-lg shadow-lg border border-[#E8E8E8] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

// Product item component
interface ProductItemProps {
  name: string;
  description: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  onClick: () => void;
}

function ProductItem({
  name,
  description,
  href,
  icon: Icon,
  color,
  onClick,
}: ProductItemProps) {
  return (
    <Link
      href={href}
      className="flex items-start gap-3 p-3 hover:bg-[#F9F9FB] transition-colors rounded-lg mx-2 my-1"
      onClick={onClick}
    >
      <div
        className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon className="w-6 h-6" style={{ color }} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-[#29363D]">{name}</div>
        <div className="text-xs text-[#656B8A] mt-0.5">{description}</div>
      </div>
    </Link>
  );
}

// Simple link item for dropdowns
interface LinkItemProps {
  name: string;
  href: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  external?: boolean;
  onClick: () => void;
}

function LinkItem({ name, href, icon: Icon, external, onClick }: LinkItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-4 py-2.5 hover:bg-[#F9F9FB] transition-colors"
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {Icon && <Icon className="w-5 h-5 text-[#656B8A]" />}
      <span className="text-sm text-[#29363D]">{name}</span>
      {external && <ExternalLinkIcon className="w-3 h-3 text-[#656B8A] ml-auto" />}
    </Link>
  );
}

// Mobile menu item
interface MobileMenuItemProps {
  name: string;
  href: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description?: string;
  external?: boolean;
  onClick: () => void;
}

function MobileMenuItem({
  name,
  href,
  icon: Icon,
  description,
  external,
  onClick,
}: MobileMenuItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 py-3 border-b border-[#E8E8E8] last:border-0"
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {Icon && (
        <div className="flex-shrink-0">
          <Icon className="w-6 h-6 text-[#656B8A]" />
        </div>
      )}
      <div className="flex-1">
        <div className="text-sm font-medium text-[#29363D]">{name}</div>
        {description && (
          <div className="text-xs text-[#656B8A] mt-0.5">{description}</div>
        )}
      </div>
      {external && <ExternalLinkIcon className="w-4 h-4 text-[#656B8A]" />}
    </Link>
  );
}

export function Navigation() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  // Handle scroll detection
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[999] bg-white transition-shadow duration-200",
          scrolled && "shadow-sm border-b border-[#E8E8E8]"
        )}
        style={{ height: "83px" }}
      >
        <nav className="h-full max-w-[1240px] mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-medium text-[#29363D] hover:text-[#6363F1] transition-colors"
          >
            WorkOS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Products Dropdown */}
            <DropdownMenu
              trigger={<span>Products</span>}
              isOpen={openDropdown === "products"}
              onOpenChange={(open) => setOpenDropdown(open ? "products" : null)}
              width="400px"
            >
              <div className="py-2 max-h-[480px] overflow-y-auto">
                {productsData.map((product) => (
                  <ProductItem
                    key={product.name}
                    {...product}
                    onClick={() => setOpenDropdown(null)}
                  />
                ))}
              </div>
            </DropdownMenu>

            {/* Developers Dropdown */}
            <DropdownMenu
              trigger={<span>Developers</span>}
              isOpen={openDropdown === "developers"}
              onOpenChange={(open) => setOpenDropdown(open ? "developers" : null)}
              width="200px"
            >
              <div className="py-2">
                {developersData.map((item) => (
                  <LinkItem
                    key={item.name}
                    {...item}
                    onClick={() => setOpenDropdown(null)}
                  />
                ))}
              </div>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu
              trigger={<span>Resources</span>}
              isOpen={openDropdown === "resources"}
              onOpenChange={(open) => setOpenDropdown(open ? "resources" : null)}
              width="200px"
            >
              <div className="py-2 max-h-[400px] overflow-y-auto">
                {resourcesData.map((item) => (
                  <LinkItem
                    key={item.name}
                    {...item}
                    onClick={() => setOpenDropdown(null)}
                  />
                ))}
              </div>
            </DropdownMenu>
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/sign-in"
              className="text-sm text-[#656B8A] hover:text-[#29363D] transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/sign-up"
              className="btn-primary"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -mr-2 text-[#29363D] hover:text-[#6363F1] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-[998] md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed top-[83px] right-0 bottom-0 w-full max-w-sm bg-white z-[998] transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-5">
          {/* Products Section */}
          <div className="mb-6">
            <h3 className="text-xs font-medium text-[#656B8A] uppercase tracking-wider mb-3">
              Products
            </h3>
            <div className="space-y-1">
              {productsData.map((product) => (
                <MobileMenuItem
                  key={product.name}
                  name={product.name}
                  href={product.href}
                  icon={product.icon}
                  description={product.description}
                  onClick={closeMobileMenu}
                />
              ))}
            </div>
          </div>

          {/* Developers Section */}
          <div className="mb-6">
            <h3 className="text-xs font-medium text-[#656B8A] uppercase tracking-wider mb-3">
              Developers
            </h3>
            <div className="space-y-1">
              {developersData.map((item) => (
                <MobileMenuItem
                  key={item.name}
                  name={item.name}
                  href={item.href}
                  icon={item.icon}
                  external={item.external}
                  onClick={closeMobileMenu}
                />
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="mb-6">
            <h3 className="text-xs font-medium text-[#656B8A] uppercase tracking-wider mb-3">
              Resources
            </h3>
            <div className="space-y-1">
              {resourcesData.map((item) => (
                <MobileMenuItem
                  key={item.name}
                  name={item.name}
                  href={item.href}
                  icon={item.icon}
                  onClick={closeMobileMenu}
                />
              ))}
            </div>
          </div>

          {/* Mobile CTA Buttons */}
          <div className="pt-4 border-t border-[#E8E8E8] flex flex-col gap-3">
            <Link
              href="/sign-in"
              className="btn-secondary w-full justify-center"
              onClick={closeMobileMenu}
            >
              Sign in
            </Link>
            <Link
              href="/sign-up"
              className="btn-primary w-full justify-center"
              onClick={closeMobileMenu}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div style={{ height: "83px" }} />
    </>
  );
}
