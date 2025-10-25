import ClientsStatsCard from "../cards/ClientsStatsCard";
import CTAContactCard from "../cards/CTAContactCard";
import OnlinePresenceCard from "../cards/OnlinePresenceCard";
import TestimonialsCard from "../cards/TestimonialsCard";
import WorkflowCard from "../cards/WorkflowCard";

export default function Column3() {
  return (
    <div className="col-span-3 lg:col-span-2 order-3 md:order-3 lg:order-none space-y-6">
      <TestimonialsCard />

      <div className="
        flex flex-col gap-6
        md:grid md:grid-cols-2 md:gap-6
        lg:flex lg:flex-col
      ">
        <WorkflowCard />
        <OnlinePresenceCard />
      </div>

      <CTAContactCard />
    </div>
  );
}
