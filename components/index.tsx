'use client'

// imports
import { EmojiNames } from "../emojis"
import { lazy, Suspense } from 'react';

// interfaces
interface Props {
  emoji: EmojiNames,
  emojiStyle?: '1' | '2' | '3',
  [key: string]: any,
  style?: any,
}

export default function ReactEmojis({emoji, emojiStyle, style, ...props}: Props) {
  // variables
  const styles = {
    width: 100,
    height: 100,
    ...style,
  }

  /**
   * RETURNS
   */

  
  if (emoji === '😔') {
    const Emoji = lazy(() => import('./sad'))
    return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
  
  if (emoji === '😀') {
  const Emoji = lazy(() => import('./grinning'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😁') {
  const Emoji = lazy(() => import('./smile-teeth'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😂') {
  const Emoji = lazy(() => import('./laugh-teers'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😆') {
  const Emoji = lazy(() => import('./laugh'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😡') {
  const Emoji = lazy(() => import('./angry'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😢') {
  const Emoji = lazy(() => import('./cry'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🥰') {
  const Emoji = lazy(() => import('./heart-face'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😍') {
  const Emoji = lazy(() => import('./heart-eyes'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🥳') {
  const Emoji = lazy(() => import('./party-face'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🤑') {
  const Emoji = lazy(() => import('./money-face'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🔥') {
  const Emoji = lazy(() => import('./fire'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '👀') {
  const Emoji = lazy(() => import('./eyes'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '👍') {
  const Emoji = lazy(() => import('./like'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '👆') {
  const Emoji = lazy(() => import('./finger'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '❤️') {
  const Emoji = lazy(() => import('./heart'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '👽') {
  const Emoji = lazy(() => import('./alien'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😠') {
  const Emoji = lazy(() => import('./angry-face'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '💩') {
  const Emoji = lazy(() => import('./poo'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🤖') {
  const Emoji = lazy(() => import('./robot'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '👋') {
  const Emoji = lazy(() => import('./waving-hand'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '👿') {
  const Emoji = lazy(() => import('./angry-horns'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🥶') {
  const Emoji = lazy(() => import('./cold-face'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😰') {
  const Emoji = lazy(() => import('./anxious-sweat'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😖') {
  const Emoji = lazy(() => import('./confounded'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🤠') {
  const Emoji = lazy(() => import('./cowboy'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😵') {
  const Emoji = lazy(() => import('./dizzy-face'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😘') {
  const Emoji = lazy(() => import('./face-kiss'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😑') {
  const Emoji = lazy(() => import('./expressionless'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😋') {
  const Emoji = lazy(() => import('./savoring'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🤮') {
  const Emoji = lazy(() => import('./vomit'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🤕') {
  const Emoji = lazy(() => import('./head-bandage'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😤') {
  const Emoji = lazy(() => import('./steam-face'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🤩') {
  const Emoji = lazy(() => import('./star-face'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😎') {
  const Emoji = lazy(() => import('./cool'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😉') {
  const Emoji = lazy(() => import('./winking-face'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🤤') {
  const Emoji = lazy(() => import('./drooling'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🧐') {
  const Emoji = lazy(() => import('./monocle'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🙄') {
  const Emoji = lazy(() => import('./rolling-eyes'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😛') {
  const Emoji = lazy(() => import('./tongue-face'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '☹️') {
  const Emoji = lazy(() => import('./frowning'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😴') {
  const Emoji = lazy(() => import('./sleep-face'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😱') {
  const Emoji = lazy(() => import('./scream'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😜') {
  const Emoji = lazy(() => import('./wink-tongue'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😇') {
  const Emoji = lazy(() => import('./halo-face'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😏') {
  const Emoji = lazy(() => import('./smirking'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😲') {
  const Emoji = lazy(() => import('./astonished'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🤐') {
  const Emoji = lazy(() => import('./zip-face'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😞') {
  const Emoji = lazy(() => import('./disapointed'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😓') {
  const Emoji = lazy(() => import('./downcast'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😷') {
  const Emoji = lazy(() => import('./face-mask'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🤭') {
  const Emoji = lazy(() => import('./hand-mouth'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😮') {
  const Emoji = lazy(() => import('./open-mouth'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🤨') {
  const Emoji = lazy(() => import('./raised-eyebrow'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🤬') {
  const Emoji = lazy(() => import('./angry-symbols'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🤒') {
  const Emoji = lazy(() => import('./thermo-face'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😳') {
  const Emoji = lazy(() => import('./flushed'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😶') {
  const Emoji = lazy(() => import('./no-mouth'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😬') {
  const Emoji = lazy(() => import('./grimacing'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🥵') {
  const Emoji = lazy(() => import('./hot'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😯') {
  const Emoji = lazy(() => import('./hushed-face'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🤗') {
  const Emoji = lazy(() => import('./hugging-face'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😭') {
  const Emoji = lazy(() => import('./loud-cry'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🤥') {
  const Emoji = lazy(() => import('./lying'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😐') {
  const Emoji = lazy(() => import('./neutral-face'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🤓') {
  const Emoji = lazy(() => import('./nerd'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🤢') {
  const Emoji = lazy(() => import('./nausted'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😌') {
  const Emoji = lazy(() => import('./relieved'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🥺') {
  const Emoji = lazy(() => import('./pleading'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😣') {
  const Emoji = lazy(() => import('./perserving'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🤫') {
  const Emoji = lazy(() => import('./shushing'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🤧') {
  const Emoji = lazy(() => import('./sneeze'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😫') {
  const Emoji = lazy(() => import('./tired'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🤪') {
  const Emoji = lazy(() => import('./zany'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🥱') {
  const Emoji = lazy(() => import('./yawn'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😟') {
  const Emoji = lazy(() => import('./worried'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🥴') {
  const Emoji = lazy(() => import('./woozy'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🙃') {
  const Emoji = lazy(() => import('./upside'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😝') {
  const Emoji = lazy(() => import('./squinting'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😄') {
  const Emoji = lazy(() => import('./smile'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🙂') {
  const Emoji = lazy(() => import('./slight-smile'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🙁') {
  const Emoji = lazy(() => import('./slight-frowning'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😧') {
  const Emoji = lazy(() => import('./anguished'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🤯') {
  const Emoji = lazy(() => import('./exploding-head'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🤣') {
  const Emoji = lazy(() => import('./laughing'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '😪') {
  const Emoji = lazy(() => import('./sleep'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '💢') {
  const Emoji = lazy(() => import('./anger'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '✨') {
  const Emoji = lazy(() => import('./sparkles'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '☀️') {
  const Emoji = lazy(() => import('./sun'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '🚀') {
  const Emoji = lazy(() => import('./rocket'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '💯') {
  const Emoji = lazy(() => import('./100'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '⚡') {
  const Emoji = lazy(() => import('./voltage'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '⭐') {
  const Emoji = lazy(() => import('./star'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '💎') {
  const Emoji = lazy(() => import('./gem'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
    
    if (emoji === '💪') {
  const Emoji = lazy(() => import('./biceps'))
  return <Suspense><Emoji emojiStyle={emojiStyle} style={styles} {...props} /></Suspense>
  }
}