import React, { ReactNode } from "react";

export default function Title(props: {
    title?: string | ReactNode;
    subtitle?: string | ReactNode;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
    subtitleClassName?: string;
    children?: string | ReactNode;
}) {
    const titleCase = (str: string | ReactNode) =>
        typeof str === "string"
            ? str
                  .split(/\s+/)
                  .map((s) => s[0].toUpperCase() + s.substring(1))
                  .join(" ")
            : str;

    let title = props.title ? titleCase(props.title) : "",
        subtitle = props.subtitle ? titleCase(props.subtitle) : "",
        level = props.level,
        className = props.className || "",
        subtitleClassName = props.subtitleClassName || "";

    if (props.children !== undefined && props.title === undefined) title = props.children;
    if (title === undefined) throw new Error("Title must have a title.");
    if (title === "" && subtitle !== "") throw new Error("Subtitle must have a title.");

    const styles: { [key: string]: string } = {
        h1: "text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-indigo-500",
        h2: "text-4xl font-extrabold text-primary-400",
        h3: "text-2xl font-bold",
        h4: "text-xl font-semibold",
        h5: "text-lg font-medium",
        h6: "text-base font-medium"
    };
    return (
        <div>
            {React.createElement(
                "h" + level,
                {
                    className: `${styles[("h" + level) as string]} mb-1.5 ${className}`
                },
                title,
                []
            )}
            {subtitle !== "" &&
                React.createElement(
                    "div",
                    { className: `text-lg ${subtitleClassName}` },
                    subtitle,
                    []
                )}
        </div>
    );
}
