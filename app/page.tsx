import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { FaHtml5, FaCss3Alt, FaPhp, FaJava, FaLaravel } from "react-icons/fa";
import { SiMysql, SiMongodb } from "react-icons/si";
import { BsPersonFill, BsFlagFill } from "react-icons/bs";
import { MdOutlineWork, MdOutlineReviews, MdOutlineCollectionsBookmark } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import PageLayout from "./layout/PageLayout";
import Column1 from "@/components/columns/Column1";
import Column2 from "@/components/columns/Column2";
import Column3 from "@/components/columns/Column3";
import Advanced from "@/components/Advanced";
import Previous from "@/components/Previous";
import V1 from "./v1/page";
import V2 from "./v2/page";

export default function Home() {
  return (
    <>
    <V1 />
    <V2 />
    </>
  );
}
