import { CarouselSkills } from "@/features/skills/carousel";
import Banner from "@/features/banner/banner";
import { ProjectsSection } from "@/features/projects/section";
import { CareerTimeline } from "@/features/career/timeline";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Banner />

      <CarouselSkills />

      <ProjectsSection />
      <CareerTimeline />
    </div>
  );
};

export default HomePage;
