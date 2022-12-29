import { css, keyframes } from "@emotion/react";

function LoadText(width: number, height: number, lineheight?: number, className?: string) {
    let lineHeight = lineheight || 16,
        lineCount = Math.ceil(height / lineHeight);
    return (
        <div
            style={{ width: width, height: height }}
            className={`animate-pulse space-y-2 
            overflow-hidden ${className || ""}`}
        >
            {[...Array(lineCount)].map((_, i) => (
                <div
                    key={i}
                    className="bg-gray-300 rounded w-full"
                    style={{
                        height: lineHeight
                    }}
                ></div>
            ))}
        </div>
    );
}

function LoadIcon(size: number, className?: string) {
    const rotate = keyframes`
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    `;
    const backandforth = keyframes`
        0% {
            transform: rotate(-140deg);
        }
        50% {
            transform: rotate(-160deg);
        }
        100% {
            transform: rotate(140deg);
        }
    `;
    const rotatePartial = keyframes`
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(220deg);
        }
    `;
    return (
        <div
            css={css`
                width: ${size}px;
                height: ${size}px;
                animation: ${rotate} 4.8s linear infinite;
                position: relative;
            `}
            className={`${className || ""}`}
        >
            <span
                css={css`
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    margin: auto;
                    height: ${size}px;
                    width: ${size}px;
                    clip: rect(0, ${size}px, ${size}px, ${size / 2}px);
                    animation: ${rotatePartial} 1.2s linear infinite;

                    &::after {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        margin: auto;
                        height: ${size}px;
                        width: ${size}px;
                        border-radius: 50%;
                        clip: rect(0, ${size}px, ${size}px, ${size / 2}px);
                        animation: ${backandforth} 1.2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
                    }
                `}
                className={`after:border-gray-300 after:border-4 after:border-solid after:rounded-full`}
            ></span>
        </div>
    );
}

function LoadImage(width: number, height: number, className?: string) {
    return (
        <div style={{ width: width, height: height }} className={className || ""}>
            <div className="w-full h-full bg-gray-300 rounded"></div>
        </div>
    );
}

export default function ({
    type,
    size,
    width,
    height,
    className,
    lineheight
}: {
    type: "text" | "icon" | "image";
    size?: number;
    width?: number;
    height?: number;
    className?: string;
    lineheight?: number;
}) {
    if (!width && !height && !size) {
        throw new Error(
            "You must specify either width, height, or size for a text loading component"
        );
    }
    switch (type) {
        case "text":
            let w = width || size,
                h = height || size;
            return LoadText(w!!, h!!, lineheight, className);
        case "icon":
            let s = size;
            if (!s) {
                if (width && height && width !== height) {
                    throw new Error(
                        "Width and height must be equal for an icon loading component"
                    );
                }
                s = width || height;
            }
            return LoadIcon(s!!, className);
        case "image":
            if (!width || !height) {
                throw new Error(
                    "You must specify both width and height for an image loading component"
                );
            }
            return LoadImage(width, height, className);
        default:
            throw new Error("Invalid loading type");
    }
}
