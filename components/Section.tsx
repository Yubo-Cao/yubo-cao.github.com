import React, { useEffect } from "react";
import Title from "./Title";

export default function Section(props: {
    id?: string,
    className?: string,
    contentClassName?: string,
    title?: string | React.ReactNode,
    subtitle?: string | React.ReactNode,
    level?: 1 | 2 | 3 | 4 | 5 | 6,
    children?: React.ReactNode
}) {
    let id = props.id || "",
        className = props.className || "",
        ref = React.useRef<HTMLDivElement>(null),
        hasTitle = props.title !== undefined || props.subtitle !== undefined;

    useEffect(() => {
        let section = ref?.current,
            parent = section?.parentElement,
            child = parent?.firstChild,
            idx = 0;
        if (!child) return;
        if (parent?.tagName !== "MAIN") {
            section!!.classList.remove('my-6', 'py-4');
            return;
        }
        while (true) {
            if (child.nodeType === Node.ELEMENT_NODE) idx++;
            if (child === section || !child.nextSibling) break;
            child = child.nextSibling;
        }
        if (idx % 2 === 1) {
            let background = document.createElement("div");
            section!!.className += " relative";
            background.className = "absolute -left-full -right-full rounded-2xl xl:-right-4 top-0 bottom-0 bg-primary-100/30 -z-10";
            section?.appendChild(background);
            return () => { section?.removeChild(background); }
        }
    });
    let level = props.level || 2;
    return (
        <section id={id} className={"py-4 my-6 " + className} ref={ref}>
            {
                hasTitle &&
                <Title title={props.title} subtitle={props.subtitle} level={level} />
            }
            <div className={`${hasTitle ? (level < 3 ? "mt-6" : "mt-3") : ""} ${props.contentClassName || ""}`}>
                {props.children}
            </div>
        </section>
    );
}