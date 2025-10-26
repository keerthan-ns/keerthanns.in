import PageLayout from "./layout/PageLayout";
import HeroProfileCardV2 from "@/components/cards/HeroProfileCardV2";
import TechStackCard from "@/components/cards/TechStackCard";
import ExperienceCard from "@/components/cards/ExperienceCard";
import ProjectsCardV2 from "@/components/cards/ProjectsCardV2";
import TechStackMobileCard from "@/components/cards/TechStackMobileCard";
import BlogCard from "@/components/cards/BlogCard";
import SocialsCard from "@/components/cards/SocialsCard";
import FooterCard from "@/components/cards/FooterCard";
import CommandPalette from "@/components/ui/CommandPalette";

export default function Home() {
  return (
    <PageLayout>
          <div className="select-none grid gap-3 md:grid-cols-2 xl:grid-cols-7 xl:grid-rows-7 xl:gap-2 text-dark-text text-center">
            <HeroProfileCardV2 />
            <TechStackCard />
            <ExperienceCard />
            <ProjectsCardV2 />
            <TechStackMobileCard />
            <BlogCard />
            <SocialsCard />
            <FooterCard />
            <CommandPalette />
          </div>
        </PageLayout>
  );
}
