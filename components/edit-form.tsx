// `´nb@NB${}[]\|| `${}`
import Form from "next/form";
import { updateProduct } from "@/lib/actions";

export default async function EditForm() {
  console.log();
  return (
    <div>
      <Form action={updateProduct}></Form>
    </div>
  );
}

// `´nb@NB${}[]\|| `${}`
