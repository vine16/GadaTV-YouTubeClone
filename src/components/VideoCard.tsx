interface VideoCardSpec {
  title: string;
  thumbnail: string;
  views: string;
  timestamp: string;
  channelName: string;
  channelLogo: string;
}

export default function VideoCard({
  title,
  thumbnail,
  views,
  timestamp,
  channelName,
  channelLogo,
}: VideoCardSpec) {
  return (
    <div className="w-96">
      <img
        src={thumbnail}
        alt={`${title} video thumbnail`}
        className="w-96 rounded-lg"
      ></img>
      <div className="grid grid-cols-12 grid-rows-3 ">
        <div className="col-span-1 row-span-2">
          <img
            src={channelLogo}
            className="rounded-full h-9 w-auto pt-2 pl-2"
          ></img>
        </div>
        <div className="col-span-11 pl-2 row-span-2">{title}</div>
        <div className="col-start-2 col-span-11 text-gray-600  row-span-1 pl-2 text-sm">
          {channelName}
        </div>
        <div className="col-start-2 text-gray-600 pl-2 row-span-1 col-span-11 text-sm">
          {views} views &#xB7; {timestamp} ago
        </div>
      </div>
    </div>
  );
}
