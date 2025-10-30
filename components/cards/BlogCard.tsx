export default function BlogCard() {
  return (
    <div className="hidden md:block xl:col-span-2 xl:row-span-3 xl:col-start-6 relative overflow-hidden rounded-2xl border-2 border-light-text/10">
      <div className="absolute inset-0 bg-[url('/favicon/android-chrome-512x512.png')] bg-cover bg-no-repeat bg-center opacity-20"/>
      <div className="relative inset-0 flex items-center justify-center h-full">
        <p className="text-lg font-medium">
          Something&apos;s Coming Soon!
        </p>
      </div>
    </div>

  );
}
