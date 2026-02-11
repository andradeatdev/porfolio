import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { NavLink } from "./NavLink";
import { ThemeToggle } from "./theme-toggle";

export default function Nav() {
	const links = [
		{
			name: "Inicio",
			href: "/",
		},
		{
			name: "Blog",
			href: "/blog",
		},
		{
			name: "Projetos",
			href: "/projects",
		},
		{
			name: "Certificados",
			href: "/certificates",
		},
		{
			name: "Sobre",
			href: "/about",
		},
		{
			name: "Contato",
			href: "/contact",
		},
	];

	return (
		<header className="border-b border-zinc-200 dark:border-zinc-800 py-4 px-8 flex items-center justify-between sticky top-0 z-50 bg-zinc-50 dark:bg-zinc-950">
			<Link href="/">
				<span className="text-3xl font-bold leading-10 tracking-tight text-black dark:text-white">
					Andr
				</span>
				<span className="text-3xl font-normal leading-10 tracking-tight text-indigo-600 dark:text-indigo-400">
					ade
				</span>
			</Link>

			<div className="items-center gap-4 hidden md:flex">
				<div className="gap-1 flex">
					{links.map((link) => (
						<NavLink key={link.name} href={link.href}>
							{link.name}
						</NavLink>
					))}
				</div>

				<ThemeToggle />
			</div>

			{/* <ThemeToggle className="md:hidden" /> */}
			<div className="md:hidden">
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="ghost" size="icon">
							<Menu />
						</Button>
					</SheetTrigger>
					<SheetContent
						side="right"
						className="bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 p-4"
					>
						<SheetTitle className="text-lg font-semibold">Menu</SheetTitle>

						<div className="gap-1 flex flex-col">
							{links.map((link) => (
								<NavLink key={link.name} href={link.href}>
									{link.name}
								</NavLink>
							))}
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
