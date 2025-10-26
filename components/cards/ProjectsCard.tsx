"use client"

import { IconBadge } from "../common/IconBadge";
import { Fragment } from "react/jsx-runtime";
import { Marquee } from "../ui/marquee";
import { projects } from "@/data";
import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";

export default function ProjectsCard() {
    return (
        <Fragment>
            <div className="hidden xl:block xl:col-span-3 xl:row-span-3 xl:col-start-3 xl:row-start-4 rounded-2xl border-2 border-light-text/10">
                <div className="pt-4 pb-2 relative">
                    <div className="border-b-2 border-light-text/10 pb-2">
                        <IconBadge
                            icon={<GrProjects className="text-primary" />}
                            text={"Projects"}
                            className="py-2 font-medium"
                            iconSize={18}
                        />
                        <p className="text-sm text-neutral-400">Works Gallery</p>
                    </div>
                    <div className="relative mt-4 h-28 md:h-42 overflow-hidden">
                        <Marquee pauseOnHover className="[--duration:20s]">
                            {
                                projects.slice(0, 4).map((project, index) => (
                                    <div key={index} className="md:inline-block">
                                        <a href={project.link ? project.link : project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title}`}
                                            className="block rounded-2xl w-full h-28 md:w-44 md:h-32 overflow-hidden hover:scale-105 hover:shadow-lg hover:border-theme-primary transition-transform duration-300">
                                            <img src={project.img} className="object-cover h-full w-full" alt={`${project.title}`} />
                                        </a>
                                    </div>
                                ))
                            }
                        </Marquee>
                        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
                        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
                    </div>
                    <Link
                        href="/work"
                        className={`absolute bottom-2 xl:-bottom-3 left-1/2 transform -translate-x-1/2 w-fit flex items-center gap-2 bg-slate-400/20 font-medium text-xs text-white rounded-md p-2 px-3 shadow-lg transition-opacity duration-500 hover:bg-primary/90 group`}
                    >
                        View More Projects
                        <FaAnglesRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
            <div className="xl:hidden xl:col-span-2 xl:row-span-3 rounded-2xl border-2 border-light-text/10">
                <div className="pt-4 pb-2 relative">
                    <div className="border-b-2 border-light-text/10 pb-2">
                        <IconBadge
                            icon={<GrProjects className="text-primary" />}
                            text={"Projects"}
                            className="py-2 font-medium"
                            iconSize={18}
                        />
                        <p className="text-sm text-neutral-400">Works diuh</p>
                    </div>
                    <div className="relative mt-4 h-42 overflow-hidden">
                        <Marquee pauseOnHover className="[--duration:20s]">
                            {
                                projects.slice(0, 4).map((project, index) => (
                                    <div key={index} className="md:inline-block">
                                        <a href={project.link ? project.link : project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title}`}
                                            className="block rounded-2xl w-full h-28 md:w-44 md:h-32 overflow-hidden hover:scale-105 hover:shadow-lg hover:border-theme-primary transition-transform duration-300">
                                            <img src={project.img} className="object-cover h-full w-full" alt={`${project.title}`} />
                                        </a>
                                    </div>
                                ))
                            }
                        </Marquee>
                        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
                        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
                    </div>
                    <Link
                        href="/work"
                        className={`absolute bottom-3 left-1/2 transform -translate-x-1/2 w-fit flex items-center gap-2 bg-slate-400/20 font-medium text-xs text-white rounded-md p-2 px-3 shadow-lg transition-opacity duration-500 hover:bg-primary/90 group`}
                    >
                        View More Projects
                        <FaAnglesRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </Fragment>
    );
}