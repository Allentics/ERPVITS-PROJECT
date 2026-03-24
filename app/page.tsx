import Hero from '@/components/home/Hero';
import UrgencySection from '@/components/home/UrgencySection';
import dynamic from 'next/dynamic';
import { fetchPageMetadata, fetchPageSchema } from '@/lib/metadata';
import { Metadata } from 'next';

// Lazy load below-the-fold sections to reduce initial bundle
const WhyChooseUs = dynamic(() => import('@/components/home/WhyChooseUs'));
const CustomTrainingPlan = dynamic(() => import('@/components/home/CustomTrainingPlan'));
const FeaturedCourses = dynamic(() => import('@/components/home/FeaturedCourses'));
const PlacementSection = dynamic(() => import('@/components/home/PlacementSection'));
const ProvenResults = dynamic(() => import('@/components/home/ProvenResults'));
const CareerAdvisors = dynamic(() => import('@/components/home/CareerAdvisors'));
const ROICalculator = dynamic(() => import('@/components/home/ROICalculator'));
const CompetitiveAdvantage = dynamic(() => import('@/components/home/CompetitiveAdvantage'));
const LatestInsights = dynamic(() => import('@/components/home/LatestInsights'));
const UpcomingWebinars = dynamic(() => import('@/components/home/UpcomingWebinars'));
const AlumniCommunity = dynamic(() => import('@/components/home/AlumniCommunity'));
const SuccessStories = dynamic(() => import('@/components/home/SuccessStories'));
const PricingPlans = dynamic(() => import('@/components/home/PricingPlans'));
const HomeFAQ = dynamic(() => import('@/components/home/HomeFAQ'));

// ISR: Revalidate every hour instead of re-rendering on every request
export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const meta = await fetchPageMetadata('/');
  const title = meta.title || 'ERPVITS - SAP Training Institute';
  const description = meta.description || 'Empower your career with expert SAP online training.';

  return {
    ...meta,
    title,
    description,
    openGraph: {
      title,
      description,
      url: 'https://www.erpvits.com',
      siteName: 'ERPVITS',
      images: [
        {
          url: 'https://www.erpvits.com/images/logo.webp',
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.erpvits.com/images/logo.webp'],
    },
    alternates: {
      canonical: 'https://www.erpvits.com/',
    },
  };
}

export default async function Home() {
  const schemaMarkup = await fetchPageSchema('/');

  return (
    <main>
      {schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaMarkup }}
        />
      )}
      <Hero />
      <UrgencySection />
      <WhyChooseUs />
      <CustomTrainingPlan />
      <FeaturedCourses />
      <PlacementSection />
      <ProvenResults />
      <CareerAdvisors />
      <SuccessStories />
      <ROICalculator />
      <CompetitiveAdvantage />
      <LatestInsights />
      <UpcomingWebinars />
      <AlumniCommunity />
      <PricingPlans />
      <HomeFAQ />
    </main>
  );
}
