import React from "react";

export default function Section(props: {
    id?: string,
    className?: string,
    contentClassName?: string,
    title?: string,
    subtitle?: string,
    level?: 1 | 2 | 3 | 4 | 5 | 6,
    flow?: boolean,
    children?: React.ReactNode
}) {
    let id = props.id || "",
        className = props.className || "",
        title = props.title || "",
        subtitle = props.subtitle || "",
        level = props.level || 2,
        flow = props.flow || false;
    if (title === "" && subtitle !== "")
        throw new Error("Subtitle must have a title.");
    const styles: { [key: string]: string } = {
        h1: "text-6xl font-black text-primary-400",
        h2: "text-5xl font-bold text-primary-400",
        h3: "text-4xl font-medium text-primary-300",
        h4: "text-3xl",
        h5: "text-2xl",
        h6: "text-xl"
    };
    return (
        <section id={id} className={`p-8 rounded-lg odd:p-0 odd:m-8 odd:bg-primary-100` + className}>
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
                <p className="text-lg text-slate-300">{subtitle}</p>
            }
            <div className={`${title !== "" && subtitle !== "" ? "mt-4" : ""} ${props.contentClassName || ""}`}>
                {props.children}
            </div>
        </section>
    );
}