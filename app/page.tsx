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
      <img src='/assets/blacknebulaweb.png' alt="Black Nebula" />
      </div>
      <h1 className='vname'>
        vxnuaj 
        <span className='rname'> &nbsp;(juan vera)</span>
        
      </h1>
      <p className='desHome'>
        working on neural nets @ <u className='u'>the bay area.</u>
      </p>
      <p className='body'>
        {`I opted out of UC Davis and flew across the country to Silicon Valley to learn
        from exceptional founders and engineers.`}
        <br /><br />
        Currently, I’m maximizing for technical depth within Deep Learning, with the goal to get to its bleeding edge within the year.
        <br /><br />
        Recently, I’ve been curious about mechanistic interpretability & epistemology <span className='subbody'>(what is knowledge?)</span>, and <span className='subbody'>(will soon)</span> write more @ my blog, <b><u><a href = '/infinity'>Infinity</a></u></b>
        <br /><br />
        I also run a lot.
        <br /><br />
        If you wanna chat, message me on <b><u><a href = 'https://x.com/vxnuaj'>X</a></u></b> or <b><u><a href = 'https://cal.com/vxnuaj/quick-chat'>schedule a call</a></u></b>!
        <br /><br />
        Alternatively, if you want to stay updated with what I’ve been working on, check out my <b><u><a href = 'https://github.com/vxnuaj'>GitHub</a></u></b> or subscribe to my <b><u><a href = 'https://vxnuaj.blog/s/adastra'>Substack</a></u></b>.
      </p>
      <audio ref={audioRef} src="/assets/lilrascal.mp3"></audio>
      <footer>
        <nav className="footer-nav">
          <p className="nav">
            <a href="/blog"> infinity </a>
            <a href="https://x.com/vxnuaj"> x[dot]com </a>
            <a href="https://github.com/vxnuaj"> github </a>
            <a href = '/books'> reads </a>
          </p>
        </nav>
      </footer>
          <span className='webtheme' onClick={toggleAudio} style={{ cursor: 'pointer' }}>
          {isPlaying ? 'pause theme song' : 'play theme song'}
        </span>
    </section>
  );
}
