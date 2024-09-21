import BackArrow from 'app/components/BackArrow';
import { BlogPosts } from 'app/components/posts'
import 'styles/blog.css'

export const metadata = {
  title: 'Infinity',
  description: 'https://vxnuaj.blog'
}

export default function Page() {
  return (
    <section className = 'blog'>
      <img src = '/assets/tothemoon.png' alt = 'ToTheMoon!'></img> 
      <div className = 'backarrow'>
      <BackArrow/>
      </div>
      <h1 className = 'heading'>infinity</h1>
      <p className = 'desblog'>this features part of my blog, towards Neural Networks.<br/> some are more raw, unpolished thoughts & ideas. <br/>i write on different topics, @ my blog, <em><u><b><a href = 'https://vxnuaj.blog'>Infinity.</a></b></u></em></p>
      <BlogPosts />
    </section>
  )
}
