import type { Metadata } from 'next';
import CookiePolicyContent from '@/components/CookiePolicyContent';

// SEO Configuration
export const metadata: Metadata = {
  title: "Cookie Policy | ProfitAgentz - AI Automation Platform",
  description: "Learn how ProfitAgentz uses cookies and similar technologies to enhance your experience on our AI automation platform. Understand cookie types, management options, and your privacy controls.",
  keywords: "cookie policy, AI platform cookies, privacy policy, data protection, GDPR compliance, cookie management, web analytics cookies, essential cookies, marketing cookies",
  
  // Open Graph
  openGraph: {
    type: 'article',
    url: 'https://profitagentz.com/cookie-policy',
    title: "Cookie Policy | ProfitAgentz - AI Automation Platform",
    description: "Learn how ProfitAgentz uses cookies and similar technologies to enhance your experience on our AI automation platform.",
    images: [
      {
        url: 'https://profitagentz.com/og-image-cookie-policy.jpg',
        width: 1200,
        height: 630,
        alt: 'Profit Agentz Cookie Policy - AI Automation Platform',
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
    title: "Cookie Policy | ProfitAgentz - AI Automation Platform",
    description: "Learn how ProfitAgentz uses cookies and similar technologies to enhance your experience on our AI automation platform.",
    images: ['https://profitagentz.com/og-image-cookie-policy.jpg'],
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
    canonical: 'https://profitagentz.com/cookie-policy',
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
    classification: 'Legal Document',
    topic: 'Cookie Policy',
    coverage: 'Worldwide',
    distribution: 'Global',
    'revisit-after': '7 days',
    rating: 'Safe for All',
  },
};

// Structured Data for Cookie Policy
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Cookie Policy",
  "description": "Learn how ProfitAgentz uses cookies and similar technologies to enhance your experience on our AI automation platform. Understand cookie types, management options, and your privacy controls.",
  "url": "https://profitagentz.com/cookie-policy",
  "datePublished": "2026-01-01",
  "dateModified": "2026-01-01",
  "publisher": {
    "@type": "Organization",
    "name": "ProfitAgentz",
    "url": "https://profitagentz.com",
    "logo": "https://profitagentz.com/logo.svg"
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
        "name": "Cookie Policy",
        "item": "https://profitagentz.com/cookie-policy"
      }
    ]
  }
};

// Cookie Types structured data
const cookieTypesData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Types of Cookies Used",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "CreativeWork",
        "name": "Essential Cookies",
        "description": "Required for basic site functions & security. Cannot be disabled without breaking the site."
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "CreativeWork",
        "name": "Analytics Cookies",
        "description": "Help us understand usage, improve content and navigation."
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "CreativeWork",
        "name": "Marketing Cookies",
        "description": "Measure campaign performance. Only used with your explicit consent."
      }
    }
  ]
};

// FAQ Schema for Cookie Policy
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of cookies does ProfitAgentz use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use three main types of cookies: 1) Essential cookies required for site functionality and security, 2) Analytics cookies to understand usage and improve content, and 3) Marketing cookies for campaign performance measurement (used only with explicit consent)."
      }
    },
    {
      "@type": "Question",
      "name": "How can I manage cookies on ProfitAgentz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can manage cookies through your browser settings or our consent banner/tools. Note that disabling essential cookies may limit some site features."
      }
    },
    {
      "@type": "Question",
      "name": "Does ProfitAgentz use third-party cookies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some third-party services (analytics, embeds) may set cookies. These follow their own privacy and cookie policies."
      }
    },
    {
      "@type": "Question",
      "name": "When was this Cookie Policy last updated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This Cookie Policy was last updated in January 2026. We recommend checking this page periodically for updates."
      }
    },
    {
      "@type": "Question",
      "name": "Which legal frameworks does this Cookie Policy comply with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Cookie Policy complies with GDPR (EU), CCPA (California), PIPEDA (Canada), and other major international data protection regulations."
      }
    }
  ]
};

// Organization Schema with Cookie Policy
const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ProfitAgentz",
  "url": "https://profitagentz.com",
  "logo": "https://profitagentz.com/logo.svg",
  "knowsAbout": [
    "Artificial Intelligence",
    "AI Automation",
    "Data Privacy",
    "Cookie Compliance",
    "GDPR",
    "CCPA"
  ],
  "memberOf": [
    {
      "@type": "Organization",
      "name": "Data Privacy Alliance"
    }
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Data Protection Compliance"
  }
};

export default function CookiePolicy() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cookieTypesData) }}
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
      <CookiePolicyContent />
    </>
  );
}