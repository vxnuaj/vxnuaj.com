import BackArrow from 'app/components/BackArrow';
import 'styles/now.css'

export const metadata = {
  title: 'Infinity',
  description: 'https://vxnuaj.blog'
}

export default function Page() {
  return (
    <section className = 'now'>
      <div className='backarrow'>
      <BackArrow/>
      </div>
      <h1 className = 'heading'> now</h1>
      <p className = 'nowDes'> Last Updated: 12/11/2024 @ 4:46 AM </p>
      <div className='nowBody'>
      <p>Currently, I'm based in San Francisco. </p>
      <p>I'm on a gap year, deferred from UC Davis.</p>
      <br/>
      <p>I'm working on <a href = 'https://en.wikipedia.org/wiki/Deep_learning'>deep learning</a> and understanding <a href = 'https://en.wikipedia.org/wiki/Natural_language_processing'>natural language processing</a> on a deeper level, while also computing lots of <a href = 'https://en.wikipedia.org/wiki/Multivariable_calculus'>∂'s </a>. I occasionally write about related topics <a href = 'https://vxnuaj.github.io'>here</a>.</p>
      <br/>
      <p> I also <a href = 'https://www.strava.com/athletes/101676876'> run a lot</a> (when I'm not injured), but I'm not training for anything -- maybe I will soon. If you wanna go on a long run sometime (15+ mi.), <a href = 'x.com/vxnuaj'>let me know.</a></p>      
      <br/>
      <p> I'll occasionally update this, but don't expect too much. <br/> Perhaps check me out <a href = 'https://x.com/vxnuaj'>here?</a></p>
      </div>
    </section>
  )
}