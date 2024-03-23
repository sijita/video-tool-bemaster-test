import { IconSearch } from "@tabler/icons-react";

export default function SearchBar() {
  return (
    <div className="relative sm:w-1/2">
      <IconSearch
        size={20}
        className="absolute inset-y-4 left-4 text-gray-400"
      />
      <hr className="absolute inset-y-4 left-12 w-[0.10rem] h-5 bg-gray-400" />
      <input
        type="text"
        className="w-full p-3 rounded-md border-2 border-gray-200 pl-16 pr-4 focus:outline-none focus:border-indigo-600"
        placeholder="Buscar video"
      />
    </div>
  );
}
