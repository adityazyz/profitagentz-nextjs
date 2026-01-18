import type { Metadata } from 'next';
import AgentsContent from '@/components/AgentsContent';
import { AGENTS } from '@/constants';

// SEO Configuration
export const metadata: Metadata = {
  title: "AI Agent Solutions | Support, Sales, Legal & Custom AI Automation",
  description: "Deploy pre-built AI agents for customer support, sales, recruitment, and more. Cut token costs by 50-70% with intelligent optimization. SOC 2 compliant enterprise AI solutions.",
  keywords: "AI agents, customer support AI, sales automation, legal AI, recruitment automation, AI chatbots, token optimization, enterprise AI agents, custom AI solutions, AI cost reduction",
  
  // Open Graph
  openGraph: {
    type: 'website',
    url: 'https://profitagentz.com/ai-agents',
    title: "AI Agent Solutions | Support, Sales, Legal & Custom AI Automation",
    description: "Deploy pre-built AI agents for customer support, sales, recruitment, and more. Cut token costs by 50-70% with intelligent optimization.",
    images: [
      {
        url: 'https://profitagentz.com/og-image-agents.jpg',
        width: 1200,
        height: 630,
        alt: 'Profit Agentz AI Agents - Support, Sales, Legal & Custom AI Automation',
      },
    ],
    siteName: 'ProfitAgentz',
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: "AI Agent Solutions | Support, Sales, Legal & Custom AI Automation",
    description: "Deploy pre-built AI agents for customer support, sales, recruitment, and more. Cut token costs by 50-70% with intelligent optimization.",
    images: ['https://profitagentz.com/og-image-agents.jpg'],
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
    canonical: 'https://profitagentz.com/ai-agents',
  },
  authors: [{ name: 'Profit Agentz' }],
  creator: 'ProfitAgentz',
  publisher: 'ProfitAgentz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// Structured Data - Service Catalog
const serviceCatalogStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'AI Agent Solutions',
  description: 'Deploy pre-built AI agents for customer support, sales, recruitment, and more. Cut token costs by 50-70% with intelligent optimization. SOC 2 compliant enterprise AI solutions.',
  itemListElement: AGENTS.map((agent, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: agent.title,
      description: agent.description,
      provider: {
        '@type': 'Organization',
        name: 'Profit Agentz',
      },
      ...(agent.isBeta && {
        additionalProperty: {
          '@type': 'PropertyValue',
          name: 'status',
          value: 'Beta',
        },
      }),
    },
  })),
};

// Structured Data - Software Application
const softwareAppStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AI Agent Platform',
  applicationCategory: 'BusinessApplication',
  description: 'Deploy pre-built AI agents for customer support, sales, recruitment, and more. Cut token costs by 50-70% with intelligent optimization.',
  operatingSystem: 'Web-based',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '500',
  },
  featureList: [
    'Customer Support Automation',
    'Sales Automation',
    'Legal Document Processing',
    'Recruitment Automation',
    'Data Analysis',
    'Research Assistance',
    'Token Cost Optimization',
    'Custom AI Solutions',
  ],
  screenshot: [
    {
      '@type': 'ImageObject',
      url: 'https://profitagentz.com/screenshot-agents-1.jpg',
      caption: 'AI Agent Dashboard Interface',
    },
  ],
};

export default function Agents() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppStructuredData) }}
      />
      
      {/* Render the content */}
      <AgentsContent />
    </>
  );
}