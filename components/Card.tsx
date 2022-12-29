import { ReactNode, useEffect, useRef, useState } from "react";
import { isContainingSectionAlternating } from "./Section";

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
    const {
        type = "outlined",
        hoverType = "elevated",
        activeType = "elevated",
        className = "",
        rounded = true,
        accent = "gray",
        alternateAccent = "primary"
    } = props;
    const ref = useRef(null);
    const [color, setColor] = useState(accent);

    useEffect(() => {
        let current = ref.current;
        if (!current) return;
        setColor(isContainingSectionAlternating(current) ? alternateAccent : accent);
    }, [ref, alternateAccent, accent]);

    const classes = [
        "p-4",
        "transition-all",
        "cursor-pointer",
        rounded ? "rounded-lg" : "",
        {
            outlined: `border border-${color}-200`,
            filled: `bg-${color}-100/30`,
            elevated: `shadow shadow-${color}-200/30`
        }[type],
        {
            outlined: `hover:border-${color}-300`,
            filled: `hover:bg-${color}-100`,
            elevated: `hover:shadow-md hover:shadow-${color}-300/30`
        }[hoverType],
        {
            outlined: `active:border-${color}-400`,
            filled: `active:bg-${color}-200`,
            elevated: `active:shadow-lg active:shadow-${color}-400/30`
        }[activeType],
        className
    ];

    return (
        <div className={classes.join(" ")} onClick={props.onClick} ref={ref}>
            {props.children}
        </div>
    );
}

export { Card };
