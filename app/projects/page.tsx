"use client";

import { useQuery } from "@tanstack/react-query";
import { ProjectCardSkeleton } from "@/components/ProjectCardSkeleton";
import SimpleIcon from "@/components/SimpleIcon";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

type GithubRepo = {
	name: string;
	html_url: string;
	description: string | null;
	language: string;
	languages_url: string;
	languages: Record<string, number>;
};

const GITHUB_REPOS_URL = "https://api.github.com/users/andradeatdev/repos";
const EXCLUDED_REPOS = new Set(["porfolio"]);
const NEXUS_DL_URL = "https://api.github.com/repos/NexusDL/NexusDL";

async function fetchLanguages(url: string) {
	const res = await fetch(url, { cache: "no-store" });
	if (!res.ok) {
		throw new Error("Falha ao buscar linguagens");
	}
	return res.json() as Promise<Record<string, number>>;
}

async function fetchSingleRepo(url: string): Promise<GithubRepo> {
	const res = await fetch(url, { cache: "no-store" });

	if (!res.ok) {
		throw new Error("Falha ao buscar repositório extra");
	}

	const repo = (await res.json()) as GithubRepo;
	repo.languages = await fetchLanguages(repo.languages_url);

	return repo;
}

async function fetchRepositories(): Promise<GithubRepo[]> {
	const [reposRes, nexusRepo] = await Promise.all([
		fetch(GITHUB_REPOS_URL, { cache: "no-store" }),
		fetchSingleRepo(NEXUS_DL_URL),
	]);

	if (!reposRes.ok) {
		throw new Error("Falha ao buscar repositórios do GitHub");
	}

	const repos = (await reposRes.json()) as GithubRepo[];

	const filteredRepos = repos.filter((repo) => !EXCLUDED_REPOS.has(repo.name));

	const reposWithLanguages = await Promise.all(
		filteredRepos.map(async (repo) => ({
			...repo,
			languages: await fetchLanguages(repo.languages_url),
		})),
	);

	return [...reposWithLanguages, nexusRepo];
}

function PageHeader() {
	return (
		<div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
			<h1 className="max-w-xs text-3xl font-semibold leading-snug tracking-tight text-black dark:text-zinc-50">
				Projetos
			</h1>
			<p className="text-zinc-600 dark:text-zinc-400">
				Alguns dos meus projetos pessoais.
			</p>
		</div>
	);
}

function LoadingState() {
	return (
		<main className="flex w-full max-w-7xl flex-col items-center gap-10 py-32 px-6">
			<PageHeader />

			<div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{Array.from({ length: 4 }).map(() => (
					<ProjectCardSkeleton key={crypto.randomUUID()} />
				))}
			</div>
		</main>
	);
}
function ProjectCard({ repo }: { repo: GithubRepo }) {
	const totalBytes = Object.values(repo.languages).reduce(
		(acc, value) => acc + value,
		0,
	);

	const topLanguages = Object.keys(repo.languages).filter((lang) => {
		const bytes = repo.languages[lang];
		const percentage = bytes / totalBytes;
		return percentage >= 0.1;
	});

	return (
		<Card className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200 bg-white/50 p-1 transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950/50 dark:hover:border-zinc-700 backdrop-blur-sm">
			<div className="absolute inset-0 -z-10 bg-linear-to-br from-zinc-100 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-zinc-900" />

			<div className="p-5">
				<CardHeader className="p-0">
					<div className="flex flex-wrap gap-2 mb-3">
						{topLanguages.length > 0 && (
							topLanguages.map((lang) => (
								<div
									key={lang}
									className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-2 py-1 dark:border-zinc-800 dark:bg-zinc-900"
								>
									<SimpleIcon className="rounded-xs" name={lang} size={14} />
									<span className="text-[10px] font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
										{lang}
									</span>
								</div>
							))
						)}
					</div>

					<CardTitle className="font-mono text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
						{repo.name}
					</CardTitle>

					{repo.description && (
						<CardDescription className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
							{repo.description}
						</CardDescription>
					)}
				</CardHeader>
			</div>

			<CardFooter className="p-5 pt-0">
				<a
					href={repo.html_url}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 transition-all hover:gap-3 dark:text-zinc-100"
				>
					Explorar código
					<span className="text-lg">→</span>
				</a>
			</CardFooter>
		</Card>
	);
}
export default function Projects() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["github-repos", "andradeatdev"],
		queryFn: fetchRepositories,
		staleTime: 1000 * 60 * 15,
	});

	if (isLoading) return <LoadingState />;

	if (error instanceof Error) {
		return <div>Erro: {error.message}</div>;
	}

	return (
		<main className="flex w-full max-w-7xl flex-col items-center gap-10 py-32 px-6 sm:gap-12">
			<PageHeader />

			<div className="grid w-full gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
				{data?.map((repo) => (
					<ProjectCard key={repo.name} repo={repo} />
				))}
			</div>
		</main>
	);
}
