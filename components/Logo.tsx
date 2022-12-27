import Link from "next/link";
import Image from "next/image";

export default function Logo(props: { size?: number }) {
    const size = props.size || 32;
    return (
        <Link href="/" className="flex items-center gap-1">
            <Image src="/icon.png" alt="Yubo Cao's Icon" width={size} height={size} />
            <p className={`${size < 32 ? "text-lg" : "text-2xl"} font-medium`}>Yubo Cao</p>
        </Link>
    )
}