import { Navbar } from "@/components/common/Navbar";
import PageLayout from "../layout/PageLayout";
import CommandPalette from "@/components/common/CommandPalette";
import { NavbarV1 } from "@/components/common/NavbarV1";
import AboutInfo from "@/components/about";
import { ExperienceTimeline } from "@/components/experience-timeline";
import Image from "next/image";
import { techStacks } from "@/data";


export default function AboutPage() {
  return (
    <PageLayout>
      {/* <Navbar /> */}
      <div className="from-background pointer-events-none fixed top-0 h-40 left-0 w-full bg-linear-to-b" />
      <NavbarV1 />
      <div className="container mx-auto mt-10 mb-10">
        <AboutInfo />
        <section id="experience" className="mt-20 mb-10">
          <h1 className="lg:mt-5 mt-0 text-primary lg:text-3xl text-xl font-semibold">
            Work Experience
          </h1>
          <ExperienceTimeline />
        </section>
        <section id="tech-stack" className="mt-20 mb-10">
          <h1 className="lg:mt-5 mt-0 text-primary lg:text-3xl text-xl font-semibold">
            Tech Stack
          </h1>
          <div className="mt-3 mx-auto max-w-2xl border rounded-lg select-none flex flex-wrap justify-center items-center gap-2 p-3">
            {techStacks.map((tech, idx) => (
              <article
                key={idx}
                className="flex justify-start items-center gap-1 rounded-lg shadow-md py-1 pl-1 pr-4 hover:bg-slate-400/20 transition-all duration-300"
              >
                <Image width={10} height={10} src={tech.src} alt={tech.name} className="size-10" />
                <h3 className="font-medium text-sm">{tech.name}</h3>
              </article>
            ))}
          </div>
        </section>
      </div>
      <CommandPalette />
    </PageLayout>
  );
}
