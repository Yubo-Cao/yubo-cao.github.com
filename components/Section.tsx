import React, { useEffect } from "react";
import {
    isEvenChild,
    isFirstChild,
    isOddChild,
    isParentMain,
    isParentRoot
} from "../lib/elements";
import { cls } from "../lib/utils";
import Banner from "./Banner";
import Title from "./Title";

function findContainingSection(el: HTMLElement): HTMLElement | null {
    while (el.tagName !== "SECTION" && el.parentElement) el = el.parentElement;
    return el;
}

function isContainingSectionAlternating(el: HTMLElement): boolean {
    let section = findContainingSection(el);
    if (!section) return false;
    return section.classList.contains("alternate");
}

export type SectionProps = {
    id?: string;
    title?: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children?: React.ReactNode;
    flow?: boolean;
    alternate?: "even" | "odd" | "none" | "this";
    avoidTOC?: boolean;
    className?: string;
    style?: React.CSSProperties;
    contentClassName?: string;
    contentStyle?: React.CSSProperties;
};

export default function Section({
    id = "",
    title = "",
    subtitle = "",
    level = 2,
    children = null,
    flow = false,
    alternate = "even",
    avoidTOC = true,
    className = "",
    style = {},
    contentClassName = "",
    contentStyle = {}
}: SectionProps) {
    const ref = React.useRef<HTMLDivElement>(null),
        hasTitle = title || subtitle,
        [alternating, setAlternating] = React.useState(alternate === "this"),
        spacingClass = ["my-6", "py-4", "sm:py-8"];

    useEffect(() => {
        let section = ref.current;
        if (!section) return;
        if (!isParentMain(section) && !isParentRoot(section)) {
            section.classList.remove(...spacingClass);
        }
        if (isFirstChild(section)) {
            section.classList.remove("my-6");
            section.classList.add("mb-6");
        }
        if (isParentMain(section) || isParentRoot(section)) {
            setAlternating(
                alternate === "this" ||
                (alternate === "even" && isEvenChild(section)) ||
                (alternate === "odd" && isOddChild(section))
            );
        }
    }, [alternating, alternate]);

    const section = (
        <section
            id={id}
            className={cls(
                ...spacingClass,
                alternating ? "alternate" : "",
                className
            )}
            ref={ref}
            style={style}
        >
            {hasTitle && (
                <Title title={title} subtitle={subtitle} level={level} />
            )}
            <div
                className={cls(
                    flow
                        ? cls(
                            "grid",
                            "grid-cols-fit-72",
                            "md:grid-cols-fit-102",
                            "gap-2",
                            "sm:gap-4"
                        )
                        : "",
                    contentClassName
                )}
                style={contentStyle}
            >
                {children}
            </div>
        </section>
    );

    return alternating ? (
        <Banner className="py-2 max-2xl:py-6" avoidTOC={avoidTOC}>
            {section}
        </Banner>
    ) : (
        section
    );
}

export { findContainingSection, isContainingSectionAlternating, Section };
