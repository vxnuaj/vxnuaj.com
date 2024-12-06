"use client";

import { useRef, useState } from 'react'; 
import 'styles/home.css';

export default function Page() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false); 


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

  return (
    <section className='home'>
      <div className = 'homeImg'>
      <img className = 'pfp' src='/assets/me.png' alt="Black Nebula" />
      </div>
      <h1 className='vname'>
        vxnuaj 
        <span className='rname'> &nbsp;(juan vera)</span>
      </h1>
      <p className='body'>
        i do deep learning.
        <br />
        i also <a href = 'https://www.strava.com/athletes/101676876'><em>run</em></a>. If you wanna go on a 20 mi. run, let me know <span className = 'subbody'>(i'm being serious)</span>.
        <br />
        if you wanna chat, message me on <em><a href = 'https://x.com/vxnuaj'>X</a></em> <span className = 'subbody'>(first read <a href = 'https://t.co/BA0e7oSO2E'>this</a>)</span>.
        <br />
      </p>
      <audio ref={audioRef} src="/assets/lilrascal.mp3"></audio>
      <footer>
        <nav className="footer-nav">
          <p className="nav">
            <a href="/blog">infinity</a>
            <a href="https://x.com/vxnuaj">x[dot]com</a>
            <a href="https://github.com/vxnuaj">github</a>
            <a href = '/books'>reads</a>
          </p>
        </nav>
      </footer>
          <span className='webtheme' onClick={toggleAudio}> 
          {isPlaying ? 'pause theme song' : 'play theme song'}
        </span>
    </section>
  );
}
