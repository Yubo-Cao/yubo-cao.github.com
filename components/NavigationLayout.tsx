import Header from "./Header";
import StickyNavigation from "./StickyNavigation";

export default function ({ active, children }: { active: string, children: React.ReactNode }) {
    return (
        <>
            <Header active={active} />
            <div className='xl:grid xl:grid-cols-nav xl:gap-8 mt-4 mx-auto max-xl:overflow-x-hidden' style={{ maxWidth: 'min(100%, 1444px)' }}>
                <main className='mx-2 sm:mx-4 md:mx-16 xl:mr-0 flex flex-col'>
                    {children}
                </main>
            </div>
            <StickyNavigation />
        </>
    );
}