import React, { ReactNode } from "react";
import { isContainingSectionAlternating } from "./Section";

type CardProps = {
    onClick: () => void;
    children: ReactNode;
    className?: string;
    type?: "outlined" | "filled" | "elevated";
    hoverType?: "outlined" | "filled" | "elevated";
    activeType?: "outlined" | "filled" | "elevated";
    rounded?: boolean;
    accent?: string;
    alternateAccent?: string;
};

type CardState = {
    color: string;
};

export default class Card extends React.Component<CardProps, CardState> {
    ref: React.RefObject<HTMLDivElement>;

    constructor(props: CardProps) {
        super(props);
        this.state = {
            color: props.accent || "gray"
        };
        this.ref = React.createRef();
    }

    componentDidMount(): void {
        let current = this.ref.current;
        if (!current) return;
        this.setState({
            color:
                isContainingSectionAlternating(current) &&
                    this.props.alternateAccent
                    ? this.props.alternateAccent
                    : this.props.accent || "gray"
        });
    }

    /* 
        - border-gray-200
        - hover:shadow-gray-300/30
        - active:shadow-gray-400/30
        - border-primary-200
        - hover:shadow-primary-300/30
        - active:shadow-primary-400/30
    */

    render() {
        const {
            type = "outlined",
            hoverType = "elevated",
            activeType = "elevated",
            className = "",
            rounded = true,
            onClick,
            children
        } = this.props,
            color = this.state.color;

        const classes = [
            "p-4",
            "transition-all",
            "cursor-pointer",
            "bg-white",
            rounded ? "rounded-lg" : "",
            {
                outlined: `border border-${color}-200`,
                filled: `bg-${color}-100/30`,
                elevated: `shadow shadow-${color}-200/30`
            }[type],
            {
                outlined: `hover:border-${color}-300`,
                filled: `hover:bg-${color}-100`,
                elevated: `hover:shadow-md hover:shadow-${color}-300/30`
            }[hoverType],
            {
                outlined: `active:border-${color}-400`,
                filled: `active:bg-${color}-200`,
                elevated: `active:shadow-lg active:shadow-${color}-400/30`
            }[activeType],
            className
        ];

        if (/\bp-\d+\b/.test(className))
            classes.splice(classes.indexOf("p-4"), 1);

        return (
            <div className={classes.join(" ")} onClick={onClick} ref={this.ref}>
                {children}
            </div>
        );
    }
}

export { Card };
