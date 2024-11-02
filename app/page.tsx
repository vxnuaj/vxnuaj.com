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
      <p className='desHome'>
        working on neural nets @ the bay area.
      </p>
      <p className='body'>
        {`I opted out of UC Davis and flew across the country to Silicon Valley to learn
        from exceptional founders and engineers.`}
        <br /><br />
        Currently, I’m maximizing for technical depth within Deep Learning, with the goal to get to its bleeding edge within the year.
        <br /><br />
        Recently, I’ve been curious about mechanistic interpretability & epistemology <span className='subbody'>(what is knowledge?)</span>, and <span className='subbody'>(will soon)</span> write more @ my blog, <em><a href = '/infinity'>Infinity</a></em>.
        <br /><br />
        I also <a href = 'https://www.strava.com/athletes/101676876'><em>run</em></a>.
        <br /><br />
        If you wanna chat, message me on <em><a href = 'https://x.com/vxnuaj'>X</a></em>.
        <br /><br />
        Alternatively, if you want to stay updated with what I’ve been working on, check out my <em><a href = 'https://github.com/vxnuaj'>GitHub</a></em> or <em><a href = 'https://vxnuaj.blog/s/adastra'>subscribe to my Substack</a></em>.
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
