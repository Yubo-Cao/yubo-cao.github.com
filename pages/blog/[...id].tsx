import { Blog as BlogManager, BlogPost } from "../../lib/blog";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import SyntaxHighlighter from "react-syntax-highlighter";
import NavigationLayout from "../../components/NavigationLayout";
import Image from "next/image";
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

async function getStaticProps({ params }: { params: { id: string[] } }) {
    let post = await BlogManager.fromId(params.id);
    return {
        props: {
            blog: post.json,
            content: await BlogManager.render(post)
        }
    };
}

export default function Blog({
    blog,
    content
}: {
    blog: BlogPost;
    content: MDXRemoteSerializeResult;
}) {
    return (
        <NavigationLayout
            active={"blog"}
            mainClassName={cls(
                "prose",
                "justify-self-end",
                "mx-0",
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
            <h1>{blog.title}</h1>
            <MDXRemote {...content} components={{ SyntaxHighlighter }} />
            <button
                onClick={() => window.history.back()}
                className={cls(
                    "border",
                    "border-primary-200",
                    "hover:bg-primary-200",
                    "px-2",
                    "py-1",
                    "rounded",
                    "mt-4"
                )}
            >
                Back
            </button>
        </NavigationLayout>
    );
}

export { getStaticPaths, getStaticProps };
