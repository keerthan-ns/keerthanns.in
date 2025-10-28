import { Timeline } from "@/components/ui/timeline";
import { experiences } from "@/data";

export function Experience() {
  return (
      <Timeline data={experiences} />
  );
}
