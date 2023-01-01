import { promises, readFileSync } from "fs";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { formatDate } from "./utils";

interface BlogPost {
    id: string[];
    url: string;
    date: string;
    last_modified: string;
    title: string;
    authors: string[];
    tags: string[];
    cover: string;
    abstract: string;
}

const BLOG_DIRECTORY = path.join("content", "blog");

class Blog implements BlogPost {
    private _header?: {
        date: string;
        last_modified: string;
        title: string;
        authors: string[];
        tags: string[];
        cover: string;
        abstract: string;
    };

    constructor(public readonly path: string) {}

    static fromId(id: string[]): Blog {
        return new Blog(path.join(BLOG_DIRECTORY, ...id) + ".mdx");
    }

    private _process_data(path: string, fileContent: string) {
        const { data } = matter(fileContent);
        let missing = [
            "date",
            "last_modified",
            "title",
            "author",
            "tags",
            "cover",
            "abstract"
        ].filter((key) => !(key in data));
        if (missing.length) {
            throw new Error(`Missing keys in ${path}: ${missing.join(", ")}`);
        }
        try {
            new Date(data.date);
            new Date(data.last_modified);
        } catch (e) {
            throw new Error(`Blog ${path} has an invalid date`);
        }

        function _ensure_list(data: string | string[]): string[] {
            if (typeof data === "string")
                return data.split(",").map((s) => s.trim());
            return data;
        }

        let authors = _ensure_list(data.author);
        let tags = _ensure_list(data.tags);

        this._header = {
            date: formatDate(data.date),
            last_modified: formatDate(data.last_modified),
            title: data.title,
            abstract: data.abstract,
            authors,
            tags,
            cover: data.cover
        };
    }

    private _load() {
        if (this._header) return;
        let path = this.path,
            content = readFileSync(path, "utf-8");
        this._process_data(path, content);
    }

    static async list(): Promise<Blog[]> {
        const files = await promises.readdir(BLOG_DIRECTORY);
        return Promise.all(
            files
                .filter((file) => /\.mdx$/.test(file))
                .map((file) => new Blog(path.join(BLOG_DIRECTORY, file)))
                .sort((a, b) => {
                    let a_date = new Date(a.date),
                        b_date = new Date(b.date);
                    return b_date.getTime() - a_date.getTime();
                })
        );
    }

    private static _list: Blog[] | null = null;

    static async next(id: string[]): Promise<Blog | null> {
        if (!this._list) this._list = await this.list();
        let index = this._list.findIndex(
            (blog) => blog.id.join("/") === id.join("/")
        );
        if (index === -1) return null;
        return this._list[index - 1] || null;
    }

    static async prev(id: string[]): Promise<Blog | null> {
        if (!this._list) this._list = await this.list();
        let index = this._list.findIndex(
            (blog) => blog.id.join("/") === id.join("/")
        );
        if (index === -1) return null;
        return this._list[index + 1] || null;
    }

    static async render(blog: Blog): Promise<MDXRemoteSerializeResult> {
        let content = await promises.readFile(blog.path, "utf-8");
        let { content: mdx } = matter(content);
        return await serialize(mdx, {
            mdxOptions: {
                remarkPlugins: [remarkGfm, remarkMath],
                development: false
            }
        });
    }

    get header() {
        this._load();
        return this._header!;
    }

    get date() {
        return this.header.date;
    }

    get last_modified() {
        return this.header.last_modified;
    }

    get title() {
        return this.header.title;
    }

    get authors() {
        return this.header.authors;
    }

    get tags() {
        return this.header.tags;
    }

    get cover() {
        return this.header.cover;
    }

    get url() {
        return `/blog/${this.id}`;
    }

    get abstract() {
        return this.header.abstract;
    }

    get id() {
        const fn = (s: string) => (s[0] === path.sep ? s.slice(1) : s);
        return fn(
            this.path.replace(/\.mdx$/, "").replace(BLOG_DIRECTORY, "")
        ).split(path.sep);
    }

    get json(): BlogPost {
        this._load();
        return {
            ...this.header,
            id: this.id,
            url: this.url
        };
    }
}

export { Blog, BLOG_DIRECTORY };
export type { BlogPost };
