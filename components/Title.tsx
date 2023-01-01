import React, { ReactNode } from "react";
import { cls } from "../lib/utils";

export default function Title(props: {
    title?: string | ReactNode;
    subtitle?: string | ReactNode;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
    subtitleClassName?: string;
    containerClassName?: string;
    children?: string | ReactNode;
}) {
    const titleCase = (str: string | ReactNode) =>
        str && typeof str === "string"
            ? str
                  .split(/\s+/)
                  .map((s) => s[0].toUpperCase() + s.substring(1))
                  .join(" ")
            : str;

    let {
        children = undefined,
        title = children,
        subtitle = "",
        level = 1,
        className = "",
        subtitleClassName = "",
        containerClassName = ""
    } = props;

    title = titleCase(title) as any;
    subtitle = titleCase(subtitle) as any;

    if (title == null) throw new Error("Title must have a title.");
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
            "after:mt-1.5",
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
        <div
            className={cls(
                !/\bm[tlbrxy]?-\d+\b/.test(containerClassName)
                    ? level < 3
                        ? "mb-6"
                        : "mb-3"
                    : "",
                containerClassName
            )}
        >
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
                    { className: `text-lg ${subtitleClassName} -mt-2` },
                    subtitle,
                    []
                )}
        </div>
    );
}
