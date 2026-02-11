import * as SimpleIcons from "simple-icons";

type IconProps = {
	name: string;
	size?: number;
	className?: string;
};

export default function SimpleIcon({ name, size = 24, className }: IconProps) {
	const iconName = `si${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}`;
	const language = SimpleIcons[iconName as keyof typeof SimpleIcons] as
		| SimpleIcons.SimpleIcon
		| undefined;

	if (!language) return null;

	return (
		<svg
			role="img"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill={`#${language.hex}`}
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<title>{language.title}</title>
			<path d={language.path} />
		</svg>
	);
}

export function IconByMap(name: string) {}
