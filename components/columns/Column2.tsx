import ClientsStatsCard from "../cards/ClientsStatsCard";
import HeroProfileCard from "../cards/HeroProfileCard";
import MetricsCard from "../cards/MetricsCard";

export default function Column2() {
  return (
    <div className="col-span-3 order-1 md:order-1 lg:order-none space-y-3">
      <MetricsCard />
      <HeroProfileCard />
      <ClientsStatsCard />
    </div>
  );
}
