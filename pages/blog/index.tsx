import Image from "next/image";
import { useRouter } from "next/router";
import {
    Banner,
    Card,
    Chip,
    HeaderLayout,
    Icon,
    Section,
} from "@/components";
import { Blog as BlogManager, BlogPost } from "../../lib/blog";
import { cls } from "../../lib/utils";

function BlogCard(props: { blog: BlogPost }) {
    let router = useRouter(),
        { blog } = props;
    return (
        <Card
            onClick={() => router.push(blog.url)}
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
                    className={cls(
                        "overflow-hidden",
                        "md:h-full",
                        "md:w-1/2",
                        "lg:w-1/3"
                    )}
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
                        "md:w-1/2",
                        "lg:w-2/3",
                        "flex-auto",
                        "flex",
                        "justify-between",
                        "flex-col"
                    )}
                >
                    <div className="margin-y-2">
                        <h3>{blog.title}</h3>
                        <p className="text-slate-500 text-lg font-semibold">
                            {blog.abstract}
                        </p>
                    </div>
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
    );
}

export default function Index({ blogs }: { blogs: BlogPost[] }) {
    return (
        <HeaderLayout active={"blog"}>
            <Banner avoidTOC={false} className="py-8">
                <Section
                    title={"Recent"}
                    flow={true}
                    avoidTOC={false}
                    contentStyle={{ gridAutoRows: "1fr" }}
                >
                    {blogs
                        .filter(
                            (blog) =>
                                (Date.now() - new Date(blog.date).getTime()) /
                                1000 /
                                60 /
                                60 /
                                24 <
                                7
                        )
                        .map((blog) => (
                            <BlogCard key={blog.id.join("-")} blog={blog} />
                        ))}
                </Section>
            </Banner>
            <Section
                title={"All"}
                flow={true}
                alternate={"none"}
                contentStyle={{ gridAutoRows: "1fr" }}
            >
                {blogs.map((blog) => (
                    <BlogCard key={blog.id.join("-")} blog={blog} />
                ))}
            </Section>
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
