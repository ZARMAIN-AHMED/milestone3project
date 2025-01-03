import Image from 'next/image';
import React from 'react';

function Carousl() {
  return (
    <div>
      {/* Carousel Section */}
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Image
            height={600}
            width={2000}
            src="/womens.jpg"
            className="w-full"
            alt="Women's Fashion"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image
            height={600}
            width={2000}
            src="/mens.jpg"
            className="w-full"
            alt="Men's Fashion"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image
            height={600}
            width={2000}
            src="/3.jpg"
            className="w-full"
            alt="Accessories"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image
            height={600}
            width={2000}
            src="/4.jpg"
            className="w-full"
            alt="Seasonal Collection"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
     
    </div>
  );
}

export default Carousl;
