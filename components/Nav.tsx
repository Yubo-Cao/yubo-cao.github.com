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
        icon: "book",
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
    active,
    height: h = 48
}: {
    name: string;
    icon: string;
    href: string;
    description: string;
    active?: boolean;
    height?: 48 | 64 | 72;
}) {
    const [entered, setEntered] = useState(false),
        router = useRouter(),
        height = h,
        size = {
            48: 24,
            64: 32,
            72: 40
        }[h];

    return (
        <div
            title={description}
            className={cls(
                "transition-all",
                "cursor-pointer",
                "flex",
                "items-center",
                "px-4",
                active ? "border-b-4 border-primary-200" : "",
                active ? "max-xs:bg-primary-100" : "",
                entered
                    ? active
                        ? "border-primary-400 bg-primary-100"
                        : "border-b-4 border-neutral-400 bg-neutral-100"
                    : "",
                "max-xs:border-b-0"
            )}
            style={{ height: `${height}px` }}
            onMouseEnter={() => setEntered(true)}
            onMouseLeave={() => setEntered(false)}
            onClick={() => router.push(href)}
        >
            <div className="flex items-center gap-2">
                <Icon
                    from="md"
                    name={icon}
                    className={cls(
                        "transition-all",
                        entered && active ? "text-primary-500" : "text-black"
                    )}
                    grade={entered ? 200 : 0}
                    size={size}
                    fill={entered}
                />
                <Link
                    href={href}
                    className={cls(
                        "xs:max-lg:hidden",
                        {
                            48: "text-base",
                            64: "text-lg",
                            72: "text-2xl"
                        }[h],
                        entered && active ? "text-primary-500" : "text-black"
                    )}
                >
                    {name}
                </Link>
            </div>
        </div>
    );
}

export default function Nav({
    active,
    height = 72
}: {
    active: string;
    height?: 48 | 64 | 72;
}) {
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
                className="hidden max-xs:flex"
            />
            <div
                className={`transition-all bg-black fixed left-0 top-0 h-full w-full ${
                    open ? "z-10 opacity-40" : "-z-10 opacity-0"
                }`}
            />
            <nav
                className={`transition-all flex bg-slate-50 z-10
                    max-xs:gap-0 max-xs:flex-col max-xs:rounded-r-2xl
                    max-xs:fixed max-xs:top-0 max-xs:left-0 max-xs:w-64 max-xs:h-full max-xs:z-10
                    ${
                        open
                            ? "max-xs:translate-x max-xs:shadow-md"
                            : "max-xs:-translate-x-full"
                    }`}
            >
                <div
                    className={cls("items-center", "flex", "xs:hidden", "ml-2")}
                    style={{ height: `${height}px` }}
                >
                    <MenuButton open={open} onClick={() => setOpen(!open)} />
                </div>
                {links.map((link, i) => {
                    return (
                        <NavButton
                            key={link.name}
                            name={link.name}
                            icon={link.icon}
                            href={link.href}
                            description={link.description}
                            active={link.name.toLowerCase() === active.toLowerCase()}
                            height={height}
                        ></NavButton>
                    );
                })}
            </nav>
        </>
    );
}
