import Icon from "./Icon";

export default function MenuButton(props: {
    open: boolean,
    onClick: () => void
    size?: number,
    className?: string,
}) {
    const { open, onClick } = props;
    let { className, size } = props;
    className = className || "";

    return (
        <div
            onClick={onClick}
            className={`transition-all rounded-full active:border active:border-black active:bg-neutral-100 flex justify-center items-center w-12 h-12 ${className}`}
        >
            <Icon
                from="md"
                name={open ? "menu_open" : "menu"}
                size={size}
                className="transition-all"
            ></Icon>
        </div>
    );
}