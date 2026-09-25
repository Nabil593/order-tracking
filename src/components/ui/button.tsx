import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "secondary"
    | "outline"
    | "ghost"
    | "destructive"
    | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          "active:scale-[0.98]",

          variant === "default" &&
            "bg-slate-900 text-white shadow-sm hover:bg-slate-800",

          variant === "secondary" &&
            "bg-slate-100 text-slate-900 hover:bg-slate-200",

          variant === "outline" &&
            "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",

          variant === "ghost" &&
            "text-slate-600 hover:bg-slate-100 hover:text-slate-900",

          variant === "destructive" &&
            "bg-red-600 text-white hover:bg-red-700",

          variant === "link" &&
            "text-slate-900 underline-offset-4 hover:underline",

          size === "default" && "h-11 px-4 py-2",
          size === "sm" && "h-9 rounded-lg px-3 text-xs",
          size === "lg" && "h-12 rounded-xl px-6",
          size === "icon" && "h-10 w-10 rounded-full",

          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }