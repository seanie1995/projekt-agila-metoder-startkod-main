import Sidebar from "@/components/sidebar";
import type { ProductsResponse } from "./types";
import AddProduct from "@/components/addProduct";

import ProductList from "@/components/productList";

export default async function Home(params: PageProps<"/">) {
  return (
    <div className="grid min-h-screen grid-cols-[256px_1fr] bg-gray-50">
      <aside className="border-r border-gray-200 bg-white hidden md:block">
        <Sidebar />
      </aside>

      <div className="flex flex-col">
        <AddProduct />

        <main className="p-8">
          <ProductList searchParams={params.searchParams} />
        </main>
      </div>
    </div>
  );
}
