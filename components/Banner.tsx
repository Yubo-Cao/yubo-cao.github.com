import React from "react";
import { cls } from "../lib/utils";

type BannerProps = {
    children: React.ReactNode;
    className?: string;
    bannerClassName?: string;
    style?: React.CSSProperties;
    bannerStyle?: React.CSSProperties;
    stick?: "left" | "right" | "both" | "none";
};

// rewrite as class
export default class Banner extends React.Component<BannerProps> {
    ref: React.RefObject<HTMLDivElement>;
    stick: "left" | "right" | "both" | "none";

    constructor(props: BannerProps) {
        super(props);
        this.ref = React.createRef();
        this.stick = props.stick || "both";
        console.log(this.props.style);
    }

    componentDidMount() {
        const { current } = this.ref;
        if (!current) return;
        const parent = current.parentElement;
        if (!parent) return;

        const widthAdjuster = () => {
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
        };
        widthAdjuster();
        window.addEventListener("resize", widthAdjuster);
    }

    render() {
        const {
            children,
            className = "",
            bannerClassName = "",
            style
        } = this.props;

        return (
            <div className={cls("relative", className)} style={style}>
                {children}
                <div
                    className={cls(
                        "absolute",
                        "top-0",
                        "bottom-0",
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
