"use client";

import { ProjectCardSkeleton } from "@/components/ProjectCardSkeleton";
import SimpleIcon from "@/components/SimpleIcon";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";

async function fetchData() {
	const res = await fetch("https://api.github.com/users/andradeatdev/repos");
	if (!res.ok) throw new Error("Falha ao buscar dados");

	const data = await res.json();
	return data.filter((repo: { name: string }) => repo.name !== "porfolio");
}

export default function Projects() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["projects"],
		queryFn: fetchData,
		staleTime: 1000 * 60 * 15,
	});

	if (isLoading) {
		return (
			<main className="flex w-full max-w-7xl flex-col items-center gap-10 py-32 px-6">
				<div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
					<Skeleton className="h-8 w-40" />
					<Skeleton className="h-4 w-64" />
				</div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
					{Array.from({ length: 8 }).map(() => {
						const uniqueKey = crypto.randomUUID();
						return <ProjectCardSkeleton key={uniqueKey} />;
					})}
				</div>
			</main>
		);
	}

	if (error) return <div>Error: {error.message}</div>;

	return (
		<main className="flex w-full max-w-7xl flex-col items-center justify-between gap-10 py-32 px-6 sm:gap-12">
			{/* Cabeçalho */}
			<div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
				<h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
					Projetos
				</h1>
				<p className="text-zinc-600 dark:text-zinc-400">
					Alguns dos meus projetos pessoais.
				</p>
			</div>

			{/* Grid de cards */}
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch w-full">
				{data.map(
					(repo: {
						name: string;
						html_url: string;
						description: string;
						language: string;
					}) => (
						<Card
							key={repo.name}
							className="flex flex-col h-full gap-4 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 min-w-[250px] min-h-[220px] transition-shadow hover:shadow-lg hover:shadow-zinc-900/10 dark:hover:shadow-zinc-50/5"
						>
							{/* Cabeçalho do card */}
							<CardHeader>
								<CardTitle>{repo.name}</CardTitle>
								<CardDescription className="mt-2 line-clamp-2 text-zinc-600 dark:text-zinc-400">
									{repo.description || "Sem descrição"}
								</CardDescription>
							</CardHeader>

							{/* Conteúdo do card */}
							<CardContent className="flex items-center gap-2">
								<SimpleIcon language={repo.language} size={28} />
							</CardContent>

							{/* Rodapé do card */}
							<CardFooter className="mt-auto">
								<Button
									asChild
									variant="outline"
									className="w-full justify-center gap-2"
								>
									<a
										href={repo.html_url}
										target="_blank"
										rel="noopener noreferrer"
									>
										Ver Projeto
									</a>
								</Button>
							</CardFooter>
						</Card>
					),
				)}
			</div>
		</main>
	);
}
