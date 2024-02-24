import Image from "next/image";
import { Inter } from "next/font/google";
import VideoCard from "@/components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard
        title="Taarak Mehta Ka Ooltah Chashmah - तारक मेहता का उल्टा चशमाह - Episode 387 - Full Episode"
        thumbnail="band-kar-band-kar.jpg"
        channelLogo="sab_tv_logo_new.jpg"
        channelName="Sony SAB"
        views="100M"
        timestamp="1 month"
      ></VideoCard>
    </div>
  );
}
