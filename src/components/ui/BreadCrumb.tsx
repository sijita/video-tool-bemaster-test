"use client";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function BreadCrumb({ folderName }: { folderName: string }) {
  const router = useRouter();

  return (
    <div className="flex gap-5 items-center flex-wrap">
      <button
        className="bg-indigo-500 flex items-center justify-center sm:w-10 sm:h-10 w-full p-2 rounded-md"
        onClick={() => {
          router.back();
        }}
      >
        <IconArrowLeft color="white" size={25} />
      </button>
      <div className="flex gap-2 items-center sm:text-lg text-base overflow-x-auto">
        <p>Home</p>
        <p>/</p>
        <p className="font-bold capitalize truncate">
          {folderName.replace(/-/g, " ")}
        </p>
      </div>
    </div>
  );
}
