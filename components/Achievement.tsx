import Image from "next/image";
import { cls } from "../lib/utils";
import Title from "./Title";

export default function Achievement(props: {
    title: string;
    subtitle?: string;
    description?: string;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
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
            <div className={cls("flex-1", "text-center", "rounded-full", "p-3", "px-6")}>
                {
                    <Title
                        title={props.title}
                        subtitle={props.subtitle}
                        level={props.level || 3}
                        subtitleClassName={cls("-mt-4", "mb-2")}
                    />
                }
                <p className={cls("text-sm", "font-light", "text-slate-500", "prose")}>
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
