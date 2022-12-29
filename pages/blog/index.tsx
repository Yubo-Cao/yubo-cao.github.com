import { Blog as BlogManager, BlogPost } from "../../lib/blog";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { useRouter } from "next/router";
import Title from "../../components/Title";
import { Chip } from "../../components/Chip";
import Icon from "../../components/Icon";
import HeaderLayout from "../../components/HeaderLayout";
import { cls } from "../../lib/utils";
import Image from "next/image";

export default function Index({ blogs }: { blogs: BlogPost[] }) {
    let tags: { [key: string]: BlogPost[] } = {};
    blogs.forEach((blog) => {
        blog.tags.forEach((tag) => {
            if (tags[tag]) tags[tag].push(blog);
            else tags[tag] = [blog];
        });
    });

    let router = useRouter();

    return (
        <HeaderLayout active={"blog"}>
            {Object.entries(tags).map(([tag, blogs]) => (
                <Section title={tag} flow={true} key={tag}>
                    {blogs.map((blog) => (
                        <Card
                            onClick={() => router.push(blog.url)}
                            key={blog.id.join("-")}
                            hoverType={"elevated"}
                            activeType={"elevated"}
                            className={cls("p-0", "max-w-2xl")}
                        >
                            <section
                                className={cls(
                                    "w-full",
                                    "h-full",
                                    "flex",
                                    "flex-col",
                                    "md:flex-row",
                                    "md:gap-4"
                                )}
                            >
                                <div
                                    className={cls("overflow-hidden", "md:h-full", "md:w-1/3")}
                                >
                                    <Image
                                        src={blog.cover}
                                        width={300}
                                        height={200}
                                        alt={`Cover image for ${blog.title}`}
                                        className={cls(
                                            "rounded-t-lg",
                                            "w-full",
                                            "h-full",
                                            "object-cover",
                                            "md:rounded-t-none",
                                            "md:rounded-l-lg"
                                        )}
                                    />
                                </div>
                                <div
                                    className={cls(
                                        "p-4",
                                        "md:w-2/3",
                                        "flex-auto",
                                        "flex",
                                        "justify-between",
                                        "flex-col"
                                    )}
                                >
                                    <Title
                                        level={3}
                                        title={blog.title}
                                        subtitle={blog.abstract}
                                        subtitleClassName={cls(
                                            "text-slate-500",
                                            "text-lg",
                                            "font-semibold"
                                        )}
                                        className={cls("mb-0")}
                                    />
                                    <div className={cls("mt-4", "space-y-2")}>
                                        <p className={cls("text-sm", "text-gray-500")}>
                                            {blog.date}
                                        </p>
                                        <div className={cls("flex", "flex-row", "gap-2")}>
                                            <Icon
                                                name={"tag"}
                                                className={cls("text-gray-500")}
                                                size={24}
                                            />
                                            <div className={`space-x-2`}>
                                                {blog.tags.map((tag) => (
                                                    <Chip key={tag}>{tag}</Chip>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Card>
                    ))}
                </Section>
            ))}
        </HeaderLayout>
    );
}

export async function getStaticProps() {
    return {
        props: {
            blogs: (await BlogManager.list()).map((blog) => blog.json)
        }
    };
}
