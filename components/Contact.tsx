import Card from "./Card";
import Icon from "./Icon";

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
    let action = {
        email: () => { window.open(`mailto:${value}`); },
        tel: () => { window.open(`tel:${value}`); },
        discord: () => { window.open(`https://discord.com/users/${value}`); },
        github: () => { window.open(`https://${value}.github.com`); }
    }[type];
    return (
        <Card onClick={action} className="p-4">
            <div className="flex items-center gap-4">
                {icon}
                <div className="text-lg font-medium">{value}</div>
            </div>
        </Card>
    );
}