import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/thoughts/utils'
import { baseUrl } from 'app/sitemap'
import BackArrow from 'app/components/BackArrow';
import 'styles/post.css'


export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/thoughts/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section className = 'post'> 
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/thoughts/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />

{post.metadata.image && (
  <div className="image-container">
  <img className = 'postImage'
    src={post.metadata.image}
    alt={post.metadata.title}
  />
</div>
)}
      <div className = 'backarrow'>
      <BackArrow/>
      </div>
      <h1 className="postTitle">
        {post.metadata.title}
      </h1>
      <p className="postDes">
          {post.metadata.summary}
      </p>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="postDate">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="postBody">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
