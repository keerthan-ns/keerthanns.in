import { MDXRemote } from "next-mdx-remote/rsc";

export function MDXContent({ source }: { source: string }) {
  return (
    // <article className="prose dark:prose-invert max-w-none overflow-x-hidden">
    //   <MDXRemote source={source} />
    // </article>
    // <article className="prose dark:prose-slate dark:prose-headings:shadow-lime-300 max-w-none">
    <article
      className="
        prose max-w-none
        dark:prose-invert

        /* Override headings */
        prose-headings:text-white
        prose-headings:font-semibold

        /* Override paragraphs */
        prose-p:text-neutral-200
        prose-strong:text-white

        /* Override links */
        prose-a:text-secondary

        /* Inline code (`like this`) */
        prose-code:text-secondary

        /* Code block (``` ... ```) */
        prose-pre:bg-[#0d0d0d]
        prose-pre:border
        prose-pre:border-white/10
        prose-pre:rounded-xl
        prose-pre:overflow-x-auto

        [&_pre_code]:text-stone-300 

        /* Images */
        prose-img:rounded-xl
      "
    >
      <MDXRemote source={source} />
    </article>
  );
}
