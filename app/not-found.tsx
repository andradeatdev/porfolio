export default function NotFound() {
	return (
		<main className="flex w-full max-w-3xl flex-col items-center justify-between gap-10 py-32 px-16">
			<h1 className="text-3xl font-semibold mb-4 text-center">
				Página não encontrada
			</h1>
			<p className="text-zinc-600 dark:text-zinc-400">
				Esta página não está disponível.
			</p>
		</main>
	);
}
