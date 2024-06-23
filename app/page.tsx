import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructer from "@/components/Instructer";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
     <HeroSection />
     <FeaturedSection />
     <WhyChooseUs />
     <TestimonialCards />
     <UpcomingWebinars />
     <Instructer />
     <Footer />
    </main>
  );
}
