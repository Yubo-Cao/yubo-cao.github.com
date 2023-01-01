import React, { ReactNode } from "react";
import { cls } from "../lib/utils";

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

    if (props.children !== undefined && props.title === undefined)
        title = props.children;
    if (title === undefined) throw new Error("Title must have a title.");
    if (title === "" && subtitle !== "")
        throw new Error("Subtitle must have a title.");

    const styles: { [key: string]: string } = {
        h1: cls(
            "text-7xl",
            "font-black",
            "bg-clip-text",
            "text-transparent",
            "bg-gradient-to-r",
            "from-primary-500",
            "to-secondary-500",
            "leading-tight",
            "mb-2"
        ),
        h2: cls(
            "text-5xl",
            "font-extrabold",
            "after:content-['']",
            "after:block",
            "after:w-32",
            "after:h-1",
            "after:mb-4",
            "after:mt-1",
            "after:rounded-full",
            "after:bg-gradient-to-r",
            "after:from-primary-500",
            "after:to-secondary-500"
        ),
        h3: "text-2xl font-bold",
        h4: "text-xl font-semibold",
        h5: "text-lg font-medium",
        h6: "text-base font-medium"
    };
    return (
        <div className={level < 3 ? "mb-8" : "mb-4"}>
            {React.createElement(
                "h" + level,
                {
                    className: `${
                        styles[("h" + level) as string]
                    } mb-1.5 ${className}`
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
