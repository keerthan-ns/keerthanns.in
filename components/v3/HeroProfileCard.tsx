"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { MdFileDownload } from "react-icons/md";
import { Badge } from "../ui/badge";
import { BsDot } from "react-icons/bs";
import {
    FaDotCircle,
    FaGraduationCap,
    FaIdCard,
    FaMapPin,
    FaRegDotCircle,
    FaMapMarkerAlt
} from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { IoIdCardSharp } from "react-icons/io5";
import { IconBadge } from "../ui/IconBadge";
import { CardShell } from "../cards/CardShell";

export default function HeroProfileCard() {
    return (
        <div className="xl:col-span-3 xl:row-span-4 xl:col-start-3 xl:row-start-3 bg-card-background rounded-2xl border-2 border-light-text/10">
            <div className="p-4 h-full flex flex-col gap-2 justify-between bg-card rounded-lg shadow-md">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        {/* <img className="object-cover size-24 rounded-lg" src="/me.webp" alt="" /> */}

                        <Image
                            width={240}
                            height={440}
                            src="/me.webp" // change to your image
                            alt="Keerthan's profile"
                            className="size-24 rounded object-cover border border-white/10 shadow-lg"
                        />
                        <div className="flex items-start justify-between h-full flex-col ml-2 md:ml-4">
                            <article className="undefined  bg-icon-card rounded-full shadow-md py-1 px-3 text-testimonial-text  hover:bg-icon-background/80 transition-all duration-300">
                                <span className="flex justify-evenly items-center gap-[2px]">
                                    {/* <div className="flex items-center justify-center rounded-full bg-dark-text/10 w-4 h-4">
                                        <span
                                            className="block w-2.5 h-2.5 rounded-full"
                                            style={{ backgroundColor: "#6DD33D" }}
                                        ></span>
                                    </div>
                                    <span className="font-medium text-xs">Available</span> */}
                                    <Badge className="bg-gray-600/10 text-green-400 border-0 px-2 py-1">
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
                    <div className="font-medium text-sm text-testimonial-title">
                        <div className="flex items-center gap-2">
                            {" "}
                            <span className="hidden xl:block">Resume</span>{" "}
                            {/* <a href="/resume.pdf" target="_blank">
                                <article className="hover:bg-icon-background/50 transition-all duration-300 cursor-pointer bg-icon-background rounded-lg p-2 shadow-md">
                                    <svg
                                        className="size-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" x2="12" y1="15" y2="3"></line>
                                    </svg>{" "}
                                </article>{" "}
                                <span className="sr-only">Descargar CV en PDF</span>
                            </a>{" "} */}
                            <Button className="cursor-pointer" variant="secondary" size="sm" onClick={() => {
                                console.log("Download Resume");
                            }}>
                                <span className="sr-only">Descargar CV en PDF</span>
                                <MdFileDownload />
                            </Button>
                        </div>
                    </div>
                </div>
                <article
                    className="flex flex-wrap gap-2 bg-[#141414] border border-light-text/10 py-4 px-2 rounded-lg shadow-md max-h-[6rem] overflow-y-auto scrollbar-hide"
                >
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
                <Button variant="link" className="cursor-pointer w-fit mx-auto mt-2 items-center justify-center  hover:bg-white/10 transition-all duration-300 group">
                    Know more about me
                    <FaAnglesRight className=" transform transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
            </div>
        </div>
    );
}
