import { NavbarV1 } from "@/components/common/NavbarV1";
import PageLayout from "../layout/PageLayout";
import CommandPalette from "@/components/common/CommandPalette";


export default function WorkPage() {
  return (
    <PageLayout>
      {/* <Navbar /> */}
      <NavbarV1 />
      <div className="container mx-auto mt-20 mb-10">
      </div>
      <CommandPalette />
    </PageLayout>
  );
}
