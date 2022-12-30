import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { cls } from "../lib/utils";
import Icon from "./Icon";
import MenuButton from "./MenuButton";

const links = [
    {
        name: "Home",
        icon: "home",
        href: "/",
        description: "Home page"
    },
    {
        name: "Blog",
        icon: "pages",
        href: "/blog",
        description: "Coding & Life"
    },
    {
        name: "Projects",
        icon: "code",
        href: "/projects",
        description: "What Yubo has done"
    },
    {
        name: "About",
        icon: "info",
        href: "/about",
        description: "About Yubo"
    }
];

function NavButton({
    name,
    icon,
    href,
    description,
    active
}: {
    name: string;
    icon: string;
    href: string;
    description: string;
    active?: boolean;
}) {
    const [entered, setEntered] = useState(false),
        router = useRouter();

    return (
        <button
            title={description}
            onMouseEnter={() => setEntered(true)}
            onMouseLeave={() => setEntered(false)}
            onClick={() => router.push(href)}
            className={cls(
                "h-12",
                "flex",
                "items-center",
                "gap-4",
                "px-3",
                "py-0.5",
                "rounded-full",
                "transition-all",
                active
                    ? cls(
                          "bg-primary-100",
                          entered ? "bg-primary-200" : "",
                          "active:bg-primary-300"
                      )
                    : cls(entered ? "bg-slate-100" : "", "active:bg-slate-200")
            )}
        >
            <Icon
                from="md"
                name={icon}
                className={cls("transition-all")}
                grade={entered ? 200 : 0}
                iconSize={24}
                fill={entered}
            />
            <Link href={href} className={cls("xs:max-md:hidden")}>
                {name}
            </Link>
        </button>
    );
}

export default function Nav({ active }: { active: string }) {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const close = () => {
            if (open) setOpen(false);
        };
        window.addEventListener("resize", close);
        window.addEventListener("scroll", close);
        return () => {
            window.removeEventListener("resize", close);
            window.removeEventListener("scroll", close);
        };
    }, [open]);
    return (
        <>
            <MenuButton open={open} onClick={() => setOpen(!open)} className="flex xs:hidden" />
            {/* shade */}
            <div
                className={cls(
                    "transition-all",
                    "bg-black",
                    "fixed",
                    "left-0",
                    "top-0",
                    "h-full",
                    "w-full",
                    "backdrop-blur-sm",
                    open ? "z-10 opacity-40" : "-z-10 opacity-0",
                    "xs:hidden"
                )}
            />
            <nav
                className={cls(
                    // common
                    "transition-all",
                    "bg-white",
                    // sidebar
                    "absolute",
                    "left-0",
                    "top-0",
                    "p-2",
                    "h-full",
                    "w-64",
                    "rounded-r-xl",
                    "z-10",
                    open ? cls("translate-x-0") : cls("-translate-x-full"),
                    // navbar
                    "xs:static",
                    "xs:h-auto",
                    "xs:w-auto",
                    "xs:translate-x-0",
                    "xs:divide-y-0",
                    "xs:rounded-none",
                    "xs:shadow-none"
                )}
            >
                <div className={cls("items-center", "flex", "xs:hidden", "my-1")}>
                    <MenuButton open={open} onClick={() => setOpen(!open)} />
                </div>
                <div className={cls("flex", "flex-col", "xs:flex-row", "xs:gap-2")}>
                    {links.map((link, i) => {
                        return (
                            <NavButton
                                key={link.name}
                                name={link.name}
                                icon={link.icon}
                                href={link.href}
                                description={link.description}
                                active={link.name.toLowerCase() === active.toLowerCase()}
                            ></NavButton>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}
