import React, { use } from 'react';
import BookCard from '../ui/BookCard';

const promise =fetch("/booksData.json").then(res=>res.json())

const Allbooks = () => {
  const books=use(promise)
  console.log(books);
  return (
    <div className='grid  mt-10 md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto'>
      {
        books.map(book => <  BookCard key={book.bookId} book={book}/>)
      }
    </div>
  );
};

export default Allbooks;