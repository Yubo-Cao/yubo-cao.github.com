import { Banner } from "@/components";
import {
    cls,
    isEvenChild,
    isFirstChild,
    isOddChild,
    isParentMain,
    isParentRoot
} from "@/lib";
import React, { useEffect, useMemo } from "react";

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
    flow?: boolean;
    alternate?: "even" | "odd" | "none" | "this";
    avoidTOC?: boolean;
    className?: string;
    style?: React.CSSProperties;
    contentClassName?: string;
    contentStyle?: React.CSSProperties;
    titleClassName?: string;
    subtitleClassName?: string;
    level?: number;
    children?: React.ReactNode;
};

export default function Section({
    id = "",
    title = "",
    subtitle = "",
    children = null,
    flow = false,
    alternate = "even",
    avoidTOC = true,
    className = "",
    style = {},
    contentClassName = "",
    titleClassName = "",
    subtitleClassName = "",
    contentStyle = {},
    level = 2
}: SectionProps) {
    const ref = React.useRef<HTMLDivElement>(null),
        hasTitle = title || subtitle,
        [alternating, setAlternating] = React.useState(alternate === "this"),
        spacingClass = useMemo(() => ["my-6", "py-4", "sm:py-8"], []);

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
    }, [alternating, alternate, spacingClass]);

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
                <>
                    {title &&
                        React.createElement(
                            `h${level}`,
                            { className: "text-slate-800 " + titleClassName },
                            title
                        )}
                    {subtitle &&
                        React.createElement(
                            `h${level + 1}`,
                            { className: "text-slate-600" + subtitleClassName },
                            subtitle
                        )}
                </>
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
        <Banner avoidTOC={avoidTOC} style={{ paddingTop: "2rem" }}>
            {section}
        </Banner>
    ) : (
        section
    );
}

export { Section, findContainingSection, isContainingSectionAlternating };
