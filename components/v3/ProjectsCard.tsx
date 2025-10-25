"use client"

import { FaAnglesRight, FaSuitcase } from "react-icons/fa6";
import { IconBadge } from "../ui/IconBadge";
import Image from "next/image";
import { useRef, useState, useEffect, Fragment } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { experiences, projects } from "@/data";
import Link from "next/link";
import { BsStack } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

export default function ProjectsCard() {
  return (
    <Fragment>
      {/* <div className="xl:col-span-2 xl:row-span-2 xl:col-start-6 xl:row-start-5 rounded-2xl border-2 border-light-text/10"> */}
      <div className="xl:col-span-2 xl:row-span-3 xl:col-start-6 rounded-2xl border-2 border-light-text/10">
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
          {/* md:h-24 */}
          <div className="grid grid-cols-2 gap-4 px-4 pt-4 md:flex overflow-x-auto whitespace-nowrap md:h-44 scrollbar-hide">
            {
              projects.slice(0, 4).map((project, index) => (
                <div key={index} className="md:inline-block">
                  <a href={project.link ? project.link : project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title}`}
                    className="block rounded-2xl w-full h-28 md:w-44 md:h-32 overflow-hidden hover:scale-105 hover:shadow-lg hover:border-theme-primary transition-transform duration-300">
                    <img src={project.img} className="object-cover h-full w-full" alt={`Captura del proyecto ${project.title}`} />
                  </a>
                </div>
              ))
            }
            {/* <div className="md:inline-block">
              <a href="https://valoraprime.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Abrir sitio del proyecto Valora Prime"
                className="block rounded-2xl border-2 border-light-text/10 w-full h-20 md:w-24 md:h-16 overflow-hidden hover:scale-105 hover:shadow-lg hover:border-theme-primary transition-transform duration-300">
                <img src="/projects/valoraprime_01.webp" className="object-cover h-full w-full" alt="Captura del proyecto Valora Prime" />
              </a>
            </div>
            <div className="md:inline-block"> <a href="https://github.com/itsteddydev/notepad" target="_blank"
              rel="noopener noreferrer" aria-label="Abrir sitio del proyecto Notepad"
              className="block rounded-2xl border-2 border-light-text/10 w-full h-20 md:w-24 md:h-16 overflow-hidden hover:scale-105 hover:shadow-lg hover:border-theme-primary transition-transform duration-300">
              <img src="/projects/notepad_01.webp" className="object-cover h-full w-full"
                alt="Captura del proyecto Notepad" /> </a> </div>
            <div className="md:inline-block"> <a href="https://github.com/itsteddydev/neko-inn" target="_blank"
              rel="noopener noreferrer" aria-label="Abrir sitio del proyecto Neko Inn"
              className="block rounded-2xl border-2 border-light-text/10 w-full h-20 md:w-24 md:h-16 overflow-hidden hover:scale-105 hover:shadow-lg hover:border-theme-primary transition-transform duration-300">
              <img src="/projects/neko_inn_01.webp" className="object-cover h-full w-full"
                alt="Captura del proyecto Neko Inn" /> </a> </div>
            <div className="md:inline-block"> <a
              href="https://astro.build/themes/details/personal-hub-a-customizable-personal-link/" target="_blank"
              rel="noopener noreferrer" aria-label="Abrir sitio del proyecto Personal Hub"
              className="block rounded-2xl border-2 border-light-text/10 w-full h-20 md:w-24 md:h-16 overflow-hidden hover:scale-105 hover:shadow-lg hover:border-theme-primary transition-transform duration-300">
              <img src="/projects/personal_hub.webp" className="object-cover h-full w-full"
                alt="Captura del proyecto Personal Hub" /> </a> </div> */}
          </div>
          <Link
            href="/projects"
            className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-fit flex items-center gap-2 bg-slate-400/20 font-medium text-xs text-white rounded p-2 shadow-lg transition-opacity duration-500 hover:bg-primary/90 group`}
          >
            View More Projects
            <FaAnglesRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
