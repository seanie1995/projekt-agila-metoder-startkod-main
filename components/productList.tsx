import React from "react";

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
    <section>
      <table className="w-full rounded-2xl">
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
              className="border-b-neutral-400 border text-sm"
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-square-pen-icon lucide-square-pen text-purple-600"
                  >
                    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-trash-icon lucide-trash text-red-600"
                  >
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                    <path d="M3 6h18" />
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProductList;
