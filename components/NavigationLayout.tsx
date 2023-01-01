import Header from "./Header";
import StickyNavigation from "./StickyNavigation";

export default function NavigatioLayout({
    active,
    children,
    className = "",
    mainClassName = "",
    navigationClassName = "",
    maxWidth = 1444
}: {
    active: string;
    children: React.ReactNode;
    className?: string;
    mainClassName?: string;
    navigationClassName?: string;
    maxWidth?: number;
}) {
    return (
        <>
            <Header active={active} />
            <div
                className={
                    "xl:grid xl:grid-cols-nav xl:gap-8 mt-4 mx-auto max-xl:overflow-x-hidden " +
                    className
                }
                style={{ maxWidth: `min(100%, ${maxWidth}px)` }}
            >
                <main
                    className={"mx-6 sm:mx-8 md:mx-16 xl:mr-0 " + mainClassName}
                >
                    {children}
                </main>
                <StickyNavigation
                    className={"hidden xl:block " + navigationClassName}
                />
            </div>
        </>
    );
}
