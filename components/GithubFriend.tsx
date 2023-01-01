import Image from "next/image";
import { useEffect, useState } from "react";
import { cls } from "../lib/utils";
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
                setDescription(data.bio || "");
            })
            .catch((err) => {
                setImage("/images/error.png");
                setDescription(err.message);
            });
    }, [username]);

    return (
        <Card
            onClick={() => window.open(`https://github.com/${username}`, "_blank")}
            className={cls(
                "flex flex-col gap-4 text-center items-center",
                "md:flex-row md:text-left"
            )}
            hoverType="elevated"
            activeType="elevated"
            accent={"gray"}
            alternateAccent={"primary"}
        >
            {image ? (
                <Image
                    src={image}
                    alt={username}
                    className={cls(
                        "w-24 h-24 rounded-full",
                        "md:w-36 md:h-auto md:rounded-none"
                    )}
                    width={80}
                    height={80}
                />
            ) : (
                <Loading type="icon" size={80} />
            )}
            <div className="space-y-0">
                <Title level={3}>{name || username}</Title>
                {description ? (
                    <p>{description}</p>
                ) : (
                    <Loading type="text" width={300} height={45} />
                )}
            </div>
        </Card>
    );
}
