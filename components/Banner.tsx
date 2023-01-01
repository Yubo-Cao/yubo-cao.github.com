import React from "react";
import { currentBreakpoint } from "../lib/breakpoints";
import { cls } from "../lib/utils";

type BannerProps = {
    children: React.ReactNode;
    className?: string;
    bannerClassName?: string;
    style?: React.CSSProperties;
    bannerStyle?: React.CSSProperties;
    stick?: "left" | "right" | "both" | "none";
    avoidTOC?: boolean;
};

type BannerState = {
    needAvoid: boolean;
};

// rewrite as class
export default class Banner extends React.Component<BannerProps, BannerState> {
    ref: React.RefObject<HTMLDivElement>;
    stick: "left" | "right" | "both" | "none";
    avoidTOC: boolean;

    constructor(props: BannerProps) {
        super(props);
        this.ref = React.createRef();
        this.stick = props.stick || "both";
        this.setState({ needAvoid: false });
        this.avoidTOC = Object.hasOwn(props, "avoidTOC")
            ? props.avoidTOC!!
            : true;
        this.widthAdjuster = this.widthAdjuster.bind(this);
    }

    componentDidMount() {
        this.widthAdjuster();
        window.addEventListener("resize", this.widthAdjuster);
        window.addEventListener("scroll", this.widthAdjuster);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.widthAdjuster);
        window.removeEventListener("scroll", this.widthAdjuster);
    }

    widthAdjuster() {
        const { current } = this.ref;
        if (!current) return;
        const parent = current.parentElement;
        if (!parent) return;
        const rect = parent.getBoundingClientRect();

        if (
            (this.stick === "left" || this.stick === "both") &&
            !Object.hasOwn(this.props.bannerStyle || {}, "left")
        )
            current.style.left = `-${parent.offsetLeft}px`;
        if (
            (this.stick === "right" || this.stick === "both") &&
            !Object.hasOwn(this.props.bannerStyle || {}, "right")
        )
            current.style.right = `-${
                window.innerWidth - parent.offsetLeft - parent.offsetWidth
            }px`;
        if (
            !Object.hasOwn(this.props.bannerStyle || {}, "top") &&
            !Object.hasOwn(this.props.bannerStyle || {}, "bottom")
        ) {
            current.style.top = `${rect.top}px`;
            current.style.bottom = `${window.innerHeight - rect.bottom}px`;
        }

        if (this.avoidTOC && currentBreakpoint(window.innerWidth) === "2xl") {
            current.style.position = "absolute";
            current.style.right = "0";
            current.style.top = "0";
            current.style.bottom = "0";
            current.style.borderTopRightRadius = "1rem";
            current.style.borderBottomRightRadius = "1rem";
            current.parentElement!!.style.paddingRight = "2rem";
        } else {
            current.style.position = "fixed";
            current.parentElement!!.style.paddingRight = "0";
            current.style.borderTopRightRadius = "0";
            current.style.borderBottomRightRadius = "0";
        }
    }

    render() {
        const {
            children,
            className = "",
            bannerClassName = "",
            style
        } = this.props;

        return (
            <div
                className={cls(
                    "relative",
                    /\bp[xy]-\d+\b/.test(className) ? "" : "py-2",
                    className
                )}
                style={style}
            >
                {children}
                <div
                    className={cls(
                        "fixed",
                        bannerClassName ||
                            "bg-gradient-to-r from-primary-100 to-secondary-100",
                        "-z-10"
                    )}
                    style={this.props.bannerStyle}
                    ref={this.ref}
                />
            </div>
        );
    }
}
