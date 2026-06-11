import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { DeveloperSection } from "@/components/DeveloperSection";
import { DirectorySyncSection } from "@/components/DirectorySyncSection";
import { AdminPortalSection } from "@/components/AdminPortalSection";
import { WhyWorkOSSection } from "@/components/WhyWorkOSSection";
import { CustomerSection } from "@/components/CustomerSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col">
        <HeroSection />
        <FeaturesSection />
        <DeveloperSection />
        <DirectorySyncSection />
        <AdminPortalSection />
        <WhyWorkOSSection />
        <CustomerSection />
      </main>
      <Footer />
    </>
  );
}
