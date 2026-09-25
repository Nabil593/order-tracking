import type { TimelineStep } from "@/components/delivery-timeline";
import type { OrderState } from "@/components/status-card";

export interface OrderProduct {
  name: string;
  variant?: string;
  quantity: number;
  price: number;
  image?: string;
}

export interface OrderData {
  id: string;
  state: OrderState;
  product: OrderProduct;
  total: number;

  estimatedDelivery?: string;
  estimatedTime?: string;

  timeline: TimelineStep[];
}