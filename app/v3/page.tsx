import PageLayout from "../layout/PageLayoutt";
import HeroProfileCard from "@/components/v3/HeroProfileCard";
import MetricsCard from "@/components/v3/MetricsCard";
import ExperienceCard from "@/components/v3/ExperienceCard";
import TechStackCard from "@/components/v3/TechStackCard";
import ProjectsCard from "@/components/v3/ProjectsCard";
import TechStackMobileCard from "@/components/v3/TechStackMobileCard";
import SocialsCard from "@/components/v3/SocialsCard";


const V3 = () => {
  return (
    <PageLayout>
      <div className="select-none grid gap-3 md:grid-cols-2 xl:grid-cols-7 xl:grid-rows-7 xl:gap-2 text-dark-text text-center">
        <HeroProfileCard />
        <TechStackCard />
        <ExperienceCard />
        <MetricsCard />
        <ProjectsCard />
        <TechStackMobileCard />
        <SocialsCard />
      </div>
    </PageLayout>
  );
};

export default V3;