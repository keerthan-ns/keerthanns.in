"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { MdFileDownload } from "react-icons/md";
import { Badge } from "../ui/badge";
import { FaGraduationCap, FaRegDotCircle, FaMapMarkerAlt } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { IoIdCardSharp } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { IconBadge } from "../ui/IconBadge";
import Link from "next/link";
import { socials } from "@/data";

export default function HeroProfileCardV2() {
    return (
        // <div className="hidden xl:block xl:row-span-2 xl:col-start-3 bg-card-background rounded-2xl border-2 border-light-text/10">
        <div className="xl:col-span-3 xl:row-span-3 xl:col-start-3 xl:row-start-1 rounded-2xl border-2 border-light-text/10">
            <div className="p-4 h-full flex flex-col gap-2 bg-card rounded-lg shadow-md">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <Image
                            width={240}
                            height={440}
                            src="/static/keerthan/me.png"
                            alt="Keerthan's profile"
                            className="size-24 rounded object-cover border border-white/10 bg-primary/20 shadow-lg"
                        />
                        <div className="flex items-start justify-between h-full flex-col ml-2 md:ml-4">
                            <article className="undefined  bg-icon-card rounded-full shadow-md py-1 px-3 text-testimonial-text  hover:bg-icon-background/80 transition-all duration-300">
                                <span className="flex justify-evenly items-center gap-[2px]">
                                    <Badge className="bg-gray-600/10 text-green-400 border-0 px-2 py-1 animate-pulse">
                                        <FaRegDotCircle size={200} /> Available to work
                                    </Badge>
                                </span>{" "}
                            </article>
                            <h3 className="font-semibold text-xl text-dark-text">
                                Keerthan NS
                            </h3>
                            <p className="font-semibold text-sm text-primary">
                                <span className="text-white">I&apos;m a</span>{" "}
                                Full-Stack Developer
                            </p>
                        </div>
                    </div>
                    <div className="font-medium text-sm">
                        {/* <div className="flex items-center gap-2"> */}
                        <Link href={socials.resume} target="_blank">
                            <Button variant="link" className="cursor-pointer text-white hover:no-underline flex items-center justify-center gap-2 bg-white/10 transition-all duration-300 group">
                                <span className="hidden xl:block">Resume</span>{" "}
                                <IoDocumentText size={20} className="group-hover:animate-bounce"/>
                            </Button>
                        </Link>
                        {/* </div> */}
                    </div>
                </div>
                <article className="flex flex-wrap gap-2 bg-[#141414] border border-light-text/10 py-4 px-2 rounded-lg shadow-md max-h-24 overflow-y-auto scrollbar-hide">
                    <IconBadge
                        icon={<FaMapMarkerAlt className="text-fuchsia-400" />}
                        text="Udupi, India"
                        className="bg-gray-600/10 font-medium text-xs text-white/70 border px-2 py-1 rounded-full"
                        iconSize={14}
                    />
                    <IconBadge
                        icon={<IoIdCardSharp className="text-fuchsia-400" />}
                        text="Product Engineer"
                        className="bg-gray-600/10 font-medium text-xs text-white/70 border px-2 py-1 rounded-full"
                        iconSize={14}
                    />
                    <IconBadge
                        icon={<FaGraduationCap className="text-fuchsia-400" />}
                        text="NMAMIT, Nitte"
                        className="bg-gray-600/10 font-medium text-xs text-white/70 border px-2 py-1 rounded-full"
                        iconSize={14}
                    />
                </article>
                <p className="text-white/70">
                    I build <span className="text-primary/90">responsive</span> and <span className="text-primary/90">scalable</span> web applications using latest tools and frameworks.
                </p>
                <Link href="/about" className="w-fit mx-auto block">
                    <Button variant="link" className="bg-white/10 lg:bg-transparent hover:no-underline cursor-pointer w-fit mx-auto mt-2 items-center justify-center hover:bg-white/10 transition-all duration-300 group">
                        Know more about me
                        <FaAnglesRight className=" transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
