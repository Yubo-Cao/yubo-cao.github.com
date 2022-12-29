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
    size = 48
}: {
    name: string;
    icon: string;
    href: string;
    description: string;
    active?: boolean;
    size?: 48 | 64 | 72;
}) {
    const [entered, setEntered] = useState(false),
        router = useRouter();

    return (
        <div
            title={description}
            className={`transition-all flex items-center rounded-full cursor-pointer ${
                active ? "bg-primary-100" : ""
            } ${entered ? (active ? "bg-primary-200" : "bg-neutral-100") : ""}`}
            onMouseEnter={() => setEntered(true)}
            onMouseLeave={() => setEntered(false)}
            onClick={() => router.push(href)}
        >
            <Icon
                from="md"
                name={icon}
                grade={entered ? 200 : 0}
                className={`transition-all rounded-full p-3`}
                size={size}
                iconSize={size / 2}
                type="rounded"
                fill={entered}
            />
            <Link href={href} className="mr-4 xs:max-sm:hidden">
                {name}
            </Link>
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
                className={`transition-all flex gap-4 bg-slate-50 z-10
                    max-xs:px-2
                    max-xs:gap-0 max-xs:flex-col max-xs:rounded-r-2xl
                    max-xs:fixed max-xs:top-0 max-xs:left-0 max-xs:w-64 max-xs:h-full max-xs:z-10
                    ${
                        open
                            ? "max-xs:translate-x max-xs:shadow-md"
                            : "max-xs:-translate-x-full"
                    }`}
            >
                <div
                    className={cls("items-center", "flex", "xs:hidden")}
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
                        ></NavButton>
                    );
                })}
            </nav>
        </>
    );
}
