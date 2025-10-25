import { FaMapPin } from "react-icons/fa";
import { IconBadge } from "../ui/IconBadge";
import { CardShell } from "./CardShell";
import { BsStack } from "react-icons/bs";

export default function TechStackCard() {
    return (
        <CardShell>
            <div className="flex flex-col items-center">
            <IconBadge
                icon={<BsStack className="text-purple-400"/>}
                text={"My Stack"}
                className="py-2"
                iconSize={18}
            />
                <p className="text-sm text-neutral-400">Technologies I use</p>
            </div>
        </CardShell>
    )
}