import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

// SEO Configuration
export const metadata: Metadata = {
  title: "Profit Agentz | Supercharge Profits with Enterprise AI Solutions",
  description: "Deploy enterprise-grade AI agents that deliver ROI. SOC 2 compliant automation for sales, support, and operations. Reduce costs by 50% with intelligent token optimization.",
  keywords: "AI automation, AI agents, enterprise AI, business automation, AI sales automation, SOC 2 compliant AI, token optimization, AI ROI, automated workflows, AI integration",
  
  // Open Graph
  openGraph: {
    type: 'website',
    url: 'https://profitagentz.com',
    title: "Profit Agentz | Supercharge Profits with Enterprise AI Solutions",
    description: "Deploy enterprise-grade AI agents that deliver ROI. SOC 2 compliant automation for sales, support, and operations.",
    images: [
      {
        url: 'https://profitagentz.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Profit Agentz - Enterprise AI Solutions',
      },
    ],
    siteName: 'Profit Agentz',
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: "Profit Agentz | Supercharge Profits with Enterprise AI Solutions",
    description: "Deploy enterprise-grade AI agents that deliver ROI. SOC 2 compliant automation for sales, support, and operations.",
    images: ['https://profitagentz.com/og-image.jpg'],
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
    canonical: 'https://profitagentz.com',
  },
  authors: [{ name: 'Profit Agentz' }],
  creator: 'Profit Agentz',
  publisher: 'Profit Agentz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// Structured Data for JSON-LD
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Profit Agentz',
  url: 'https://profitagentz.com',
  logo: 'https://profitagentz.com/logo.svg',
  description: 'Deploy enterprise-grade AI agents that deliver ROI. SOC 2 compliant automation for sales, support, and operations.',
  sameAs: [
    'https://www.linkedin.com/company/profit-agentz/',
  ],
};

const productStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'AI Agent Automation Platform',
  description: 'Deploy enterprise-grade AI agents that deliver ROI. SOC 2 compliant automation for sales, support, and operations.',
  brand: {
    '@type': 'Brand',
    name: 'Profit Agentz',
  },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '500',
  },
};

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }}
      />
      
      {/* Render the content */}
      <HomeContent />
    </>
  );
}