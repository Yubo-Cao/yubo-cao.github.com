import { Card, Icon } from "@/components";
import { useRouter } from "next/router";
import { useRef } from "react";

export function Project(props: {
    title: string;
    url: string;
    description?: string;
    name: string;
    size?: number;
    iconSize?: number;
    children?: React.ReactNode;
}) {
    let size = props.size || 64,
        description =
            props.description || typeof props.children === "string"
                ? props.children
                : "",
        ref = useRef(null),
        router = useRouter();

    return (
        <Card
            className="flex flex-row gap-4 items-start justify-start flex-wrap"
            onClick={() => router.push(props.url)}
            accent={"gray"}
            alternateAccent={"primary"}
            hoverType="elevated"
            activeType="elevated"
        >
            <Icon
                name={props.name}
                size={size}
                wrap={true}
                grade={200}
                iconSize={props.iconSize}
                className="text-primary-500 image-primary-400"
            />
            <div className="flex-1 basis-64 prose" ref={ref}>
                <h3>{props.title}</h3>
                <div className="flex-1">
                    {description && <p>{description}</p>}
                    {typeof props.children === "object" && props.children}
                </div>
            </div>
        </Card>
    );
}
