"use client";

import { useRef, useState, useEffect } from "react";
import "styles/priv.css";

export default function ProtectedContentClient() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [shuffledSongs, setShuffledSongs] = useState<string[]>([]);

  const mp3Files = [
    "/tunes/gwyn.mp3",
    "/tunes/soulofcinder.mp3",
    "/tunes/lilrascal.mp3",
  ];

  const shuffleArray = (array: string[]) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const shuffled = shuffleArray(mp3Files);
    setShuffledSongs(shuffled);
    setCurrentSongIndex(Math.floor(Math.random() * shuffled.length)); // Start with a random song
  }, []);

  const playNextSong = () => {
    if (audioRef.current) {
      const nextSongIndex = (currentSongIndex + 1) % shuffledSongs.length;
      setCurrentSongIndex(nextSongIndex);
      audioRef.current.src = shuffledSongs[nextSongIndex];
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleAudioEnd = () => {
    playNextSong();
  };

  return (
    <section className="protected-content">
      <h1>Remember</h1>
      <p className="des">
        Life is too short, to not live with intention.
        <br/>
        <br/>
        What gives you real, persistent meaning?
        <br/>
        And why aren't you doing that now?
        <br/>
        <br/>
        Think to yourself, remember your vision.<br/>
        Does it include what you're doing, in the present moment?
        <br/>
        <br/>
        Act with conviction, towards an intention.
      </p>
      <a href = 'https://www.notion.so/vxnuaj/act-with-intention-1455f1989c4f80e3a2a4ea8d8539ecc7?pvs=4' style = {{fontSize: 16}}>home</a>
      <span onClick={toggleAudio} className = 'tunes' >tunes</span>
      
     <audio
        ref={audioRef}
        src={shuffledSongs[currentSongIndex]}
        onEnded={handleAudioEnd}
      />
    </section>
  );
}
