"use client";

type Props = {
  onSearch: (value: string) => void;
};

export default function BlogSearch({ onSearch }: Props) {
  return (
    <input
      id="blog-search"
      placeholder="Search blogs"
      onChange={(e) => onSearch(e.target.value)}
      className="
        w-full rounded-full px-5 py-3
        bg-card/40 border border-primary/40
        text-sm text-foreground placeholder-muted-foreground
        focus:outline-none focus:ring-2 focus:ring-primary/40
      "
    />
  );
}
