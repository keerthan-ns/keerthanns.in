import React, { ReactElement } from "react";
import { Badge } from "./badge";

interface IconBadgeProps {
    icon: React.ReactElement;
    text: React.ReactNode;
    className?: string;
    iconSize?: number;
}

export const IconBadge: React.FC<IconBadgeProps> = ({
    icon,
    text,
    className = "",
    iconSize = 18,
}) => {
    // Force set size and merge className for Lucide icons
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const iconWithProps = React.cloneElement(icon as any, {
        size: iconSize,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        className: `${(icon.props as any)?.className || ""}`,
    });

    return (
        // <Badge className={className}>
        //   {iconWithProps}
        //   {text}
        // </Badge>

        <div
            // className="flex items-center gap-2 px-4 py-2 rounded-full
            //          border border-white/20 text-sm font-medium hover:bg-white/10 transition"
            className={"flex items-center justify-center gap-2 px-2 py-3" + className}
        >
            {iconWithProps}
            {text}
        </div>
    );
};
