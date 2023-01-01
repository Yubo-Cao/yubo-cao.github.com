import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";
import { useRouter } from "next/router";
import Banner from "../../components/Banner";
import Highlighter from "../../components/Highlighter";
import Icon from "../../components/Icon";
import NavButton from "../../components/NavButton";
import NavigationLayout from "../../components/NavigationLayout";
import Title from "../../components/Title";
import { Blog as BlogManager, BlogPost } from "../../lib/blog";
import { cls } from "../../lib/utils";

async function getStaticPaths() {
    return {
        paths: (await BlogManager.list()).map((blog) => ({
            params: {
                id: blog.id
            }
        })),
        fallback: false
    };
}

async function getStaticProps({
    params: { id }
}: {
    params: { id: string[] };
}) {
    const post = await BlogManager.fromId(id);
    return {
        props: {
            blog: post.json,
            content: await BlogManager.render(post),
            prev: (await BlogManager.prev(id))?.json || null,
            next: (await BlogManager.next(id))?.json || null
        }
    };
}

export const components = {
    pre: (props: any) => <Highlighter {...props} />,
    h1: (props: any) => <Title level={1} {...props} />,
    h2: (props: any) => <Title level={2} {...props} />,
    h3: (props: any) => <Title level={3} {...props} />,
    h4: (props: any) => <Title level={4} {...props} />,
    h5: (props: any) => <Title level={5} {...props} />,
    h6: (props: any) => <Title level={6} {...props} />,
    img: (props: any) => <img {...props} className={cls("rounded-lg")} />,
    Banner,
    Icon
};

export default function Blog({
    blog,
    content,
    prev,
    next
}: {
    blog: BlogPost;
    content: MDXRemoteSerializeResult;
    prev?: BlogPost;
    next?: BlogPost;
}) {
    const router = useRouter();
    return (
        <NavigationLayout
            active={"blog"}
            mainClassName={cls(
                "prose",
                "justify-self-end",
                "sm:mx-auto",
                "md:mx-auto",
                "xl:ml-0"
            )}
            maxWidth={1024}
            className={"mx-auto"}
        >
            <Image
                src={blog.cover}
                alt={`Cover image for ${blog.title}`}
                width={1024}
                height={512}
                className={"rounded-xl"}
            />
            <Title level={1}>{blog.title}</Title>
            <MDXRemote {...content} components={components} />
            <hr className="my-0 mt-16" />
            <div className={cls("flex", "justify-between")}>
                {prev == null ? (
                    <div />
                ) : (
                    <NavButton
                        type="backward"
                        content={
                            <>
                                <span className="font-medium">Previous: </span>
                                <span className="text-slate-500 font-light">
                                    {prev.title}
                                </span>
                            </>
                        }
                        onClick={() => {
                            router.push(`/blog/${prev.id}`);
                        }}
                    />
                )}
                {next == null ? (
                    <div />
                ) : (
                    <NavButton
                        type="forward"
                        content={
                            <>
                                <span className="font-medium">Next: </span>
                                <span className="text-slate-500 font-light">
                                    {next.title}
                                </span>
                            </>
                        }
                        onClick={() => {
                            router.push(`/blog/${next.id}`);
                        }}
                    />
                )}
            </div>
        </NavigationLayout>
    );
}

export { getStaticPaths, getStaticProps };
