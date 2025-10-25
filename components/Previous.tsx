
import PageLayout from "@/app/layout/PageLayout";
import Column1 from "./columns/Column1";
import Column2 from "./columns/Column2";
import Column3 from "./columns/Column3";

export default function Previous() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-4">
    <PageLayout>
      <Column1 />
      <Column2 />
      <Column3 />
    </PageLayout>
    </div>
    )
}