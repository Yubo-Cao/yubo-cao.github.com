import Image from "next/image";
import localFont from "@next/font/local";

const materialSymbolsRounded = localFont({
    src: "../public/fonts/MaterialSymbolsRounded.woff2",
    variable: "--font-material-symbols-rounded"
});
const materialSymbolsOutlined = localFont({
    src: "../public/fonts/MaterialSymbolsOutlined.woff2",
    variable: "--font-material-symbols-outlined"
});
const materialSymbolsSharp = localFont({
    src: "../public/fonts/MaterialSymbolsSharp.woff2",
    variable: "--font-material-symbols-sharp"
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

function _icon(props: {
    name: string;
    from?: "md" | "fa" | "mdi";
    type?: "rounded" | "sharp" | "outlined" | "brand" | "classic" | "regular" | "solid";
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
    grade?: -25 | 0 | 200;
    size?: number;
    fill?: boolean;
    className?: string;
}) {
    let from = props.from || "md",
        type = props.type || "outlined",
        weight = props.weight
            ? Math.max(100, Math.min(700, Math.round(props.weight / 100) * 100))
            : 200,
        grade = props.grade ? to_nearest(props.grade, [-25, 0, 200]) : 0,
        size = props.size || 24,
        className = props.className || "";

    if (from === "md") {
        const supported = ["rounded", "sharp", "outlined"];
        if (!supported.includes(type))
            throw new Error(
                `Material Design Icons only support ${supported.join(", ")}. Got ${type}.`
            );
        type = type as "rounded" | "sharp" | "outlined";

        return (
            <i
                className={
                    {
                        rounded: materialSymbolsRounded.className,
                        sharp: materialSymbolsSharp.className,
                        outlined: materialSymbolsOutlined.className
                    }[type] +
                    " " +
                    className
                }
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
                        props.fill ? 1 : 0
                    }, 'opsz' ${to_nearest(to_px(size), [20, 24, 40, 48])}`
                }}
            >
                {props.name}
            </i>
        );
    } else if (from === "fa") {
        const supported = ["brand", "classic", "regular", "sharp", "solid", "outlined"];
        if (!supported.includes(type))
            throw new Error(`Font Awesome only support ${supported.join(", ")}. Got ${type}.`);
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
                className={`fa ${cls} fa-${props["name"]} ${className}`}
                style={{
                    fontSize: size
                    // fa doesn't support font weight
                }}
            ></i>
        );
    } else if (from === "mdi") {
        if (type !== "solid")
            throw new Error(`Material Design Icons only support solid icons. Got ${type}.`);
        return (
            <i
                className={`mdi mdi-${props.name} ${className}`}
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

export default function Icon(props: {
    name: string;
    from?: "md" | "fa" | "mdi" | "image";
    type?: "rounded" | "sharp" | "outlined" | "brand" | "classic" | "regular" | "solid";
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
    grade?: -25 | 0 | 200;
    size?: number;
    iconSize?: number;
    wrap?: boolean;
    fill?: boolean;
    className?: string;
    wrapClassName?: string;
    alt?: string;
}) {
    let size = props.size || 24,
        iconSize = props.iconSize || size,
        wrap = props.wrap || props.wrapClassName || iconSize !== size,
        from = props.name.startsWith("/")
            ? "image"
            : props.from === undefined
            ? "md"
            : props.from,
        cp = { ...props };
    cp.size = iconSize;
    if (!wrap && from !== "image") return _icon(cp as any);
    let icon =
        from === "image" ? (
            <Image
                src={props.name}
                width={iconSize}
                height={iconSize}
                alt={props.alt || ""}
                className={props.className || ""}
            />
        ) : (
            _icon(cp as any)
        );
    return wrap ? (
        <div
            className={`flex justify-center items-center ${props.wrapClassName || ""}`}
            style={{ width: size, height: size }}
        >
            {icon}
        </div>
    ) : (
        icon
    );
}
