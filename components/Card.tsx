import { isContainingSectionAlternating } from "./Section";
import { ReactNode, useEffect, useRef, useState, RefObject } from "react";

export default function Card(props: {
    onClick: () => void;
    children: ReactNode;
    className?: string;
    type?: "outlined" | "filled" | "elevated";
    hoverType?: "outlined" | "filled" | "elevated";
    activeType?: "outlined" | "filled" | "elevated";
    rounded?: boolean;
    accent?: string;
    rootRef?: RefObject<HTMLDivElement>;
}) {
    let type = props.type || "outlined",
        hoverType = props.hoverType || type,
        activeType = props.activeType || type,
        className = props.className || "",
        rounded = props.rounded || true,
        accent = props.accent || "gray";
    let cls = {
        outlined: `border border-${accent}-200`,
        filled: `bg-${accent}-100/30`,
        elevated: `shadow shadow-${accent}-200/30`
    };
    let hoverCls = {
        outlined: `hover:border-${accent}-300`,
        filled: `hover:bg-${accent}-100`,
        elevated: `hover:shadow-md hover:shadow-${accent}-300/30`
    };
    let activeCls = {
        outlined: `active:border-${accent}-400`,
        filled: `active:bg-${accent}-200`,
        elevated: `active:shadow-lg active:shadow-${accent}-400/30`
    };
    return (
        <div
            className={
                `p-4 transition-all cursor-pointer ${rounded ? "rounded-lg" : ""}  ${
                    hoverCls[hoverType]
                } ${activeCls[activeType]} ${cls[type]} ` + className
            }
            onClick={props.onClick}
            ref={props.rootRef}
        >
            {props.children}
        </div>
    );
}

function AlternatingCard(props: {
    children: ReactNode;
    className?: string;
    onClick: () => void;
    type?: "outlined" | "filled" | "elevated";
    hoverType?: "outlined" | "filled" | "elevated";
    activeType?: "outlined" | "filled" | "elevated";
    rounded?: boolean;
    accent?: string;
    alternateAccent?: string;
}) {
    let ref = useRef(null),
        accent = props.accent || "gray",
        alternateAccent = props.alternateAccent || "primary",
        [color, setColor] = useState(accent);
    useEffect(() => {
        let current = ref.current;
        if (!current) return;
        setColor(isContainingSectionAlternating(current) ? alternateAccent : accent);
    }, [ref]);
    return (
        <Card
            className={props.className}
            onClick={props.onClick}
            type={props.type}
            hoverType={props.hoverType}
            activeType={props.activeType}
            rounded={props.rounded}
            accent={color}
            rootRef={ref}
        >
            {props.children}
        </Card>
    );
}

export { AlternatingCard, Card };
