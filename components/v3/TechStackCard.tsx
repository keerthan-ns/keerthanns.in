"use client"

import { FaSuitcase } from "react-icons/fa6";
import { IconBadge } from "../ui/IconBadge";
import Image from "next/image";
import { useRef, useState, useEffect, Fragment } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { experiences } from "@/data";
import Link from "next/link";

export default function TechStackCard() {
    return (
        <Fragment>
            <div className="hidden xl:block xl:col-span-2 xl:row-span-3 bg-card-background rounded-2xl border-2 border-light-text/10">
              <div className="pt-4 pb-2">
                <div className="">
                  <div className="flex justify-center items-center gap-2"> <svg className="text-theme-primary size-5"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M20.894 15.553a1 1 0 0 1 -.447 1.341l-8 4a1 1 0 0 1 -.894 0l-8 -4a1 1 0 0 1 .894 -1.788l7.553 3.774l7.554 -3.775a1 1 0 0 1 1.341 .447m0 -4a1 1 0 0 1 -.447 1.341l-8 4a1 1 0 0 1 -.894 0l-8 -4a1 1 0 0 1 .894 -1.788l7.552 3.775l7.554 -3.775a1 1 0 0 1 1.341 .447m-8.887 -8.552q .056 0 .111 .007l.111 .02l.086 .024l.012 .006l.012 .002l.029 .014l.05 .019l.016 .009l.012 .005l8 4a1 1 0 0 1 0 1.788l-8 4a1 1 0 0 1 -.894 0l-8 -4a1 1 0 0 1 0 -1.788l8 -4l.011 -.005l.018 -.01l.078 -.032l.011 -.002l.013 -.006l.086 -.024l.11 -.02l.056 -.005z">
                    </path>
                  </svg>
                    <h2 className="font-medium text-light-text">My Stack</h2>
                  </div>
                  <p className="font-semibold text-[16px] text-dark-text">Tech Arsenal</p>
                </div>
                <div
                  className="relative h-[6.5rem] md:h-[10.5rem] lg:h-[10.5rem] xl:h-[12.5rem] whitespace-nowrap overflow-y-auto scrollbar-hide mt-2">
                  <div className="select-none absolute flex flex-wrap justify-center items-center gap-2 pt-1 px-2">
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <article className="undefined bg-icon-background rounded-lg p-2 shadow-md"> <img
                          src="https://skillicons.dev/icons?i=html" alt="Html" className="size-6" /> </article>
                        <h3 className="font-medium text-sm text-light-text">Html</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <article className="undefined bg-icon-background rounded-lg p-2 shadow-md"> <img
                          src="https://skillicons.dev/icons?i=css" alt="Css" className="size-6" /> </article>
                        <h3 className="font-medium text-sm text-light-text">Css</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <article className="undefined bg-icon-background rounded-lg p-2 shadow-md"> <img
                          src="https://skillicons.dev/icons?i=php" alt="PHP" className="size-6" /> </article>
                        <h3 className="font-medium text-sm text-light-text">PHP</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <article className="undefined bg-icon-background rounded-lg p-2 shadow-md"> <img
                          src="https://skillicons.dev/icons?i=java" alt="Java" className="size-6" /> </article>
                        <h3 className="font-medium text-sm text-light-text">Java</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <article className="undefined bg-icon-background rounded-lg p-2 shadow-md"> <img
                          src="https://skillicons.dev/icons?i=mysql" alt="MySQL" className="size-6" /> </article>
                        <h3 className="font-medium text-sm text-light-text">MySQL</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <article className="undefined bg-icon-background rounded-lg p-2 shadow-md"> <img
                          src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" className="size-6" /> </article>
                        <h3 className="font-medium text-sm text-light-text">MongoDB</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <article className="undefined bg-icon-background rounded-lg p-2 shadow-md"> <img
                          src="https://skillicons.dev/icons?i=laravel" alt="Laravel" className="size-6" /> </article>
                        <h3 className="font-medium text-sm text-light-text">Laravel</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <h3 className="font-medium text-sm text-light-text">Microsoft Office 365</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <h3 className="font-medium text-sm text-light-text">Project management</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <h3 className="font-medium text-sm text-light-text">Problem solving</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <h3 className="font-medium text-sm text-light-text">Team work</h3>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
        </Fragment>
    );
}
