import { FaMapPin } from "react-icons/fa";
import { IconBadge } from "../ui/IconBadge";
import { CardShell } from "./CardShell";
import { BsStack } from "react-icons/bs";
import { FaSuitcase } from "react-icons/fa6";

export default function ExperienceCard() {
    return (
        <CardShell>
            <div className="flex flex-col items-center">
                <IconBadge
                    icon={<FaSuitcase className="text-purple-400" />}
                    text={"Experience"}
                    className="py-2"
                    iconSize={18}
                />
                <p className="text-sm text-neutral-400">
                    Companies I&apos;ve worked with
                </p>
            </div>
        </CardShell>
    )
}