"use client";

import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import {
  buttonClasses,
  buttonVariants,
  type ButtonSize,
  type ButtonVariant,
} from "@/lib/button";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={buttonClasses(variant, size, className)}
      {...props}
    />
  ),
);

Button.displayName = "Button";

export { buttonVariants };
