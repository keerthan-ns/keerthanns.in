import { projects } from "@/data";
import WideProjectCard from "./project-info-card";

export function Projects() {
  return (
    <div className="flex gap-5 flex-col">
        {projects.map((project, i) => (
          <div key={i}>
            <WideProjectCard
              i={i}
              title={project.title}
              desc={project.description}
              image={project.img}
              tags={project.tags}
              link={project.link}
              source={project.github}
            />
          </div>
        ))}
      </div>
  );
}
