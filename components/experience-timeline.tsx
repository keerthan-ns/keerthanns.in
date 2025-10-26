import { Timeline } from "@/components/ui/timeline";
import { experiences } from "@/data";

export function ExperienceTimeline() {
  return (
    // <div className="relative w-full overflow-clip">
      <Timeline data={experiences} />
    // </div>
  );
}
