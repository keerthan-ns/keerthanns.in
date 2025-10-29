"use client"

import { IconBadge } from "../common/IconBadge";
import { Fragment } from "react";
import { socials, socialsWithIcons } from "@/data";
import Link from "next/link";
import { MdConnectWithoutContact } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { BsRocketTakeoffFill } from "react-icons/bs";

export default function SocialsCard() {
  return (
    <Fragment>
      {/* <div className="block md:hidden xl:col-span-2 xl:row-span-4 xl:col-start-6 rounded-2xl border-2 border-light-text/10"> */}
      <div className="block md:hidden xl:col-span-2 xl:row-span-2 xl:col-start-6 xl:row-start-5 rounded-2xl ">
        <div className="flex flex-col items-center py-4 px-8 mb-2 rounded-2xl border-2 border-light-text/10">
          <div className="w-fit p-3 bg-slate-500/20 rounded-full">
            <MdConnectWithoutContact size={30} className="text-primary" />
          </div>
          <h3 className="font-normal text-xl text-slate-300 my-2">
            Let&apos;s Work Together!
          </h3>
          <p className="text-sm text-neutral-400 mb-3">
            I take up <span className="font-semibold text-primary">freelance</span> work occasionally!
          </p>
          <Link
            href={socials.mail}
            className={`w-full flex justify-center items-center gap-2 bg-slate-400/20 font-medium text-sm text-white rounded-2xl p-3 shadow-lg transition-opacity duration-500 hover:bg-primary/90 group`}
          >
            <IoIosMail size={24} className="text-primary group-hover:animate-bounce group-hover:text-white" />
            Hit me up
          </Link>
        </div>
        <div className="flex flex-col items-center py-4 px-8 rounded-2xl border-2 border-light-text/10">
          <IconBadge
            icon={<BsRocketTakeoffFill className="text-primary" />}
            text={"Follow Me"}
            className="py-1 font-medium text-neutral-400"
            iconSize={18}
          />
          <p className="text-sm text-white">Online Presence</p>
          <div className="flex flex-wrap justify-center items-center gap-2 pt-3 px-2">
            {socialsWithIcons.map((social) => (
              <Link
                key={social.name} href={social.href} target="_blank"
                className="text-neutral-400 bg-slate-500/20 py-1 px-2 text-sm rounded-md hover:text-white transition-colors duration-300"
              >
                <div className="flex justify-start items-center gap-1">
                  <social.icon />
                  <h3 className="font-medium">{social.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:block xl:col-span-2 xl:row-span-4 xl:col-start-6 rounded-2xl ">
        <div className="flex flex-col items-center py-5 px-8 mb-2 rounded-2xl border-2 border-light-text/10">
          <div className="w-fit p-3 bg-slate-500/20 rounded-full">
            <MdConnectWithoutContact size={30} className="text-primary" />
          </div>
          <h3 className="font-normal text-xl text-slate-300 my-2">
            Let&apos;s Work Together!
          </h3>
          <p className="text-sm text-neutral-400 mb-3">
            I take up <span className="font-semibold text-primary">freelance</span> work occasionally!
          </p>
          <Link
            href={socials.mail}
            className={`w-full flex justify-center items-center gap-2 bg-slate-400/20 font-medium text-sm text-white rounded-2xl p-3 shadow-lg transition-opacity duration-500 hover:bg-primary/90 group`}
          >
            <IoIosMail size={24} className="text-primary group-hover:animate-bounce group-hover:text-white" />
            Hit me up
          </Link>
        </div>
        <div className="flex flex-col items-center py-4 px-8 rounded-2xl border-2 border-light-text/10">
          <IconBadge
            icon={<BsRocketTakeoffFill className="text-primary" />}
            text={"Follow Me"}
            className="py-1 font-medium text-neutral-400"
            iconSize={18}
          />
          <p className="text-sm text-white">Online Presence</p>
          <div className="flex flex-wrap justify-center items-center gap-2 pt-5 px-2">
            {socialsWithIcons.map((social) => (
              <Link
                key={social.name} href={social.href} target="_blank"
                className="text-neutral-400 bg-slate-500/20 py-1 px-2 text-sm rounded-md hover:text-white transition-colors duration-300"
              >
                <div className="flex justify-start items-center gap-1">
                  <social.icon />
                  <h3 className="font-medium">{social.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
