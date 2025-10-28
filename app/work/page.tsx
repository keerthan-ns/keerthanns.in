import PageLayout from "../layout/PageLayout";
import CommandPalette from "@/components/common/CommandPalette";
import { Footer } from "@/components/common/Footer";
import Tabs from "@/components/ui/tabs";
import WorkSection from "@/components/work";
import { Suspense } from "react";
import { LoaderOne } from "@/components/ui/loader";
import BreadNavigation from "@/components/common/BreadNavigation";

export default function WorkPage() {
  return (
    <PageLayout>
      <div className="mx-auto container max-w-[1100px] lg:px-6 lg:py-16">
        <BreadNavigation />
        <div className="bg-linear-to-b from-black/60 to-[#050505] border border-white/6 rounded-3xl p-3 md:p-8 shadow-2xl">
          <h3 className="text-xl lg:text-3xl font-semibold text-primary mb-4">My Work</h3>
          <div className="flex gap-3 items-center w-full justify-between">
            <Suspense fallback={null}>
              <Tabs />
            </Suspense>
          </div>
          <Suspense fallback={<div className="w-full h-screen inline-flex items-center justify-center"><LoaderOne /></div>}>
            <WorkSection />
          </Suspense>
        </div>
      </div>
      <Footer />
      <CommandPalette />
    </PageLayout>
  );
}