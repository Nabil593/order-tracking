"use client"

import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  MapPin,
  Package,
  RefreshCw,
  Truck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export type OrderState =
  | "in-transit"
  | "delayed"
  | "delivered-not-received"
  | "tracking-unavailable"

interface StatusCardProps {
  state: OrderState
  estimatedDelivery?: string
  estimatedTime?: string
  onRetry?: () => void
  onReportIssue?: () => void
}

const stateConfig = {
  "in-transit": {
    icon: Truck,
    iconWrapper: "bg-blue-50 text-blue-600",
    badgeVariant: "default" as const,
    badgeText: "On the way",
    title: "Your order is on the way",
    description:
      "Your package is moving through the delivery network and is heading to you.",
  },

  delayed: {
    icon: Clock3,
    iconWrapper: "bg-amber-50 text-amber-600",
    badgeVariant: "warning" as const,
    badgeText: "Delayed",
    title: "Your delivery is delayed",
    description:
      "We're sorry for the delay. Your package is still on its way and we'll keep you updated.",
  },

  "delivered-not-received": {
    icon: AlertCircle,
    iconWrapper: "bg-red-50 text-red-600",
    badgeVariant: "destructive" as const,
    badgeText: "Delivery issue",
    title: "Order marked as delivered",
    description:
      "Our system shows that your order was delivered, but you haven't received it.",
  },

  "tracking-unavailable": {
    icon: Package,
    iconWrapper: "bg-slate-100 text-slate-600",
    badgeVariant: "secondary" as const,
    badgeText: "Tracking unavailable",
    title: "Tracking isn't available yet",
    description:
      "Your order has been confirmed. Tracking information will appear once the carrier receives your package.",
  },
}

export function StatusCard({
  state,
  estimatedDelivery,
  estimatedTime,
  onRetry,
  onReportIssue,
}: StatusCardProps) {
  const config = stateConfig[state]
  const Icon = config.icon

  const isDelayed = state === "delayed"
  const isDeliveredIssue = state === "delivered-not-received"
  const isTrackingUnavailable = state === "tracking-unavailable"

  return (
    <section className="mx-4 mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${config.iconWrapper}`}
          >
            <Icon className="h-6 w-6" />
          </div>

          <Badge variant={config.badgeVariant}>
            {config.badgeText}
          </Badge>
        </div>

        <div className="mt-5">
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            {config.title}
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {config.description}
          </p>
        </div>

        {/* ETA */}
        {!isTrackingUnavailable && (
          <div className="mt-5 rounded-xl bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <MapPin className="h-4 w-4" />

              <span>
                {isDelayed
                  ? "Updated estimated delivery"
                  : "Estimated delivery"}
              </span>
            </div>

            <div className="mt-2">
              <p className="text-base font-semibold text-slate-900">
                {estimatedDelivery}
              </p>

              {estimatedTime && (
                <p className="mt-0.5 text-sm text-slate-500">
                  {estimatedTime}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Delayed action */}
        {isDelayed && (
          <div className="mt-4 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-3.5">
            <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />

            <div>
              <p className="text-sm font-semibold text-amber-900">
                We are working on it
              </p>

              <p className="mt-1 text-xs leading-5 text-amber-800">
                You can contact support if you need help with this delivery.
              </p>
            </div>
          </div>
        )}

        {/* Delivered but not received */}
        {isDeliveredIssue && (
          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />

              <div>
                <p className="text-sm font-semibold text-red-900">
                  Did not receive your package?
                </p>

                <p className="mt-1 text-xs leading-5 text-red-800">
                  Check around your delivery location or contact support so
                  we can investigate the issue.
                </p>
              </div>
            </div>

            {onReportIssue && (
              <Button
                variant="destructive"
                size="sm"
                className="mt-3 w-full"
                onClick={onReportIssue}
              >
                Report delivery issue
              </Button>
            )}
          </div>
        )}

        {/* Tracking unavailable */}
        {isTrackingUnavailable && onRetry && (
          <Button
            variant="outline"
            className="mt-4 w-full"
            onClick={onRetry}
          >
            <RefreshCw className="h-4 w-4" />
            Check for tracking updates
          </Button>
        )}

        {/* Delivered normally */}
        {state === "in-transit" && (
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />

            <span>
              We will notify you when your package reaches the next step.
            </span>
          </div>
        )}
      </div>
    </section>
  )
}