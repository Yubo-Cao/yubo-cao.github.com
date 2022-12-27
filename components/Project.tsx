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
            className='flex flex-row gap-4 items-center flex-wrap'
            onClick={() => { router.push(props.url) }}
            accent="primary"
        >
            {/* 
                Let tailwind css generate:
                - shadow-primary-300/30 shadow-gray-300/30
                - hover:shadow-primary-400/30 hover:shadow-gray-400/30
                - active:shadow-primary-500/30 active:shadow-gray-500/30
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
            <div className="basis-72 flex-1">
                <h3 className='text-xl font-bold text-primary-400 mb-1'>{props.title}</h3>
                <div className="text-base font-thi">
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