import { techStacks } from "@/data";
import Image from "next/image";

export function TechStack() {
  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {techStacks.map((tech, idx) => (
        <div key={idx} className="flex items-center gap-2 bg-white/5 rounded-md px-3 py-2">
          <Image src={tech.src} alt={tech.name} width={22} height={22} />
          <span className="text-sm">{tech.name}</span>
        </div>
      ))}
    </div>
  );
}
