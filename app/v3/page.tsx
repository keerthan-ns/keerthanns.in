import Advanced from "@/components/Advanced";
import PageLayout from "../layout/PageLayoutt";
import HeroProfileCard from "@/components/v3/HeroProfileCard";
import MetricsCard from "@/components/v3/MetricsCard";
import ExperienceCard from "@/components/v3/ExperienceCard";
import TechStackCard from "@/components/v3/TechStackCard";
import TestimonialsCard from "@/components/v3/TestimonialsCard";
import ProjectsCard from "@/components/v3/ProjectsCard";
import TechStackMobileCard from "@/components/v3/TechStackMobileCard";


const V3 = () => {
  return (
    <PageLayout>
      <div className="select-none grid gap-4 md:grid-cols-2 xl:grid-cols-7 xl:grid-rows-6 xl:gap-4 text-dark-text text-center">
        <HeroProfileCard />
        <TechStackCard />
        <ExperienceCard />
        <MetricsCard />
        <ProjectsCard />
        <TechStackMobileCard />
        <TestimonialsCard />
      </div>
    </PageLayout>
  );
};

export default V3;