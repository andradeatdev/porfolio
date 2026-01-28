"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
	href: string;
	children: React.ReactNode;
};

export function NavLink({ href, children }: NavLinkProps) {
	const pathname = usePathname();

	const isActive = pathname === href || pathname.startsWith(`${href}/`);

	return (
		<Button asChild variant="ghost" className="relative">
			<Link href={href} className="relative px-4 py-2">
				{isActive && (
					<motion.span
						layoutId="nav-indicator"
						className="absolute inset-0 rounded-md bg-zinc-200 dark:bg-zinc-800"
						transition={{ type: "spring", stiffness: 400, damping: 30 }}
					/>
				)}

				<span className={cn("relative z-10")}>{children}</span>
			</Link>
		</Button>
	);
}
