import { projects, socials } from "@/data";
import WideProjectCard from "./project-info-card";
import { FaAnglesRight } from "react-icons/fa6";

export function Projects() {
  return (
    <div className="flex gap-5 flex-col items-center">
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
        <a href={`${socials.github}?tab=repositories`} target="_blank"
            className={`w-fit flex items-center gap-2 bg-slate-400/20 font-medium text-xs text-white rounded-md p-2 px-3 shadow-lg transition-opacity duration-500 hover:bg-primary/90 group`}
        >
            View More Projects
            <FaAnglesRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
  );
}
