import Icon from "./Icon";

export default function Rate(props: { value: number, showNumber?: boolean }) {
    let value = props.value,
        showNumber = props.showNumber || false;
    if (value < 0 || value > 5) {
        throw new Error("Invalid value for rate");
    }
    let stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < value) {
            stars.push(<Icon name="star" size={24} from="md" fill={true} />);
        }
        else {
            stars.push(<Icon name="star" size={24} from="md" type="outlined"
                fill={false} />);
        }
    }
    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
                {stars}
            </div>
            {showNumber && <div className="text-sm text-gray-400 flex-1 text-end">{value}</div>}
        </div>
    );
}