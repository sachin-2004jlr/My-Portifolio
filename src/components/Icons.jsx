// Lightweight inline SVG icons — no icon-font dependency, fully themeable.
const base = {
  width: '1em',
  height: '1em',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

export function GitHubIcon(props) {
  return (
    <svg {...base} strokeWidth={0} fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.22-3.37-1.22-.46-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.35 9.35 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

export function LinkedInIcon(props) {
  return (
    <svg {...base} strokeWidth={0} fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34V10.4H5.68v7.94h2.66ZM7.01 9.2a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08Zm11.33 9.14v-4.36c0-2.33-1.24-3.42-2.9-3.42-1.34 0-1.94.74-2.27 1.26v-1.08h-2.66c.03.75 0 7.94 0 7.94h2.66v-4.43c0-.24.02-.48.09-.65.19-.48.62-.97 1.35-.97.96 0 1.34.73 1.34 1.79v4.26h2.66Z" />
    </svg>
  )
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function ArrowUpRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

export function ArrowUp(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
    </svg>
  )
}

export function ArrowDownRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 7h10v10" />
      <path d="M7 7l10 10" />
    </svg>
  )
}

export function CodeIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m9 8-4 4 4 4" />
      <path d="m15 8 4 4-4 4" />
    </svg>
  )
}

export function BrainIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9.5 4.5a2.5 2.5 0 0 0-2.45 3A2.5 2.5 0 0 0 5 10a2.5 2.5 0 0 0 1.2 2.14A2.5 2.5 0 0 0 7 17a2.5 2.5 0 0 0 2.5 2V4.5Z" />
      <path d="M14.5 4.5a2.5 2.5 0 0 1 2.45 3A2.5 2.5 0 0 1 19 10a2.5 2.5 0 0 1-1.2 2.14A2.5 2.5 0 0 1 17 17a2.5 2.5 0 0 1-2.5 2V4.5Z" />
    </svg>
  )
}

export function StackIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  )
}

export function ChartIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20V4" />
      <path d="M4 20h16" />
      <path d="M8 16v-4" />
      <path d="M13 16V8" />
      <path d="M18 16v-6" />
    </svg>
  )
}

export function SparkIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </svg>
  )
}

export function CopyIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="9" y="9" width="12" height="12" rx="2.5" />
      <path d="M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12 5 5L20 7" />
    </svg>
  )
}

export function DownloadIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  )
}

export function XIcon(props) {
  return (
    <svg {...base} strokeWidth={0} fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  )
}

export function KaggleIcon(props) {
  return (
    <svg {...base} strokeWidth={0} fill="currentColor" {...props}>
      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.234.118-.353.354-.353h2.431c.234 0 .351.119.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.336Z" />
    </svg>
  )
}

export function HuggingFaceIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="9" cy="10.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10.5" r="1.1" fill="currentColor" stroke="none" />
      <path d="M8.5 14.5a4 4 0 0 0 7 0" />
    </svg>
  )
}

export function GlobeIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" />
    </svg>
  )
}

// Central map for social links — a single source used by About, Contact and
// Footer (was duplicated in each). Add a profile in content.js with a matching
// `icon` key and it renders everywhere.
export const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: MailIcon,
  x: XIcon,
  twitter: XIcon,
  kaggle: KaggleIcon,
  huggingface: HuggingFaceIcon,
  website: GlobeIcon,
}

const iconMap = {
  code: CodeIcon,
  brain: BrainIcon,
  stack: StackIcon,
  chart: ChartIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: MailIcon,
}

export function Icon({ name, ...props }) {
  const Cmp = iconMap[name] || SparkIcon
  return <Cmp {...props} />
}
