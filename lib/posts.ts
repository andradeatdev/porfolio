import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";

type Post = {
    slug: string;
    title: string;
    author: string;
    date: string;
    description: string;
    tags: string[];
    readingTime: string;
};

const POSTS_PATH = path.join(process.cwd(), "content/blog");

export function getAllPosts() {
    return fs.readdirSync(POSTS_PATH).map((file) => {
        const slug = file.replace(/\.mdx$/, "");
        const source = fs.readFileSync(path.join(POSTS_PATH, file), "utf8");
        const { data } = matter(source);

        return { slug, ...data } as Post;
    });
}

export function getPostBySlug(slug: string) {
    const file = path.join(POSTS_PATH, `${slug}.mdx`);

    if (!fs.existsSync(file)) return { ok: false as const };

    const source = fs.readFileSync(file, "utf8");
    const { content, data } = matter(source);

    return {
        ok: true as const,
        content,
        data,
    };
}
