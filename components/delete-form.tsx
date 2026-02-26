import Form from "next/form";
import { deleteProductAction } from "@/lib/actions";
import { Trash2, SquarePen } from "lucide-react";

export function DeleteForm({ id }: { id: string }) {
  return (
    <Form action={deleteProductAction}>
      <input readOnly type="hidden" name="id" value={id} />
      <button className="hover:cursor-pointer" type="submit">
        <Trash2 className="text-red-600" />
        {/* Delete */}
      </button>
    </Form>
  );
}
