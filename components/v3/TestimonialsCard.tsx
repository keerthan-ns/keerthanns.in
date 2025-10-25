"use client"

import { FaSuitcase } from "react-icons/fa6";
import { IconBadge } from "../ui/IconBadge";
import Image from "next/image";
import { useRef, useState, useEffect, Fragment } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { experiences } from "@/data";
import Link from "next/link";

export default function TestimonialsCard() {
    return (
      <Fragment>
        {/* <div className="block md:hidden xl:col-span-2 xl:row-span-4 xl:col-start-6 bg-card-background rounded-2xl border-2 border-light-text/10"> */}
            <div className="block md:hidden xl:col-span-2 xl:row-span-2 xl:col-start-6 xl:row-start-5 bg-card-background rounded-2xl border-2 border-light-text/10">
              
          <div className="pt-4 pb-2">
                <div className="border-b-2 border-light-text/10 pb-2">
                  <div className="flex justify-center items-center gap-2"> <svg className="text-theme-primary size-5" width="16"
                    height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M15.5 8.41755V3.85755C15.5 1.96655 15.5 1.02055 14.91 0.503549C14.321 -0.0134512 13.42 0.141549 11.619 0.453549L10.74 0.604549C9.373 0.840549 8.69 0.958549 8 0.958549C7.31 0.958549 6.627 0.840549 5.26 0.604549L4.381 0.452549C2.58 0.142549 1.679 -0.0134511 1.089 0.502549C0.5 1.02155 0.5 1.96755 0.5 3.85855V8.41855C0.5 13.1585 4.032 15.4595 6.249 16.4365C6.85 16.7015 7.151 16.8335 8 16.8335C8.85 16.8335 9.15 16.7015 9.751 16.4365C11.967 15.4595 15.5 13.1575 15.5 8.41755ZM3.976 6.11655C4.079 5.90255 4.464 5.61055 5.083 5.61055C5.703 5.61055 6.088 5.90255 6.191 6.11655C6.345 6.43655 6.721 6.56655 7.029 6.40655C7.1791 6.32587 7.29211 6.19019 7.34432 6.02797C7.39653 5.86576 7.38387 5.68963 7.309 5.53655C6.927 4.74455 6.003 4.31655 5.083 4.31655C4.163 4.31655 3.24 4.74455 2.858 5.53655C2.78313 5.68963 2.77047 5.86576 2.82268 6.02797C2.87489 6.19019 2.9879 6.32587 3.138 6.40655C3.446 6.56655 3.821 6.43655 3.976 6.11655ZM10.916 5.61055C10.297 5.61055 9.912 5.90255 9.809 6.11655C9.77429 6.19173 9.72476 6.25914 9.66337 6.31471C9.60198 6.37029 9.53 6.41289 9.45175 6.43998C9.37349 6.46706 9.29057 6.47806 9.20796 6.47231C9.12535 6.46657 9.04475 6.4442 8.971 6.40655C8.8209 6.32587 8.70789 6.19019 8.65568 6.02797C8.60347 5.86576 8.61613 5.68963 8.691 5.53655C9.073 4.74455 9.997 4.31655 10.917 4.31655C11.837 4.31655 12.76 4.74455 13.142 5.53655C13.297 5.85655 13.172 6.24655 12.862 6.40655C12.7882 6.4442 12.7076 6.46657 12.625 6.47231C12.5424 6.47806 12.4595 6.46706 12.3813 6.43998C12.303 6.41289 12.231 6.37029 12.1696 6.31471C12.1082 6.25914 12.0587 6.19173 12.024 6.11655C11.921 5.90255 11.535 5.61055 10.916 5.61055ZM4.657 10.6175C4.53599 10.4965 4.46587 10.3338 4.46103 10.1627C4.4562 9.99165 4.51701 9.82521 4.631 9.69755C4.68787 9.63728 4.75618 9.58894 4.83193 9.55535C4.90769 9.52177 4.98938 9.50361 5.07223 9.50193C5.15508 9.50026 5.23743 9.5151 5.31448 9.54559C5.39153 9.57609 5.46174 9.62163 5.521 9.67955C5.536 9.69255 5.576 9.72355 5.605 9.74455C5.689 9.80455 5.829 9.89255 6.028 9.98355C6.423 10.1635 7.067 10.3605 8 10.3605C8.933 10.3605 9.577 10.1635 9.973 9.98255C10.171 9.89255 10.311 9.80455 10.395 9.74455C10.4285 9.72112 10.4609 9.69609 10.492 9.66955V9.66855C10.5508 9.61157 10.6205 9.56701 10.6969 9.53753C10.7733 9.50804 10.8548 9.49425 10.9367 9.49695C11.0185 9.49966 11.099 9.51881 11.1732 9.55328C11.2475 9.58774 11.3141 9.63681 11.369 9.69755C11.4838 9.8237 11.5457 9.98921 11.5418 10.1598C11.5379 10.3303 11.4685 10.4928 11.348 10.6135L11.345 10.6155L11.343 10.6175L11.337 10.6235L11.32 10.6395L11.27 10.6825C11.23 10.7175 11.173 10.7625 11.102 10.8125C10.9048 10.9508 10.6948 11.07 10.475 11.1685C9.923 11.4205 9.109 11.6555 8 11.6555C6.891 11.6555 6.077 11.4205 5.525 11.1685C5.30523 11.0703 5.09528 10.9515 4.898 10.8135C4.81416 10.7538 4.73401 10.689 4.658 10.6195L4.657 10.6175Z"
                      fill="#916CE7"></path>
                  </svg>
                    <h2 className="font-medium text-light-text">Testimonials</h2>
                  </div>
                  <p className="font-semibold text-[16px] text-dark-text">Reviews Showcase</p>
                </div>
                <div
                  className="relative h-[12.5rem] md:h-[10.5rem] xl:h-[18.4rem] lg:h-[10.5rem] whitespace-nowrap overflow-y-auto scrollbar-hide">
                  <div
                    className="mr-14 rounded-2xl border-2 border-light-text/10 p-3 mx-4 mt-2 bg-[#141414]  hover:bg-icon-background/50 transition-all duration-300">
                    <div className="flex justify-between border-b-2 border-light-text/10 pb-2">
                      <div className="flex items-center"> <img className="object-cover size-8 rounded-full"
                        src="/testimonials/teddy.webp" alt="profile user Teddy Summers" />
                        <div className="flex items-start flex-col ml-1">
                          <h3 className="font-medium text-xs text-testimonial-title">Teddy Summers</h3>
                          <p className="font-medium text-xs text-testimonial-text">Miami,EEUU</p>
                        </div>
                      </div> <span className="font-medium text-xs text-testimonial-text">14, May 2024</span>
                    </div>
                    <p className="font-medium text-xs text-testimonial-text text-left text-wrap pt-2"> Knowledgeable and
                      professional. Luis is a great developer. He is very responsable and always delivers on time. I highly
                      recommend him for any. </p>
                  </div>
                  <div
                    className="ml-14 rounded-2xl border-2 border-light-text/10 p-3 mx-4 mt-2 bg-[#141414]  hover:bg-icon-background/50 transition-all duration-300">
                    <div className="flex justify-between border-b-2 border-light-text/10 pb-2">
                      <div className="flex items-center"> <img className="object-cover size-8 rounded-full"
                        src="/testimonials/marlon.webp" alt="profile user Marlon Villamar" />
                        <div className="flex items-start flex-col ml-1">
                          <h3 className="font-medium text-xs text-testimonial-title">Marlon Villamar</h3>
                          <p className="font-medium text-xs text-testimonial-text">Roma, Italia</p>
                        </div>
                      </div> <span className="font-medium text-xs text-testimonial-text">12, Dic 2023</span>
                    </div>
                    <p className="font-medium text-xs text-testimonial-text text-left text-wrap pt-2"> Luis is a great
                      developer. He is a developer with a strong work ethic and a positive attitude. He is always willing to
                      help others and is a great team player. I highly recommend him for any development role. </p>
                  </div>
                </div>
              </div>
        </div>
        <div className="hidden md:block xl:col-span-2 xl:row-span-4 xl:col-start-6 bg-card-background rounded-2xl border-2 border-light-text/10">
              <div className="pt-4 pb-2">
                <div className="border-b-2 border-light-text/10 pb-2">
                  <div className="flex justify-center items-center gap-2"> <svg className="text-theme-primary size-5" width="16"
                    height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M15.5 8.41755V3.85755C15.5 1.96655 15.5 1.02055 14.91 0.503549C14.321 -0.0134512 13.42 0.141549 11.619 0.453549L10.74 0.604549C9.373 0.840549 8.69 0.958549 8 0.958549C7.31 0.958549 6.627 0.840549 5.26 0.604549L4.381 0.452549C2.58 0.142549 1.679 -0.0134511 1.089 0.502549C0.5 1.02155 0.5 1.96755 0.5 3.85855V8.41855C0.5 13.1585 4.032 15.4595 6.249 16.4365C6.85 16.7015 7.151 16.8335 8 16.8335C8.85 16.8335 9.15 16.7015 9.751 16.4365C11.967 15.4595 15.5 13.1575 15.5 8.41755ZM3.976 6.11655C4.079 5.90255 4.464 5.61055 5.083 5.61055C5.703 5.61055 6.088 5.90255 6.191 6.11655C6.345 6.43655 6.721 6.56655 7.029 6.40655C7.1791 6.32587 7.29211 6.19019 7.34432 6.02797C7.39653 5.86576 7.38387 5.68963 7.309 5.53655C6.927 4.74455 6.003 4.31655 5.083 4.31655C4.163 4.31655 3.24 4.74455 2.858 5.53655C2.78313 5.68963 2.77047 5.86576 2.82268 6.02797C2.87489 6.19019 2.9879 6.32587 3.138 6.40655C3.446 6.56655 3.821 6.43655 3.976 6.11655ZM10.916 5.61055C10.297 5.61055 9.912 5.90255 9.809 6.11655C9.77429 6.19173 9.72476 6.25914 9.66337 6.31471C9.60198 6.37029 9.53 6.41289 9.45175 6.43998C9.37349 6.46706 9.29057 6.47806 9.20796 6.47231C9.12535 6.46657 9.04475 6.4442 8.971 6.40655C8.8209 6.32587 8.70789 6.19019 8.65568 6.02797C8.60347 5.86576 8.61613 5.68963 8.691 5.53655C9.073 4.74455 9.997 4.31655 10.917 4.31655C11.837 4.31655 12.76 4.74455 13.142 5.53655C13.297 5.85655 13.172 6.24655 12.862 6.40655C12.7882 6.4442 12.7076 6.46657 12.625 6.47231C12.5424 6.47806 12.4595 6.46706 12.3813 6.43998C12.303 6.41289 12.231 6.37029 12.1696 6.31471C12.1082 6.25914 12.0587 6.19173 12.024 6.11655C11.921 5.90255 11.535 5.61055 10.916 5.61055ZM4.657 10.6175C4.53599 10.4965 4.46587 10.3338 4.46103 10.1627C4.4562 9.99165 4.51701 9.82521 4.631 9.69755C4.68787 9.63728 4.75618 9.58894 4.83193 9.55535C4.90769 9.52177 4.98938 9.50361 5.07223 9.50193C5.15508 9.50026 5.23743 9.5151 5.31448 9.54559C5.39153 9.57609 5.46174 9.62163 5.521 9.67955C5.536 9.69255 5.576 9.72355 5.605 9.74455C5.689 9.80455 5.829 9.89255 6.028 9.98355C6.423 10.1635 7.067 10.3605 8 10.3605C8.933 10.3605 9.577 10.1635 9.973 9.98255C10.171 9.89255 10.311 9.80455 10.395 9.74455C10.4285 9.72112 10.4609 9.69609 10.492 9.66955V9.66855C10.5508 9.61157 10.6205 9.56701 10.6969 9.53753C10.7733 9.50804 10.8548 9.49425 10.9367 9.49695C11.0185 9.49966 11.099 9.51881 11.1732 9.55328C11.2475 9.58774 11.3141 9.63681 11.369 9.69755C11.4838 9.8237 11.5457 9.98921 11.5418 10.1598C11.5379 10.3303 11.4685 10.4928 11.348 10.6135L11.345 10.6155L11.343 10.6175L11.337 10.6235L11.32 10.6395L11.27 10.6825C11.23 10.7175 11.173 10.7625 11.102 10.8125C10.9048 10.9508 10.6948 11.07 10.475 11.1685C9.923 11.4205 9.109 11.6555 8 11.6555C6.891 11.6555 6.077 11.4205 5.525 11.1685C5.30523 11.0703 5.09528 10.9515 4.898 10.8135C4.81416 10.7538 4.73401 10.689 4.658 10.6195L4.657 10.6175Z"
                      fill="#916CE7"></path>
                  </svg>
                    <h2 className="font-medium text-light-text">Testimonials</h2>
                  </div>
                  <p className="font-semibold text-[16px] text-dark-text">Reviews Showcase</p>
                </div>
                <div
                  className="relative h-[12.5rem] md:h-[10.5rem] xl:h-[18.4rem] lg:h-[10.5rem] whitespace-nowrap overflow-y-auto scrollbar-hide">
                  <div
                    className="mr-14 rounded-2xl border-2 border-light-text/10 p-3 mx-4 mt-2 bg-[#141414]  hover:bg-icon-background/50 transition-all duration-300">
                    <div className="flex justify-between border-b-2 border-light-text/10 pb-2">
                      <div className="flex items-center"> <img className="object-cover size-8 rounded-full"
                        src="/testimonials/teddy.webp" alt="profile user Teddy Summers" />
                        <div className="flex items-start flex-col ml-1">
                          <h3 className="font-medium text-xs text-testimonial-title">Teddy Summers</h3>
                          <p className="font-medium text-xs text-testimonial-text">Miami,EEUU</p>
                        </div>
                      </div> <span className="font-medium text-xs text-testimonial-text">14, May 2024</span>
                    </div>
                    <p className="font-medium text-xs text-testimonial-text text-left text-wrap pt-2"> Knowledgeable and
                      professional. Luis is a great developer. He is very responsable and always delivers on time. I highly
                      recommend him for any. </p>
                  </div>
                  <div
                    className="ml-14 rounded-2xl border-2 border-light-text/10 p-3 mx-4 mt-2 bg-[#141414]  hover:bg-icon-background/50 transition-all duration-300">
                    <div className="flex justify-between border-b-2 border-light-text/10 pb-2">
                      <div className="flex items-center"> <img className="object-cover size-8 rounded-full"
                        src="/testimonials/marlon.webp" alt="profile user Marlon Villamar" />
                        <div className="flex items-start flex-col ml-1">
                          <h3 className="font-medium text-xs text-testimonial-title">Marlon Villamar</h3>
                          <p className="font-medium text-xs text-testimonial-text">Roma, Italia</p>
                        </div>
                      </div> <span className="font-medium text-xs text-testimonial-text">12, Dic 2023</span>
                    </div>
                    <p className="font-medium text-xs text-testimonial-text text-left text-wrap pt-2"> Luis is a great
                      developer. He is a developer with a strong work ethic and a positive attitude. He is always willing to
                      help others and is a great team player. I highly recommend him for any development role. </p>
                  </div>
                </div>
              </div>
            </div>
        </Fragment>
    );
}
