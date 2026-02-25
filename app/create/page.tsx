import CreateForm from "@/components/create-form";

export default function CreatePage() {
  return (
    <main className="container mx-auto">
      <h1 className="text-3xl py-4">Create new product</h1>
      <CreateForm/>
    </main>
  );
}