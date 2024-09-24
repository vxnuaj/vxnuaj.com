import Link from 'next/link';
import { getBookNotes } from 'app/books/utils';

export function BookNotes() {
  let allBooks = getBookNotes();

  return (
    <div className = 'flex'>
      {allBooks
        .sort((a, b) => {
          if (new Date(a.metadata.read) > new Date(b.metadata.read)) {
            return -1;
          }
          return 1;
        })
        .map((book) => (
          <Link
            key={book.slug}
            href={`/books/${book.slug}`}
            className = 'bookLink'
            style={{textDecoration: 'none'}}
          >
            <div className = 'notesContainer'>
              {book.metadata.image ? (
                <img
                  src={book.metadata.image}
                  alt={book.metadata.title}
                  className="notesImage"
                />
              ) : (
                <div className="notesImage placeholder" />
              )}
            </div>
          </Link>
        ))}
    </div>
  );
}
