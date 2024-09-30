import { notFound } from 'next/navigation';
import { baseUrl } from 'app/sitemap';
import BackArrow from 'app/components/BackArrow';
import { getBookNotes } from 'app/books/utils';
import 'styles/notes.css';

export async function generateStaticParams() {
  let books = getBookNotes();

  return books.map((book) => ({
    slug: book.slug,
  }));
}

export function generateMetadata({ params }) {
  let book = getBookNotes().find((book) => book.slug === params.slug);
  if (!book) {
    return;
  }

  let {
    title,
    read: publishedTime,
    summary: description,
    image,
    author,
  } = book.metadata;

  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'book',
      publishedTime,
      url: `${baseUrl}/books/${book.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
      authors: [
        {
          name: author,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: author, 
    },
  };
}

export default function Book({ params }) {
  let book = getBookNotes().find((book) => book.slug === params.slug);

  if (!book) {
    notFound();
  }

  return (
    <section className="notes">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Book',
            headline: book.metadata.title,
            datePublished: book.metadata.read,
            description: book.metadata.summary,
            image: book.metadata.image
              ? `${baseUrl}${book.metadata.image}`
              : `/og?title=${encodeURIComponent(book.metadata.title)}`,
            url: `${baseUrl}/books/${book.slug}`,
            author: {
              '@type': 'Person',
              name: book.metadata.author, 
            },
          }),
        }}
      />

      <div className="backarrow">
        <BackArrow />
      </div>
      <h1 className="notesTitle">{book.metadata.title}</h1>
      <p className="notesDes"><b>one-liner:</b> {book.metadata.summary}</p>
      <p className="notesAuthor"><b>author:</b> {book.metadata.author}</p>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="notesDate"><b>date read:</b> {book.metadata.read}</p>
      </div>
      <article className="notesBody">
        <p>{book.content}</p>
      </article>
    </section>
  );
}
