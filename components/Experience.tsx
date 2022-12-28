import Section from "./Section";

/**
 * Format date. 
 * - 2022-09 -> September 2022
 * - 2022-09-01 -> September 1, 2022
 * - 09-01 -> September 1
 * @param date A date in the format YYYY-MM-DD/YYYY-MM/MM-DD
 * @returns A date in the format B (D,)? YYYY
 */
function formatDate(date: string): string {
    const [year, month, day] = date.split('-').map(s => parseInt(s, 10));
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (day) {
        return `${months[month - 1]} ${day}, ${year}`;
    } else {
        return `${months[month - 1]} ${year}`;
    }
}

/**
 * Capitalize a string.
 * @param str the string to capitalize
 * @returns the capitalized string
 */
function capitlize(str: string): string {
    return str.toUpperCase().substring(0, 1) + str.toLowerCase().substring(1, str.length);
}

export default function Experience(props: {
    title: string,
    company: string,
    start: string,
    end?: string,
    children?: React.ReactNode
}) {
    let title = props.title,
        company = props.company,
        start = formatDate(props.start),
        end = props.end ? formatDate(props.end) : 'Present';
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
        </Section >
    )
}