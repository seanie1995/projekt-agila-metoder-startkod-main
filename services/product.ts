import type { ProductsResponse } from "./types";

const API_URL = "http://localhost:4000";

export const getProducts = async (): Promise<ProductsResponse> => {
  const params = new URLSearchParams({
    _limit: 6,
    _page: 1,
    _sort: "id",
    _order: "asc"
  });

  const data = await fetch(
    `${API_URL}/products/?${params}`
  ).then((res) => res.json());

  return data;
}
