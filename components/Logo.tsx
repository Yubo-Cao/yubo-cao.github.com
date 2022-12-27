import Link from "next/link";
import Image from "next/image";

export default function Logo(props: { size?: 32 | 40 | 48 }) {
    const size = props.size || 32;
    return (
        <Link href="/" className="flex items-center gap-2">
            <Image src="/icon.png" alt="Yubo Cao's Icon" width={size - 4} height={size - 4} />
            <p className={`${size === 32 ? "text-lg" : (size === 40 ? "text-xl" : "text-2xl")} font-medium sm:max-md:hidden`}>Yubo Cao</p>
        </Link>
    )
}