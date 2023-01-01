import React from "react";
import Icon, { IconProps } from "./Icon";

// @ts-ignore
interface IconsProps extends IconProps {
    names?: string[];
    children?: string;
    iconClassName?: string;
    name?: string;
}

export default function Icons(props: IconsProps) {
    let {
        children,
        names = children
            ?.split(/(\s+|,)/)
            ?.filter((v) => v !== "" && v !== " " && v !== ","),
        className,
        iconClassName
    } = props;

    if (!names) {
        throw new Error("You must specify either names or children for Icons");
    }

    return (
        <div className={`flex items-center gap-2 ${className || ""}`}>
            {names.map((name, i) => {
                return React.createElement(Icon, {
                    key: i,
                    ...props,
                    name: name,
                    className: iconClassName
                });
            })}
        </div>
    );
}
