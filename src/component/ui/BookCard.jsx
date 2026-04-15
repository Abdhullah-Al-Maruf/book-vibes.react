import React from 'react';

const BookCard = ({book}) => {
const {bookName,author,image,tags,rating,category}=book;


    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
 <figure className="">
    <img
      src={image}
      alt="bookName"
      className="rounded-xl h-[400px] p-5 bg-base-200" />
  </figure>
  <div className="card-body">
    <div className='flex gap-2'>
 {
        tags.map(tag=> <div className="badge bg-green-200 text-green-600 font-semibold ">{tag}</div>)
    }
    </div>
   
     
    <h2 className="card-title font-bold text-2xl">
 {bookName}
    </h2>
    <p className='font-semibold '>By:{author}</p>
    <p className='mt-3 mb-3 border-b border-dashed'></p>
    <div className="card-actions justify-between">
      <div className="badge font-semibold">{category}</div>
      <div className="badge font-semibold ">{rating}</div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default BookCard;