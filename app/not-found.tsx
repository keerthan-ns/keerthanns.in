import CommandPalette from "@/components/ui/CommandPalette";

export const metadata = {
  title: 'Not Found',
  description: 'Page Not found',
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
      <p className="text-2xl mb-8">Oops! You seem to be lost.</p>
      <div className="text-center px-3">
        Click on the <span className="text-primary">Command Palette</span> below
        (<kbd className="opacity-50 bg-slate-500/30 p-1 rounded">Ctrl</kbd>+<kbd className="opacity-50 bg-slate-500/30 p-1 rounded">K</kbd>{" "})
        and navigate to other pages.
      </div> 
      <CommandPalette />
    </div>
  );
}