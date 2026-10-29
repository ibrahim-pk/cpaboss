const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={2} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={2} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v.3l-9 5.6-9-5.6v-.3Z" />
      <path d="M3 9.1V17.5A1.5 1.5 0 0 0 4.5 19h15a1.5 1.5 0 0 0 1.5-1.5V9.1l-8.47 5.27a1 1 0 0 1-1.06 0L3 9.1Z" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z" />
    </svg>
  );
}

export function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

export function IdIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm4 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5 15.5h6a3 3 0 0 0-6 0ZM13 9h6v1.5h-6V9Zm0 3h6v1.5h-6V12Z" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.25-1.45 1.5-1.45h1.5V4.47A20 20 0 0 0 14.3 4.3c-2.17 0-3.66 1.33-3.66 3.76v2.44H8.2v3h2.44V21h2.86Z" />
    </svg>
  );
}

export function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21 6.2a7.3 7.3 0 0 1-2.1.58 3.68 3.68 0 0 0 1.6-2.03 7.4 7.4 0 0 1-2.33.9 3.67 3.67 0 0 0-6.25 3.35A10.4 10.4 0 0 1 4.36 5.17a3.67 3.67 0 0 0 1.14 4.9 3.6 3.6 0 0 1-1.66-.46v.05a3.67 3.67 0 0 0 2.94 3.6 3.7 3.7 0 0 1-1.66.06 3.68 3.68 0 0 0 3.43 2.55A7.37 7.37 0 0 1 3 17.4a10.4 10.4 0 0 0 5.63 1.65c6.76 0 10.45-5.6 10.45-10.45l-.01-.48A7.4 7.4 0 0 0 21 6.2Z" />
    </svg>
  );
}

export function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.9 8.6H3.8V20h3.1V8.6ZM5.35 3.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM20.2 13.5c0-3.06-1.63-4.48-3.8-4.48a3.3 3.3 0 0 0-2.98 1.64V8.6h-3.1V20h3.1v-6.03c0-1.6.3-3.14 2.28-3.14 1.95 0 1.98 1.82 1.98 3.24V20h3.1l.02-6.5Z" />
    </svg>
  );
}

// Green zig-zag mark used above the principle quotes
export function TrendMark(props) {
  return (
    <svg viewBox="0 0 44 18" fill="none" {...props}>
      <path d="M4 6l10 7 9-9 9 7 8-4" stroke="#84C225" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="4" cy="6" r="3" fill="#84C225" />
      <circle cx="14" cy="13" r="3.5" fill="#84C225" />
      <circle cx="23" cy="4" r="3" fill="#84C225" />
      <circle cx="32" cy="11" r="3" fill="#84C225" />
    </svg>
  );
}

// Wavy underline used under "Contact Us"
export function Squiggle(props) {
  return (
    <svg viewBox="0 0 90 12" fill="none" {...props}>
      <path
        d="M2 6c4-5 8-5 11 0s7 5 11 0 7-5 11 0 7 5 11 0 7-5 11 0 7 5 11 0 7-5 11 0 6 5 9 1"
        stroke="#84C225"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Line icons for the three feature cards
export function PeopleIcon(props) {
  return (
    <svg viewBox="0 0 64 64" {...base} strokeWidth={2.2} {...props}>
      <circle cx="32" cy="24" r="7" />
      <path d="M20 50v-4a12 12 0 0 1 24 0v4" />
      <circle cx="15" cy="28" r="5" />
      <path d="M6 50v-3a9 9 0 0 1 11-8.8" />
      <circle cx="49" cy="28" r="5" />
      <path d="M58 50v-3a9 9 0 0 0-11-8.8" />
      <path d="M6 50h52" />
      <path d="M32 6v5M24 9l2 4M40 9l-2 4" />
      <path d="M11 12l1.5 1.5M53 12l-1.5 1.5M10 18h3M51 18h3" />
    </svg>
  );
}

export function GearIcon(props) {
  return (
    <svg viewBox="0 0 64 64" {...base} strokeWidth={2.2} {...props}>
      <path d="M28 6h8l1.5 6.5a20 20 0 0 1 5.4 3.1l6.3-2.1 4 6.9-5 4.4a20 20 0 0 1 0 6.3l2.2 1.9" />
      <path d="M28 6l-1.5 6.5a20 20 0 0 0-5.4 3.1l-6.3-2.1-4 6.9 5 4.4a20 20 0 0 0 0 6.3l-5 4.4 4 6.9 6.3-2.1a20 20 0 0 0 5.4 3.1L28 58h6" />
      <path d="M24 32a8 8 0 0 1 14-5.3M40 32a8 8 0 0 1-14 5.3" />
      <path d="M38 22v5h-5M26 42v-5h5" />
      <circle cx="48" cy="48" r="10" />
      <path d="M43.5 48l3 3 6-6" />
    </svg>
  );
}

export function SearchChartIcon(props) {
  return (
    <svg viewBox="0 0 64 64" {...base} strokeWidth={2.2} {...props}>
      <circle cx="36" cy="26" r="18" />
      <circle cx="36" cy="26" r="13" />
      <path d="M23 39L8 54a3 3 0 0 0 4 4l15-15" />
      <path d="M30 32v-6M35 32v-10M40 32v-14M45 32v-8" />
    </svg>
  );
}
