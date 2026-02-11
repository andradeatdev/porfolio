import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/posts";

type Post = {
	slug: string;
	title: string;
	author: string;
	date: string;
	description: string;
	tags: string[];
	readingTime: string;
};

export default function Blog() {
	const posts: Post[] = getAllPosts();

	if (posts.length === 0) {
		return (
			<div className="flex w-full max-w-3xl flex-col items-center justify-between gap-10 py-32 px-16">
				Nenhum post encontrado
			</div>
		);
	}

	return (
		<main className="flex w-full max-w-3xl flex-col items-center justify-between gap-10 py-32 px-16">
			<div className="">
				<h1 className="text-3xl font-semibold mb-4 text-center">Blog</h1>
				<p className="text-zinc-600 dark:text-zinc-400">
					Aqui é onde eu escrevo sobre tecnologia.
				</p>
			</div>

			<div className="flex flex-col gap-6 w-full">
				{posts.map((post) => (
					<BlogCard
						key={post.slug}
						title={post.title}
						author={post.author}
						date={post.date}
						description={post.description}
						href={`/blog/${post.slug}`}
						tags={post.tags}
						readingTime={post.readingTime}
					/>
				))}
			</div>
		</main>
	);
}
