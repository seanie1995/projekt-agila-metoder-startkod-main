import React from "react";
import { Trash2, SquarePen } from "lucide-react";

const products: {
  name: string;
  serialNumber: string;
  category: string;
  price: number;
  availabilityStatus: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
}[] = [
  {
    name: "Wireless Headphones",
    serialNumber: "WH-2023-001",
    category: "Electronics",
    price: 99.99,
    availabilityStatus: 50,
    status: "In Stock",
  },
  {
    name: "Smart Watch",
    serialNumber: "SW-2023-002",
    category: "Electronics",
    price: 199.99,
    availabilityStatus: 15,
    status: "Low Stock",
  },
  {
    name: "Coffee Maker",
    serialNumber: "CM-2023-003",
    category: "Home Appliances",
    price: 49.99,
    availabilityStatus: 0,
    status: "Out of Stock",
  },
  {
    name: "Running Shoes",
    serialNumber: "RS-2023-004",
    category: "Footwear",
    price: 79.99,
    availabilityStatus: 30,
    status: "In Stock",
  },
  {
    name: "Backpack",
    serialNumber: "BP-2023-005",
    category: "Accessories",
    price: 39.99,
    availabilityStatus: 5,
    status: "Low Stock",
  },
];

const ProductList = () => {
  return (
    <>
      <table className="w-full rounded-2xl  border-neutral-400 border">
        <thead className="bg-neutral-100">
          <tr className=" text-sm text-neutral-600">
            <th className="py-4 ">Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.serialNumber}
              className="border border-neutral-400  text-sm"
            >
              <td className="text-left py-4 px-4">
                <div>
                  <div className="font-bold">{product.name}</div>
                  <div className=" text-gray-500">{product.serialNumber}</div>
                </div>
              </td>
              <td className="text-center ">{product.category}</td>
              <td className="text-center">{product.price}</td>
              <td className="text-center">{product.availabilityStatus}</td>
              <td
                className={`text-center ${product.status === `In Stock` ? "text-green-600" : product.status === `Low Stock` ? `text-orange-600` : `text-red-700`}`}
              >
                {product.status}
              </td>
              <td className="px-4">
                <div className="flex flex-row justify-end gap-4">
                  <SquarePen className="text-purple-700" />
                  <Trash2 className="text-red-600" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductList;
