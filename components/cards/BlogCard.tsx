export default function BlogCard() {
  return (
    <div
      className="
        hidden md:block xl:col-span-2 xl:row-span-3 xl:col-start-6
        relative overflow-hidden rounded-2xl border-2 border-light-text/10
        bg-[url('/static/others/grid.png')] bg-cover bg-center
      "
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-lg font-medium">
          Something Coming Soon!
        </p>
      </div>
    </div>
  );
}
