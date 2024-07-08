'use client'
import OverflowDetector from "../overflowDectector"

type PanelItemProps = {
  text: string;
  index: number;
  url: string;
  label: string;
}

const RankClass = [
  'text-orange-500 text-lg font-semibold',
  'text-orange-300 text-lg',
  'text-orange-200 text-md',
]

export default function PanelItem({ index, text, url, label }: PanelItemProps) {
  const handleJumpUrl = () => {
    window.open(url)
  }
  
  return (
    <div className="py-2 flex items-center border-t border-gray-100">
      <div className={`shrink-0 w-6 h-6 text-center leading-6 pr-1 ${RankClass[index] || ''}`}>{index + 1}</div>
      <div className='flex-1 w-0' onClick={handleJumpUrl}>
        <OverflowDetector text={text}></OverflowDetector>
        {
          label && label.length && <div className='rounded-full'>{label}</div>
        }
      </div>
    </div>
  )
}