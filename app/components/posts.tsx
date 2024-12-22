import Link from 'next/link';
import { formatDate, getBlogPosts } from 'app/thoughts/utils';

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 blogLink"
            href={`/blog/${post.slug}`}
            style={{ textDecoration: 'none' }}
          >
            <div className="w-full flex flex-col md:flex-row items-start space-x-0 md:space-x-2">
              {post.metadata.image ? (
                <img
                  src={post.metadata.image}
                  alt={post.metadata.title}
                  className="postsImage hidden md:block"
                />
              ) : (
                <div className="postsImage placeholder" />
              )}
              <div className="postsContainer">
                <p className="postsTitle">{post.metadata.title}</p>
                <p className="postsDes">{post.metadata.summary}</p>
                <p className="postsDate">{formatDate(post.metadata.publishedAt, false)}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
