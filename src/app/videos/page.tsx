import Navbar from "@/components/ui/Navbar";
import FoldersTable from "@/components/ui/FoldersTable";
import { videoFolders } from "@/utils/mockData";
import SearchBar from "@/components/ui/SearchBar";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-10">
      <Navbar />
      <SearchBar />
      <FoldersTable tableRows={videoFolders} />
    </div>
  );
}
