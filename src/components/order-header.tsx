"use client"

import { ArrowLeft, HelpCircle, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

interface OrderHeaderProps {
  orderId: string
  onBack?: () => void
  onHelp?: () => void
}

export function OrderHeader({
  orderId,
  onBack,
  onHelp,
}: OrderHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-slate-100 bg-white px-4 py-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={onBack}
        aria-label="Go back"
        className="shrink-0"
      >
        <ArrowLeft className="h-5 w-5" />
      </Button>

      <div className="flex min-w-0 items-center gap-2">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
          <Package className="h-4 w-4" />
        </div>

        <div className="min-w-0">
          <h1 className="truncate text-sm font-semibold text-slate-900">
            Order Tracking
          </h1>

          <p className="truncate text-xs text-slate-500">
            #{orderId}
          </p>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={onHelp}
        aria-label="Get help"
        className="shrink-0"
      >
        <HelpCircle className="h-5 w-5" />
      </Button>
    </header>
  )
}