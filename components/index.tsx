'use client'

// imports
import { EmojiNames } from "../emojis"
import { lazy, useState, useEffect, useRef } from 'react';

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
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const Sad = useRef<any>(null)
  const Grinning = useRef<any>(null)
  const SmileTeeth = useRef<any>(null)
  const LaughTeers = useRef<any>(null)
  const Laugh = useRef<any>(null)
  const Angry = useRef<any>(null)
  const Cry = useRef<any>(null)
  const HeartFace = useRef<any>(null)
  const HeartEyes = useRef<any>(null)
  const PartyFace = useRef<any>(null)
  const MoneyFace = useRef<any>(null)
  const Fire = useRef<any>(null)
  const Eyes = useRef<any>(null)
  const Like = useRef<any>(null)
  const Finger = useRef<any>(null)
  const Heart = useRef<any>(null)
  const Alien = useRef<any>(null)
  const AngryFace = useRef<any>(null)
  const Poo = useRef<any>(null)
  const Robot = useRef<any>(null)
  const WavingHand = useRef<any>(null)
  const AngryHorns = useRef<any>(null)
  const ColdFace = useRef<any>(null)
  const AnxiousSweat = useRef<any>(null)
  const Confounded = useRef<any>(null)
  const Cowboy = useRef<any>(null)
  const DizzyFace = useRef<any>(null)
  const Facekiss = useRef<any>(null)
  const Expressionless = useRef<any>(null)
  const Savoring = useRef<any>(null)
  const Vomit = useRef<any>(null)
  const HeadBandage = useRef<any>(null)
  const SteamFace = useRef<any>(null)
  const StarFace = useRef<any>(null)
  const Cool = useRef<any>(null)
  const WinkingFace = useRef<any>(null)
  const Drooling = useRef<any>(null)
  const Monocle = useRef<any>(null)
  const RollingEyes = useRef<any>(null)
  const TongueFace = useRef<any>(null)
  const Frowning = useRef<any>(null)
  const SleepFace = useRef<any>(null)
  const Scream = useRef<any>(null)
  const WinkTongue = useRef<any>(null)
  const HaloFace = useRef<any>(null)
  const Smirking = useRef<any>(null)
  const Astonished = useRef<any>(null)
  const ZipFace = useRef<any>(null)
  const Disapointed = useRef<any>(null)
  const Downcast = useRef<any>(null)
  const FaceMask = useRef<any>(null)
  const HandMouth = useRef<any>(null)
  const OpenMouth = useRef<any>(null)
  const RaisedEyebrow = useRef<any>(null)
  const AngrySymbols = useRef<any>(null)
  const ThermoFace = useRef<any>(null)
  const Flushed = useRef<any>(null)
  const NoMouth = useRef<any>(null)
  const Grimacing = useRef<any>(null)
  const Hot = useRef<any>(null)
  const HushedFace = useRef<any>(null)
  const HuggingFace = useRef<any>(null)
  const LoudCry = useRef<any>(null)
  const Lying = useRef<any>(null)
  const NeutralFace = useRef<any>(null)
  const Nerd = useRef<any>(null)
  const Nausted = useRef<any>(null)
  const Relieved = useRef<any>(null)
  const Pleading = useRef<any>(null)
  const Perserving = useRef<any>(null)
  const Shushing = useRef<any>(null)
  const Sneeze = useRef<any>(null)
  const Tired = useRef<any>(null)
  const Zany = useRef<any>(null)
  const Yawn = useRef<any>(null)
  const worried = useRef<any>(null)
  const Woozy = useRef<any>(null)
  const Upside = useRef<any>(null)
  const Squinting = useRef<any>(null)
  const Smile = useRef<any>(null)
  const SlightSmile = useRef<any>(null)
  const SlightFrowning = useRef<any>(null)
  const Anguished = useRef<any>(null)
  const ExplodingHead = useRef<any>(null)
  const Laughing = useRef<any>(null)
  const Sleep = useRef<any>(null)
  const Anger = useRef<any>(null)
  const Sparkles = useRef<any>(null)
  const Sun = useRef<any>(null)
  const Rocket = useRef<any>(null)
  const Onehundred = useRef<any>(null)
  const Voltage = useRef<any>(null)
  const star = useRef<any>(null)
  const Gem = useRef<any>(null)
  const Biceps = useRef<any>(null)

  // useEffect
  useEffect(() => {
    Sad.current = lazy(() => import("./sad"))
    Grinning.current = lazy(() => import('./grinning'))
    SmileTeeth.current = lazy(() => import('./smile-teeth'))
    LaughTeers.current = lazy(() => import('./laugh-teers'))
    Laugh.current = lazy(() => import('./laugh'))
    Angry.current = lazy(() => import('./angry'))
    Cry.current = lazy(() => import('./cry'))
    HeartFace.current = lazy(() => import('./heart-face'))
    HeartEyes.current = lazy(() => import('./heart-eyes'))
    PartyFace.current = lazy(() => import('./party-face'))
    MoneyFace.current = lazy(() => import('./money-face'))
    Fire.current = lazy(() => import('./fire'))
    Eyes.current = lazy(() => import('./eyes'))
    Like.current = lazy(() => import('./like'))
    Finger.current = lazy(() => import('./finger'))
    Heart.current = lazy(() => import('./heart'))
    Alien.current = lazy(() => import('./alien'))
    AngryFace.current = lazy(() => import('./angry-face'))
    Poo.current = lazy(() => import('./poo'))
    Robot.current = lazy(() => import('./robot'))
    WavingHand.current = lazy(() => import('./waving-hand'))
    AngryHorns.current = lazy(() => import('./angry-horns'))
    ColdFace.current = lazy(() => import('./cold-face'))
    AnxiousSweat.current = lazy(() => import('./anxious-sweat'))
    Confounded.current = lazy(() => import('./confounded'))
    Cowboy.current = lazy(() => import('./cowboy'))
    DizzyFace.current = lazy(() => import('./dizzy-face'))
    Facekiss.current = lazy(() => import('./face-kiss'))
    Expressionless.current = lazy(() => import('./expressionless'))
    Savoring.current = lazy(() => import('./savoring'))
    Vomit.current = lazy(() => import('./vomit'))
    HeadBandage.current = lazy(() => import('./head-bandage'))
    SteamFace.current = lazy(() => import('./steam-face'))
    StarFace.current = lazy(() => import('./star-face'))
    Cool.current = lazy(() => import('./cool'))
    WinkingFace.current = lazy(() => import('./winking-face'))
    Drooling.current = lazy(() => import('./drooling'))
    Monocle.current = lazy(() => import('./monocle'))
    RollingEyes.current = lazy(() => import('./rolling-eyes'))
    TongueFace.current = lazy(() => import('./tongue-face'))
    Frowning.current = lazy(() => import('./frowning'))
    SleepFace.current = lazy(() => import('./sleep-face'))
    Scream.current = lazy(() => import('./scream'))
    WinkTongue.current = lazy(() => import('./wink-tongue'))
    HaloFace.current = lazy(() => import('./halo-face'))
    Smirking.current = lazy(() => import('./smirking'))
    Astonished.current = lazy(() => import('./astonished'))
    ZipFace.current = lazy(() => import('./zip-face'))
    Disapointed.current = lazy(() => import('./disapointed'))
    Downcast.current = lazy(() => import('./downcast'))
    FaceMask.current = lazy(() => import('./face-mask'))
    HandMouth.current = lazy(() => import('./hand-mouth'))
    OpenMouth.current = lazy(() => import('./open-mouth'))
    RaisedEyebrow.current = lazy(() => import('./raised-eyebrow'))
    AngrySymbols.current = lazy(() => import('./angry-symbols'))
    ThermoFace.current = lazy(() => import('./thermo-face'))
    Flushed.current = lazy(() => import('./flushed'))
    NoMouth.current = lazy(() => import('./no-mouth'))
    Grimacing.current = lazy(() => import('./grimacing'))
    Hot.current = lazy(() => import('./hot'))
    HushedFace.current = lazy(() => import('./hushed-face'))
    HuggingFace.current = lazy(() => import('./hugging-face'))
    LoudCry.current = lazy(() => import('./loud-cry'))
    Lying.current = lazy(() => import('./lying'))
    NeutralFace.current = lazy(() => import('./neutral-face'))
    Nerd.current = lazy(() => import('./nerd'))
    Nausted.current = lazy(() => import('./nausted'))
    Relieved.current = lazy(() => import('./relieved'))
    Pleading.current = lazy(() => import('./pleading'))
    Perserving.current = lazy(() => import('./perserving'))
    Shushing.current = lazy(() => import('./shushing'))
    Sneeze.current = lazy(() => import('./sneeze'))
    Tired.current = lazy(() => import('./tired'))
    Zany.current = lazy(() => import('./zany'))
    Yawn.current = lazy(() => import('./yawn'))
    worried.current = lazy(() => import('./worried'))
    Woozy.current = lazy(() => import('./woozy'))
    Upside.current = lazy(() => import('./upside'))
    Squinting.current = lazy(() => import('./squinting'))
    Smile.current = lazy(() => import('./smile'))
    SlightSmile.current = lazy(() => import('./slight-smile'))
    SlightFrowning.current = lazy(() => import('./slight-frowning'))
    Anguished.current = lazy(() => import('./anguished'))
    ExplodingHead.current = lazy(() => import('./exploding-head'))
    Laughing.current = lazy(() => import('./laughing'))
    Sleep.current = lazy(() => import('./sleep'))
    Anger.current = lazy(() => import('./anger'))
    Sparkles.current = lazy(() => import('./sparkles'))
    Sun.current = lazy(() => import('./sun'))
    Rocket.current = lazy(() => import('./rocket'))
    Onehundred.current = lazy(() => import('./100'))
    Voltage.current = lazy(() => import('./voltage'))
    star.current = lazy(() => import('./star'))
    Gem.current = lazy(() => import('./gem'))
    Biceps.current = lazy(() => import('./biceps'))
    setIsMounted(true)
  }, [])


  /**
   * RETURNS
   */

  // check if 
  if (!isMounted) return null

  
  if (emoji === '😔') return <Sad.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😀') return <Grinning.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😁') return <SmileTeeth.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😂') return <LaughTeers.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😆') return <Laugh.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😡') return <Angry.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😢') return <Cry.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🥰') return <HeartFace.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😍') return <HeartEyes.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🥳') return <PartyFace.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🤑') return <MoneyFace.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🔥') return <Fire.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '👀') return <Eyes.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '👍') return <Like.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '👆') return <Finger.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '❤️') return <Heart.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '👽') return <Alien.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😠') return <AngryFace.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '💩') return <Poo.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🤖') return <Robot.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '👋') return <WavingHand.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '👿') return <AngryHorns.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🥶') return <ColdFace.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😰') return <AnxiousSweat.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😖') return <Confounded.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🤠') return <Cowboy.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😵') return <DizzyFace.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😘') return <Facekiss.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😑') return <Expressionless.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😋') return <Savoring.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🤮') return <Vomit.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🤕') return <HeadBandage.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😤') return <SteamFace.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🤩') return <StarFace.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😎') return <Cool.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😉') return <WinkingFace.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🤤') return <Drooling.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🧐') return <Monocle.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🙄') return <RollingEyes.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😛') return <TongueFace.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '☹️') return <Frowning.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😴') return <SleepFace.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😱') return <Scream.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😜') return <WinkTongue.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😇') return <HaloFace.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😏') return <Smirking.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😲') return <Astonished.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🤐') return <ZipFace.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😞') return <Disapointed.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😓') return <Downcast.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😷') return <FaceMask.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🤭') return <HandMouth.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😮') return <OpenMouth.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🤨') return <RaisedEyebrow.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🤬') return <AngrySymbols.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🤒') return <ThermoFace.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😳') return <Flushed.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😶') return <NoMouth.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😬') return <Grimacing.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🥵') return <Hot.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😯') return <HushedFace.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🤗') return <HuggingFace.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😭') return <LoudCry.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🤥') return <Lying.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😐') return <NeutralFace.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🤓') return <Nerd.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🤢') return <Nausted.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😌') return <Relieved.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🥺') return <Pleading.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😣') return <Perserving.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🤫') return <Shushing.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🤧') return <Sneeze.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😫') return <Tired.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🤪') return <Zany.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🥱') return <Yawn.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😟') return <worried.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🥴') return <Woozy.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🙃') return <Upside.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😝') return <Squinting.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😄') return <Smile.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🙂') return <SlightSmile.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🙁') return <SlightFrowning.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😧') return <Anguished.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🤯') return <ExplodingHead.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🤣') return <Laughing.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '😪') return <Sleep.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '💢') return <Anger.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '✨') return <Sparkles.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '☀️') return <Sun.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '🚀') return <Rocket.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '💯') return <Onehundred.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '⚡') return <Voltage.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '⭐') return <star.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '💎') return <Gem.current emojiStyle={emojiStyle} style={styles} {...props} />
  
  if (emoji === '💪') return <Biceps.current emojiStyle={emojiStyle} style={styles} {...props} />
}