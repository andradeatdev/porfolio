import SimpleIcon from "@/components/SimpleIcon";
import Strong from "@/components/strong";
import { Button } from "@/components/ui/button";

export default function About() {
	return (
		<main className="mx-auto w-full max-w-5xl px-6 py-32 space-y-24">
			{/* INTRO */}
			<section className="space-y-6">
				<h1 className="text-4xl font-semibold tracking-tight">Sobre mim</h1>

				<p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
					Sou estudante de Análise e Desenvolvimento de Sistemas, com foco em
					desenvolvimento <Strong text="backend" />. Tenho experiência prática
					na criação e consumo de <Strong text="APIs REST" />, autenticação com{" "}
					<Strong text="JWT" />, integração com bancos de dados{" "}
					<Strong text="SQL e NoSQL" /> e automação de rotinas em{" "}
					<Strong text="ambiente Linux" />.
					<br />
					<br />
					Atualmente atuo em áreas operacionais e de análise de risco, onde
					desenvolvi forte capacidade de trabalhar com dados, aplicar regras de
					validação, identificar inconsistências e automatizar processos
					internos. Busco uma oportunidade de{" "}
					<Strong text="estágio ou posição júnior em backend" /> para evoluir
					tecnicamente e contribuir com soluções escaláveis, bem estruturadas e
					orientadas a boas práticas.
				</p>
			</section>

			{/* STACK */}
			<section className="space-y-8">
				<h2 className="text-2xl font-semibold">Stack técnica</h2>

				<div className="grid gap-8 sm:grid-cols-2">
					{/* Linguagens / Backend */}
					<div className="space-y-4">
						<h3 className="font-medium text-zinc-900 dark:text-zinc-100">
							Backend
						</h3>
						<div className="flex flex-wrap gap-3">
							<SimpleIcon language="go" />
							<SimpleIcon language="nodedotjs" />
							<SimpleIcon language="typescript" />
							<SimpleIcon language="javascript" />
						</div>
					</div>

					{/* Infra / Ferramentas */}
					<div className="space-y-4">
						<h3 className="font-medium text-zinc-900 dark:text-zinc-100">
							Infra & Ferramentas
						</h3>
						<div className="flex flex-wrap gap-3">
							<SimpleIcon language="mysql" />
							<SimpleIcon language="docker" />
							<SimpleIcon language="linux" />
							<SimpleIcon language="github" className="dark:invert" />
						</div>
					</div>
				</div>
			</section>

			{/* O QUE EU RESOLVO */}
			<section className="space-y-8">
				<h2 className="text-2xl font-semibold">O que eu faço bem</h2>

				<ul className="grid gap-4 sm:grid-cols-2">
					<li className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5">
						Desenvolvimento e consumo de APIs REST
					</li>
					<li className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5">
						Autenticação e controle de acesso com JWT
					</li>
					<li className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5">
						Integração com bancos de dados SQL e NoSQL
					</li>
					<li className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5">
						Automação de rotinas e validação de dados
					</li>
				</ul>
			</section>

			{/* EXPERIÊNCIA */}
			<section className="space-y-8">
				<h2 className="text-2xl font-semibold">Experiência</h2>

				<p className="max-w-3xl text-zinc-600 dark:text-zinc-400">
					Atuo profissionalmente em áreas de análise de risco e backoffice,
					trabalhando diretamente com processamento, validação e monitoramento
					de dados operacionais. Nessas funções, desenvolvi uma base sólida em
					lógica, atenção a regras de negócio, automação de análises internas e
					confiabilidade de processos — habilidades que aplico no
					desenvolvimento backend e em projetos pessoais.
				</p>
			</section>

			{/* FILOSOFIA */}
			<section className="space-y-8">
				<h2 className="text-2xl font-semibold">Como eu trabalho</h2>

				<ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
					<li>• Foco em backend simples, previsível e bem estruturado</li>
					<li>• Código legível acima de abstrações desnecessárias</li>
					<li>• Validação de dados e regras de negócio bem definidas</li>
					<li>• Performance, segurança e manutenibilidade como padrão</li>
				</ul>
			</section>

			{/* CTA */}
			<section className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8">
				<div>
					<h2 className="text-xl font-semibold">Quer ver meus projetos?</h2>
					<p className="text-zinc-600 dark:text-zinc-400">
						APIs, automações e experimentos focados em backend.
					</p>
				</div>

				<Button asChild size="lg">
					<a href="/projects">Ver projetos</a>
				</Button>
			</section>
		</main>
	);
}
