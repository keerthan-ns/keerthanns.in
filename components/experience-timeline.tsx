import { Timeline } from "@/components/ui/timeline";
import { experiences } from "@/data";

export function ExperienceTimeline() {
  return (
      <Timeline data={experiences} />
  );
}
