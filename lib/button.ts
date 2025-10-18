import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/50 disabled:pointer-events-none disabled:opacity-60 dark:focus-visible:ring-white/40",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white shadow-lg shadow-slate-900/15 hover:bg-slate-900/90 dark:bg-white dark:text-slate-900 dark:shadow-white/20",
        outline:
          "border border-slate-300/80 bg-white/70 text-slate-900 backdrop-blur hover:bg-white dark:border-white/20 dark:bg-transparent dark:text-white",
        ghost:
          "bg-transparent text-slate-900 hover:bg-slate-100/70 dark:text-white dark:hover:bg-white/10",
      },
      size: {
        default: "h-11 px-6 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export type ButtonVariant = NonNullable<ButtonVariantProps["variant"]>;
export type ButtonSize = NonNullable<ButtonVariantProps["size"]>;

export function buttonClasses(
  variant: ButtonVariant = "default",
  size: ButtonSize = "default",
  className?: string,
) {
  return cn(buttonVariants({ variant, size }), className);
}
