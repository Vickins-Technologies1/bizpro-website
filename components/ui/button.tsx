import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode, ReactElement } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";

export function buttonStyles(variant: Variant = "primary", className?: string) {
  const base =
    "inline-flex min-h-10 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const variants: Record<Variant, string> = {
    primary:
      "border border-transparent bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-[rgb(var(--primary-foreground))] shadow-glow hover:brightness-105",
    secondary: "border border-border/80 bg-card/85 text-foreground hover:border-primary/40 hover:bg-card",
    ghost: "border border-transparent bg-transparent text-foreground hover:bg-foreground/5",
    outline: "border border-border/80 bg-transparent text-foreground hover:border-primary/40 hover:bg-primary/5"
  };

  return cn(base, variants[variant], className);
}

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type LinkProps = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: LinkProps): ReactElement;
export function Button(props: ButtonProps): ReactElement;
export function Button(props: LinkProps | ButtonProps) {
  const { children, variant = "primary", className } = props;
  const styles = buttonStyles(variant, className);

  if ("href" in props) {
    const { href, target, rel, onClick } = props;
    const external = href.startsWith("http");

    if (external || target) {
      return (
        <a className={styles} href={href} target={target ?? "_blank"} rel={rel ?? "noreferrer"} onClick={onClick}>
          {children}
        </a>
      );
    }

    return (
      <Link className={styles} href={href} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} type={props.type ?? "button"} onClick={props.onClick} disabled={props.disabled}>
      {children}
    </button>
  );
}
