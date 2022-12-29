import { useRouter } from "next/router";
import Card from "./Card";
import Icon from "./Icon";

export default function Project(props: {
    title: string;
    url: string;
    description?: string;
    name: string;
    size?: number;
    iconSize?: number;
    children?: React.ReactNode;
}) {
    let size = props.size || 64,
        description = props.description || "";
    if (typeof props.children === "string") description = props.children;

    const router = useRouter();

    return (
        <Card
            className="flex flex-row gap-4 items-start justify-start flex-wrap"
            onClick={() => {
                router.push(props.url);
            }}
            accent="gray"
            hoverType="elevated"
            activeType="elevated"
        >
            {/* 
                - border-gray-300
                - hover:shadow-gray-400/30
                - active:shadow-gray-500/30
            */}

            <Icon
                name={props.name}
                size={size}
                className="image-primary-400"
                wrap={true}
                grade={200}
                iconSize={props.iconSize}
            />
            <div className="flex-1 basis-64 prose">
                <h3>{props.title}</h3>
                <div className="flex-1">
                    {description && <p>{description}</p>}
                    {typeof props.children === "object" && props.children}
                </div>
            </div>
        </Card>
    );
}
