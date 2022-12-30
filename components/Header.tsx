import { Component, createRef } from "react";
import { cls } from "../lib/utils";
import Logo from "./Logo";
import Nav from "./Nav";

interface HeaderProps {
    active: string;
}

interface HeaderState {
    top: number;
}

class Header extends Component<HeaderProps, HeaderState> {
    ref: React.RefObject<HTMLDivElement>;
    scrollY: number = 0;
    state: HeaderState = {
        top: 0
    };

    constructor(props: HeaderProps) {
        super(props);
        this.ref = createRef();
        this.scroll = this.scroll.bind(this);
    }

    scroll(newScrollY: number) {
        const { current } = this.ref;
        if (!current) return;

        const { scrollY } = this,
            { top } = this.state;

        if (scrollY === newScrollY) return;

        if (scrollY > newScrollY) {
            current.classList.add("top-0");
            this.setState({ top: 0 });
        } else {
            current.classList.remove("top-0");
            this.setState({ top: top + (scrollY - newScrollY) });
        }

        this.scrollY = newScrollY;
    }

    componentDidMount() {
        window.addEventListener(
            "scroll",
            () => {
                this.scroll(window.scrollY);
            },
            { passive: true }
        );
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", () => {
            this.scroll(window.scrollY);
        });
    }

    render() {
        const { active } = this.props;

        return (
            <header
                className={cls(
                    // common
                    "shadow",
                    "sticky",
                    "z-10",
                    "transition-all",
                    // menu button
                    "flex",
                    "flex-row-reverse",
                    "items-center",
                    "justify-end",
                    "bg-white",
                    "p-3",
                    "px-2",
                    "gap-1",
                    // normal layout
                    "sm:flex-row",
                    "sm:justify-between",
                    "sm:gap-0",
                    "sm:px-8",
                    "md:px-16"
                )}
                style={{ height: "64px", top: `${this.state.top}pt` }}
                ref={this.ref}
            >
                <Logo />
                <Nav active={active} />
            </header>
        );
    }
}

export default Header;
