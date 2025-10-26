import { FaProjectDiagram } from "react-icons/fa";
import { HiEmojiHappy } from "react-icons/hi";
import { PiShootingStarFill } from "react-icons/pi";
import { IconBadge } from "../ui/IconBadge";
import { Fragment } from "react/jsx-runtime";

export default function MetricsCard() {
    return (
        <Fragment>
            <div className="hidden xl:block xl:row-span-2 xl:col-start-3 bg-card-background rounded-2xl border-2 border-light-text/10">
                <div className="py-2 flex flex-col justify-center items-center h-full">
                    <div className="text-[65px] font-bold text-center text-transparent bg-clip-text bg-linear-to-b from-gray-100 to-gray-400 drop-shadow-lg">
                        10+
                    </div>
                    <IconBadge
                        icon={<FaProjectDiagram className="text-primary" />}
                        text={"Applications Developed"}
                        className="bg-gray-600/10 text-xs font-normal text-white border  px-2 py-1 rounded-full"
                        iconSize={20}
                    />
                </div>
            </div>
            <div className="hidden xl:block xl:row-span-2 xl:col-start-4 bg-card-background rounded-2xl border-2 border-light-text/10">
                <div className="py-2 flex flex-col justify-center items-center h-full">
                    <div className="text-[65px] font-bold text-center text-transparent bg-clip-text bg-linear-to-b from-gray-100 to-gray-400 drop-shadow-lg">
                        03+
                    </div>
                    <IconBadge
                        icon={<HiEmojiHappy className="text-primary" />}
                        text={"Happy Clients"}
                        className="bg-gray-600/10 text-xs font-normal text-white border  px-2 py-1 rounded-full"
                        iconSize={20}
                    />
                </div>
            </div>
            <div className="hidden xl:block xl:row-span-2 xl:col-start-5 bg-card-background rounded-2xl border-2 border-light-text/10">
                <div className="py-2 flex flex-col justify-center items-center h-full">
                    <div className="text-[65px] font-bold text-center text-transparent bg-clip-text bg-linear-to-b from-gray-100 to-gray-400 drop-shadow-lg">
                        04+
                    </div>
                    <IconBadge
                        icon={<PiShootingStarFill className="text-primary" />}
                        text={"Years Expertise"}
                        className="bg-gray-600/10 text-xs font-normal text-white border  px-2 py-1 rounded-full"
                        iconSize={20}
                    />
                </div>
            </div>
            <div className="flex justify-between items-center gap-1 xl:hidden">
                <div className="xl:row-span-2 xl:col-start-3 bg-card-background rounded-2xl border-2 border-light-text/10 h-36">
                    <div className="py-2 px-1 flex flex-col justify-center items-center h-full">
                        <div className="flex justify-center items-center gap-px">
                            {/* <h2
                    className="counter-projects min-w-[1ch] text-center transition-transform duration-300 font-medium text-light-text text-[65px] leading-tight"
                            data-target="11">11</h2> <span className="text-theme-primary font-medium text-5xl">+</span> */}
                            <div className="text-[40px] font-bold text-center text-transparent bg-clip-text bg-linear-to-b from-gray-100 to-gray-400 drop-shadow-lg">
                                30+
                            </div>
                        </div>
                        <IconBadge
                            icon={<FaProjectDiagram className="text-primary" />}
                            text={"Webapps Built"}
                            className="bg-gray-600/10 text-xs font-normal text-white border  px-2 py-1 rounded-full"
                            iconSize={20}
                        />
                    </div>
                </div>
                <div className="xl:row-span-2 xl:col-start-4 bg-card-background rounded-2xl border-2 border-light-text/10 h-36">
                    <div className="py-2 px-1 flex flex-col justify-center items-center h-full">
                        <div className="text-[40px] font-bold text-center text-transparent bg-clip-text bg-linear-to-b from-gray-100 to-gray-400 drop-shadow-lg">
                            03+
                        </div>
                        <IconBadge
                            icon={<HiEmojiHappy className="text-primary" />}
                            text={"Happy Clients"}
                            className="bg-gray-600/10 text-xs font-normal text-white border  px-2 py-1 rounded-full"
                            iconSize={20}
                        />
                    </div>
                </div>
                <div className="xl:row-span-2 xl:col-start-5 bg-card-background rounded-2xl border-2 border-light-text/10 h-36">
                    <div className="py-2 px-1 flex flex-col justify-center items-center h-full">
                        <div className="text-[40px] font-bold text-center text-transparent bg-clip-text bg-linear-to-b from-gray-100 to-gray-400 drop-shadow-lg">
                            04+
                        </div>
                        <IconBadge
                            icon={<PiShootingStarFill className="text-primary" />}
                            text={"Years Expertise"}
                            className="bg-gray-600/10 text-xs font-normal text-white border  px-2 py-1 rounded-full"
                            iconSize={20}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}