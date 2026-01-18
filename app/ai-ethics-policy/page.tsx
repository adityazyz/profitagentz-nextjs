import type { Metadata } from 'next';
import AIEthicsContent from '@/components/AIEthicsContent';

// SEO Configuration
export const metadata: Metadata = {
  title: "AI Ethics Policy | Responsible Artificial Intelligence - ProfitAgentz",
  description: "ProfitAgentz's comprehensive AI Ethics Policy ensuring responsible, transparent, and human-aligned artificial intelligence development and deployment with privacy, fairness, and accountability at the core.",
  keywords: "AI ethics policy, responsible AI, ethical artificial intelligence, AI transparency, AI fairness, AI accountability, human-centered AI, AI governance, AI safety, AI bias mitigation",
  
  // Open Graph
  openGraph: {
    type: 'article',
    url: 'https://profitagentz.com/ai-ethics-policy',
    title: "AI Ethics Policy | Responsible Artificial Intelligence - ProfitAgentz",
    description: "ProfitAgentz's comprehensive AI Ethics Policy ensuring responsible, transparent, and human-aligned artificial intelligence development.",
    images: [
      {
        url: 'https://profitagentz.com/og-image-ai-ethics.jpg',
        width: 1200,
        height: 630,
        alt: 'Profit Agentz AI Ethics Policy - Responsible Artificial Intelligence',
      },
    ],
    siteName: 'ProfitAgentz',
    publishedTime: '2026-01-01',
    modifiedTime: '2026-01-01',
    authors: ['ProfitAgentz'],
    section: 'Ethics & Governance',
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: "AI Ethics Policy | Responsible Artificial Intelligence - ProfitAgentz",
    description: "ProfitAgentz's comprehensive AI Ethics Policy ensuring responsible, transparent, and human-aligned AI.",
    images: ['https://profitagentz.com/og-image-ai-ethics.jpg'],
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
    canonical: 'https://profitagentz.com/ai-ethics-policy',
  },
  authors: [{ name: 'ProfitAgentz' }],
  creator: 'ProfitAgentz',
  publisher: 'ProfitAgentz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // AI Ethics Specific
  other: {
    classification: 'Ethics Policy',
    topic: 'Artificial Intelligence Ethics',
    coverage: 'Worldwide',
    distribution: 'Global',
    audience: 'Business, Technology, Ethics',
    rating: 'Safe for All',
    'compliance': 'EU AI Act, NIST AI RMF, OECD AI Principles',
    'ai-governance-framework': 'EU AI Act, NIST AI RMF, OECD AI Principles',
    'ai-risk-level': 'Limited Risk',
  },
};

// Structured Data for AI Ethics Policy
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AI Ethics Policy",
  "description": "ProfitAgentz's comprehensive AI Ethics Policy ensuring responsible, transparent, and human-aligned artificial intelligence development and deployment with privacy, fairness, and accountability at the core.",
  "url": "https://profitagentz.com/ai-ethics-policy",
  "datePublished": "2026-01-01",
  "dateModified": "2026-01-01",
  "publisher": {
    "@type": "Organization",
    "name": "ProfitAgentz",
    "url": "https://profitagentz.com",
    "logo": "https://profitagentz.com/logo.svg",
    "ethicsPolicy": "https://profitagentz.com/ai-ethics-policy"
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
        "name": "AI Ethics Policy",
        "item": "https://profitagentz.com/ai-ethics-policy"
      }
    ]
  },
  "mainEntity": {
    "@type": "CreativeWork",
    "name": "ProfitAgentz AI Ethics Policy",
    "text": "Comprehensive ethical guidelines for responsible AI development and deployment"
  }
};

// AI Principles structured data
const aiPrinciplesData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "AI Ethics Principles",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "CreativeWork",
        "name": "Human-Centric AI",
        "description": "Assist human decisions, never replace judgment in critical areas, always support human oversight"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "CreativeWork",
        "name": "Data Privacy & Ownership",
        "description": "Client data remains client-owned, no training usage without explicit consent, access limited to project needs"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "CreativeWork",
        "name": "Transparency",
        "description": "Clear disclosure of AI usage, honest communication about capabilities & limitations"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "CreativeWork",
        "name": "Fairness & Bias Mitigation",
        "description": "Regular prompt/workflow reviews, ongoing output monitoring, bias adjustments when identified"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "CreativeWork",
        "name": "Security & Reliability",
        "description": "Secure infrastructure, controlled access, safety-first continuous optimization"
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "CreativeWork",
        "name": "Responsible Use",
        "description": "We reject illegal use, deceptive practices, and harmful automation"
      }
    }
  ]
};

// FAQ Schema for AI Ethics
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is ProfitAgentz's approach to AI ethics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We follow an 8-principle AI Ethics Policy focusing on human-centric design, data privacy, transparency, fairness, security, responsible use, continuous improvement, and accountability."
      }
    },
    {
      "@type": "Question",
      "name": "How does ProfitAgentz address AI bias?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We implement regular prompt/workflow reviews, ongoing output monitoring, and immediate bias adjustments when identified. Our systems are designed with fairness as a core principle from development through deployment."
      }
    },
    {
      "@type": "Question",
      "name": "What data privacy protections are in place?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Client data remains client-owned, we never use data for training without explicit consent, and access is strictly limited to project needs with robust security protocols."
      }
    },
    {
      "@type": "Question",
      "name": "Which AI ethics frameworks does ProfitAgentz follow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our policy aligns with EU AI Act, NIST AI Risk Management Framework, OECD AI Principles, IEEE Ethically Aligned Design, and other leading international standards."
      }
    },
    {
      "@type": "Question",
      "name": "How can I report ethical concerns about ProfitAgentz AI systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can email contact@profitagentz.com with any ethical concerns. We have an established review process and commit to addressing all concerns within 48 business hours."
      }
    }
  ]
};

// Organization Schema with Ethics Policy
const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ProfitAgentz",
  "url": "https://profitagentz.com",
  "logo": "https://profitagentz.com/logo.svg",
  "ethicsPolicy": "https://profitagentz.com/ai-ethics-policy",
  "knowsAbout": [
    "Artificial Intelligence",
    "Machine Learning Ethics",
    "AI Governance",
    "Responsible AI",
    "AI Transparency",
    "Bias Mitigation"
  ],
  "memberOf": [
    {
      "@type": "Organization",
      "name": "Responsible AI Community"
    }
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "AI Ethics Compliance"
  }
};

export default function AIEthicsPolicy() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiPrinciplesData) }}
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
      <AIEthicsContent />
    </>
  );
}