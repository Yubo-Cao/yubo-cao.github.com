import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";
import { useRouter } from "next/router";
import {
    Banner,
    Highlighter,
    Icon,
    NavButton,
    NavigationLayout
} from "@/components";
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
    img: (props: any) => <Image width={300} height={200} alt={""} {...props} className={cls("rounded-lg")} />,
    blockquote: (props: any) => (
        <blockquote className="border-primary-500" {...props} />
    ),
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
            maxWidth={1058}
            className={"mx-auto"}
        >
            <Image
                src={blog.cover}
                alt={`Cover image for ${blog.title}`}
                width={1024}
                height={512}
                className={"rounded-xl"}
            />
            <h1>{blog.title}</h1>
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
