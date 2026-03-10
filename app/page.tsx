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
  return {
    ...meta,
    title: meta.title || 'ERPVITS - Best SAP Training Institute',
    description: meta.description || 'Master SAP with ERPVITS. Expert-led training, hands-on projects, and certification guidance.',
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
