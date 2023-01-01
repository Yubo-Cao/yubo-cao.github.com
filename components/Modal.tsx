import React from "react";
import Icon from "./Icon";

export default function Modal(props: {
    children: React.ReactNode;
    onClose: () => void;
    className?: string;
    style?: React.CSSProperties;
    showCloseButton?: boolean;
    open?: boolean;
}) {
    let open: boolean = props.open || false,
        showCloseButton = props.showCloseButton || true;
    const [isVisible, setIsVisible] = React.useState(open);
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        setIsVisible(open);
    }, [open]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            props.onClose();
        }, 150);
    };

    return (
        <div
            className={`transition-all fixed inset-0 bg-black flex items-center justify-center
              ${
                  isVisible
                      ? "bg-opacity-50 backdrop-blur-sm opacity-100  z-50"
                      : "bg-opacity-0 opacity-0 -z-50"
              }`}
            ref={ref}
        >
            <div
                className={`relative bg-white rounded-md p-8 ${
                    props.className || ""
                } transition-all  transform ${
                    isVisible ? "scale-100" : "scale-95"
                }`}
                style={props.style}
            >
                {showCloseButton && (
                    <button
                        onClick={handleClose}
                        className="absolute top-2 right-2 p-2 cursor-pointer"
                    >
                        <Icon name="close" />
                    </button>
                )}
                {props.children}
            </div>
        </div>
    );
}
