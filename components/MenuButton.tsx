import { useState } from "react";
import Icon from "./Icon"

export default function MenuButton(props: {
    open?: boolean,
    size?: string | number,
    className?: string,
    onClick?: () => void
}) {
    const [open, setOpen] = useState(props.open || false);
    const onClick = () => {
        setOpen(!open);
        if (props.onClick) props.onClick();
    };
    let { className, size } = props;
    className = className || "";

    return (
        <div
            onClick={onClick}
            className={`transition-all rounded-full active:border active:border-black active:bg-neutral-100 flex justify-center items-center w-12 h-12 ${className}`}
        >
            <Icon
                from="md"
                name={open ? "menu_open" : "menu"}
                size={size}
                className="transition-all"
            ></Icon>
        </div>
    );
}