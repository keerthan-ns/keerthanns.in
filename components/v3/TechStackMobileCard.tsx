"use client"

import { IconBadge } from "../ui/IconBadge";
import Image from "next/image";
import { useRef, useState, useEffect, Fragment } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { BsStack } from "react-icons/bs";

export default function TechStackMobileCard() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [showArrow, setShowArrow] = useState(false);
    const [showViewMore, setShowViewMore] = useState(false);

    // Detect touch device
    const isTouchDevice = typeof window !== "undefined" && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const handleScroll = () => {
        const el = scrollRef.current;
        if (!el) return;

        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
        setShowArrow(!atBottom);
        setShowViewMore(atBottom);
    };

    // Track scroll changes
    useEffect(() => {
        // If mobile/touch, immediately check scroll
        if (isTouchDevice) handleScroll();
    }, [isTouchDevice]);
  
    return (
        <Fragment>
            <div className="xl:hidden xl:col-span-2 xl:row-span-3 bg-card-background rounded-2xl border-2 border-light-text/10"
                onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
                onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
                onFocus={() => !isTouchDevice && setIsHovered(true)}
                onBlur={() => !isTouchDevice && setIsHovered(false)}
                tabIndex={0}
            >
                <div className="pt-4 pb-2 relative">

                    <div className="border-b-2 border-light-text/10 pb-2">
                        <IconBadge
                            icon={<BsStack className="text-primary" />}
                            text={"Tech Stack"}
                            className="py-2 font-medium"
                            iconSize={18}
                        />
                        <p className="text-sm text-neutral-400">Technologies I&apos;ve Mastered</p>
                    </div>

                    <div
                        ref={scrollRef}
                        className="relative h-26 md:h-42 lg:h-42 xl:h-50 overflow-y-auto scrollbar-hide mt-2"
                        onScroll={handleScroll}
                    >
                        <div className="select-none absolute flex flex-wrap justify-center items-center gap-2 pt-1 px-2 pb-14">
                            {[
                                { name: 'Java', src: '/static/stacks/java.svg' },
                                { name: 'Typescript', src: '/static/stacks/typescript.svg' },
                                { name: 'Next.js', src: '/static/stacks/nextjs.svg' },
                                { name: 'ReactJs', src: '/static/stacks/react.svg' },
                                { name: 'Tailwind', src: '/static/stacks/tailwind.svg' },
                                { name: 'Spring boot', src: '/static/stacks/springboot.svg' },
                                { name: 'NodeJs', src: '/static/stacks/nodejs.svg' },
                                { name: 'Git', src: '/static/stacks/git.svg' },
                                { name: 'Docker', src: '/static/stacks/docker.svg' },
                                { name: 'Kubernetes', src: '/static/stacks/kubernetes.svg' },
                                { name: 'Jenkins', src: '/static/stacks/jenkins.svg' },
                            ].map((tech, idx) => (
                                <article
                                    key={idx}
                                    className="flex justify-start items-center gap-1 rounded-lg shadow-md py-1 pl-1 pr-4 hover:bg-slate-400/20 transition-all duration-300"
                                >
                                    <Image width={10} height={10} src={tech.src} alt={tech.name} className="size-10" />
                                    <h3 className="font-medium text-sm">{tech.name}</h3>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Gradient overlay */}
                    <div className="pointer-events-none absolute left-0 bottom-0 w-full h-12 bg-linear-to-t from-black/60 to-transparent rounded-b-2xl z-10" />

                    {/* Arrow button */}
                    <button
                        className={`cursor-pointer absolute bottom-4 right-4 z-20 bg-slate-400/30 text-white rounded-full p-2 shadow-lg transition-opacity duration-500 hover:bg-slate-700
                            ${(isHovered || isTouchDevice) && showArrow ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                        onClick={() => {
                            if (scrollRef.current) {
                                scrollRef.current.scrollBy({ top: 80, behavior: "smooth" });
                            }
                        }}
                        aria-label="Scroll down"
                        tabIndex={0}
                    >
                        <IoIosArrowDown />
                    </button>
                    <Link
                        href="/about#tech-stack"
                        className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary font-medium text-xs text-white rounded p-2 shadow-lg transition-opacity duration-500 hover:bg-primary/90
                            ${(isHovered || isTouchDevice) && showViewMore ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                    >
                        View More
                    </Link>

                </div>
            </div>
        </Fragment>
    );
}
