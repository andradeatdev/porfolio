import { mdxComponents } from "@/components/mdx/mdxComponents";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export function generateStaticParams() {
	return getAllPosts().map(({ slug }) => ({ slug }));
}

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const post = getPostBySlug(slug);
	console.log("post", post);

	if (!post.ok) notFound();

	const { content, data } = post;

	return (
		<article className="prose-zinc prose dark:prose-invert max-w-3xl w-full m-12">
			<h1>{data.title}</h1>
			<MDXRemote source={content} components={mdxComponents} />
		</article>
	);
}
