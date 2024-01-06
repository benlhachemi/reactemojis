'use client'

import emoji1 from "../animations/tongue-face/1.json"
import emoji2 from "../animations/tongue-face/2.json"
import emoji3 from "../animations/tongue-face/3.json"
import { memo, useState, useEffect, lazy, Suspense } from "react"

interface Props {
  emojiStyle?: '1'|'2'|'3',
  [key: string]: any,
  style?: any,
  className?: string
}

const Emoji = ({emojiStyle, style, className, ...props}: Props) => {
  // variables
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const Lottie = lazy(() => import('lottie-react'))

  // functions
  useEffect(() => {
    typeof window !== 'undefined' && setIsMounted(true)
  }, [])

  // case of window not defined
  if (!isMounted) return null

  // return emojis
  if (emojiStyle === '1') return (<Suspense><Lottie className={className} animationData={emoji1} style={style} {...props}/></Suspense>)
  if (emojiStyle === '2') return (<Suspense><Lottie className={className} animationData={emoji2} style={style} {...props}/></Suspense>)
  if (emojiStyle === '3') return (<Suspense><Lottie className={className} animationData={emoji3} style={style} {...props}/></Suspense>)

  // default emoji
  return (<Suspense><Lottie className={className} animationData={emoji1} style={style} {...props}/></Suspense>)
}

export default memo(Emoji)