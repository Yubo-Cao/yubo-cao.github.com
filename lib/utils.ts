function formatDate(date: string | Date): string {
    let year, month, day;
    if (typeof date === "string") {
        [year, month, day] = date.split("-").map((s) => parseInt(s, 10));
    } else {
        year = date.getFullYear();
        month = date.getMonth() + 1;
        day = date.getDate();
    }

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    if (day) {
        return `${months[month - 1]} ${day}, ${year}`;
    } else {
        return `${months[month - 1]} ${year}`;
    }
}

function cls(...es: string[]): string {
    return es.filter((e) => e).join(" ");
}

function capitlize(str: string): string {
    return (
        str.toUpperCase().substring(0, 1) +
        str.toLowerCase().substring(1, str.length)
    );
}

export { formatDate, cls, capitlize };
