import {
  IconBooks,
  IconFolder,
  IconPlayerPlay,
  IconTrash,
} from "@tabler/icons-react";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row gap-10 justify-between w-full">
      <div className="flex max-sm:flex-wrap gap-5 max-sm:w-full max-sm:justify-center">
        <a
          className="flex items-center gap-2 border-b-2 text-indigo-600 border-indigo-600"
          href="/"
        >
          <IconBooks size={20} />
          Biblioteca
        </a>
        <a className="flex items-center gap-2" href="/">
          <IconTrash size={20} />
          Papelera
        </a>
      </div>
      <div className="flex max-sm:flex-wrap gap-5 max-sm:w-full">
        <button className="flex gap-2 items-center px-4 py-3 text-gray-700 rounded-md hover:bg-indigo-100 bg-gray-100 max-sm:w-full">
          <IconFolder size={20} />
          Nueva carpeta
        </button>
        <button className="flex gap-2 items-center px-4 py-3 text-white rounded-md bg-indigo-600 max-sm:w-full">
          <div className="border-2 border-white rounded-full p-[0.1rem]">
            <IconPlayerPlay size={13} stroke={2} />
          </div>
          Nuevo video
        </button>
      </div>
    </div>
  );
}
