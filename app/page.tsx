import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex w-full max-w-3xl flex-col items-center justify-between gap-10 px-16 py-32 font-sans sm:flex-row sm:gap-12">
			{/* Texto */}
			<div className="flex flex-col items-center gap-5 text-center sm:items-start sm:text-left">
				<span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
					Aberto a oportunidades
				</span>

				<h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
					Olá, eu sou Gabriel Andrade.
				</h1>

				<h2 className="max-w-xs text-xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
					Desenvolvedor Backend Júnior
				</h2>

				<p className="text-zinc-600 dark:text-zinc-400">
					Estudante de Tecnologia da Informação na Universidade UNINASSAU.
				</p>

				{/* Stack */}
				<p className="text-sm text-zinc-500 dark:text-zinc-400">
					Golang · Node.js · TypeScript · NestJS · PostgreSQL · Docker
				</p>

				{/* CTAs */}
				<div className="mt-2 flex gap-3">
					<Button asChild>
						<Link href="/projects">Ver projetos</Link>
					</Button>

					<Button variant="outline" asChild>
						<Link href="/contact">Contato</Link>
					</Button>
				</div>

				{/* Links rápidos */}
				<div className="mt-2 flex gap-4 text-zinc-600 dark:text-zinc-400">
					<a
						href="https://github.com/andradeatdev"
						target="_blank"
						rel="noreferrer"
						aria-label="GitHub"
						className="transition hover:text-black dark:hover:text-zinc-50"
					>
						<Github size={20} />
					</a>

					<a
						href="https://linkedin.com/in/gabrielhenrique-dev/"
						target="_blank"
						rel="noreferrer"
						aria-label="LinkedIn"
						className="transition hover:text-black dark:hover:text-zinc-50"
					>
						<Linkedin size={20} />
					</a>

					<a
						href="mailto:gabrielandrade@proton.me"
						aria-label="Email"
						className="transition hover:text-black dark:hover:text-zinc-50"
					>
						<Mail size={20} />
					</a>
				</div>
			</div>

			{/* Imagem */}
			<div>
				<Image
					src="/assets/profile.jpg"
					alt="Gabriel Andrade"
					width={400}
					height={400}
					priority
					className="aspect-square rounded-full object-cover object-[center_25%] shadow-lg shadow-zinc-400 dark:shadow-zinc-800"
				/>
			</div>
		</main>
	);
}
