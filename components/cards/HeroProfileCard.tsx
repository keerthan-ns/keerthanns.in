"use client";

import Image from "next/image";
import { CardShell } from "./CardShell";
import { Button } from "../ui/button";
import { MdFileDownload } from "react-icons/md";
import { Badge } from "../ui/badge";
import { BsDot } from "react-icons/bs";
import { FaDotCircle, FaGraduationCap, FaIdCard, FaMapPin, FaRegDotCircle } from "react-icons/fa";
import { IconBadge } from "../ui/IconBadge";
// import { Instagram, Mail, Phone, Github, DownloadIcon, Dot, LocateIcon, MapPin, GraduationCap, IdCardLanyard } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import { Chip } from "@heroui/chip";
// import { IconBadge } from "@/components/ui/IconBadge";

export default function HeroProfileCard() {
    return (
        <CardShell>
            <div className="flex flex-row flex-wrap items-center gap-3 relative">
                <div className="w-24 h-24 mx-auto relative">
                    <Image
                        src="/me.jpg"            // change to your image
                        alt="profile picture"
                        fill
                        className="rounded object-cover border border-white/10 shadow-lg"
                    />
                </div>
                <div className="flex flex-1 flex-col sm:flex-row justify-center gap-2">
                    <div className="space-y-1 items-center">
                        <Badge className="bg-gray-600/10 text-green-400 border-0 px-2 py-1">
                            <FaRegDotCircle size={200} /> Available to work
                        </Badge>
                        <h1 className="text-lg font-semibold">Keerthan N S</h1>
                        <p className="text-xs text-neutral-400">I&apos;m a <span className="text-fuchsia-400">Full Stack Developer</span></p>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => {
                        console.log("Download Resume");
                    }}>
                        Resume <MdFileDownload />
                    </Button>
                </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-neutral-800 bg-neutral-900 p-3 shadow-[0_0_20px_rgba(0,0,0,0.25)]">
                <IconBadge
                    icon={<FaMapPin className="text-fuchsia-400" />}
                    text="Udupi, India"
                    className="bg-gray-600/10 text-xs font-light text-white border-1 border-white px-2 py-1 rounded-full"
                    iconSize={20}
                />
                <IconBadge
                    icon={<FaIdCard className="text-fuchsia-400" />}
                    text="Product Engineer"
                    className="bg-gray-600/10 text-xs font-light text-white border-1 border-white px-2 py-1 rounded-full"
                    iconSize={20}
                />
                <IconBadge
                    icon={<FaGraduationCap className="text-fuchsia-400" />}
                    text="NMAMIT, Nitte"
                    className="bg-gray-600/10 text-xs font-light text-white border-1 border-white px-2 py-1 rounded-full"
                    iconSize={20}
                />
            </div>
        </CardShell>
    );
}
