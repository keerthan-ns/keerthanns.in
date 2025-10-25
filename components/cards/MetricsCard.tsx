import { FaMapPin, FaProjectDiagram } from "react-icons/fa";
import { HiEmojiHappy } from "react-icons/hi";
import { PiShootingStarFill } from "react-icons/pi";
import { CardShell } from "./CardShell";
import { IconBadge } from "../ui/IconBadge";

const metrics = [
    {
        value: "10+",
        icon: <FaProjectDiagram className="text-purple-400" />,
        label: "Projects",
    },
    {
        value: "03+",
        icon: <HiEmojiHappy className="text-purple-400" />,
        label: "Happy Clients",
    },
    {
        value: "04+",
        icon: <PiShootingStarFill className="text-purple-400" />,
        label: "Year Expertise",
    },
];

export default function MetricsCard() {
    return (
        <div className="grid grid-cols-3 gap-3">
            {metrics.map((metric, idx) => (
                <CardShell key={idx}>
                    {/* <div className="bg-[#18181b] rounded-xl border border-gray-800 flex flex-col items-center py-6 px-4 shadow-md"> */}
                    <div className="text-5xl font-bold text-center text-transparent bg-clip-text bg-linear-to-b from-gray-100 to-gray-400 drop-shadow-lg mb-3">
                        {metric.value}
                        {/* <span className="text-purple-400 text-2xl align-top ml-1">+</span> */}
                    </div>
                    {/* <div className="flex items-center justify-center gap-2 mt-2 bg-gray-900/80 rounded-full px-3 py-1">
							<span className="text-purple-400">{metric.icon}</span>
							<span className="text-sm text-gray-200 font-medium">
								{metric.label}
							</span>
						</div> */}

                    <IconBadge
                        icon={metric.icon}
                        text={metric.label}
                        className="bg-gray-600/10 text-xs font-normal text-white border  px-2 py-1 rounded-full"
                        iconSize={18}
                    />
                    {/* </div> */}
                </CardShell>
            ))}
        </div>
    );
}