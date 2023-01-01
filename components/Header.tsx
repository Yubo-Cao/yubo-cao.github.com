import { Component } from "react";
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
    scrollY: number = 0;
    state: HeaderState = {
        top: 0
    };

    constructor(props: HeaderProps) {
        super(props);
        this.scroll = this.scroll.bind(this);
    }

    scroll(newScrollY: number) {
        const { scrollY } = this;
        if (scrollY === newScrollY) return;
        this.setState({ top: scrollY > newScrollY ? 0 : -64 });
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
                style={{ height: "64px", top: this.state.top }}
            >
                <Logo />
                <Nav active={active} />
            </header>
        );
    }
}

export default Header;
