import { useState } from "react";


export default function MenuButton(props: {
    open?: boolean,
    onClick?: () => void
}) {
    const [open, setOpen] = useState(props.open || false);
    const onClick = props.onClick || (() => setOpen(!open));
    return (
        <button onClick={onClick}>
            <i className="mdi">{open ? "menu_open" : "menu"}</i>
        </button>
    );
}