import React from "react";
import styles from "./Banner.module.css";

type BannerProps = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    stick?: "left" | "right" | "both";
    variant?: any;
    avoidTOC?: boolean;
};

export default function Banner({
    children,
    className,
    style,
    stick = "both",
    avoidTOC = true,
    variant = "gradient"
}: BannerProps) {
    return (
        <>
            <div className={styles.container + " " + className} style={style}>
                {children}
                <div
                    className={`${avoidTOC && styles.avoid} ${styles.base} ${
                        styles[stick]
                    } ${styles[variant] || `bg-${variant}`}`}
                    style={style}
                />
            </div>
        </>
    );
}
