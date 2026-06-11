// WorkOS Icons
// Essential icons extracted from https://workos.com/

import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

// Arrow Icons
export const ArrowRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
ArrowRightIcon.displayName = "ArrowRightIcon";

export const ArrowDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
ArrowDownIcon.displayName = "ArrowDownIcon";

// Navigation Icons
export const MenuIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M3 12H21M3 6H21M3 18H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
MenuIcon.displayName = "MenuIcon";

export const CloseIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
CloseIcon.displayName = "CloseIcon";

// External Link Icon
export const ExternalLinkIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 2H14V6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66675 9.33333L14.0001 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
ExternalLinkIcon.displayName = "ExternalLinkIcon";

// Check Icon
export const CheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M13.3334 4L6.00002 11.3333L2.66669 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
CheckIcon.displayName = "CheckIcon";

// Play Icon
export const PlayIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M8 5.14301V18.857C8 19.7248 8.98114 20.2583 9.71429 19.7714L19.7143 12.9144C20.381 12.4716 20.381 11.5284 19.7143 11.0856L9.71429 4.22858C8.98114 3.74172 8 4.27521 8 5.14301Z"
        fill="currentColor"
      />
    </svg>
  )
);
PlayIcon.displayName = "PlayIcon";

// Document/Book Icon
export const BookIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
BookIcon.displayName = "BookIcon";

// Terminal/Code Icon
export const TerminalIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M4 17L10 11L4 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 19H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
TerminalIcon.displayName = "TerminalIcon";

// Webhook Icon
export const WebhookIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2V6M12 18V22M2 12H6M18 12H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
);
WebhookIcon.displayName = "WebhookIcon";

// Shield/Security Icon
export const ShieldIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12L11 14L15 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
ShieldIcon.displayName = "ShieldIcon";

// Package/SDK Icon
export const PackageIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M16.5 9.4L7.5 4.21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.27002 6.96002L12 12.01L20.73 6.96002"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22.08V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
PackageIcon.displayName = "PackageIcon";

// Layers/Environment Icon
export const LayersIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17L12 22L22 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
LayersIcon.displayName = "LayersIcon";

// Grid/Services Icon
export const GridIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
);
GridIcon.displayName = "GridIcon";

// Dashboard Icon
export const DashboardIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 9H21" stroke="currentColor" strokeWidth="2" />
      <path d="M9 21V9" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
);
DashboardIcon.displayName = "DashboardIcon";

// WorkOS Logo
export const WorkOSLogo = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="120"
      height="24"
      viewBox="0 0 120 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <text x="0" y="18" fontSize="20" fontWeight="500" fill="currentColor" fontFamily="Inter, sans-serif">
        WorkOS
      </text>
    </svg>
  )
);
WorkOSLogo.displayName = "WorkOSLogo";

// Sparkle/New Icon
export const SparkleIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M8 0V16M0 8H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
);
SparkleIcon.displayName = "SparkleIcon";

// User Icon
export const UserIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
UserIcon.displayName = "UserIcon";

// Users/Team Icon
export const UsersIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
UsersIcon.displayName = "UsersIcon";

// Globe/Social Icon
export const GlobeIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path
        d="M2 12H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
GlobeIcon.displayName = "GlobeIcon";

// Key/AuthKit Icon
export const KeyIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M21 2L19 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 8.5C12.5 10.433 10.933 12 9 12C7.067 12 5.5 10.433 5.5 8.5C5.5 6.567 7.067 5 9 5C10.933 5 12.5 6.567 12.5 8.5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M15 9L19 13L17 15L13 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12L3 18V21H6L12 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
KeyIcon.displayName = "KeyIcon";

// Mail/Magic Link Icon
export const MailIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 6L12 13L2 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
MailIcon.displayName = "MailIcon";

// Lock/MFA Icon
export const LockIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="16" r="1" fill="currentColor" />
    </svg>
  )
);
LockIcon.displayName = "LockIcon";

// SSO/Connection Icon
export const SSOIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="2" y="6" width="8" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <rect x="14" y="6" width="8" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M10 12H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
);
SSOIcon.displayName = "SSOIcon";

// Social Icons
export const TwitterIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M15.2667 2.5H17.9833L11.8333 9.56667L19.0667 18.3333H13.4667L9.1 12.6917L4.03333 18.3333H1.31667L7.88333 10.7833L0.933334 2.5H6.68333L10.6167 7.65L15.2667 2.5ZM14.2667 16.6833H15.7667L5.83333 4.06667H4.225L14.2667 16.6833Z"
        fill="currentColor"
      />
    </svg>
  )
);
TwitterIcon.displayName = "TwitterIcon";

export const GitHubIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.1726 18.8173 16.8976 17.5046 18.1197 15.7412C19.3418 13.9779 19.9995 11.8635 20 9.69375C20 4.475 15.525 0 10 0Z"
        fill="currentColor"
      />
    </svg>
  )
);
GitHubIcon.displayName = "GitHubIcon";

export const LinkedInIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M18.3333 0H1.66667C0.746667 0 0 0.746667 0 1.66667V18.3333C0 19.2533 0.746667 20 1.66667 20H18.3333C19.2533 20 20 19.2533 20 18.3333V1.66667C20 0.746667 19.2533 0 18.3333 0ZM6.66667 16.6667H4.16667V7.5H6.66667V16.6667ZM5.41667 6.25C4.64167 6.25 4.01667 5.625 4.01667 4.85C4.01667 4.075 4.64167 3.45 5.41667 3.45C6.19167 3.45 6.81667 4.075 6.81667 4.85C6.81667 5.625 6.19167 6.25 5.41667 6.25ZM16.6667 16.6667H14.1667V11.6667C14.1667 10.7583 13.4083 10 12.5 10C11.5917 10 10.8333 10.7583 10.8333 11.6667V16.6667H8.33333V7.5H10.8333V8.75C11.4083 7.925 12.4167 7.5 13.3333 7.5C15.1742 7.5 16.6667 8.9925 16.6667 10.8333V16.6667Z"
        fill="currentColor"
      />
    </svg>
  )
);
LinkedInIcon.displayName = "LinkedInIcon";

// ============================================
// Product Icons for Navigation Dropdown
// ============================================

// User Management Icon
export const UserManagementIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M8 26C8 21.5817 11.5817 18 16 18C20.4183 18 24 21.5817 24 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
);
UserManagementIcon.displayName = "UserManagementIcon";

// Enterprise SSO Icon
export const EnterpriseSSOIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="4" y="8" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M12 8V5C12 3.89543 12.8954 3 14 3H18C19.1046 3 20 3.89543 20 5V8" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="17" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M16 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
);
EnterpriseSSOIcon.displayName = "EnterpriseSSOIcon";

// Radar Icon (fraud protection)
export const RadarIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22C19.3137 22 22 19.3137 22 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
      <path d="M24 4L28 8L24 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
);
RadarIcon.displayName = "RadarIcon";

// AuthKit Icon
export const AuthKitIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
      <rect x="8" y="10" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="2" />
      <path d="M11 14H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M11 18H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
);
AuthKitIcon.displayName = "AuthKitIcon";

// Directory Sync Icon
export const DirectorySyncIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="10" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="22" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="10" cy="24" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="22" cy="24" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M13 8H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 11V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 11V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 24H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
);
DirectorySyncIcon.displayName = "DirectorySyncIcon";

// Role-Based Access Control Icon
export const RBACIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="16" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M8 28V24C8 20.6863 11.134 18 15 18H17C20.866 18 24 20.6863 24 24V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 12L26 14L30 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
);
RBACIcon.displayName = "RBACIcon";

// MCP Auth Icon
export const MCPAuthIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="6" y="4" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M11 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M11 14H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M11 18H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="24" r="6" fill="#6363F1" />
      <path d="M22 24L24 26L27 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
);
MCPAuthIcon.displayName = "MCPAuthIcon";

// Admin Portal Icon
export const AdminPortalIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M4 10H28" stroke="currentColor" strokeWidth="2" />
      <circle cx="8" cy="7" r="1" fill="currentColor" />
      <circle cx="12" cy="7" r="1" fill="currentColor" />
      <circle cx="16" cy="7" r="1" fill="currentColor" />
      <rect x="8" y="14" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="18" y="14" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 22H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
);
AdminPortalIcon.displayName = "AdminPortalIcon";

// Vault Icon
export const VaultIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M16 13V16L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 6V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 6V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
);
VaultIcon.displayName = "VaultIcon";

// Documentation Icon
export const DocumentationIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M4 3C4 2.44772 4.44772 2 5 2H15C15.5523 2 16 2.44772 16 3V17C16 17.5523 15.5523 18 15 18H5C4.44772 18 4 17.5523 4 17V3Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 6H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 9H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 12H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
);
DocumentationIcon.displayName = "DocumentationIcon";

// Changelog Icon
export const ChangelogIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M6 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="3" y="3" width="14" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 11H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 14H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
);
ChangelogIcon.displayName = "ChangelogIcon";

// API Status Icon
export const APIStatusIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 6V10L13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="10" r="2" fill="currentColor" />
    </svg>
  )
);
APIStatusIcon.displayName = "APIStatusIcon";

// Blog Icon
export const BlogIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M3 4C3 2.89543 3.89543 2 5 2H15C16.1046 2 17 2.89543 17 4V16C17 17.1046 16.1046 18 15 18H5C3.89543 18 3 17.1046 3 16V4Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 6H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 9H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 12H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
);
BlogIcon.displayName = "BlogIcon";

// Guides Icon
export const GuidesIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M4 2L10 6L16 2V18L10 14L4 18V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
);
GuidesIcon.displayName = "GuidesIcon";

// Podcast Icon
export const PodcastIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M10 18V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="7" y="5" width="6" height="5" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 15C5 12.2386 7.23858 10 10 10C12.7614 10 15 12.2386 15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
);
PodcastIcon.displayName = "PodcastIcon";

// Palette Icon (for branding/customization)
export const PaletteIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7" cy="8" r="1.5" fill="currentColor" />
      <circle cx="13" cy="8" r="1.5" fill="currentColor" />
      <circle cx="10" cy="13" r="1.5" fill="currentColor" />
    </svg>
  )
);
PaletteIcon.displayName = "PaletteIcon";

// Puzzle Icon (for integration)
export const PuzzleIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M8 3C8 2.44772 8.44772 2 9 2H11C11.5523 2 12 2.44772 12 3V4H14C15.1046 4 16 4.89543 16 6V8H17C17.5523 8 18 8.44772 18 9V11C18 11.5523 17.5523 12 17 12H16V14C16 15.1046 15.1046 16 14 16H12V17C12 17.5523 11.5523 18 11 18H9C8.44772 18 8 17.5523 8 17V16H6C4.89543 16 4 15.1046 4 14V12H3C2.44772 12 2 11.5523 2 11V9C2 8.44772 2.44772 8 3 8H4V6C4 4.89543 4.89543 4 6 4H8V3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
PuzzleIcon.displayName = "PuzzleIcon";

// Customers Icon
export const CustomersIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="7" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 17C2 13.6863 4.23858 11 7 11C9.76142 11 12 13.6863 12 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 10.5C15.933 10.5 17.5 12.067 17.5 14V17H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
);
CustomersIcon.displayName = "CustomersIcon";

// Company Icon
export const CompanyIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M3 7L10 2L17 7V18H3V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 18V12H13V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
);
CompanyIcon.displayName = "CompanyIcon";

// Careers Icon
export const CareersIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="3" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 6V4C7 2.89543 7.89543 2 9 2H11C12.1046 2 13 2.89543 13 4V6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1 10H19" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
);
CareersIcon.displayName = "CareersIcon";

// Security Nav Icon
export const SecurityNavIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M10 2L3 5V9C3 13.4183 6.13401 17.2206 10 18C13.866 17.2206 17 13.4183 17 9V5L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
);
SecurityNavIcon.displayName = "SecurityNavIcon";

// Support Plans Icon
export const SupportPlansIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 6V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="13" r="1" fill="currentColor" />
    </svg>
  )
);
SupportPlansIcon.displayName = "SupportPlansIcon";

// Pricing Icon
export const PricingIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M10 2V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 6H8C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10H12C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
);
PricingIcon.displayName = "PricingIcon";
