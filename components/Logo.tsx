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
        <Link
            href="/"
            className={cls(
                "flex",
                "items-center",
                {
                    24: "gap-2",
                    32: "gap-2",
                    40: "gap-3",
                    48: "gap-4"
                }[size],
                // chip
                "rounded-full",
                "transition-all",
                "hover:bg-slate-100",
                "p-2"
            )}
        >
            <Icon name="/icon.png" size={size} />
            <p
                className={cls(
                    className,
                    {
                        24: "text-base",
                        32: "text-xl",
                        40: "text-2xl",
                        48: "text-3xl"
                    }[size],
                    "font-mono",
                    "max-xs:hidden"
                )}
            >
                YUBO CAO
            </p>
        </Link>
    );
}
