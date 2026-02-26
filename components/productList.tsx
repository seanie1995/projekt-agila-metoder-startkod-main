import React from "react";
import { Trash2, SquarePen } from "lucide-react";
<<<<<<< HEAD
import { getProducts } from "@/services/product";
import Link from "next/link";

// const products: {
//   name: string;
//   serialNumber: string;
//   category: string;
//   price: number;
//   availabilityStatus: number;
//   status: "In Stock" | "Low Stock" | "Out of Stock";
// }[] = [
//   {
//     name: "Wireless Headphones",
//     serialNumber: "WH-2023-001",
//     category: "Electronics",
//     price: 99.99,
//     availabilityStatus: 50,
//     status: "In Stock",
//   },
//   {
//     name: "Smart Watch",
//     serialNumber: "SW-2023-002",
//     category: "Electronics",
//     price: 199.99,
//     availabilityStatus: 15,
//     status: "Low Stock",
//   },
//   {
//     name: "Coffee Maker",
//     serialNumber: "CM-2023-003",
//     category: "Home Appliances",
//     price: 49.99,
//     availabilityStatus: 0,
//     status: "Out of Stock",
//   },
//   {
//     name: "Running Shoes",
//     serialNumber: "RS-2023-004",
//     category: "Footwear",
//     price: 79.99,
//     availabilityStatus: 30,
//     status: "In Stock",
//   },
//   {
//     name: "Backpack",
//     serialNumber: "BP-2023-005",
//     category: "Accessories",
//     price: 39.99,
//     availabilityStatus: 5,
//     status: "Low Stock",
//   },
// ];

=======
import { getCategories, getProducts } from "@/services/product";
import { Product } from "@/app/types";
import Pagination from "./pagination";
import SearchBar from "./search-bar";
import CategorySelect from "./category-select";
import Statistics from "./statistics";

>>>>>>> dev
const ProductList = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const {
    limit = 6,
    page = "1",
    sort = "id",
    order = "asc",
<<<<<<< HEAD
=======
    title = "",
    categoryId,
>>>>>>> dev
  } = await searchParams;

  const res = await getProducts(
    Number(limit),
    Number(page),
    sort.toString(),
    order.toString(),
<<<<<<< HEAD
  );

  const productList = res.products;

  return (
    <div>
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
          {productList.map((product) => (
            <tr key={product.id} className="border border-neutral-400  text-sm">
              <td className="text-left py-4 px-4">
                <div>
                  <div className="font-bold">{product.title}</div>
                  <div className=" text-gray-500">{product.id}</div>
                </div>
              </td>
              <td className="text-center ">{product.category?.name}</td>
              <td className="text-center">{product.price}</td>
              <td className="text-center">{product.availabilityStatus}</td>
              <td
                className={`text-center ${product.availabilityStatus === `In Stock` ? "text-green-600" : product.availabilityStatus === `Low Stock` ? `text-orange-600` : `text-red-700`}`}
              >
                {product.availabilityStatus}
              </td>
              <td className="px-4">
                <div className="flex flex-row justify-end gap-4">
                  <Link href={`/products/edit/${product.id}`}>
                    <SquarePen className="text-purple-700" />
                  </Link>
                  <Trash2 className="text-red-600" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
=======
    title.toString(),
    categoryId?.toString(),
  );

  const categoryList = await getCategories();

  const productList: Product[] = res.products;
  const totalPages = res.pages;

  return (
    <>
      <Statistics />

      <section className="p-4 border border-neutral-400 rounded-lg mb-2 flex  flex-row gap-4">
        <SearchBar />
        <CategorySelect categories={categoryList} />
      </section>

      <div className="rounded-lg overflow-hidden border border-neutral-400">
        <table className="w-full ">
          <thead className="bg-neutral-100 border-b border-neutral-400">
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
            {productList.length === 0 && (
              <tr className="text-center">
                <td className="py-8">Item does not Exist</td>
              </tr>
            )}
            {productList.map((product: Product) => (
              <tr
                key={product.id}
                className="border-b border-neutral-400  text-sm"
              >
                <td className="text-left py-4 px-4">
                  <div>
                    <div className="font-bold">{product.title}</div>
                    <div className=" text-gray-500">{product.id}</div>
                  </div>
                </td>
                <td className="text-center ">{product.category?.name}</td>
                <td className="text-center">{product.price}</td>
                <td className="text-center">{product.stock}</td>
                <td
                  className={`text-center ${product.availabilityStatus === `In Stock` ? "text-green-600" : product.availabilityStatus === `Low Stock` ? `text-orange-600` : `text-red-700`}`}
                >
                  {product.availabilityStatus}
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
        <Pagination totalPages={totalPages} />
      </div>
    </>
>>>>>>> dev
  );
};

export default ProductList;
