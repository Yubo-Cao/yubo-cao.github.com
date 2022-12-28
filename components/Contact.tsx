import Link from "next/link";
import React from "react";
import Card from "./Card";
import Icon from "./Icon";
import Modal from "./Modal";
import Title from "./Title";
import ClickCopy from "./ClickCopy";

export default function Contact(props: {
    type: "email" | "tel" | "discord" | "github",
    value: string,
}) {
    let type = props.type,
        value = props.value,
        size = 48;
    let icon = {
        email: <Icon name="email" size={size} from="md" type="rounded" fill={true} />,
        tel: <Icon name="phone" size={size} from="md" type="outlined" fill={true} />,
        discord: <Icon name="discord" size={size} from="fa" type="brand" />,
        github: <Icon name="github" size={size} from="fa" type="brand" />
    }[type];
    const [open, setOpen] = React.useState(false);
    const [copied, setCopied] = React.useState(false);
    let action = {
        email: () => { window.open(`mailto:${value}`); },
        tel: () => { window.open(`tel:${value}`); },
        discord: () => { setOpen(true); },
        github: () => { window.open(`https://${value}.github.com`, "_blank"); }
    }[type];
    return (
        <Card onClick={action} className="p-4" activeType="elevated" hoverType="elevated">
            <div className="flex items-center gap-4">
                {icon}
                <div className="text-lg font-medium">{value}</div>
            </div>
            {
                type === "discord" &&
                <Modal onClose={() => { setOpen(false); window.open('https://discord.com/users/@me', "_blank") }} open={open}>
                    <Title level={3}>Add me in discord</Title>
                    <p className="prose">
                        Click my discord username <ClickCopy content={value} className="text-blue-500 hover:underline"><code>{value}</code></ClickCopy>
                        You will be sent to <Link href="https://discord.com/users/@me">https://discord.com/users/@me</Link> after you close
                    </p>
                </Modal>
            }
        </Card>
    );
}