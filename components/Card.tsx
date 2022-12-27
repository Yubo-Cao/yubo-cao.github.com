export default function Card(props: {
    onClick: () => void
    children: React.ReactNode,
    className?: string,
    type?: "outlined" | "filled" | "elevated",
    rounded?: boolean,
    accent?: string,
}) {
    let type = props.type || "elevated",
        className = props.className || "",
        rounded = props.rounded || true,
        accent = props.accent || "gray";
    let cls = {
        outlined: `border border-${accent}-300`,
        filled: `bg-${accent}-100`,
        elevated: `shadow shadow-${accent}-300/30`
    };
    let hoverCls = {
        outlined: `hover:border-${accent}-400`,
        filled: `hover:bg-${accent}-200`,
        elevated: `hover:shadow-md hover:shadow-${accent}-400/30`
    };
    let activeCls = {
        outlined: `active:border-${accent}-500`,
        filled: `active:bg-${accent}-300`,
        elevated: `active:shadow-lg active:shadow-${accent}-500/30`
    };
    return (
        <div className={`p-8 transition-all cursor-pointer ${rounded ? "rounded-lg" : ""}  ${hoverCls[type]} ${activeCls[type]} ${cls[type]} ` + className} onClick={props.onClick}>
            {props.children}
        </div>
    );
}