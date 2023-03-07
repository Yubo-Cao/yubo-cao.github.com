import { cls } from "@/lib/utils";
import Image from "next/image";

export function Achievement(props: {
    title: string;
    subtitle?: string;
    description?: string;
    children?: React.ReactNode;
    height?: number;
}) {
    let height = props.height || 144,
        width = Math.round(height * 0.5);
    return (
        <div className="flex items-center">
            <Image
                src="/images/achievement/wheat-left.svg"
                alt="Left side of wheat"
                width={width}
                height={height}
                className="-mr-10"
            />
            <div
                className={cls(
                    "flex-1",
                    "text-center",
                    "rounded-full",
                    "p-3",
                    "px-6"
                )}
            >
                <h3 className="text-2xl">{props.title}</h3>
                <p
                    className={cls(
                        "text-sm",
                        "font-light",
                        "text-slate-700",
                        "prose"
                    )}
                >
                    {props.description}
                    {props.children}
                </p>
            </div>
            <Image
                src="/images/achievement/wheat-right.svg"
                alt="Left side of wheat"
                width={width}
                height={height}
                className={cls("-ml-10")}
            />
        </div>
    );
}
