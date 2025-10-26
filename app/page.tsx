import PageLayout from "./layout/PageLayout";
import HeroProfileCard from "@/components/cards/HeroProfileCard";
import TechStackCard from "@/components/cards/TechStackCard";
import ExperienceCard from "@/components/cards/ExperienceCard";
import ProjectsCard from "@/components/cards/ProjectsCard";
import TechStackMobileCard from "@/components/cards/TechStackMobileCard";
import BlogCard from "@/components/cards/BlogCard";
import SocialsCard from "@/components/cards/SocialsCard";
import FooterCard from "@/components/cards/FooterCard";
import CommandPalette from "@/components/ui/CommandPalette";

export default function Home() {
  return (
    <PageLayout>
          <div className="select-none grid gap-3 md:grid-cols-2 xl:grid-cols-7 xl:grid-rows-7 xl:gap-2 text-dark-text text-center">
            <HeroProfileCard />
            <TechStackCard />
            <ExperienceCard />
            <ProjectsCard />
            <TechStackMobileCard />
            <BlogCard />
            <SocialsCard />
            <FooterCard />
            <CommandPalette />
          </div>
        </PageLayout>
  );
}
