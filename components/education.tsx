import { education } from "@/data";

export function Education() {
  return (
    <div className="mt-4 space-y-4">
      {education.map((edu, idx) => (
        <div key={idx} className="p-3 rounded-md">
          <h4 className="font-semibold text-white">{edu.designation}</h4>
          <p className="text-sm text-neutral-300">{edu.name}</p>
          <p className="text-xs text-neutral-400">{edu.timeline}</p>
        </div>
      ))}
    </div>
  );
}
