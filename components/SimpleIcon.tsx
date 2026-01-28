import * as SimpleIcons from "simple-icons/icons";

type IconProps = {
	language: string;
	size?: number;
	className?: string;
};

export function getIconByLang(lang: string) {
	if (!lang) return null;

	const key = `si${lang.charAt(0).toUpperCase()}${lang.slice(1)}`;

	// @ts-expect-error - dynamic access
	const icon = SimpleIcons[key];

	return icon || null;
}

export default function SimpleIcon({
	language = "",
	size = 24,
	className,
}: IconProps) {
	if (!language) return null;

	const ico = getIconByLang(language);
	return (
		<svg
			role="img"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill={`#${ico.hex}`}
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<title>{ico.title}</title>
			<path d={ico.path} />
		</svg>
	);
}
