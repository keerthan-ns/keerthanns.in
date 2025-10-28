import PageLayout from "../layout/PageLayout";
import CommandPalette from "@/components/common/CommandPalette";
import { NavbarV1 } from "@/components/common/NavbarV1";
import { ExperienceTimeline } from "@/components/experience-timeline";
import Image from "next/image";
import { education, techStacks } from "@/data";
import { Footer } from "@/components/common/Footer";
import AboutInfo from "@/components/about";

export default function AboutPage() {
  return (
    <PageLayout>
      {/* <div className="pointer-events-none absolute top-0 left-0 w-full h-44 bg-linear-to-b from-black via-[#090909] to-transparent z-0" /> */}
      <NavbarV1 />
      <div className="mx-auto container max-w-[1100px] lg:px-6 lg:py-16">
        <div className="bg-linear-to-b from-black/60 to-[#050505] border border-white/6 rounded-3xl p-3 md:p-8 shadow-2xl">
          <AboutInfo />
          <hr className="border-t-4 border-primary mt-8 mx-auto w-54" />

          <section id="experience" className="mt-8 mb-12">
            <h2 className="text-xl lg:text-3xl font-semibold text-primary mb-4">Work Experience</h2>
            <ExperienceTimeline />
          </section>
          <section id="tech-stack" className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg lg:text-2xl font-semibold text-primary">Education</h3>
              <div className="mt-4 space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="p-3 rounded-md">
                    <h4 className="font-semibold text-white">{edu.designation}</h4>
                    <p className="text-sm text-neutral-300">{edu.name}</p>
                    <p className="text-xs text-neutral-400">{edu.timeline}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:border-l border-primary md:pl-6">
              <h3 className="text-lg lg:text-2xl font-semibold text-primary">Tech Stack</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {techStacks.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white/5 rounded-md px-3 py-2">
                    <Image src={tech.src} alt={tech.name} width={22} height={22} />
                    <span className="text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
      <CommandPalette />
    </PageLayout>
  );
}
