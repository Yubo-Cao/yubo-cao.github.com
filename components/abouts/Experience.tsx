import { Section } from "@/components";
import { formatDate } from "@/lib/utils";
import { capitlize } from "@/lib/utils";

export function Experience(props: {
    title: string;
    company: string;
    start: string;
    end?: string;
    children?: React.ReactNode;
}) {
    let title = props.title,
        company = props.company,
        start = formatDate(props.start),
        end = props.end ? formatDate(props.end) : "Present";
    return (
        <Section
            title={capitlize(company)}
            subtitle={
                <>
                    <p className="font-semibold text-base">
                        {" "}
                        {capitlize(title)}{" "}
                    </p>
                    <p className="font-light text-base">
                        {" "}
                        {`${start}–${end}`}{" "}
                    </p>
                </>
            }
            contentClassName="prose"
            level={3}
            titleClassName="text-xl mb-2"
        >
            {props.children}
        </Section>
    );
}
