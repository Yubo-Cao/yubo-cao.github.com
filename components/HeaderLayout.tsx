import { ReactNode } from "react";
import Header from "./Header";

export default function HeaderLayout({
    active,
    children
}: {
    active: string;
    children: ReactNode;
}) {
    return (
        <>
            <Header active={active} />
            <div
                className="mt-4 mx-auto max-xl:overflow-x-hidden"
                style={{ maxWidth: "min(100%, 1444px)" }}
            >
                <main className="mx-4 sm:mx-8 md:mx-16 flex flex-col">{children}</main>
            </div>
        </>
    );
}
