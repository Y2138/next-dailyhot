'use client'

import { useEffect, useState, useRef } from 'react'
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from './ui/tooltip'

type OverflowDetectorProps = {
  text: string;
}

export default function OverflowDetector({ text }: OverflowDetectorProps) {
  const [ isOverflow, setIsOverflow ] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const element = ref.current
    if (element) {
      setIsOverflow(element.offsetWidth < element.scrollWidth)
    }
  }, [text])

  return (
    <TooltipProvider>
      <Tooltip disableHoverableContent={!isOverflow}>
        <TooltipTrigger asChild>
          <div ref={ref} className="overflow-hidden truncate text-sm cursor-pointer">
            {text}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}