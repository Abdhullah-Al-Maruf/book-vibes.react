import React from 'react';
import img from "/pngwing 1.png"
const Banner = () => {
    return (
        <div >
           <div className="hero bg-base-300 min-h-[50vh] container mx-auto rounded-xl mt-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={img}
      alt='banner'
    />
    <div className='space-y-3'>
      <h1 className="text-5xl font-bold ">Books to freshen up <br /> your bookshelf</h1>
      <button className="btn btn-success mt-2 text-white ">View The List</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Banner;