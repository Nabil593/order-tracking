"use client"

import { useState } from "react"
import {
  CheckCircle2,
  Headphones,
  Loader2,
  RefreshCw,
} from "lucide-react"

import { OrderHeader } from "@/components/order-header"
import { StatusCard } from "@/components/status-card"
import { DeliveryTimeline } from "@/components/delivery-timeline"
import { OrderSummary } from "@/components/order-summary"
import { SupportActions } from "@/components/support-actions"
import { IssueDialog } from "@/components/issue-dialog"

import {
  getOrderByState,
  type OrderData,
} from "@/data/orders"

import type { OrderState } from "@/components/status-card"

type Scenario = Exclude<OrderState, "in-transit">

const scenarios: {
  value: Scenario
  label: string
}[] = [
  {
    value: "delayed",
    label: "Delayed",
  },
  {
    value: "delivered-not-received",
    label: "Not received",
  },
  {
    value: "tracking-unavailable",
    label: "Tracking unavailable",
  },
]

const MainPage = () => {
  const [selectedScenario, setSelectedScenario] =
    useState<Scenario>("delayed")

  const [isIssueDialogOpen, setIsIssueDialogOpen] =
    useState(false)

  const [isLoading, setIsLoading] = useState(false)

  const [showSupportMessage, setShowSupportMessage] =
    useState(false)

  const order: OrderData =
    getOrderByState(selectedScenario)

  const handleRetry = async () => {
    setIsLoading(true)

    await new Promise((resolve) =>
      setTimeout(resolve, 1200)
    )

    setIsLoading(false)
  }

  const handleSupport = () => {
    setShowSupportMessage(true)

    setTimeout(() => {
      setShowSupportMessage(false)
    }, 3000)
  }

  const handleBack = () => {
    window.history.back()
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-slate-50 shadow-xl">
        {/* Header */}
        <OrderHeader
          orderId={order.id}
          onBack={handleBack}
          onHelp={handleSupport}
        />

        {/* Main content */}
        <div className="pb-8">
          {/* Intro */}
          <section className="px-4 pt-5">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Your order
                </p>

                <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
                  Track your package
                </h1>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-100">
                <Headphones className="h-5 w-5 text-slate-600" />
              </div>
            </div>
          </section>

          {/* Scenario switcher */}
          <section className="px-4 pt-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="mb-3">
                <p className="text-xs font-semibold text-slate-700">
                  Preview delivery state
                </p>

                <p className="mt-0.5 text-[11px] text-slate-400">
                  Switch between the required order scenarios.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-1 rounded-xl bg-slate-100 p-1">
                {scenarios.map((scenario) => {
                  const isActive =
                    selectedScenario === scenario.value

                  return (
                    <button
                      key={scenario.value}
                      type="button"
                      onClick={() =>
                        setSelectedScenario(
                          scenario.value
                        )
                      }
                      className={`rounded-lg px-2 py-2.5 text-[11px] font-semibold leading-tight transition-all ${
                        isActive
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      {scenario.label}
                    </button>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Loading state */}
          {isLoading ? (
            <section className="mx-4 mt-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                  <Loader2 className="h-6 w-6 animate-spin text-slate-600" />
                </div>

                <h2 className="mt-4 text-base font-semibold text-slate-900">
                  Updating tracking
                </h2>

                <p className="mt-1 max-w-xs text-sm leading-5 text-slate-500">
                  We are checking the latest information from
                  the carrier.
                </p>
              </div>
            </section>
          ) : (
            <>
              {/* Status */}
              <StatusCard
                state={order.state}
                estimatedDelivery={
                  order.estimatedDelivery
                }
                estimatedTime={order.estimatedTime}
                onRetry={handleRetry}
                onReportIssue={() =>
                  setIsIssueDialogOpen(true)
                }
              />

              {/* Timeline */}
              <DeliveryTimeline
                steps={order.timeline}
              />

              {/* Product */}
              <OrderSummary
                product={order.product}
                orderId={order.id}
                total={order.total}
                onViewDetails={handleSupport}
              />

              {/* Support */}
              <SupportActions
                onContactSupport={handleSupport}
                onReportIssue={() =>
                  setIsIssueDialogOpen(true)
                }
              />
            </>
          )}

          {/* Support toast */}
          {showSupportMessage && (
            <div className="fixed bottom-5 left-1/2 z-50 flex w-[calc(100%-32px)] max-w-[398px] -translate-x-1/2 items-center gap-3 rounded-2xl bg-slate-900 px-4 py-3 text-white shadow-xl">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                <CheckCircle2 className="h-4 w-4" />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold">
                  Support is ready
                </p>

                <p className="text-xs text-slate-300">
                  A support agent will help with your order.
                </p>
              </div>
            </div>
          )}

          {/* Issue dialog */}
          <IssueDialog
            open={isIssueDialogOpen}
            onOpenChange={setIsIssueDialogOpen}
          />
        </div>
      </div>
    </main>
  )
}

export default MainPage