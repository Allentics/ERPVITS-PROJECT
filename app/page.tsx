import Hero from '@/components/home/Hero';
import UrgencySection from '@/components/home/UrgencySection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CustomTrainingPlan from '@/components/home/CustomTrainingPlan';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import PlacementSection from '@/components/home/PlacementSection';
import TrainingFormats from '@/components/home/TrainingFormats';
import ProvenResults from '@/components/home/ProvenResults';
import CareerAdvisors from '@/components/home/CareerAdvisors';
import ROICalculator from '@/components/home/ROICalculator';
import RiskFreeGuarantee from '@/components/home/RiskFreeGuarantee';
import CompetitiveAdvantage from '@/components/home/CompetitiveAdvantage';
import LatestInsights from '@/components/home/LatestInsights';
import UpcomingWebinars from '@/components/home/UpcomingWebinars';
import AlumniCommunity from '@/components/home/AlumniCommunity';
import SuccessStories from '@/components/home/SuccessStories';
import TrainerExpertise from '@/components/home/TrainerExpertise';
import PricingPlans from '@/components/home/PricingPlans';
import HomeFAQ from '@/components/home/HomeFAQ';

export default function Home() {
  return (
    <main>
      {/* 1. Announcement Bar is in Layout */}
      {/* 2. Sticky Header is in Layout */}

      {/* 3. Hero Section */}
      <Hero />

      {/* 4. Urgency/Scarcity */}
      <UrgencySection />

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. Custom Training Plan (Lead Magnet) */}
      <CustomTrainingPlan />

      {/* 7. Featured Courses */}
      <FeaturedCourses />

      {/* 7b & 12. Placement Section (Combined Companies, Stats, ROI) */}
      <PlacementSection />

      {/* New Section: Flexible Training Formats */}
      <TrainingFormats />

      {/* New Section: Proven Results */}
      <ProvenResults />

      {/* New Section: Career Advisors */}
      <CareerAdvisors />

      {/* 8. Success Stories */}
      <SuccessStories />

      {/* 9 & 10. Trainer Expertise + 1-on-1 */}
      <TrainerExpertise />

      {/* New Section: ROI Calculator */}
      <ROICalculator />

      {/* New Section: Risk Free Guarantee */}
      <RiskFreeGuarantee />

      {/* New Section: Competitive Advantage */}
      <CompetitiveAdvantage />

      {/* New Section: Latest Insights */}
      <LatestInsights />

      {/* New Section: Upcoming Webinars */}
      <UpcomingWebinars />

      {/* New Section: Alumni Community */}
      <AlumniCommunity />

      {/* 14. Free Demos Link (Included in Hero/Nav mostly, but we can add a section if needed. Keeping concise) */}

      {/* 15. Pricing Plans */}
      <PricingPlans />

      {/* 13. Insights/Trends (Skipping for now to prioritize core content, can add blog feed later) */}

      {/* 16. FAQ */}
      <HomeFAQ />
    </main>
  );
}
