import { CarouselSkills } from "./components/carousel-skills";
import { Banner } from "./components/banner";
import { ProjectsSection } from "./components/projects-section";
import { CareerTimeline } from "./components/career-timeline";

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
