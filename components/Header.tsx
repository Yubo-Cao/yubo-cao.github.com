import Logo from "./Logo";
import Nav from "./Nav";

export default function Header(props: { active: string, height?: 48 | 64 }) {
    const height = props.height || 64, active = props.active;
    return (
        <header className="flex items-center justify-between p-2 bg-slate-50" style={{
            height: `${height}px`,
        }}>
            <Logo size={{ 64: 48, 48: 40 }[height] as 40 | 32} />
            <Nav active={active} height={height} />
        </header>
    )
}