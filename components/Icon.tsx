import localFont from "@next/font/local";
import Image from "next/image";

const materialSymbolsRounded = localFont({
    src: "./fonts/MaterialSymbolsRounded.woff2",
    variable: "--font-material-symbols-rounded"
});

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
    if (from === "md") {
        const supported = ["rounded", "sharp", "outlined"];
        if (!supported.includes(type)) {
            throw new Error(
                `Material Design Icons only support ${supported.join(", ")}. Got ${type}.`
            );
        }
        type = type as "rounded" | "sharp" | "outlined";
        if (type !== "rounded") {
            throw new Error(`Material Design Icons only support rounded icons. Got ${type}.`);
        }
        return (
            <i
                className={materialSymbolsRounded.className + ` ${className}`}
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
                    fontVariationSettings: `'wght' ${weight}, 'GRAD' ${grade}, 'FILL' ${
                        fill ? 1 : 0
                    }, 'opsz' ${to_nearest(to_px(size), [20, 24, 40, 48])}`
                }}
            >
                {name}
            </i>
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
            <i
                className={`fa ${cls} fa-${name} ${className}`}
                style={{
                    fontSize: size
                    // fa doesn't support font weight
                }}
            ></i>
        );
    } else if (from === "mdi") {
        if (type !== "solid") {
            throw new Error(`Material Design Icons only support solid icons. Got ${type}.`);
        }
        return (
            <i
                className={`mdi mdi-${name} ${className}`}
                style={{
                    fontSize: size,
                    fontWeight: weight
                }}
            ></i>
        );
    } else {
        throw new Error(`Unknown icon source: ${from}`);
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
    from = name.startsWith("/") ? "image" : "md",
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
    const cp = { ...{ name, from, type, weight, grade, fill, className }, size: iconSize };
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
            _icon(cp as any)
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
