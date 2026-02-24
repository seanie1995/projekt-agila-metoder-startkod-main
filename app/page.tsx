import Sidebar from "@/components/sidebar";
import type { ProductsResponse } from "./types";
import AddProduct from "@/components/addProduct";

const API_URL = "http://localhost:4000";
const defaultLimit = "6";

export default async function Home(params: PageProps<"/">) {
  // we use the fetch() method to get the products from the API
  // in this fetch we sort using _sort and _order and we limit the number of products using _limit
  // we also use _expand to get the relational category data
  // we can use the other destructed variables like page, total and so on to create pagination or show info
  const { products, total, page, pages, limit }: ProductsResponse = await fetch(
    `${API_URL}/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
  ).then((res) => res.json());

  console.log(products);

  return (
    <div className="grid min-h-screen grid-cols-[256px_1fr] bg-gray-50">
      <aside className="border-r border-gray-200 bg-white hidden md:block">
        <Sidebar />
      </aside>

      <div className="flex flex-col">
        <AddProduct />

        <main className="p-8">
          <h1>Products</h1>
          <ProductList />
          <div>
            {products.map((product) => (
              <h2 key={product.id}>
                {product.title} - {product.category?.name}
              </h2>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
