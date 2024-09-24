import BackArrow from 'app/components/BackArrow';
import { BookNotes } from 'app/components/books'
import 'styles/books.css'

export const metadata = {
  title: 'Infinity',
  description: 'https://vxnuaj.books'
}

export default function Page() {
  return (
    <section className = 'books'>
      <div className = 'booksimage'>
      </div>
      <div className = 'backarrow'>
      <BackArrow/>
      </div>
      <h1 className = 'heading'>reads</h1>
      <p className = 'desbooks'>a small portion of content i've read or am currently reading.<br/>this isn't bounded to books <span style={{fontSize: '5px'}}>(ignore the url, lol)</span>, but may mostly contain them.<br/></p>
      <BookNotes />
    </section>
  )
}
