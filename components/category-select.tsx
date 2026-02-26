"use client";

import { Category } from "@/app/types";
import React from "react";
import { getCategories } from "@/services/product";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import path from "path";

type CategrySelectProps = {
  categories: Category[];
};

const CategorySelect = ({ categories }: CategrySelectProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const CreateSearchURL = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = e.target.value;

    const params = new URLSearchParams(searchParams);

    if (categoryId) {
      params.set("categoryId", categoryId);
    } else {
      params.delete("categoryId");
    }

    const url = `${pathName}?${params.toString()}`;

    router.push(url);
  };

  return (
    <select
      className="p-2 rounded-lg bg-neutral-200"
      onChange={CreateSearchURL}
      defaultValue={""}
    >
      <option value={""}>All Categories</option>
      {categories.map((c) => (
        <option key={c.id} value={c.id}>
          {c.name}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
