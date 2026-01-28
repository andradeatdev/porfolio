import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
	return (
		<main className="flex w-full max-w-3xl flex-col items-center justify-between gap-10 sm:gap-4">
			<div>
				<h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 text-center">
					Entre em Contato
				</h1>
				<p className="text-zinc-600 dark:text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
					Tem um projeto em mente ou apenas quer dar um oi? Adoraria ouvir de
					você. Preencha o formulário abaixo ou entre em contato diretamente.
				</p>
			</div>

			{/* Contact Info */}
			<div className="bg-white dark:bg-zinc-900 p-10 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
				<h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6">
					Informações de Contato
				</h2>
				<div className="space-y-6">
					<div className="flex items-start gap-4">
						<div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
							<Mail className="w-6 h-6 text-zinc-900 dark:text-zinc-50" />
						</div>
						<div>
							<h3 className="font-medium text-zinc-900 dark:text-zinc-50">
								Email
							</h3>
							<p className="text-zinc-600 dark:text-zinc-400">
								gabrielandrade@proton.me
							</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
							<Phone className="w-6 h-6 text-zinc-900 dark:text-zinc-50" />
						</div>
						<div>
							<h3 className="font-medium text-zinc-900 dark:text-zinc-50">
								Telefone
							</h3>
							<p className="text-zinc-600 dark:text-zinc-400">
								+55 (81) 98844-0979
							</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
							<MapPin className="w-6 h-6 text-zinc-900 dark:text-zinc-50" />
						</div>
						<div>
							<h3 className="font-medium text-zinc-900 dark:text-zinc-50">
								Localização
							</h3>
							<p className="text-zinc-600 dark:text-zinc-400">
								Pernambuco, Brasil
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
