import React from "react";
import { Product } from "@/app/types";
import { Package2, Clock9, TriangleAlert, CircleX } from "lucide-react";
import { getProducts } from "@/services/product";

const basicStyling =
  "border rounded-lg border-neutral-400 p-8 w-1/4 bg-white flex flex-row justify-between";
const labelStyling = "text-sm font-medium";
const countStyling = "flex flex-col";

const Statistics = async () => {
  const productResponse = await getProducts(1000);
  const products = productResponse.products;

  const stats = [
    {
      label: "Total products",
      count: productResponse.total,
      Icon: Package2,
      color: "text-purple-900",
      bgColor: "bg-purple-200",
    },
    {
      label: "In stock",
      count: products.filter(
        (p: Product) => p.availabilityStatus?.toLowerCase() === "in stock",
      ).length,
      Icon: Clock9,
      color: "text-green-900",
      bgColor: "bg-green-200",
    },
    {
      label: "Low stock",
      count: products.filter(
        (p: Product) => p.availabilityStatus?.toLowerCase() === "low stock",
      ).length,
      Icon: TriangleAlert,
      color: "text-orange-900",
      bgColor: "bg-orange-200",
    },
    {
      label: "Out of stock",
      count: products.filter(
        (p: Product) => p.availabilityStatus?.toLowerCase() === "out of stock",
      ).length,
      Icon: CircleX,
      color: "text-red-900",
      bgColor: "bg-red-200",
    },
  ];

  return (
    <section className="flex flex-row my-2 gap-8">
      {stats.map(({ label, count, Icon, color, bgColor }) => (
        <div key={label} className={basicStyling}>
          <div className={countStyling}>
            <span className={labelStyling}>{label}</span>
            <span className="font-extrabold text-3xl">{count}</span>
          </div>
          <div className={`${bgColor} p-4 rounded-xl`}>
            <Icon className={`${color} w-8 h-8 `} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Statistics;
