"use client"

import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  company: string;
  location: string;
  logo: string;
  website: string;
  period: string;
  description: string;
  content?: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 25%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans md:px-10 pb-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              {/* <h3 className="hidden md:block text-xl md:pl-20 md:text-xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3> */}
              <div className="mt-3 hidden md:block text-xl md:pl-20 md:text-xl font-bold text-neutral-500 dark:text-neutral-500 ">
                <h1 className="text-lg font-semibold text-white">
                  <p className="block hover:underline">{item.title}</p>
                  <a
                    className="font-normal text-sm hover:underline"
                    href={item.website}
                    target="_blank"
                  >
                    {item.company}
                  </a>
                </h1>
                <time className="block my-1 text-sm font-normal leading-none text-gray-500">
                  {item.period} &#8226; {item.location}
                </time>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="mt-3 md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                <h1 className="text-lg font-semibold text-white">
                  <p className="block hover:underline">{item.title}</p>
                  <a
                    className="font-normal text-sm hover:underline"
                    href={item.website}
                    target="_blank"
                  >
                    {item.company}
                  </a>
                </h1>
                <time className="block my-1 text-sm font-normal leading-none text-gray-500">
                  {item.period} &#8226; {item.location}
                </time>
              </div>
              <ul
                className={`${item.description.includes('•') ? 'list-disc' : ''
                  } list-inside font-normal text-gray-400 text-sm md:text-md mt-3 `}
              >
                {item.description.split('•')
                  .map((point) => point.trim())
                  .filter(Boolean).map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 dark:via-neutral-700 to-transparent to-99%  mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-linear-to-t from-purple-500 via-blue-500 to-transparent from-0% via-10% rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
