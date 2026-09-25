import {
  ChevronRight,
  Package,
} from "lucide-react"
import Image from "next/image"

interface OrderProduct {
  name: string
  variant?: string
  quantity: number
  price: number
  image?: string
}

interface OrderSummaryProps {
  product: OrderProduct
  orderId: string
  total: number
  onViewDetails?: () => void
}

export function OrderSummary({
  product,
  orderId,
  total,
  onViewDetails,
}: OrderSummaryProps) {
  return (
    <section className="mx-4 mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Order summary
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Order #{orderId}
          </p>
        </div>

        {onViewDetails && (
          <button
            type="button"
            onClick={onViewDetails}
            className="flex items-center gap-1 text-xs font-semibold text-slate-700 transition-colors hover:text-slate-900"
          >
            Details
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      <div className="my-4 h-px bg-slate-100" />

      <div className="flex gap-3">
        {/* Product image */}
        <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-100">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              width={160}
              height={160}
              className="h-full w-full object-cover"
            />
          ) : (
            <Package className="h-7 w-7 text-slate-400" />
          )}
        </div>

        {/* Product information */}
        <div className="min-w-0 flex-1">
          <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-slate-900">
            {product.name}
          </h3>

          {product.variant && (
            <p className="mt-1 text-xs text-slate-500">
              {product.variant}
            </p>
          )}

          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Qty: {product.quantity}
            </span>

            <span className="text-sm font-semibold text-slate-900">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2 border-t border-slate-100 pt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-500">
            Item total
          </span>

          <span className="font-medium text-slate-700">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-900">
            Total
          </span>

          <span className="text-base font-bold text-slate-900">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>
    </section>
  )
}