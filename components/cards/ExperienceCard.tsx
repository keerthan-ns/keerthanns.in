"use client"

import { FaSuitcase } from "react-icons/fa6";
import { IconBadge } from "../common/IconBadge";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { experiences } from "@/data";
import Link from "next/link";

export default function ExperienceCard() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [showArrow, setShowArrow] = useState(false);
    const [showKnowMore, setShowKnowMore] = useState(false);

    // Determine if device is touch capable
    const isTouchDevice = typeof window !== "undefined" && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const handleScroll = () => {
        const el = scrollRef.current;
        if (!el) return;

        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
        setShowArrow(!atBottom);
        setShowKnowMore(atBottom);
    };

    // Track scroll changes
    useEffect(() => {
        // If mobile/touch, immediately check scroll
        if (isTouchDevice) handleScroll();
    }, [isTouchDevice]);

    return (
        <div
            className="xl:col-span-2 xl:row-span-4 xl:row-start-4 bg-card-background rounded-2xl border-2 border-light-text/10"
            onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
            onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
            onFocus={() => !isTouchDevice && setIsHovered(true)}
            onBlur={() => !isTouchDevice && setIsHovered(false)}
            tabIndex={0}
        >
            <div className="pt-4 pb-2 relative">
                <div className="border-b-2 border-light-text/10 pb-2">
                    <IconBadge
                        icon={<FaSuitcase className="text-primary" />}
                        text={"Experience"}
                        className="py-2 font-medium"
                        iconSize={18}
                    />
                    <p className="text-sm text-neutral-400">Work Showcase</p>
                </div>

                <div
                    ref={scrollRef}
                    className="h-50 md:h-68 xl:h-80 overflow-y-auto pb-8"
                    onScroll={handleScroll}
                >
                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className="select-none rounded-2xl border-2 border-light-text/10 p-3 mx-4 mt-2 bg-[#141414] hover:bg-icon-background/50 transition-all duration-300 group"
                        >
                            <div className="relative flex flex-col justify-between gap-1">
                                <div className="flex justify-between">
                                    <h3 className="font-medium text-primary/90 text-xs overflow-hidden text-ellipsis whitespace-nowrap">
                                        {exp.title}
                                    </h3>
                                    <span className="font-medium text-xs">{exp.period}</span>
                                </div>
                                <div className="flex items-start flex-col overflow-hidden">
                                    <div className="flex flex-row gap-2">
                                        <Image
                                            src={`/static/experience/${exp.logo}`}
                                            alt={exp.company}
                                            width={30}
                                            height={30}
                                            className="size-12 rounded-md"
                                        />
                                        <div className="text-left">
                                            <p
                                                onClick={() => window.open(exp.website, "_blank")}
                                                className="font-medium text-sm cursor-pointer hover:underline"
                                            >
                                                {exp.company}
                                            </p>
                                            <span className="font-normal text-xs text-neutral-400">
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pointer-events-none absolute left-0 bottom-0 w-full h-12 bg-linear-to-t from-black/60 to-transparent rounded-b-2xl z-10" />

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
                    href="/about#experience"
                    className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary font-medium text-xs text-white rounded p-2 shadow-lg transition-opacity duration-500 hover:bg-primary/90
                        ${(isHovered || isTouchDevice) && showKnowMore ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                >
                    Know More
                </Link>
            </div>
        </div>
    );
}
