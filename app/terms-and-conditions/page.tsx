import type { Metadata } from 'next';
import TermsOfServiceContent from '@/components/TermsOfServiceContent';

// SEO Configuration
export const metadata: Metadata = {
  title: "Terms of Service | AI Automation Platform Agreement - ProfitAgentz",
  description: "Terms of Service for ProfitAgentz AI automation platform. Legal agreement governing use of pre-built AI agents, custom AI development, and integration services with liability limitations and data usage policies.",
  keywords: "terms of service, AI platform terms, legal agreement, AI service terms, terms and conditions, AI automation terms, service agreement, liability disclaimer, AI usage policy",
  
  // Open Graph
  openGraph: {
    type: 'article',
    url: 'https://profitagentz.com/terms-and-conditions',
    title: "Terms of Service | AI Automation Platform Agreement - ProfitAgentz",
    description: "Terms of Service for ProfitAgentz AI automation platform. Legal agreement governing use of AI services.",
    images: [
      {
        url: 'https://profitagentz.com/og-image-terms-and-conditions.jpg',
        width: 1200,
        height: 630,
        alt: 'Profit Agentz Terms of Service - AI Automation Platform Agreement',
      },
    ],
    siteName: 'ProfitAgentz',
    publishedTime: '2026-01-13',
    modifiedTime: '2026-01-13',
    authors: ['ProfitAgentz'],
    section: 'Legal',
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: "Terms of Service | AI Automation Platform Agreement - ProfitAgentz",
    description: "Terms of Service for ProfitAgentz AI automation platform. Legal agreement governing use of AI services.",
    images: ['https://profitagentz.com/og-image-terms-and-conditions.jpg'],
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
    canonical: 'https://profitagentz.com/terms-and-conditions',
  },
  authors: [{ name: 'Profit Agentz' }],
  creator: 'ProfitAgentz',
  publisher: 'ProfitAgentz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Legal Specific
  other: {
    classification: 'Legal Agreement',
    topic: 'Terms of Service',
    coverage: 'Worldwide',
    distribution: 'Global',
    audience: 'Business, Enterprise',
    rating: 'Safe for All',
    'revisit-after': '7 days',
    'jurisdiction': 'Delhi, India',
    'governing-law': 'Laws of India',
    'dispute-resolution': 'Delhi, India courts',
  },
};

// Structured Data for Terms of Service
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Terms of Service",
  "description": "Terms of Service for ProfitAgentz AI automation platform. Legal agreement governing use of pre-built AI agents, custom AI development, and integration services with liability limitations and data usage policies.",
  "url": "https://profitagentz.com/terms-and-conditions",
  "datePublished": "2026-01-13",
  "dateModified": "2026-01-13",
  "publisher": {
    "@type": "Organization",
    "name": "ProfitAgentz",
    "url": "https://profitagentz.com",
    "logo": "https://profitagentz.com/logo.svg",
    "termsOfService": "https://profitagentz.com/terms-and-conditions"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://profitagentz.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Terms of Service",
        "item": "https://profitagentz.com/terms-and-conditions"
      }
    ]
  },
  "mainEntity": {
    "@type": "CreativeWork",
    "name": "ProfitAgentz Terms of Service",
    "text": "Legal agreement governing use of AI automation services including pre-built agents, custom development, and integration services"
  }
};

// Terms Sections structured data
const termsSectionsData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Terms of Service Sections",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "CreativeWork",
        "name": "Our Services",
        "description": "Pre-built AI agents, custom AI development, AI integration services, consulting and professional services"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "CreativeWork",
        "name": "No Guarantee of Results",
        "description": "All services provided on best-efforts basis with no warranties regarding business results or AI output accuracy"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "CreativeWork",
        "name": "Your Responsibilities",
        "description": "Provide lawful data, use AI outputs responsibly, implement human oversight, avoid critical decision reliance"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "CreativeWork",
        "name": "Intellectual Property",
        "description": "IP ownership terms for pre-built agents, custom deliverables, background IP, and data usage rights"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "CreativeWork",
        "name": "Data Usage & AI Training",
        "description": "Terms for data usage, AI model training, anonymization practices, and opt-out procedures"
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "CreativeWork",
        "name": "Acceptable Use & Prohibitions",
        "description": "Prohibited uses including illegal activities, IP infringement, harmful content, and competitive misuse"
      }
    }
  ]
};

// FAQ Schema for Terms of Service
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services are covered by these Terms of Service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "These Terms cover all ProfitAgentz services including pre-built AI agents, custom AI agent development, AI integration services into existing systems, and related consulting and professional services."
      }
    },
    {
      "@type": "Question",
      "name": "Does ProfitAgentz guarantee specific business results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, all services are provided on a best-efforts basis. We provide NO WARRANTY regarding business results, revenue, profit, cost savings, or AI output accuracy. AI technology is probabilistic by nature."
      }
    },
    {
      "@type": "Question",
      "name": "Who owns the intellectual property for custom AI solutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Custom deliverables created for you are your property, subject to our background IP license. Our pre-built agents, core platform, and methodologies remain our exclusive property unless otherwise agreed in writing."
      }
    },
    {
      "@type": "Question",
      "name": "How does ProfitAgentz use my data for AI training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We may use anonymized, aggregated usage data and outputs to train and improve our AI models. You can opt-out via written notice, though some service features may be limited. Client data is never used to train shared models without explicit written consent."
      }
    },
    {
      "@type": "Question",
      "name": "What are the liability limitations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our total aggregate liability is limited to fees paid in the 12 months preceding a claim. We are not liable for indirect, consequential, incidental, special, punitive or exemplary damages to the maximum extent permitted by law."
      }
    }
  ]
};

// Organization Schema with Terms
const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ProfitAgentz",
  "url": "https://profitagentz.com",
  "logo": "https://profitagentz.com/logo.svg",
  "termsOfService": "https://profitagentz.com/terms-and-conditions",
  "knowsAbout": [
    "AI Service Agreements",
    "Technology Terms",
    "Intellectual Property Rights",
    "AI Liability",
    "Service Level Agreements"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Delhi",
    "addressRegion": "Delhi",
    "addressCountry": "IN",
    "postalCode": "110043"
  },
  "legalName": "ProfitAgentz",
  "email": "contact@profitagentz.com",
  "telephone": "+91 844 833 5264"
};

// Service Schema
const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI Automation Services",
  "provider": {
    "@type": "Organization",
    "name": "ProfitAgentz"
  },
  "termsOfService": "https://profitagentz.com/terms-and-conditions",
  "areaServed": {
    "@type": "Country",
    "name": "Global"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Service Offerings",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pre-built AI Agents"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom AI Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Integration Services"
        }
      }
    ]
  }
};

export default function TermsOfService() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSectionsData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
      />
      
      {/* Render the content */}
      <TermsOfServiceContent />
    </>
  );
}