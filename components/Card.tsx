import {isContainingSectionAlternating} from "./Section";
import {ReactNode, useEffect, useRef, useState, RefObject} from "react";

export default function Card(props: {
    onClick: () => void;
    children: ReactNode;
    className?: string;
    type?: "outlined" | "filled" | "elevated";
    hoverType?: "outlined" | "filled" | "elevated";
    activeType?: "outlined" | "filled" | "elevated";
    rounded?: boolean;
    accent?: string;
    alternateAccent?: string;
}) {
    let type = props.type || "outlined",
        hoverType = props.hoverType || type,
        activeType = props.activeType || type,
        className = props.className || "",
        rounded = props.rounded || true,
        ref = useRef(null),
        accent = props.accent || "gray",
        alternateAccent = props.alternateAccent || "primary",
        [color, setColor] = useState(accent);

    let cls = {
        outlined: `border border-${color}-200`,
        filled: `bg-${color}-100/30`,
        elevated: `shadow shadow-${color}-200/30`
    };
    let hoverCls = {
        outlined: `hover:border-${color}-300`,
        filled: `hover:bg-${color}-100`,
        elevated: `hover:shadow-md hover:shadow-${color}-300/30`
    };
    let activeCls = {
        outlined: `active:border-${color}-400`,
        filled: `active:bg-${color}-200`,
        elevated: `active:shadow-lg active:shadow-${color}-400/30`
    };
    useEffect(() => {
        let current = ref.current;
        if (!current) return;
        setColor(isContainingSectionAlternating(current) ? alternateAccent : accent);
    }, [ref, alternateAccent, accent]);

    return (
        <div
            className={
                `p-4 transition-all cursor-pointer ${rounded ? "rounded-lg" : ""}  ${
                    hoverCls[hoverType]
                } ${activeCls[activeType]} ${cls[type]} ` + className
            }
            onClick={props.onClick}
            ref={ref}
        >
            {props.children}
        </div>
    );
}

export {Card};
