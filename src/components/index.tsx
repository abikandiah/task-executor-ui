import { cn } from "@abumble/design-system/utils";
import { Link, type LinkComponentProps } from "@tanstack/react-router";

export function TextLink({ className, ...props }: LinkComponentProps) {
	return (
		<Link
			{...props}
			className={cn("text-link", className)} />
	)
}

