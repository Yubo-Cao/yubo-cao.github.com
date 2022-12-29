import Logo from "./Logo";
import Nav from "./Nav";

export default function Header({
    active,
    height = 72
}: {
    active: string;
    height?: 48 | 64 | 72;
}) {
    return (
        <header
            className={`flex items-center justify-between p-3 px-8 sm:px-16 md:px-24 bg-slate-50 
            max-xs:flex-row-reverse max-xs:justify-end max-xs:gap-2`}
            style={{ height: `${height}px` }}
        >
            <Logo
                size={{ 48: 24, 64: 32, 72: 40 }[height] as any}
                className={"xs:max-sm:hidden"}
            />
            <Nav active={active} height={height} />
        </header>
    );
}
