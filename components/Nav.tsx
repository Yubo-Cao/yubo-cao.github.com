import Link from 'next/link'
import { useState } from 'react'
import Icon from './Icon';
import MenuButton from './MenuButton';

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
        description: "Coding &amps; Life"
    },
    {
        name: "Projects",
        icon: "code",
        href: "/projects",
        description: "What Yubo has done"
    },
    {
        name: "Resume",
        icon: "description",
        href: "/resume",
        description: "Yubo's resume"
    }
];

function NavItem(props: {
    name: string,
    icon: string,
    href: string,
    description: string,
    active?: boolean,
}) {
    const [entered, setEntered] = useState(false);
    let { name, icon, href, description, active } = props;
    return (
        <div
            title={description}
            className={`transition-all flex items-center rounded-full ${active ? "bg-primary-100" : ""} ${entered ? (active ? "bg-primary-200" : "bg-neutral-100") : ""}`}
            onMouseEnter={() => setEntered(true)}
            onMouseLeave={() => setEntered(false)}
        >
            <div className={`h-12 w-12 flex items-center justify-center`}>
                <Icon
                    from="md"
                    name={icon}
                    grade={entered ? 200 : 0}
                    className={`transition-all rounded-full p-3`}
                    size={24}
                    type="rounded"
                    fill={entered}
                />
            </div>
            <Link
                href={href}
                className="text-base mr-4 xs:max-sm:hidden"
            >{name}</Link>
        </div>
    )
}

export default function Nav(props: {
    active: string,
    height?: 48 | 64,
}) {
    const [open, setOpen] = useState(false);
    let height = props.height || 64;
    return (
        <>
            <MenuButton
                open={open}
                onClick={() => setOpen(!open)}
                className="hidden max-xs:flex"
            />
            <div className={`xs:hidden bg-black fixed left-0 top-0 h-full w-full opacity-20 -z-50 ${open ? "block" : "hidden"}`} />
            <nav
                className={
                    `transition-all flex gap-4 z-0 bg-slate-50 max-xs:px-2 ` +
                    `gap-0 flex-col rounded-r-2xl
                     fixed top-0 left-0 w-64 h-full
                     ${open ? "translate-x shadow-md" : "-translate-x-full"}
                    z-10
                    `.split(/\s+/).filter(s => s.trim().length !== 0).map(s => "max-xs:" + s).join(" ")
                }
            >
                <div className={`${height === 64 ? "h-16" : "h-12"} items-center hidden max-xs:flex`}>
                    <MenuButton
                        open={open}
                        onClick={() => setOpen(!open)}
                    />
                </div>
                {
                    links.map(
                        (link, i) => {
                            return (
                                <NavItem
                                    key={i}
                                    name={link.name}
                                    icon={link.icon}
                                    href={link.href}
                                    description={link.description}
                                    active={link.name === props.active}
                                ></NavItem>
                            )
                        }
                    )
                }
            </nav>
        </>
    )
}