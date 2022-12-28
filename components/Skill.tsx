import Icons from "./Icons"
import Section from "./Section"

export default function Skill(props: {
    children: React.ReactNode,
    title: string,
    icons: string,
    type?: string
}) {
    return (
        <Section
            title={props.title}
            subtitle={
                <Icons from="fa" type={props.type || "solid" as any} iconSize={24} size={48} wrapClassName="transition-all rounded-full bg-slate-100 hover:bg-slate-200">
                    {props.icons}
                </Icons>
            }
            level={3} contentClassName="prose max-w-3xl"
        >
            <p className='mt-2'>
                {props.children}
            </p>
        </Section>
    )
}