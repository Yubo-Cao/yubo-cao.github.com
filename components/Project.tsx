/*

*/

import Image from "next/image";
import Icon from "./Icon";
import Card from "./Card";
import { useRouter } from "next/router";

export default function Project(props: {
    title: string,
    url: string,
    description?: string,
    icon?: string,
    image?: string,
    size?: number,
    children?: React.ReactNode
}) {
    if (props.icon && props.image)
        throw new Error("Icon and image cannot be used at the same time.");
    if (!props.icon && !props.image)
        throw new Error("Icon or image must be used.");

    let size = props.size || 64,
        description = props.description || "";
    if (typeof props.children === "string")
        description = props.children;

    const router = useRouter();

    return (
        <Card
            className='flex flex-row gap-4 items-start justify-start flex-wrap'
            onClick={() => { router.push(props.url) }}
            accent="gray"
            type="filled"
        >
            {/* 
                Let tailwind css generate:
                - shadow-primary-300/30
                - hover:shadow-primary-400/30
                - active:shadow-primary-500/30
                - bg-primary-100/30
                - hover:bg-primary-100
                - active:bg-primary-200
                - bg-gray-100/30
                - hover:bg-gray-100
                - active:bg-gray-200
            */}
            <div style={{ width: 64, height: 64 }} className="flex shrink-0 grow-0 items-center justify-center">
                {
                    props.icon &&
                    <Icon name={props.icon} size={size} />
                }
                {
                    props.image &&
                    <Image src={props.image} alt={props.title} width={size} height={size} />
                }
            </div>
            <div className="flex-1 basis-64 prose">
                <h3>{props.title}</h3>
                <div className="flex-1">
                    {description && <p>{description}</p>}
                    {
                        typeof props.children === "object" &&
                        props.children
                    }
                </div>
            </div>
        </Card>
    )
}