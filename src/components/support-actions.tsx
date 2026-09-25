"use client"

import {
  MessageCircle,
  Phone,
  ShieldAlert,
} from "lucide-react"

import { Button } from "@/components/ui/button"

interface SupportActionsProps {
  onContactSupport?: () => void
  onReportIssue?: () => void
}

export function SupportActions({
  onContactSupport,
  onReportIssue,
}: SupportActionsProps) {
  return (
    <section className="mx-4 mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div>
        <h2 className="text-base font-semibold text-slate-900">
          Need help?
        </h2>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          Our support team can help with delivery questions or issues.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <Button
          variant="outline"
          className="w-full"
          onClick={onContactSupport}
        >
          <MessageCircle className="h-4 w-4" />
          Support
        </Button>

        <Button
          variant="outline"
          className="w-full"
          onClick={onReportIssue}
        >
          <ShieldAlert className="h-4 w-4" />
          Report issue
        </Button>
      </div>

      <button
        type="button"
        className="mx-auto mt-4 flex items-center gap-2 text-xs font-medium text-slate-500 transition-colors hover:text-slate-900"
        onClick={() => {
          window.location.href = "tel:+18005550199"
        }}
      >
        <Phone className="h-3.5 w-3.5" />
        Call customer support
      </button>
    </section>
  )
}