import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function AddProduct() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 px-8 bg-white border-b border-gray-100">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Product management
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage your store inventory
        </p>
      </div>

      <Link 
        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#7c54a1] hover:bg-[#6a478a] text-white rounded-lg transition-colors font-medium text-sm shadow-sm whitespace-nowrap"
<<<<<<< HEAD
        href="/">
=======
        href="/create">
>>>>>>> dev
        <Plus size={18} />
        Add product
      </Link>
    </div>
  );
}

