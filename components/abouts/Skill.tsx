import { IconGroup, Section } from "@/components";

export function Skill(props: {
    children: React.ReactNode;
    title: string;
    icons: string;
    type?: string;
}) {
    return (
        <Section>
            <IconGroup
                from="fa"
                type={props.type || ("solid" as any)}
                iconSize={24}
                size={48}
                wrapClassName="transition-all rounded-full bg-slate-100 hover:bg-slate-200"
                iconClassName="image-primary-400"
            >
                {props.icons}
            </IconGroup>
            <h3 className="mt-1 mb-4 text-slate-500">{props.title}</h3>
            <p className="leading-relaxed text-slate-700">{props.children}</p>
        </Section>
    );
}
