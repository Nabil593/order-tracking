import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "success" | "warning" | "destructive" | "outline"
}

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex w-fit items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors",

        variant === "default" &&
          "border-transparent bg-slate-900 text-white",

        variant === "secondary" &&
          "border-transparent bg-slate-100 text-slate-700",

        variant === "success" &&
          "border-emerald-200 bg-emerald-50 text-emerald-700",

        variant === "warning" &&
          "border-amber-200 bg-amber-50 text-amber-700",

        variant === "destructive" &&
          "border-red-200 bg-red-50 text-red-700",

        variant === "outline" &&
          "border-slate-200 bg-white text-slate-700",

        className
      )}
      {...props}
    />
  )
}

export { Badge }