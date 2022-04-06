import Image from "next/image";
import { useState } from "react";
import { RecordItem } from "../types/records";

type Props = RecordItem;

const Score: React.FC<Pick<Props, "score">> = ({ score }) => {
  switch (score) {
    case 1:
      return <big className="font-bold text-black-500">🍅 烂</big>;
    case 2:
      return <big className="font-bold text-green-500">🥱 无聊</big>;
    case 3:
      return <big className="font-bold text-blue-500">🤔 还行</big>;
    case 4:
      return <big className="font-bold text-violet-500">🤩 值得一看</big>;
    case 5:
      return <big className="font-bold text-orange-500">💯 神作！</big>;
  }
};

const renderType = (type: Props["type"]) => {
  const typeMap = {
    movie: "电影",
    tv: "剧",
    book: "书",
    anime: "动漫"
  };
  return typeMap[type] ?? "未知";
};

export const Card: React.FC<Props> = (props) => {
  const [loading, setLoading] = useState(true);
  const loadingClasses =
    "backdrop-filter backdrop-grayscale backdrop-blur-lg transform  scale-110 hover:opacity-75 duration-300 ease-in-out";
  const loadedClasses =
    "backdrop-filter backdrop-grayscale-0 backdrop-blur-0 transform  scale-100 hover:opacity-75 duration-300 ease-in-out";
  const classes = loading ? loadingClasses : loadedClasses;

  return (
    <section className="pb-10 relative before:(border-l-2 inset-y-0 -left-30px absolute content-open-quote) first:before:top-1 last:before:bottom-10 ">
      <p className="text-xs mb-2 relative sm:text-base sm:mb-3">
        {new Date(props.date).toLocaleDateString()}

        <i className="rounded-full bg-gray-200 h-4 transform top-1/2 -left-9 w-4 translate-y-[-50%] absolute" />
      </p>
      <div className="flex justify-between">
        <div className="flex-1 mr-2">
          <p className="text-md mb-2 leading-6 sm:mb-3 sm:text-2xl ">
            {props.title}
            <span>（{props.year}）</span>
          </p>

          <p className="text-xs sm:text-base">
            <span>评分：</span>
            <Score score={props.score} />
          </p>

          <p className="text-xs sm:text-base">
            <span>分类：</span>
            {renderType(props.type)}
          </p>

          <div className="bg-white mt-4 text-xs leading-2 sm:text-base">{props.comment}</div>
        </div>
        <div className="rounded-md w-114px overflow-hidden sm:rounded-xl">
          <Image
            src={props.cover}
            layout="fixed"
            width={87}
            height={116}
            objectFit="cover"
            alt={props.title}
            className={classes}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
      </div>
    </section>
  );
};
