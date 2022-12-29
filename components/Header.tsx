import { cls } from "../lib/utils";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Header({
    active,
    height = 64
}: {
    active: string;
    height?: 48 | 64 | 72;
}) {
    return (
        <header
            className={cls(
                "flex",
                "items-center",
                "justify-between",
                "bg-slate-50",
                "p-3",
                "px-8",
                "sm:px-16",
                "md:px-24",
                "max-xs:gap-2",
                "shadow-md"
            )}
            style={{ height: `${height}px` }}
        >
            <Logo
                size={{ 48: 24, 64: 40, 72: 40 }[height] as any}
                className={"xs:max-sm:hidden"}
            />
            <Nav active={active} height={height} />
        </header>
    );
}
