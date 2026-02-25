"use client";

import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const FiltersBar = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const CreateSearchURL = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title")?.toString() || "";

    const params = new URLSearchParams(searchParams);

    if (title) {
      params.set("title", title);
    } else {
      params.delete("title");
    }

    const url = `${pathName}?${params.toString()}`;

    router.push(url);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("title", value);
    } else {
      params.delete("title"); // 👈 this triggers full fetch
    }

    router.replace(`${pathName}?${params.toString()}`);
  };

  return (
    <form onSubmit={CreateSearchURL}>
      <input
        type="text"
        name="title"
        id=""
        placeholder="Search..."
        className="bg-neutral-300 p-2 rounded-lg w-full"
        onChange={handleChange}
      />
    </form>
  );
};

export default FiltersBar;
