import ClientsStatsCard from "../cards/ClientsStatsCard";
import ExperienceCard from "../cards/ExperienceCard";
import ServicesSuiteCard from "../cards/ServicesSuiteCard";
import TechStackCard from "../cards/TechStackCard";
import WorksGalleryCard from "../cards/WorksGalleryCard";

export default function Column1() {
  return (
    <div className="col-span-3 lg:col-span-2 order-2 md:order-2 lg:order-none space-y-3">
      <TechStackCard />
      <ExperienceCard />
      <WorksGalleryCard />
      <ServicesSuiteCard />
    </div>
  );
}
