import React from "react";
import { formatDate } from "../lib/utils";
import Section from "./Section";

function capitlize(str: string): string {
    return str.toUpperCase().substring(0, 1) + str.toLowerCase().substring(1, str.length);
}

export default function Experience(props: {
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
                    <p className="font-semibold text-base"> {capitlize(title)} </p>
                    <p className="font-light text-base"> {`${start}–${end}`} </p>
                </>
            }
            level={3}
            contentClassName="prose"
        >
            {props.children}
        </Section>
    );
}
