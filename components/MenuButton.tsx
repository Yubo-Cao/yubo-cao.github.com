import { useState } from "react";
import { cls } from "../lib/utils";
import Icon from "./Icon";

export default function MenuButton({
    open,
    onClick,
    size = 24
}: {
    open: boolean;
    onClick: () => void;
    size?: number;
    className?: string;
}) {
    let [entered, setEntered] = useState(false);

    return (
        <div
            onClick={onClick}
            onMouseEnter={() => setEntered(true)}
            onMouseLeave={() => setEntered(false)}
            className={cls(
                "transition-all",
                "rounded-full",
                "active:border",
                "active:border-black",
                "active:bg-slate-100",
                "hover:bg-slate-100",
                "flex",
                "justify-center",
                "items-center",
                "w-12",
                "h-12"
            )}
        >
            <Icon
                from="md"
                name={open ? "menu_open" : "menu"}
                size={size}
                className="transition-all"
                grade={entered ? 200 : 0}
            ></Icon>
        </div>
    );
}
