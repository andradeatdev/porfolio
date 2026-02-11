type CalloutProps = {
	children: React.ReactNode;
	type?: "info" | "warning" | "error";
};

const styles = {
	info: "border-blue-500 bg-blue-50 dark:bg-blue-900/30 dark:border-blue-800",
	warning:
		"border-yellow-500 bg-yellow-50 dark:bg-yellow-900/30 dark:border-yellow-800",
	error: "border-red-500 bg-red-50 dark:bg-red-900/30 dark:border-red-800",
};

export function Callout({ children, type = "info" }: CalloutProps) {
	return (
		<div className={`border-l-4 p-4 my-6 not-prose ${styles[type]}`}>
			{children}
		</div>
	);
}
