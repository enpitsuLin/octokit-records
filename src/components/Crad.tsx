import Image from 'next/image'
import type { RecordItem } from '../types/records'

type Props = RecordItem

const Score: React.FC<Pick<Props, 'score'>> = ({ score }) => {
  switch (score) {
    case 1:
      return <big className="font-bold text-gray-500">🍅 烂</big>
    case 2:
      return <big className="font-bold text-green-500">🥱 无聊</big>
    case 3:
      return <big className="font-bold text-blue-500">🤔 还行</big>
    case 4:
      return <big className="font-bold text-violet-500">🤩 值得一看</big>
    case 5:
      return <big className="font-bold text-orange-500">💯 神作！</big>
  }
}

function renderType(type: Props['type']) {
  const typeMap = {
    movie: '电影',
    tv: '剧集',
    book: '书籍',
    anime: '动漫',
  }
  return typeMap[type] ?? '未知'
}

export const Card: React.FC<Props> = (props) => {
  return (
    <section
      before="content-empty border-#e5e7eb border-l-2 inset-y-0 -left-30px absolute"
      className="pb-10 relative first:before:top-1 last:before:bottom-10"
    >
      <p className="text-sm mb-2 relative sm:text-base sm:mb-3">
        {new Date(props.date).toLocaleDateString()}
        <i rounded="full"
          bg="gray-200"
          className="h-4 transform top-1/2 -left-9 w-4 -translate-y-1/2 absolute"
        />
      </p>
      <div flex="~ justify-between">
        <div className="flex-1 mr-2">
          <p leading-6
            text="md sm:2xl"
            mb="2 sm:3">
            {props.title}
            <span>（{props.year}）</span>
          </p>

          <p text="base md:sm">
            <span>评分：</span>
            <Score score={props.score} />
          </p>

          <p text="base md:sm">
            <span>分类：</span>
            {renderType(props.type)}
          </p>

          <div text="sm md:base gray-700 dark:gray-300"
            className="mt-4">{props.comment}</div>
        </div>
        <div
          rounded="xl md:md"
          className="w-87px overflow-hidden"
        >
          <Image
            src={props.cover}
            width={87}
            height={116}
            alt={props.title}
            className='backdrop-filter hover:opacity-75 duration-300 ease-in-out'
          />
        </div>
      </div>
    </section>
  )
}
