import { promises } from "fs";
import matter from "gray-matter";

class Blog {
    private _load_content?: {
        header: {
            date: Date;
            last_modified: Date;
            title: string;
            authors: string[];
            tags: string[];
            cover: string;
        };
        content?: string;
    };

    constructor(public readonly path: string) {}

    private async _load() {
        let path = this.path;
        const content = await promises.readFile(path, "utf-8");
        const { data } = matter(content);
        if (
            ["date", "last_modified", "title", "author", "tags", "cover"].some(
                (key) => !data.hasOwnProperty(key)
            )
        )
            throw new Error(`Blog ${path} is missing some metadata`);
        try {
            new Date(data.date);
            new Date(data.last_modified);
        } catch (e) {
            throw new Error(`Blog ${path} has an invalid date`);
        }

        function _ensure_list(data: string | string[]): string[] {
            if (typeof data === "string") return data.split(",").map((s) => s.trim());
            return data;
        }

        let authors = _ensure_list(data.author);
        let tags = _ensure_list(data.tags);

        this._load_content = {
            header: {
                date: new Date(data.date),
                last_modified: new Date(data.last_modified),
                title: data.title,
                authors,
                tags,
                cover: data.cover
            },
            content
        };
    }

    static async list(path: string): Promise<Blog[]> {
        const files = await promises.readdir(path);
        return Promise.all(
            files
                .filter((file) => file.endsWith(".md"))
                .map((file) => new Blog(`${path}/${file}`))
        );
    }
}
