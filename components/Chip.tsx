import { Component, ReactNode } from "react";

export class Chip extends Component<{
    children: ReactNode;
    onClick?: () => any;
}> {
    render() {
        return (
            <button
                className={[
                    "px-2.5",
                    "py-0.5",
                    "rounded-lg",
                    "font-base",
                    "text-sm",
                    "text-slate-500",
                    "cursor-pointer",
                    "border",
                    "border-primary-200",
                    "hover:bg-primary-100",
                    "active:ring-2",
                    "active:ring-primary-200",
                    "active:ring-opacity-50",
                    "active:bg-primary-100"
                ].join(" ")}
                onClick={this.props.onClick}
            >
                {this.props.children}
            </button>
        );
    }
}
