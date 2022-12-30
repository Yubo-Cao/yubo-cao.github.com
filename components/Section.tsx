import React, { useEffect } from "react";
import {
    isEvenChild,
    isFirstChild,
    isOddChild,
    isParentMain,
    isParentRoot
} from "../lib/elements";
import { cls } from "../lib/utils";
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

export default function Section({
    id = "",
    className = "",
    contentClassName = "",
    title = "",
    subtitle = "",
    level = 2,
    children = null,
    flow = false,
    alternate = "even",
    avoidTOC = true
}: {
    id?: string;
    className?: string;
    contentClassName?: string;
    title?: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children?: React.ReactNode;
    flow?: boolean;
    alternate?: "even" | "odd" | "none" | "this";
    avoidTOC?: boolean;
}) {
    let ref = React.useRef<HTMLDivElement>(null),
        hasTitle = title || subtitle,
        flowClass = flow
            ? "grid grid-cols-fit-72 md:grid-cols-fit-102 gap-2 sm:gap-4".split(/\s+/)
            : [],
        titleClass = hasTitle ? (level < 3 ? "mt-8" : "mt-4") : "",
        spacingClass = ["my-6", "py-2", "sm:py-8"];

    function addBackground(section: HTMLElement) {
        let background = document.createElement("div");
        background.classList.add(
            "absolute",
            "-left-full",
            "-right-full",
            "top-0",
            "rounded-lg",
            "bottom-0",
            "bg-gradient-to-r",
            "from-primary-100",
            "to-secondary-100",
            "-z-10"
        );
        if (avoidTOC) {
            background.classList.add("xl:-right-4");
            section.classList.add("xl:mr-4");
        }
        section.classList.add("relative", "alternate"); // tagging purpose only
        section.appendChild(background);
        return () => section?.removeChild(background);
    }

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
            switch (alternate) {
                case "even":
                    isEvenChild(section) && addBackground(section);
                    break;
                case "odd":
                    isOddChild(section) && addBackground(section);
                    break;
                case "this":
                    addBackground(section);
                    break;
            }
        }
    });

    return (
        <section id={id} className={cls(...spacingClass, className)} ref={ref}>
            {hasTitle && <Title title={title} subtitle={subtitle} level={level} />}
            <div className={cls(...flowClass, titleClass, contentClassName)}>{children}</div>
        </section>
    );
}

export { findContainingSection, isContainingSectionAlternating, Section };
