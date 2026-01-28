export default function About() {
	return (
		<main className="flex w-full max-w-3xl flex-col items-center justify-between gap-10 py-32 px-16 sm:flex-row sm:gap-12">
			<div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
				<h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
					Sobre mim
				</h1>
				<p className="text-zinc-600 dark:text-zinc-400">
					Estudante de Tecnologia da Informação na Universidade UNINSSAU.
				</p>
			</div>
		</main>
	);
}
