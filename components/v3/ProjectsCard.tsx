"use client"

import { FaSuitcase } from "react-icons/fa6";
import { IconBadge } from "../ui/IconBadge";
import Image from "next/image";
import { useRef, useState, useEffect, Fragment } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { experiences } from "@/data";
import Link from "next/link";

export default function ProjectsCard() {
    return (
      <Fragment>
            <div className="xl:col-span-2 xl:row-span-2 xl:col-start-6 xl:row-start-5 bg-card-background rounded-2xl border-2 border-light-text/10">
              <div className="pt-4 pb-2">
                <div className="border-b-2 border-light-text/10 pb-2">
                  <div className="flex justify-center items-center gap-2"> <svg className="text-theme-primary size-5" width="18"
                    height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M7.23071 3.35517C7.3599 2.98924 7.59939 2.67238 7.91619 2.44826C8.233 2.22414 8.61151 2.10378 8.99957 2.10378C9.38764 2.10378 9.76615 2.22414 10.083 2.44826C10.3998 2.67238 10.6392 2.98924 10.7684 3.35517C10.8266 3.50756 10.942 3.63118 11.0901 3.69961C11.2381 3.76805 11.4071 3.7759 11.5609 3.72147C11.7146 3.66704 11.841 3.55465 11.913 3.4083C11.9851 3.26195 11.997 3.09325 11.9463 2.93821C11.7308 2.32894 11.3317 1.80146 10.804 1.42839C10.2762 1.05532 9.64585 0.854996 8.99957 0.854996C8.3533 0.854996 7.72291 1.05532 7.19519 1.42839C6.66747 1.80146 6.26836 2.32894 6.05281 2.93821C5.99751 3.09454 6.00659 3.26643 6.07803 3.41607C6.14948 3.56572 6.27744 3.68085 6.43378 3.73614C6.59011 3.79144 6.762 3.78236 6.91165 3.71091C7.06129 3.63947 7.17642 3.5115 7.23171 3.35517H7.23071ZM1.29019 6.55492C1.24648 6.52687 1.19946 6.50436 1.1502 6.48792C1.27349 6.22855 1.44021 5.99217 1.64316 5.78898C2.62108 4.81306 4.19096 4.81306 7.33271 4.81306H10.6664C13.8092 4.81306 15.3801 4.81306 16.356 5.78898C16.56 5.99296 16.722 6.22294 16.8489 6.48792C16.8 6.50445 16.7534 6.52695 16.71 6.55492C14.9601 7.69283 13.8602 8.40477 12.9463 8.86073C12.9161 8.7088 12.8305 8.5735 12.7062 8.48107C12.5819 8.38864 12.4277 8.34567 12.2735 8.36049C12.1193 8.37532 11.9761 8.44687 11.8717 8.56129C11.7673 8.6757 11.7091 8.82482 11.7084 8.97972V9.36069C9.94217 9.89369 8.05798 9.89369 6.29179 9.36069V8.97972C6.29236 8.82393 6.23471 8.67354 6.13016 8.55804C6.0256 8.44254 5.88167 8.37025 5.72659 8.35536C5.57151 8.34046 5.41645 8.38403 5.29183 8.47752C5.1672 8.57101 5.08198 8.70768 5.05289 8.86073C4.14096 8.40477 3.04005 7.69283 1.29019 6.55492ZM0.667236 11.4795C0.667236 9.85365 0.667236 8.64975 0.802226 7.72982C2.69907 8.96273 3.91498 9.74966 5.04189 10.2336V10.6456C5.04003 10.8113 5.10409 10.971 5.21998 11.0895C5.33587 11.2081 5.49409 11.2757 5.65984 11.2775C5.82559 11.2794 5.98528 11.2153 6.1038 11.0994C6.22231 10.9836 6.28993 10.8253 6.29179 10.6596C8.06665 11.1276 9.9335 11.1276 11.7084 10.6596C11.7102 10.8253 11.7778 10.9836 11.8963 11.0994C12.0149 11.2153 12.1746 11.2794 12.3403 11.2775C12.5061 11.2757 12.6643 11.2081 12.7802 11.0895C12.8961 10.971 12.9601 10.8113 12.9583 10.6456V10.2336C14.0842 9.74866 15.3001 8.96273 17.1979 7.72982C17.3329 8.64975 17.3329 9.85365 17.3329 11.4795C17.3329 14.6213 17.3329 16.1932 16.356 17.1691C15.3801 18.145 13.8092 18.145 10.6664 18.145H7.33371C4.19096 18.145 2.62008 18.145 1.64416 17.1691C0.667236 16.1932 0.667236 14.6213 0.667236 11.4795Z"
                      fill="#916CE7"></path>
                  </svg>
                    <h2 className="font-medium text-light-text">Projects</h2>
                  </div>
                  <p className="font-semibold text-[16px] text-dark-text">Works Gallery</p>
                </div>
                <div
                  className="grid grid-cols-2 gap-4 px-4 pt-4 md:flex overflow-x-auto whitespace-nowrap md:h-[6rem] scrollbar-hide">
                  <div className="md:inline-block"> <a href="https://valoraprime.vercel.app/" target="_blank"
                    rel="noopener noreferrer" aria-label="Abrir sitio del proyecto Valora Prime"
                    className="block rounded-2xl border-2 border-light-text/10 bg-card-background w-full h-20 md:w-24 md:h-16 overflow-hidden hover:scale-105 hover:shadow-lg hover:border-theme-primary transition-transform duration-300">
                    <img src="/projects/valoraprime_01.webp" className="object-cover h-full w-full"
                      alt="Captura del proyecto Valora Prime" /> </a> </div>
                  <div className="md:inline-block"> <a href="https://github.com/itsteddydev/notepad" target="_blank"
                    rel="noopener noreferrer" aria-label="Abrir sitio del proyecto Notepad"
                    className="block rounded-2xl border-2 border-light-text/10 bg-card-background w-full h-20 md:w-24 md:h-16 overflow-hidden hover:scale-105 hover:shadow-lg hover:border-theme-primary transition-transform duration-300">
                    <img src="/projects/notepad_01.webp" className="object-cover h-full w-full"
                      alt="Captura del proyecto Notepad" /> </a> </div>
                  <div className="md:inline-block"> <a href="https://github.com/itsteddydev/neko-inn" target="_blank"
                    rel="noopener noreferrer" aria-label="Abrir sitio del proyecto Neko Inn"
                    className="block rounded-2xl border-2 border-light-text/10 bg-card-background w-full h-20 md:w-24 md:h-16 overflow-hidden hover:scale-105 hover:shadow-lg hover:border-theme-primary transition-transform duration-300">
                    <img src="/projects/neko_inn_01.webp" className="object-cover h-full w-full"
                      alt="Captura del proyecto Neko Inn" /> </a> </div>
                  <div className="md:inline-block"> <a
                    href="https://astro.build/themes/details/personal-hub-a-customizable-personal-link/" target="_blank"
                    rel="noopener noreferrer" aria-label="Abrir sitio del proyecto Personal Hub"
                    className="block rounded-2xl border-2 border-light-text/10 bg-card-background w-full h-20 md:w-24 md:h-16 overflow-hidden hover:scale-105 hover:shadow-lg hover:border-theme-primary transition-transform duration-300">
                    <img src="/projects/personal_hub.webp" className="object-cover h-full w-full"
                      alt="Captura del proyecto Personal Hub" /> </a> </div>
                </div>
              </div>
            </div>
        </Fragment>
    );
}
