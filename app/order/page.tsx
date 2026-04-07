import { OrderPageClient } from "@/components/order-page-client";

type OrderPageProps = {
  searchParams: Promise<{
    location?: string | string[];
  }>;
};

export default async function OrderPage({ searchParams }: OrderPageProps) {
  const { location } = await searchParams;
  const pickupLocation = Array.isArray(location) ? location[0] : location;

  return <OrderPageClient pickupLocation={pickupLocation} />;
}

export const runtime = "edge";
