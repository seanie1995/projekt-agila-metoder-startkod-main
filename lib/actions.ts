"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  createProduct,
  updateProductByID,
  deleteProductByID,
} from "@/services/product";

import type { ProductFormData } from "@/app/types";

export async function createProductAction(formData: FormData) {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;
  const thumbnail = formData.get("thumbnail") as string;
  const categoryId = formData.get("categoryId") as string;
  const stock = formData.get("stock") as string;
  const brand = formData.get("brand") as string;

  const newProduct: ProductFormData = {
    title,
    brand,
    description,
    thumbnail,
    price: parseInt(price, 10),
    categoryId: parseInt(categoryId, 10),
    stock: parseInt(stock, 10),
  };

  await createProduct(newProduct);

  revalidatePath("/");
  redirect("/?status=success");
}

export async function updateProductAction(formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;
  const thumbnail = formData.get("thumbnail") as string;
  const categoryId = formData.get("categoryId") as string;
  const stock = formData.get("stock") as string;
  const brand = formData.get("brand") as string;

  const newProduct = {
    title,
    brand,
    description,
    thumbnail,
    price: parseInt(price, 10),
    categoryId: parseInt(categoryId, 10),
    stock: parseInt(stock, 10),
  };

  await updateProductByID(Number(id), newProduct);

  revalidatePath("/");
  redirect("/?status=updated");
}

export async function deleteProductAction(formData: FormData) {
  const id = formData.get("id") as string;
  await deleteProductByID(Number(id));
  revalidatePath("");
}
