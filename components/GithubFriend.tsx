import Image from "next/image";
import { useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loading";
import Title from "./Title";

export default function GithubFriend({ username, name }: { username: string; name?: string }) {
    const [image, setImage] = useState<string>(""),
        [description, setDescription] = useState<string>("");

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then((res) => res.json())
            .then((data) => {
                setImage(data.avatar_url);
                setDescription(data.bio || "NULL");
            })
            .catch((err) => {
                setImage("/images/error.png");
                setDescription(err.message);
            });
    }, [username]);

    return (
        <Card
            onClick={() => window.open(`https://github.com/${username}`, "_blank")}
            className="flex flex-col gap-2 xs:flex-row xs:gap-4 xs:items-center"
            hoverType="elevated"
            activeType="elevated"
            accent={"gray"}
            alternateAccent={"primary"}
        >
            {image ? (
                <Image
                    src={image}
                    alt={username}
                    className="w-20 h-20 rounded-full"
                    width={80}
                    height={80}
                />
            ) : (
                <Loading type="icon" size={80} />
            )}
            <div className="space-y-0">
                <Title level={3}>{name || username}</Title>
                {description !== "NULL" ? (
                    description ? (
                        <p>{description}</p>
                    ) : (
                        <Loading type="text" width={300} height={45} />
                    )
                ) : null}
            </div>
        </Card>
    );
}
