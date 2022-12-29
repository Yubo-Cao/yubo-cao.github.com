import React, { useEffect } from "react";
import Title from "./Title";
import {
    isEvenChild,
    isFirstChild,
    isOddChild,
    isParentMain,
    isParentRoot
} from "../lib/elements";

function findContainingSection(el: HTMLElement): HTMLElement | null {
    while (el.tagName !== "SECTION" && el.parentElement) el = el.parentElement;
    return el;
}

function isContainingSectionAlternating(el: HTMLElement): boolean {
    let section = findContainingSection(el);
    if (!section) return false;
    return section.classList.contains("alternate");
}

export default function Section(props: {
    id?: string;
    className?: string;
    contentClassName?: string;
    title?: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children?: React.ReactNode;
    flow?: boolean;
    alternate?: "even" | "odd" | "none";
}) {
    let id = props.id || "",
        className = props.className || "",
        ref = React.useRef<HTMLDivElement>(null),
        hasTitle = props.title !== undefined || props.subtitle !== undefined,
        flow = props.flow || false,
        alternate = props.alternate || "even",
        level = props.level || 2;

    const addBackground = (section: HTMLElement) => {
            let background = document.createElement("div");
            background.classList.add(
                "absolute",
                "-left-full",
                "-right-full",
                "xl:right-0",
                "top-0",
                "rounded-lg",
                "bottom-0",
                "bg-primary-100/30",
                "-z-10"
            );
            section.classList.add("relative", "alternate"); // tagging purpose only
            section.appendChild(background);
            return () => section?.removeChild(background);
        },
        flowClass = flow ? "grid grid-cols-fit-72 md:grid-cols-fit-102 gap-2 sm:gap-4 " : " ",
        titleClass = hasTitle ? (level < 3 ? "mt-8 " : "mt-4 ") : " ";

    useEffect(() => {
        let section = ref.current;
        if (!section) return;
        if (!isParentMain(section)) {
            section.classList.remove("my-6", "py-8");
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
            }
        }
    });

    return (
        <section id={id} className={"my-6 py-8 px-4 " + className} ref={ref}>
            {hasTitle && <Title title={props.title} subtitle={props.subtitle} level={level} />}
            <div className={`${flowClass} ${titleClass} ${props.contentClassName || ""}`}>
                {props.children}
            </div>
        </section>
    );
}

export { findContainingSection, isContainingSectionAlternating, Section };
