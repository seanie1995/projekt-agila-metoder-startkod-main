import Form from "next/form";
import { createProductAction } from "@/lib/actions";

export default function CreateForm() {
  return (
    <Form action={createProductAction} className="grid gap-4">
      <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 items-center">
        <label className="font-semibold" htmlFor="title">
          Title
        </label>
        <input
          className="border p-2 bg-white"
          type="text"
          id="title"
          name="title"
          minLength={3}
          maxLength={20}
          required
        />
        <label className="font-semibold" htmlFor="brand">
          Brand
        </label>
        <input
          className="border p-2 bg-white"
          type="text"
          id="brand"
          name="brand"
          required
        />
        <label className="font-semibold" htmlFor="price">
          Price
        </label>
        <input
          className="border p-2 bg-white "
          type="number"
          min="0.5"
          step="0.01"
          id="price"
          name="price"
          required
        />
        <label className="font-semibold" htmlFor="stock">
          Stock
        </label>
        <input
          className="border p-2 bg-white"
          type="number"
          id="stock"
          name="stock"
          required
        />
        <label className="font-semibold" htmlFor="categoryId">
          Category ID
        </label>
        <input
          className="border p-2 bg-white"
          type="number"
          id="categoryId"
          name="categoryId"
          required
        />
        <label className="font-semibold" htmlFor="description">
          Description
        </label>
        <textarea
          className="border p-2 bg-white"
          id="description"
          name="description"
          minLength={5}
          maxLength={400}
          required
        />
        <label className="font-semibold" htmlFor="thumbnail">
          Thumbnail
        </label>
        <input
          className="border p-2 bg-white"
          type="url"
          id="thumbnail"
          name="thumbnail"
          required
        />
      </div>
      <button 
       type="submit"
       className="inline-flex w-fit justify-self-center items-center justify-center gap-2 px-6 py-2.5 bg-[#7c54a1] hover:bg-[#6a478a] text-white rounded-lg transition-colors font-medium text-lg shadow-sm">
        Save
      </button>
    </Form>
  );
}