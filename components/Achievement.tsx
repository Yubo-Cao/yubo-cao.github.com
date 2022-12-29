import Image from "next/image";
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
        width = Math.round(height * 0.5),
        compression = Math.round(height * 0.1);
    return (
        <div className="flex items-center">
            <Image
                src="/images/achievement/wheat-left.svg"
                alt="Left side of wheat"
                width={width}
                height={height}
                style={{ marginRight: `-${compression}px` }}
            />
            <div className="flex-1 text-center">
                {
                    <Title
                        title={props.title}
                        subtitle={props.subtitle}
                        level={props.level || 3}
                        className="text-primary-400"
                        subtitleClassName="text-primary-400 -mt-2"
                    />
                }
                <p className="font-light prose">
                    {props.description}
                    {props.children}
                </p>
            </div>
            <Image
                src="/images/achievement/wheat-right.svg"
                alt="Left side of wheat"
                width={width}
                height={height}
                style={{ marginLeft: `-${compression}px` }}
            />
        </div>
    );
}
