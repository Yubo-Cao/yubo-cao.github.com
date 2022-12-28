import React, { useEffect } from "react";

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
        title = props.title || "",
        subtitle = props.subtitle || "",
        level = props.level || 2,
        ref = React.useRef<HTMLDivElement>(null);
    if (title === "" && subtitle !== "")
        throw new Error("Subtitle must have a title.");
    const styles: { [key: string]: string } = {
        h1: "text-6xl font-black text-primary-400",
        h2: "text-4xl font-bold text-primary-400",
        h3: "text-2xl font-semibold",
        h4: "text-3xl",
        h5: "text-2xl",
        h6: "text-xl"
    };

    useEffect(() => {
        let section = ref?.current,
            parent = section?.parentElement,
            child = parent?.firstChild,
            idx = 0;
        if (!child) return;
        if (parent?.tagName !== "MAIN") return;
        while (true) {
            if (child.nodeType === Node.ELEMENT_NODE) idx++;
            if (child === section || !child.nextSibling) break;
            child = child.nextSibling;
        }
        if (idx % 2 === 1) {
            console.log(`Section ${title} is odd.`)
            let background = document.createElement("div");
            section!!.className += " relative";
            background.className = "absolute -left-16 -right-16 top-0 bottom-0 bg-primary-100/30 -z-10";
            section?.appendChild(background);
            return () => {
                section?.removeChild(background);
            }
        }
    });
    return (
        <section id={id} className={"py-8 " + className} ref={ref}>
            {
                title !== "" &&
                React.createElement(
                    "h" + level,
                    { className: `${styles[("h" + level) as string]} mb-1` },
                    title,
                    []
                )
            }
            {
                subtitle !== "" &&
                <p className="text-lg font-semibold text-slate-500">{subtitle}</p>
            }
            {
                // if this is a even section, draw a full width line
            }
            <div className={`${title !== "" && subtitle !== "" ? "mt-4" : ""} ${props.contentClassName || ""}`}>
                {props.children}
            </div>
        </section>
    );
}