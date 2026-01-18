import type { Metadata } from 'next';
import AboutContent from '@/components/AboutContent';

// TEAM data for structured data
const TEAM = [
  {
    name: "Aditya Dagar",
    role: "Founder & CTO",
    bio: "Drives technical vision and AI product strategy. Specializes in building autonomous systems and scalable infrastructure that deliver measurable business impact across enterprise markets.",
    image: "/images/aaditya.avif",
  },
  {
    name: "Priyanshu Singh",
    role: "COO & Head of Operations",
    bio: "Architects operational excellence and organizational growth strategies. Builds high-performance teams and scalable processes that enable rapid market expansion and execution velocity.",
    image: "/images/priyanshu.avif",
  },
  {
    name: "Sukesh Bharadwaj",
    role: "VP of Engineering",
    bio: "Leads engineering excellence and production infrastructure. Architects enterprise-grade AI systems with focus on reliability, performance, and scalability for mission-critical deployments.",
    image: "/images/sukesh.avif",
  },
] as const;

// SEO Configuration
export const metadata: Metadata = {
  title: "About Us | Enterprise AI Automation Team - ProfitAgentz",
  description: "Meet the team building autonomous AI systems that deliver measurable ROI. From Delhi to global scale, we engineer AI agents that automate profits with token optimization expertise and ISO-compliant architecture.",
  keywords: "AI automation company, enterprise AI team, AI engineering experts, autonomous systems, Delhi AI company, AI ROI experts, token optimization, ISO compliant AI, AI development team",
  
  // Open Graph
  openGraph: {
    type: 'website',
    url: 'https://profitagentz.com/about',
    title: "About Us | Enterprise AI Automation Team - ProfitAgentz",
    description: "Meet the team building autonomous AI systems that deliver measurable ROI. From Delhi to global scale, we engineer AI agents that automate profits.",
    images: [
      {
        url: 'https://profitagentz.com/og-image-about.jpg',
        width: 1200,
        height: 630,
        alt: 'Profit Agentz Team - Enterprise AI Automation Experts',
      },
    ],
    siteName: 'ProfitAgentz',
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: "About Us | Enterprise AI Automation Team - ProfitAgentz",
    description: "Meet the team building autonomous AI systems that deliver measurable ROI. From Delhi to global scale, we engineer AI agents that automate profits.",
    images: ['https://profitagentz.com/og-image-about.jpg'],
    creator: '@profitagentz',
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Additional
  alternates: {
    canonical: 'https://profitagentz.com/about',
  },
  authors: [{ name: 'ProfitAgentz' }],
  creator: 'ProfitAgentz',
  publisher: 'ProfitAgentz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Geo location for local SEO
  other: {
    'geo.region': 'IN-DL',
    'geo.placename': 'Delhi',
    'geo.position': '28.6139;77.2090',
    'ICBM': '28.6139, 77.2090',
  },
};

// Structured Data for Organization
const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Profit Agentz',
  url: 'https://profitagentz.com',
  logo: 'https://profitagentz.com/logo.svg',
  description: 'Engineering AI automation systems that deliver measurable ROI',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Delhi',
    addressRegion: 'DL',
    addressCountry: 'IN',
  },
  founder: [
    {
      '@type': 'Person',
      name: 'Aditya Dagar',
      jobTitle: 'Founder & CTO',
    },
  ],
  employee: TEAM.map(member => ({
    '@type': 'Person',
    name: member.name,
    jobTitle: member.role,
    description: member.bio,
    image: `https://profitagentz.com${member.image}`,
  })),
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Business Automation',
    'Enterprise Software',
    'Token Optimization',
    'AI Agents',
  ],
  sameAs: [
    'https://www.linkedin.com/company/profit-agentz/',
  ],
};

// Structured Data for AboutPage
const aboutPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About ProfitAgentz',
  description: 'Meet the team building autonomous AI systems that deliver measurable ROI. From Delhi to global scale, we engineer AI agents that automate profits with token optimization expertise and ISO-compliant architecture.',
  mainEntity: {
    '@type': 'Organization',
    name: 'ProfitAgentz',
    description: 'Engineering AI automation systems that deliver measurable ROI',
  },
};

// Structured Data for Team
const teamStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'ProfitAgentz Leadership Team',
  itemListElement: TEAM.map((member, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Person',
      name: member.name,
      jobTitle: member.role,
      description: member.bio,
      image: `https://profitagentz.com${member.image}`,
      worksFor: {
        '@type': 'Organization',
        name: 'ProfitAgentz',
      },
    },
  })),
};

export default function About() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamStructuredData) }}
      />
      
      {/* Render the content */}
      <AboutContent />
    </>
  );
}