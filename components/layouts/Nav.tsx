import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { cls } from "../../lib/utils";
import Icon from "../icon/Icon";
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
        <div
            title={description}
            onMouseEnter={() => setEntered(true)}
            onMouseLeave={() => setEntered(false)}
            onClick={() => router.push(href)}
            className={cls(
                "h-10",
                "flex",
                "items-center",
                "gap-4",
                "px-2.5",
                "py-0.5",
                "rounded-full",
                "transition-all",
                active
                    ? cls(
                          "bg-primary-100",
                          entered ? "bg-primary-200" : "",
                          "active:bg-primary-300"
                      )
                    : cls(entered ? "bg-slate-100" : "", "active:bg-slate-200"),
                "sm:gap-2"
            )}
        >
            <Icon
                from="md"
                name={icon}
                className={cls("transition-all cursor-pointer")}
                grade={entered ? 200 : 0}
                iconSize={24}
                fill={entered}
            />
            <Link href={href} className={cls("sm:max-md:hidden text-sm")}>
                {name}
            </Link>
        </div>
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
            <MenuButton
                open={open}
                onClick={() => setOpen(!open)}
                className="flex sm:hidden"
            />
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
                    open ? "z-10 opacity-40 block" : "-z-10 opacity-0 hidden"
                )}
            />
            <nav
                className={cls(
                    // common
                    open ? "max-sm:transition-all" : "",
                    "bg-white",
                    // sidebar
                    "fixed",
                    "left-0",
                    "top-0",
                    "bottom-0",
                    "p-2",
                    "w-64",
                    "rounded-r-xl",
                    "z-10",
                    open ? cls("translate-x-0") : cls("-translate-x-full"),
                    // navbar
                    "sm:static",
                    "sm:h-auto",
                    "sm:w-auto",
                    "sm:translate-x-0",
                    "sm:divide-y-0",
                    "sm:rounded-none",
                    "sm:shadow-none"
                )}
            >
                <div
                    className={cls("items-center", "flex", "sm:hidden", "my-1")}
                >
                    <MenuButton open={open} onClick={() => setOpen(!open)} />
                </div>
                <div
                    className={cls(
                        "flex",
                        "flex-col",
                        "sm:flex-row",
                        "sm:gap-2"
                    )}
                >
                    {links.map((link, i) => {
                        return (
                            <NavButton
                                key={link.name}
                                name={link.name}
                                icon={link.icon}
                                href={link.href}
                                description={link.description}
                                active={
                                    link.name.toLowerCase() ===
                                    active.toLowerCase()
                                }
                            ></NavButton>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}
