import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProjectCardSkeleton() {
	return (
		<Card className="flex flex-col h-full gap-4 rounded-2xl p-6 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
			<CardHeader className="space-y-3">
				<Skeleton className="h-5 w-2/3 animate-pulse" />
				<Skeleton className="h-4 w-full animate-pulse" />
				<Skeleton className="h-4 w-4/5 animate-pulse" />
			</CardHeader>

			<CardContent className="flex items-center gap-2">
				<Skeleton className="h-7 w-7 rounded-full animate-pulse" />
				<Skeleton className="h-4 w-20 animate-pulse" />
			</CardContent>

			<CardFooter className="mt-auto">
				<Skeleton className="h-10 w-full rounded-md animate-pulse" />
			</CardFooter>
		</Card>
	);
}
