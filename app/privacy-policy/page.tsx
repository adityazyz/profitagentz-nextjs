import type { Metadata } from 'next';
import PrivacyPolicyContent from '@/components/PrivacyPolicyContent';

// SEO Configuration
export const metadata: Metadata = {
  title: "Privacy Policy | Data Protection & Security - ProfitAgentz AI",
  description: "ProfitAgentz Privacy Policy details our commitment to protecting your data in AI automation services. Learn about data collection, usage, security measures, GDPR compliance, and your privacy rights.",
  keywords: "privacy policy, AI data protection, GDPR compliance, data privacy, personal information, data security, privacy rights, AI automation privacy, data processing agreement, privacy regulations",
  
  // Open Graph
  openGraph: {
    type: 'article',
    url: 'https://profitagentz.com/privacy-policy',
    title: "Privacy Policy | Data Protection & Security - ProfitAgentz AI",
    description: "ProfitAgentz Privacy Policy details our commitment to protecting your data in AI automation services.",
    images: [
      {
        url: 'https://profitagentz.com/og-image-privacy-policy.jpg',
        width: 1200,
        height: 630,
        alt: 'Profit Agentz Privacy Policy - Data Protection & Security',
      },
    ],
    siteName: 'ProfitAgentz',
    publishedTime: '2026-01-01',
    modifiedTime: '2026-01-01',
    authors: ['ProfitAgentz'],
    section: 'Legal',
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: "Privacy Policy | Data Protection & Security - ProfitAgentz AI",
    description: "ProfitAgentz Privacy Policy details our commitment to protecting your data in AI automation services.",
    images: ['https://profitagentz.com/og-image-privacy-policy.jpg'],
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
    canonical: 'https://profitagentz.com/privacy-policy',
  },
  authors: [{ name: 'Profit Agentz' }],
  creator: 'ProfitAgentz',
  publisher: 'ProfitAgentz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Privacy Specific
  other: {
    classification: 'Legal Document',
    topic: 'Privacy Policy',
    coverage: 'Worldwide',
    distribution: 'Global',
    audience: 'All',
    rating: 'Safe for All',
    'revisit-after': '7 days',
    'compliance': 'GDPR, CCPA, PIPEDA, ISO 27001, SOC 2',
    'gdpr-compliance': 'Full GDPR Compliance',
    'data-protection-officer': 'Designated DPO available',
    'jurisdiction': 'Delhi, India',
  },
};

// Structured Data for Privacy Policy
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy",
  "description": "ProfitAgentz Privacy Policy details our commitment to protecting your data in AI automation services. Learn about data collection, usage, security measures, GDPR compliance, and your privacy rights.",
  "url": "https://profitagentz.com/privacy-policy",
  "datePublished": "2026-01-01",
  "dateModified": "2026-01-01",
  "publisher": {
    "@type": "Organization",
    "name": "ProfitAgentz",
    "url": "https://profitagentz.com",
    "logo": "https://profitagentz.com/logo.svg",
    "privacyPolicy": "https://profitagentz.com/privacy-policy"
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
        "name": "Privacy Policy",
        "item": "https://profitagentz.com/privacy-policy"
      }
    ]
  },
  "mainEntity": {
    "@type": "CreativeWork",
    "name": "ProfitAgentz Privacy Policy",
    "text": "Comprehensive data protection and privacy practices for AI automation services"
  }
};

// Privacy Principles structured data
const privacyPrinciplesData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Privacy Protection Principles",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "CreativeWork",
        "name": "Data Minimization",
        "description": "Collect only necessary information for service delivery"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "CreativeWork",
        "name": "Purpose Limitation",
        "description": "Use data only for specified, legitimate purposes"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "CreativeWork",
        "name": "Storage Limitation",
        "description": "Retain data only as long as necessary"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "CreativeWork",
        "name": "Security & Integrity",
        "description": "Protect data with industry-standard safeguards"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "CreativeWork",
        "name": "Transparency & Control",
        "description": "Clear communication and user control over data"
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "CreativeWork",
        "name": "Accountability",
        "description": "Responsible data handling with clear ownership"
      }
    }
  ]
};

// FAQ Schema for Privacy Policy
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What personal information does ProfitAgentz collect?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We collect name, email, company, phone, and messages you provide, plus business requirements, usage data, and automatically collected information like IP address and browser details."
      }
    },
    {
      "@type": "Question",
      "name": "How does ProfitAgentz use AI with my data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Client data is never used to train shared AI models without explicit written consent. Custom agents use only authorized data for specific project needs with strict access controls."
      }
    },
    {
      "@type": "Question",
      "name": "Is my data secure with ProfitAgentz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we implement industry-standard security measures including encryption, access controls, secure infrastructure, and limited internal access. We are GDPR compliant and follow ISO 27001 standards."
      }
    },
    {
      "@type": "Question",
      "name": "What are my privacy rights?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You have rights to access, correct, delete, withdraw consent, and object to data processing. Contact us at contact@profitagentz.com to exercise these rights."
      }
    },
    {
      "@type": "Question",
      "name": "Does ProfitAgentz share my data with third parties?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We only share data with essential service providers (hosting, analytics, communication platforms) under strict data protection agreements. We never sell or rent personal data."
      }
    }
  ]
};

// Organization Schema with Privacy Policy
const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ProfitAgentz",
  "url": "https://profitagentz.com",
  "logo": "https://profitagentz.com/logo.svg",
  "privacyPolicy": "https://profitagentz.com/privacy-policy",
  "knowsAbout": [
    "Data Protection",
    "GDPR Compliance",
    "AI Data Privacy",
    "Information Security",
    "Privacy Regulations"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Delhi",
    "addressRegion": "Delhi",
    "addressCountry": "IN",
    "postalCode": "110043"
  },
  "foundingDate": "2024",
  "email": "contact@profitagentz.com",
  "telephone": "+91 844 833 5264",
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Data Protection Compliance"
  }
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyPrinciplesData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      
      {/* Render the content */}
      <PrivacyPolicyContent />
    </>
  );
}