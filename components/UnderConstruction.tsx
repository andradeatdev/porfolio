type Props = {
	title?: string;
};

export default function UnderConstruction({ title = "Em construção" }: Props) {
	return (
		<main>
			<h1 className="text-3xl font-semibold mb-4 text-center">{title}</h1>
			<p className="text-zinc-600 dark:text-zinc-400 text-center">
				Esta página ainda não está disponível.
			</p>
		</main>
	);
}
