import type { Metadata } from 'next';
import ContactContent from '@/components/ContactContent';
import { FAQS } from '@/constants';

// SEO Configuration
export const metadata: Metadata = {
  title: "Contact Us | Get Free AI Business Audit - ProfitAgentz",
  description: "Ready to automate profits? Get a free AI business audit, consultation with our experts, and discover how our enterprise AI automation can transform your business with measurable ROI.",
  keywords: "contact AI automation, free business audit, AI consultation, enterprise AI contact, ROI automation experts, Delhi AI company, business automation inquiry, AI agents consultation",
  
  // Open Graph
  openGraph: {
    type: 'website',
    url: 'https://profitagentz.com/contact',
    title: "Contact Us | Get Free AI Business Audit - ProfitAgentz",
    description: "Ready to automate profits? Get a free AI business audit, consultation with our experts.",
    images: [
      {
        url: 'https://profitagentz.com/og-image-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Profit Agentz Contact - Get Free AI Business Audit',
      },
    ],
    siteName: 'ProfitAgentz',
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: "Contact Us | Get Free AI Business Audit - ProfitAgentz",
    description: "Ready to automate profits? Get a free AI business audit, consultation with our experts.",
    images: ['https://profitagentz.com/og-image-contact.jpg'],
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
    canonical: 'https://profitagentz.com/contact',
  },
  authors: [{ name: 'Profit Agentz' }],
  creator: 'ProfitAgentz',
  publisher: 'ProfitAgentz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Location SEO
  other: {
    'geo.region': 'IN-DL',
    'geo.placename': 'Delhi',
    'geo.position': '28.6139;77.2090',
    'ICBM': '28.6139, 77.2090',
  },
};

// Structured Data - ContactPage
const contactPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact ProfitAgentz",
  "description": "Ready to automate profits? Get a free AI business audit, consultation with our experts, and discover how our enterprise AI automation can transform your business with measurable ROI.",
  "url": "https://profitagentz.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "ProfitAgentz",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+91 844 833 5264",
      "email": "contact@profitagentz.com",
      "areaServed": ["IN", "US", "CA", "GB", "AU", "DE", "FR", "SG"],
      "availableLanguage": ["English"],
      "contactOption": "TollFree"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sainik Enclave, Najafgarh",
      "addressLocality": "New Delhi",
      "postalCode": "110043",
      "addressRegion": "Delhi",
      "addressCountry": "IN"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Free AI Business Audit",
        "description": "Comprehensive AI automation analysis and ROI projection",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "AI Automation Consultation",
        "description": "1-on-1 consultation with AI automation experts",
        "availability": "https://schema.org/InStock"
      }
    ]
  }
};

// Structured Data - FAQPage
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

// Structured Data - WebPage
const webPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Contact ProfitAgentz",
  "description": "Ready to automate profits? Get a free AI business audit, consultation with our experts.",
  "url": "https://profitagentz.com/contact",
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
        "name": "Contact",
        "item": "https://profitagentz.com/contact"
      }
    ]
  }
};

// Structured Data - Service
const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI Business Automation Audit",
  "provider": {
    "@type": "Organization",
    "name": "ProfitAgentz"
  },
  "description": "Free AI-powered analysis of business processes with ROI projections and automation recommendations",
  "areaServed": {
    "@type": "Country",
    "name": "Global"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Automation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Business Process Audit"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom AI Agent Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enterprise AI Integration"
        }
      }
    ]
  }
};

export default function Contact() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
      />
      
      {/* Render the content */}
      <ContactContent />
    </>
  );
}