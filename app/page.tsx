import Hero from '@/components/home/Hero';
import UrgencySection from '@/components/home/UrgencySection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CustomTrainingPlan from '@/components/home/CustomTrainingPlan';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import PlacementSection from '@/components/home/PlacementSection';
import ProvenResults from '@/components/home/ProvenResults';
import CareerAdvisors from '@/components/home/CareerAdvisors';
import ROICalculator from '@/components/home/ROICalculator';
import CompetitiveAdvantage from '@/components/home/CompetitiveAdvantage';
import LatestInsights from '@/components/home/LatestInsights';
import UpcomingWebinars from '@/components/home/UpcomingWebinars';
import AlumniCommunity from '@/components/home/AlumniCommunity';
import SuccessStories from '@/components/home/SuccessStories';
import PricingPlans from '@/components/home/PricingPlans';
import HomeFAQ from '@/components/home/HomeFAQ';
import { fetchPageMetadata, fetchPageSchema } from '@/lib/metadata';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

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
