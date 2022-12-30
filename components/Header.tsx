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
                "sm:flex-row",
                "sm:justify-between",
                "sm:px-8",
                "md:px-16",
                "max-sm:gap-1",
                "shadow"
            )}
            style={{ height: "64px" }}
        >
            <Logo />
            <Nav active={active} />
        </header>
    );
}
