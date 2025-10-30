import Image from "next/image";

export default function BlogCard() {
  return (
    <div className="hidden md:block xl:col-span-2 xl:row-span-3 xl:col-start-6 relative overflow-hidden rounded-2xl border-2 border-light-text/10">
      <Image
        src="/favicon/android-chrome-512x512.png"
        alt="Coming Soon Background"
        fill
        className="object-cover object-center opacity-20"
        quality={50}              
        priority               
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-lg font-medium">
          Something&apos;s Coming Soon!
        </p>
      </div>
    </div>
  );
}
