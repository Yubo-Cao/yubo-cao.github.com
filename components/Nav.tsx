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
}) {
    const [entered, setEntered] = useState(false);
    let { name, icon, href, description } = props;
    return (
        <div
            title={description}
            className="transition-all flex items-center rounded-full max-sm:hover:bg-neutral-100"
            onMouseEnter={() => setEntered(true)}
            onMouseLeave={() => setEntered(false)}
        >
            <div className='h-12 w-12 flex items-center justify-center'>
                <Icon
                    from="md"
                    name={icon}
                    grade={entered ? 200 : 0}
                    className={`transition-all hover:bg-neutral-100 rounded-full p-2 ${entered ? "bg-neutral-100" : ""}`}
                    size={24}
                    type="rounded"
                    fill={entered}
                />
            </div>
            <Link
                href={href}
                className="text-base mr-4"
            >{name}</Link>
        </div>
    )
}

export default function Nav(props: {
    active: string,
}) {
    const [open, setOpen] = useState(false);
    return (
        <div className='p-2'>
            <MenuButton
                open={open}
                onClick={() => setOpen(!open)}
                className="hidden max-xs:flex"
            />
            <div className={`xs:hidden bg-black fixed left-0 top-0 h-full w-full opacity-20 -z-50 ${open ? "hidden" : "block"}`} />
            <nav
                className={
                    `transition-all flex gap-4 z-0 max-xs:rounded-r-2xl ` +
                    `gap-0 flex-col
                     fixed top-0 left-0 w-64 h-full
                     ${open ? "-translate-x-full" : "translate-x"}
                     bg-white z-10 shadow-md p-2
                    `.split(/\s/).map(s => "max-xs:" + s).join(" ")
                }
            >
                <MenuButton
                    open={open}
                    onClick={() => setOpen(!open)}
                    className="hidden max-xs:flex"
                />
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
                                ></NavItem>
                            )
                        }
                    )
                }
            </nav>
        </div>
    )
}