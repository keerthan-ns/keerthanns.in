import React from "react";

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const iconWithProps = React.cloneElement(icon as any, {
        size: iconSize,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        className: `${(icon.props as any)?.className || ""}`,
    });

    return (
        <div className={"flex items-center justify-center gap-2 px-2 py-3" + className}>
            {iconWithProps}
            {text}
        </div>
    );
};
