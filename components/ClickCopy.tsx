import React, { useRef } from 'react';

export default function ClickCopy(props: {
    children: React.ReactNode,
    content: string,
    className?: string,
    style?: React.CSSProperties,
    onClick?: () => void
}) {
    const [copied, setCopied] = React.useState(false);
    const timeoutRef = useRef<number | null>(null);

    const copyToClipboard = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        navigator.clipboard.writeText(props.content);
        setCopied(true);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = window.setTimeout(() => {
            setCopied(false);
        }, 2000);
        if (props.onClick) {
            props.onClick();
        }
    };

    return (
        <span className={`relative cursor-pointer ${props.className}`} style={props.style} onClick={copyToClipboard}>
            {props.children}
            {
                <span
                    className={`absolute bg-black text-white rounded-md p-2 text-sm top-full left-1/2 -translate-x-1/2 transition-all`}
                    style={{
                        clipPath: copied ? 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)' : 'polygon(0 0, 100% 0%, 100% 0, 0 0)',
                    }}
                >
                    Copied
                </span>
            }
        </span>
    );
}
