export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen w-full p-4 lg:p-8 bg-black text-white">
      <div className="grid gap-3 grid-cols-1 lg:grid-cols-7 justify-items-center">
        {children}
      </div>
    </main>
  );
}
