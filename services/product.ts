import { Category } from "@/app/types";
import type { ProductsResponse, Product } from "./types";

const API_URL = "http://localhost:4000";

export const getProducts = async (
  limit = 6,
  page = 1,
  sort = "id",
  order = "asc",
  query = "",
  categoryId = "",
): Promise<ProductsResponse> => {
  const params = new URLSearchParams({
    _limit: limit.toString(),
    _page: page.toString(),
    _sort: sort, // sort by id, title, price, etc
    _order: order, // either "asc" or "desc"
    _expand: "category",
    title_like: query, // can only search for titles for now
  });

  if (categoryId) {
    params.set("categoryId", categoryId);
  }

  const data = await fetch(`${API_URL}/products/?${params}`).then((res) =>
    res.json(),
  );

  console.log(`${API_URL}/products/?${params}`);

  return data;
};

// required keys:
// title, price, description, thumbnail, categoryId, brand
export const createProduct = async (product: Product) => {
  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  console.log(await res.json());
};

// updates can for example look like:
// { title: "New Title", price: 69 }
export const updateProductByID = async (id: number, updates: Product) => {
  await fetch(`${API_URL}/products/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
};

export const deleteProductByID = async (id: number) => {
  await fetch(`${API_URL}/products/${id}`, { method: "DELETE" });
};

export const getCategories = async (): Promise<Category[]> => {
  const data = await fetch("http://localhost:4000/categories").then((res) =>
    res.json(),
  );

  return data;
};
