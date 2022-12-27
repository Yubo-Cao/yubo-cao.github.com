import styles from "./Icon.module.sass";

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
    return parseInt(num) * ({
        px: 1,
        rem: 16,
        em: 16
    }[unit]);
}


export default function Icon(props: {
    name: string,
    from?: "md" | "fa" | "mdi",
    type?: "rounded" | "sharp" | "outlined" | "brands" | "classic" | "regular" | "solid",
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700,
    grade?: -25 | 0 | 200,
    size?: string | number,
    fill?: boolean,
    className?: string
}) {
    let from = props.from || "md",
        type = props.type || "outlined",
        weight = props.weight ? Math.max(100, Math.min(700,
            Math.round(props.weight / 100) * 100)) : 200,
        grade = props.grade ? to_nearest(props.grade, [-25, 0, 200]) : 0,
        size = props.size || "24px",
        className = props.className || "";

    if (from === "md") {
        const supported = ["rounded", "sharp", "outlined"];
        if (!supported.includes(type))
            throw new Error(`Material Design Icons only support ${supported.join(', ')}. Got ${type}.`);
        type = type as "rounded" | "sharp" | "outlined";

        return (
            <i className={`${styles[{
                rounded: "material-symbols-rounded",
                sharp: "material-symbols-sharp",
                outlined: "material-symbols-outlined"
            }[type]]} ${className}`} style={{
                fontSize: size,
                fontVariationSettings: `'wght' ${weight}, 'GRAD' ${grade}, 'FILL' ${props.fill ? 1 : 0}, 'opsz' ${to_nearest(to_px(size), [20, 24, 40, 48])}`
            }}>
                {props.name}
            </i>
        );
    } else if (from === "fa") {
        const supported = ["brand", "classic", "regular", "sharp", "solid", "outlined"];
        if (!supported.includes(type))
            throw new Error(`Font Awesome only support ${supported.join(', ')}. Got ${type}.`);
        type = type as "brands" | "classic" | "regular" | "sharp" | "solid" | "outlined";

        return (
            <i className={`fa fa-${type} fa-${props['name']} ${className}`} style={{
                fontSize: size,
                // fa doesn't support font weight
            }}> </i>
        );
    } else if (from === "mdi") {
        if (type !== "solid")
            throw new Error(`Material Design Icons only support solid icons. Got ${type}.`);
        return (
            <i className={`mdi mdi-${props.name} ${className}`} style={{
                fontSize: size,
                fontWeight: weight,
            }}> </i>
        );
    } else {
        throw new Error(`Unknown icon source: ${from}`);
    }
}