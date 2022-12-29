import React, { ReactNode } from "react";
import Icon from "./Icon";

type ButtonType = "forward" | "backward";

interface Props {
    type: ButtonType;
    onClick: () => void;
    content?: ReactNode;
}

const NavButton: React.FC<Props> = ({
    type,
    content: text = type == "forward" ? "Forward" : "Backard",
    onClick
}) => {
    return (
        <button
            onClick={onClick}
            className={`border border-primary-200 hover:bg-primary-200 px-2 py-1 rounded mt-4`}
        >
            <div className="flex items-center gap-2">
                {type === "backward" ? (
                    <>
                        <Icon name="arrow_back" className="-ml-1" />
                        <span>{text}</span>
                    </>
                ) : (
                    <>
                        <span>{text}</span>
                        <Icon name="arrow_forward" className="-mr-1" />
                    </>
                )}
            </div>
        </button>
    );
};

export default NavButton;
