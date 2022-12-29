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
        <Link href="/" className="flex items-center gap-4">
            <Icon
                name="/icon.png"
                iconSize={size * 0.75}
                size={size}
                wrapClassName={`border border-slate-300 rounded-full transition-all hover:border-slate-500`}
            />
            <p
                className={cls(
                    className,
                    {
                        24: "text-base",
                        32: "text-lg",
                        40: "text-2xl",
                        48: "text-3xl"
                    }[size],
                    "font-mono"
                )}
            >
                Yubo Cao
            </p>
        </Link>
    );
}
