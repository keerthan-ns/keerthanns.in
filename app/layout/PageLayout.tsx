export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex justify-center items-center min-h-screen p-5">
      <div className="w-full max-w-[1440px] mx-auto">
        {children}
      </div>
    </main>
  );
}