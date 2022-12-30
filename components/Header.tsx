import { cls } from "../lib/utils";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Header({ active }: { active: string }) {
    return (
        <header
            className={cls(
                "flex",
                "flex-row-reverse",
                "items-center",
                "justify-end",
                "bg-white",
                "p-3",
                "px-2",
                "xs:flex-row",
                "xs:justify-between",
                "sm:px-8",
                "md:px-16",
                "max-xs:gap-2",
                "shadow"
            )}
            style={{ height: "64px" }}
        >
            <Logo />
            <Nav active={active} />
        </header>
    );
}
