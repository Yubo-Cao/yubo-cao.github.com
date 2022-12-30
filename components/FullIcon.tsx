import Image from "next/image";
import { cls } from "../lib/utils";

function to_nearest(value: number, valids: number[]) {
    let nearest = valids[0];
    for (let valid of valids) {
        if (Math.abs(value - valid) < Math.abs(value - nearest)) {
            nearest = valid;
        }
    }
    return nearest;
}

function to_px(length: string | number): number {
    if (typeof length === "number") return length;
    const match = length.match(/^(\d+)(px|rem|em)$/);
    if (!match) throw new Error(`Invalid length: ${length}`);
    const [, num, unit] = match;
    if (unit !== "px" && unit !== "rem" && unit !== "em") return 20;
    return (
        parseInt(num) *
        {
            px: 1,
            rem: 16,
            em: 16
        }[unit]
    );
}

interface InnerIcon {
    name: string;
    from?: "md" | "fa" | "mdi";
    type?: "rounded" | "sharp" | "outlined" | "brand" | "classic" | "regular" | "solid";
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
    grade?: -25 | 0 | 200;
    size?: number;
    fill?: boolean;
    className?: string;
}

function _icon({
    name,
    from = "md",
    type = "rounded",
    weight = 200,
    grade = 0,
    size = 24,
    fill = false,
    className = ""
}: InnerIcon) {
    console.log("icon", name, from, type);
    if (from === "md") {
        const supported = ["rounded", "sharp", "outlined"];
        if (!supported.includes(type)) {
            throw new Error(
                `Material Design Icons only support ${supported.join(", ")}. Got ${type}.`
            );
        }
        type = type as "rounded" | "sharp" | "outlined";

        return (
            <>
                <style jsx global>{`
                    @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded");
                    @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp");
                    @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined");
                `}</style>
                <i
                    className={cls(
                        {
                            rounded: "material-symbols-rounded",
                            sharp: "material-symbols-sharp",
                            outlined: "material-symbols-outlined"
                        }[type],
                        className
                    )}
                    style={{
                        fontSize: size,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        lineHeight: 1,
                        letterSpacing: "normal",
                        textTransform: "none",
                        whiteSpace: "nowrap",
                        wordWrap: "normal",
                        direction: "ltr",
                        MozFontFeatureSettings: "liga",
                        MozOsxFontSmoothing: "grayscale",
                        WebkitFontFeatureSettings: "liga",
                        WebkitFontSmoothing: "antialiased",
                        // @ts-ignore
                        fontVariationSettings: `'wght' ${weight}, 'GRAD' ${grade}, 'FILL' ${
                            fill ? 1 : 0
                        }, 'opsz' ${to_nearest(to_px(size), [20, 24, 40, 48])}`
                    }}
                >
                    {name}
                </i>
            </>
        );
    } else if (from === "fa") {
        const supported = ["brand", "classic", "regular", "sharp", "solid", "outlined"];
        if (!supported.includes(type)) {
            throw new Error(`Font Awesome only support ${supported.join(", ")}. Got ${type}.`);
        }
        type = type as "brand" | "classic" | "regular" | "sharp" | "solid" | "outlined";

        let cls = {
            brand: "fab",
            classic: "fas",
            regular: "far",
            sharp: "fas",
            solid: "fas",
            outlined: "far"
        }[type];

        return (
            <>
                <style jsx global>{`
                    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css");
                `}</style>
                <i
                    className={`fa ${cls} fa-${name} ${className}`}
                    style={{
                        fontSize: size
                        // fa doesn't support font weight
                    }}
                ></i>
            </>
        );
    } else if (from === "mdi") {
        if (type !== "solid") {
            throw new Error(`Material Design Icons only support solid icons. Got ${type}.`);
        }
        return (
            <>
                <style jsx global>{`
                    @import url("https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.1.96/css/materialdesignicons.min.css");
                `}</style>
                <i
                    className={`mdi mdi-${name} ${className}`}
                    style={{
                        fontSize: size,
                        fontWeight: weight
                    }}
                ></i>
            </>
        );
    }
}

// @ts-ignore
interface IconProps extends InnerIcon {
    from?: "md" | "fa" | "mdi" | "image";
    iconSize?: number;
    wrap?: boolean;
    fill?: boolean;
    className?: string;
    wrapClassName?: string;
    alt?: string;
}

export default function Icon({
    name,
    from,
    type,
    weight,
    grade,
    size = 24,
    iconSize = size,
    wrap = iconSize !== size,
    fill,
    className = "",
    wrapClassName = "",
    alt = `${from} icon ${name}`
}: IconProps) {
    from = name.startsWith("/") ? "image" : from;
    const icon =
        from === "image" ? (
            <Image
                src={name}
                width={iconSize}
                height={iconSize}
                alt={alt}
                className={className}
            />
        ) : (
            _icon({
                ...{ name, from, type, weight, grade, fill, className },
                size: iconSize
            } as any)
        );
    return wrap ? (
        <div
            className={`flex justify-center items-center ${wrapClassName || ""}`}
            style={{ width: size, height: size }}
        >
            {icon}
        </div>
    ) : (
        icon
    );
}

export type { IconProps };
export { Icon };
