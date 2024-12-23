"use client";

import { useRef, useState } from 'react'; 
import 'styles/focus.css';

export default function Page() {

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false); 

  const mp3Files = [

    '/tunes/aboutyou.mp3',
    '/tunes/autumn1.mp3',
    '/tunes/autumn2.mp3',
    '/tunes/extreme.mp3',
    '/tunes/gwyn.mp3',
    '/tunes/lilrascal.mp3',
    '/tunes/moon.mp3', 
    '/tunes/os.mp3',
    '/tunes/paris.mp3',
    '/tunes/soulofcinder.mp3',
    '/tunes/spaced.mp3',
    '/tunes/whiplash.mp3',

  ]

  const toggleAudio = () => {
    if (audioRef.current) {

      const randomFile = mp3Files[Math.floor(Math.random() * mp3Files.length)];
      audioRef.current.src = randomFile      

      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play(); 
      }
      setIsPlaying(!isPlaying); 
    }
  };

  return (
    <main> 
    
    <span className = 'focus'>
        focus. <br/>future depends on ||focus||₂
    <span className='theme' onClick = {toggleAudio}>
    // tunes // 
    </span>
    </span>
 
    <audio ref={audioRef} ></audio>
     

    </main>

  );
}