'use client'

import emoji1 from "../animations/sleep/1.json"
import emoji2 from "../animations/sleep/2.json"
import emoji3 from "../animations/sleep/3.json"
import Lottie from "lottie-react"

interface Props {
  emojiStyle?: '1'|'2'|'3',
  [key: string]: any,
  style?: any,
}

export default function Emoji({emojiStyle, style, ...props}: Props) {
  // return emojis
  if (emojiStyle === '1') return (<Lottie animationData={emoji1} style={style} {...props}/>)
  if (emojiStyle === '2') return (<Lottie animationData={emoji2} style={style} {...props}/>)
  if (emojiStyle === '3') return (<Lottie animationData={emoji3} style={style} {...props}/>)

  // default emoji
  return (<Lottie animationData={emoji1} style={style} {...props}/>)
}