// `´nb@NB${}[]\|| `${}`
import EditForm from "@/components/edit-form";
import type { Product } from "@/app/types";

export default async function EditProduct({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`http://localhost:4000/products/${id}`);
  const product: Product = await res.json();

  return (
    <main>
      <h1>Edit product</h1>
      <EditForm product={product} />
      {/* <button className="hover:cursor-pointer" type="submit">
        Edit
      </button> */}
    </main>
  );
}

// title, price, description, thumbnail, categoryId, brand

// `´nb@NB${}[]\|| `${}`
