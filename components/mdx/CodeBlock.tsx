import { codeToHtml } from "shiki";

type CodeBlockProps = {
	children: string;
	language?: string;
};

export async function CodeBlock({
	children,
	language = "text",
}: CodeBlockProps) {
	const code = await codeToHtml(children.trim(), {
		lang: language,
		themes: {
			light: "vitesse-light",
			dark: "vitesse-dark",
		},
	});

	return (
		<div className="not-prose my-6 overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
			{/* Header */}
			<div className="flex items-center justify-between bg-zinc-200 dark:bg-zinc-800 px-4 py-2 text-xs text-zinc-700 dark:text-zinc-300">
				<span className="font-mono uppercase">{language}</span>
			</div>

			{/* Code */}
			<div
				className="[&>pre]:px-4 [&>pre]:py-3"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: HTML gerado pelo Shiki a partir de MDX local versionado
				dangerouslySetInnerHTML={{ __html: code }}
			/>
		</div>
	);
}
