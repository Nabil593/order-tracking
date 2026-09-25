import type { TimelineStep } from "@/components/delivery-timeline";
import type { OrderState } from "@/components/status-card";
import type { OrderData, OrderProduct } from "@/types/order";

const baseProduct: OrderProduct = {
  name: "Sony WH-1000XM5",
  variant: "Black",
  quantity: 1,
  price: 349,
  image:
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop",
};

const delayedTimeline: TimelineStep[] = [
  {
    id: "1",
    title: "Order placed",
    description: "Your order has been confirmed.",
    date: "Sep 22",
    time: "10:24 AM",
    status: "completed",
  },
  {
    id: "2",
    title: "Shipped",
    description: "Package left the seller facility.",
    date: "Sep 23",
    time: "3:15 PM",
    status: "completed",
  },
  {
    id: "3",
    title: "Out for delivery",
    description: "Package is with the delivery partner.",
    date: "Sep 24",
    time: "9:10 AM",
    status: "current",
  },
  {
    id: "4",
    title: "Delivered",
    description: "Expected delivery",
    date: "Sep 24",
    status: "upcoming",
  },
];

const deliveredTimeline: TimelineStep[] = [
  {
    id: "1",
    title: "Order placed",
    description: "Your order has been confirmed.",
    date: "Sep 22",
    time: "10:24 AM",
    status: "completed",
  },
  {
    id: "2",
    title: "Shipped",
    description: "Package left the seller facility.",
    date: "Sep 23",
    time: "3:15 PM",
    status: "completed",
  },
  {
    id: "3",
    title: "Out for delivery",
    description: "Package was with the delivery partner.",
    date: "Sep 24",
    time: "9:10 AM",
    status: "completed",
  },
  {
    id: "4",
    title: "Delivered",
    description: "Carrier marked this package as delivered.",
    date: "Sep 24",
    time: "1:42 PM",
    status: "current",
  },
];

const unavailableTimeline: TimelineStep[] = [
  {
    id: "1",
    title: "Order placed",
    description: "Your order has been confirmed.",
    date: "Sep 22",
    time: "10:24 AM",
    status: "completed",
  },
  {
    id: "2",
    title: "Preparing shipment",
    description: "The seller is preparing your package.",
    date: "Sep 22",
    time: "11:05 AM",
    status: "current",
  },
  {
    id: "3",
    title: "Shipped",
    description: "Tracking will become available after shipment.",
    status: "upcoming",
  },
  {
    id: "4",
    title: "Delivered",
    description: "Estimated delivery will appear once tracking starts.",
    status: "upcoming",
  },
];

const delayedOrder: OrderData = {
  id: "ORD-48291",
  state: "delayed",
  product: baseProduct,
  total: 349,
  estimatedDelivery: "Sep 24, 2026",
  estimatedTime: "by 8:00 PM",
  timeline: delayedTimeline,
};

const deliveredNotReceivedOrder: OrderData = {
  id: "ORD-48291",
  state: "delivered-not-received",
  product: baseProduct,
  total: 349,
  estimatedDelivery: "Delivered Sep 24, 2026",
  estimatedTime: "1:42 PM",
  timeline: deliveredTimeline,
};

const trackingUnavailableOrder: OrderData = {
  id: "ORD-48291",
  state: "tracking-unavailable",
  product: baseProduct,
  total: 349,
  estimatedDelivery: "Estimated date will appear soon",
  estimatedTime: "Tracking unavailable",
  timeline: unavailableTimeline,
};

export const orders = {
  delayed: delayedOrder,
  "delivered-not-received": deliveredNotReceivedOrder,
  "tracking-unavailable": trackingUnavailableOrder,
} satisfies Record<
  Exclude<OrderState, "in-transit">,
  OrderData
>;

export function getOrderByState(
  state: Exclude<OrderState, "in-transit">
): OrderData {
  return orders[state];
}