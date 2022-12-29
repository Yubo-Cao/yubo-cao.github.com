import Link from "next/link";
import { cls } from "../lib/utils";
import Icon from "./Icon";

export default function Logo({
    size = 24,
    className = ""
}: {
    size?: 24 | 32 | 40 | 48;
    className?: string;
}) {
    return (
        <Link href="/" className="flex items-center gap-2">
            <Icon name="/icon.png" size={size} />
            <p
                className={cls(
                    className,
                    {
                        24: "text-base",
                        32: "text-lg",
                        40: "text-4xl",
                        48: "text-4xl"
                    }[size],
                    "font-black",
                    "font-mono"
                )}
            >
                Yubo Cao
            </p>
        </Link>
    );
}
