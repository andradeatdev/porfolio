import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Clock } from "lucide-react";
import Link from "next/link";

type BlogCardProps = {
	title: string;
	author: string;
	date: string;
	description: string;
	href: string;
	tags?: string[];
	readingTime?: string;
};

export default function BlogCard({
	title,
	author,
	date,
	description,
	href,
	tags = [],
	readingTime,
}: BlogCardProps) {
	const dt = new Date(date);
	const locale = navigator.language || "pt-BR";
	const formattedDate = dt.toLocaleDateString(locale, {
		day: "2-digit",
		month: "long",
		year: "numeric",
	});

	return (
		<Card className="flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-background hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
			<CardHeader className="space-y-3">
				<CardTitle className="text-2xl font-semibold leading-snug">
					<Link href={href} className="hover:underline underline-offset-4">
						{title}
					</Link>
				</CardTitle>

				<span className="text-sm text-zinc-500 dark:text-zinc-400">
					{author} · {formattedDate}
				</span>

				<p className="max-w-3xl text-zinc-600 dark:text-zinc-200">
					{description}
				</p>
			</CardHeader>

			<CardContent className="flex flex-wrap items-center gap-3">
				{tags.map((tag) => (
					<Badge key={tag} variant="secondary" className="dark:bg-zinc-800">
						{tag}
					</Badge>
				))}

				{readingTime && (
					<span className="ml-auto flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
						<Clock className="h-4 w-4" />
						{readingTime}
					</span>
				)}
			</CardContent>

			<CardFooter className="pt-2">
				<Link
					href={href}
					className="text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:underline"
				>
					Ler artigo →
				</Link>
			</CardFooter>
		</Card>
	);
}
