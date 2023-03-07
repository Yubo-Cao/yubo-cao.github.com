import { useState } from "react";
import { cls } from "../../lib/utils";
import Icon from "../icon/Icon";

export default function MenuButton({
    open,
    onClick,
    size = 24,
    className = ""
}: {
    open: boolean;
    onClick: () => void;
    size?: number;
    className?: string;
}) {
    let [entered, setEntered] = useState(false);

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setEntered(true)}
            onMouseLeave={() => setEntered(false)}
            className={cls(
                "transition-all",
                "rounded-full",
                "active:border-2",
                "active:border-black",
                "active:bg-slate-100",
                "hover:bg-slate-100",
                "flex",
                "justify-center",
                "items-center",
                "w-12",
                "h-12",
                className
            )}
        >
            <Icon
                from="md"
                name={open ? "menu_open" : "menu"}
                size={size}
                className="transition-all"
                grade={entered ? 200 : 0}
            ></Icon>
        </button>
    );
}
