"use client"

import {
  Check,
  Circle,
  Clock3,
  MapPin,
  Truck,
} from "lucide-react"

export type TimelineStatus =
  | "completed"
  | "current"
  | "upcoming"

export interface TimelineStep {
  id: string
  title: string
  description?: string
  date?: string
  time?: string
  status: TimelineStatus
}

interface DeliveryTimelineProps {
  steps: TimelineStep[]
}

export function DeliveryTimeline({
  steps,
}: DeliveryTimelineProps) {
  return (
    <section className="mx-4 mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-6">
        <h2 className="text-base font-semibold text-slate-900">
          Delivery progress
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Follow your package from order to delivery.
        </p>
      </div>

      <div className="relative">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1

          return (
            <div
              key={step.id}
              className="relative flex gap-4"
            >
              {/* Connector */}
              {!isLast && (
                <div
                  className={`absolute left-3.75 top-8 h-[calc(100%-8px)] w-px ${
                    step.status === "completed"
                      ? "bg-emerald-400"
                      : "bg-slate-200"
                  }`}
                />
              )}

              {/* Icon */}
              <TimelineIcon status={step.status} />

              {/* Content */}
              <div className={`min-w-0 flex-1 ${!isLast ? "pb-7" : ""}`}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3
                      className={`text-sm font-semibold ${
                        step.status === "upcoming"
                          ? "text-slate-400"
                          : "text-slate-900"
                      }`}
                    >
                      {step.title}
                    </h3>

                    {step.description && (
                      <p
                        className={`mt-1 text-xs leading-5 ${
                          step.status === "upcoming"
                            ? "text-slate-400"
                            : "text-slate-500"
                        }`}
                      >
                        {step.description}
                      </p>
                    )}
                  </div>

                  {step.status === "current" && (
                    <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wide text-blue-600">
                      Current
                    </span>
                  )}
                </div>

                {(step.date || step.time) && (
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Clock3 className="h-3 w-3" />

                    <span>
                      {step.date}
                      {step.date && step.time ? " • " : ""}
                      {step.time}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function TimelineIcon({
  status,
}: {
  status: TimelineStatus
}) {
  if (status === "completed") {
    return (
      <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
        <Check className="h-4 w-4" strokeWidth={2.5} />
      </div>
    )
  }

  if (status === "current") {
    return (
      <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-4 border-blue-100 bg-blue-600 text-white shadow-sm">
        <div className="h-2 w-2 rounded-full bg-white" />
      </div>
    )
  }

  return (
    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-300">
      <Circle className="h-3.5 w-3.5" />
    </div>
  )
}