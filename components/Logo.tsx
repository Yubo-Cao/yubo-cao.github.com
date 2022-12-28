import Link from "next/link";
import Icon from "./Icon";

export default function Logo(props: { size?: 32 | 40 | 48 }) {
    const size = props.size || 32;
    return (
        <Link href="/" className="flex items-center gap-2">
            <Icon name="/icon.png" size={size} />
            <p className={`${size === 32 ? "text-lg" : (size === 40 ? "text-xl" : "text-2xl")} font-medium sm:max-md:hidden`}>Yubo Cao</p>
        </Link>
    )
}