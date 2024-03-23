import { IconPlayerPlay } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

export default function VideosTable({
  tableRows,
}: {
  tableRows: {
    name: string;
    tamano: string;
    duration: string;
    lastModification: string;
  }[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
        <thead>
          <tr className="text-left">
            <th className="px-4 py-2">
              <input type="checkbox" className="size-4" />
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-1/2">
              Nombre
            </th>
            <th className="text-center whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Tamaño
            </th>
            <th className="text-center whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Duración
            </th>
            <th className="text-center whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Última modificación
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {tableRows.map((row, index) => (
            <tr key={index} className="hover:bg-gray-200 cursor-pointer">
              <td className="p-4">
                <div className="flex">
                  <input
                    className="size-4 rounded border-gray-300"
                    type="checkbox"
                    id="Row1"
                  />
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <Link className="flex gap-3 w-full" href="#">
                  <div className="border-2 border-indigo-600 rounded-full p-[0.1rem]">
                    <IconPlayerPlay
                      className="text-indigo-600"
                      size={15}
                      stroke={2}
                    />
                  </div>
                  {row.name}
                </Link>
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                {row.tamano}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                {row.duration}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                {row.lastModification}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
