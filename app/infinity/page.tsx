import BackArrow from 'app/components/BackArrow';
import { BlogPosts } from 'app/components/infinityposts'
import 'styles/blog.css'

export const metadata = {
  title: 'Infinity',
  description: 'https://vxnuaj.blog'
}

export default function Page() {
  return (
    <section className = 'blog'>
      <div className = 'blogimage'>
      </div>
      <div className = 'backarrow'>
      <BackArrow/>
      </div>
      <h1 className = 'heading'>infinity</h1>
      <p className = 'desblog'> personal explanations</p>
      <BlogPosts />
    </section>
  )
}