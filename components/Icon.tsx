import localFont from "@next/font/local";
import Image from "next/image";
import { cls } from "../lib/utils";

const materialSymbolsRounded = localFont({
    src: "./fonts/MaterialSymbolsRounded.woff2",
    variable: "--font-material-symbols-rounded",
    display: "block"
});

const faBrand = localFont({
    src: "./fonts/fa-brands-400.woff2",
    variable: "--font-fa-brand",
    display: "block"
});

const faBrandCodepoints: { [key: string]: string } = {
    github: "\\f09b",
    redhat: "\\f7bc",
    java: "\\f4e4",
    ubuntu: "\\f7df",
    git: "\\f1d3",
    centos: "\\f789",
    python: "\\f3e2",
    fedora: "\\f798",
    discord: "\\f392"
};

const faSolid = localFont({
    src: "./fonts/fa-solid-900.woff2",
    variable: "--font-fa-solid",
    display: "block"
});

const faSolidCodepoints: { [key: string]: string } = {
    "file-powerpoint": "\\f1c4",
    "file-word": "\\f1c2",
    "file-excel": "\\f1c3",
    "file-pdf": "\\f1c1"
};

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
    from?: "md" | "fa";
    type?: "rounded" | "brand" | "solid";
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
    const ligaStyle = {
        WebkitFontFeatureSettings: "liga",
        MozFontFeatureSettings: "'liga'"
    };
    const antiAliasStyle = {
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale"
    };
    const iconStyle: any = {
        fontSize: size,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 1,
        letterSpacing: "normal",
        textTransform: "none",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        direction: "ltr",
        textRendering: "optimizeLegibility"
    };

    if (from === "md") {
        if (type !== "rounded") {
            throw new Error(`Material Design only support rounded icons. Got ${type}.`);
        }
        return (
            <i
                className={cls(materialSymbolsRounded.className, className)}
                style={{
                    ...iconStyle,
                    ...ligaStyle,
                    ...antiAliasStyle,
                    fontSize: size,
                    fontVariationSettings: `'wght' ${weight}, 'GRAD' ${grade}, 'FILL' ${
                        fill ? 1 : 0
                    }, 'opsz' ${to_nearest(to_px(size), [20, 24, 40, 48])}`
                }}
            >
                {name}
            </i>
        );
    }
    if (from === "fa") {
        const optimized = ["brand", "solid"];
        if (!optimized.includes(type)) {
            throw new Error(`Font Awesome only support ${optimized.join(", ")}. Got ${type}.`);
        }
        type = type as "brand" | "solid";
        let icon = {
            brand: faBrandCodepoints,
            solid: faSolidCodepoints
        }[type][name];
        if (icon == null) {
            throw new Error(`Font Awesome doesn't have icon ${name}.`);
        }
        return (
            <i
                className={cls(
                    {
                        brand: faBrand.className,
                        solid: faSolid.className
                    }[type],
                    className
                )}
                style={{
                    ...iconStyle,
                    ...antiAliasStyle,
                    fontSize: size,
                    fontWeight: {
                        brand: 400,
                        solid: 900
                    }[type]
                }}
            >
                <style jsx>{`
                    i::before {
                        content: "${icon}";
                    }
                `}</style>
            </i>
        );
    }
    throw new Error(`Unknown icon source: ${from}.`);
}

// @ts-ignore
interface IconProps extends InnerIcon {
    from?: "md" | "fa" | "image";
    iconSize?: number;
    wrap?: boolean;
    fill?: boolean;
    className?: string;
    wrapClassName?: string;
    alt?: string;
}

export default function Icon({
    name,
    from = "md",
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
