export function CardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-[0_0_20px_rgba(0,0,0,0.25)] space-y-4">
      {children}
    </div>
  );
}
