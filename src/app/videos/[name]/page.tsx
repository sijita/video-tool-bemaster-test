import BreadCrumb from "@/components/ui/BreadCrumb";
import SearchBar from "@/components/ui/SearchBar";
import VideosTable from "@/components/ui/VideosTable";
import { videoFiles } from "@/utils/mockData";

export default function page({
  params: { name },
}: {
  params: { name: string };
}) {
  return (
    <div className="w-full flex flex-col gap-10">
      <BreadCrumb folderName={name} />
      <SearchBar />
      <VideosTable tableRows={videoFiles} />
    </div>
  );
}
