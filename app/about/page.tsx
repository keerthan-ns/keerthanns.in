import PageLayout from "../layout/PageLayout";
import CommandPalette from "@/components/common/CommandPalette";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/common/Footer";
import AboutInfo from "@/components/about";
import { Education } from "@/components/education";
import { TechStack } from "@/components/tech-stack";

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="mx-auto container max-w-[1100px] lg:px-6 lg:py-16">
        <div className="bg-linear-to-b from-black/60 to-[#050505] border border-white/6 rounded-3xl p-3 md:p-8 shadow-2xl">
          <h2 className="text-xl lg:text-3xl font-semibold text-primary mb-4">About Me</h2>
          <AboutInfo />
          <hr className="border-t-4 border-primary mt-8 mx-auto w-54" />
          <section id="experience" className="mt-8 mb-12">
            <h2 className="text-xl lg:text-3xl font-semibold text-primary mb-4">Work Experience</h2>
            <Experience />
          </section>
          <section id="tech-stack" className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg lg:text-2xl font-semibold text-primary">Education</h3>
              <Education />
            </div>
            <div className="md:border-l border-primary md:pl-6">
              <h3 className="text-lg lg:text-2xl font-semibold text-primary">Tech Stack</h3>
              <TechStack />
            </div>
          </section>
        </div>
      </div>
      <Footer />
      <CommandPalette />
    </PageLayout>
  );
}
