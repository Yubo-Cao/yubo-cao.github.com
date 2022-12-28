import React from "react";
import Title from "./Title";
import Link from "next/link";

function TOC(props: {
    items: { id: string, title: string, level: number }[],
    level?: number,
    ordered?: boolean,
    className?: string
}) {
    let items = props.items,
        level = props.level || 1,
        ordered = props.ordered || false,
        className = props.className || "";

    let result = [];
    const cls = "transition-all no-underline hover:underline text-slate-300 hover:text-slate-500 " + className;
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.level === level) {
            let next = items[i + 1];
            if (next && next.level > level) {
                let children = [];
                while (next && next.level > level) {
                    children.push(next);
                    i++;
                    next = items[i + 1];
                }
                result.push(
                    <li key={item.id}>
                        <Link href={`#${item.id}`} className={cls}>{item.title}</Link>
                        <TOC items={children} level={level + 1} ordered={ordered} />
                    </li>);
            } else {
                result.push(
                    <li key={item.id}>
                        <Link href={`#${item.id}`} className={cls}>{item.title}</Link>
                    </li>
                );
            }
        }
    }
    return ordered ? <ol>{result}</ol> : <ul>{result}</ul>;
}

class StickNav extends React.Component {
    level: number;
    ordered: boolean;
    nav: React.RefObject<HTMLDivElement>;
    className: string;
    state: {
        toc: {
            id: string,
            title: string,
            level: number
        }[]
    }

    constructor(props: {
        level?: number,
        ordered?: boolean,
        className?: string
    }) {
        super(props);
        this.state = {
            toc: []
        }

        this.nav = React.createRef();
        this.level = props.level || 6;
        this.ordered = props.ordered || false;
        this.className = props.className || "";
    }

    componentDidMount(): void {
        let root = document.querySelector('main') || document.body;
        let headings: HTMLElement[] = Array.from(root.querySelector('main') ?
            root.querySelector('main')!.querySelectorAll('h1, h2, h3, h4, h5, h6') :
            root.querySelectorAll('h1, h2, h3, h4, h5, h6'));

        let toc = headings.filter((e: HTMLElement) => parseInt(e.tagName[1]) <= this.level).map((e: HTMLElement) => {
            let id = e.id;
            if (id === "") {
                id = e.innerText.toLowerCase().replace(/\s+/g, "-");
                e.id = id;
            }
            return {
                id: id,
                title: e.innerText,
                level: parseInt(e.tagName[1])
            }
        });

        this.setState({
            toc: toc
        });


        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                let id = entry.target.id;
                let nav = document.querySelector(`nav a[href="/#${id}"]`);

                if (nav) {
                    if (entry.intersectionRatio > 0) {
                        nav.classList.add("font-medium");
                        nav.classList.remove("text-slate-300");
                        nav.classList.add("text-slate-500");
                    } else {
                        nav.classList.remove("font-medium");
                        nav.classList.add("text-slate-300");
                        nav.classList.remove("text-slate-500");
                    }
                }
            });
        });

        headings.forEach((e: HTMLElement) => {
            observer.observe(e);
        });
    }

    render(): React.ReactNode {
        return (
            <aside className={"sticky top-2 prose self-start hidden xl:block" + this.className}>
                <h2 className="my-2 text-2xl font-bol">Table of Content</h2>
                <nav ref={this.nav}>
                    <TOC items={this.state.toc} ordered={this.ordered} />
                </nav>
            </aside>
        )
    }
}

export default StickNav;