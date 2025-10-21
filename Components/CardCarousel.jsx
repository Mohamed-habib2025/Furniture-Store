"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 bg-white text-black shadow-md
      p-2 rounded-full hover:bg-[#a91f64] hover:text-white cursor-pointer transition-colors z-10 outline-none"
  >
    <FaArrowLeft size={15} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 bg-white text-black shadow-md
      p-2 rounded-full hover:bg-[#a91f64] hover:text-white cursor-pointer transition-colors z-10 outline-none"
  >
    <FaArrowRight size={15} />
  </button>
);

const CardCarousel = ({ title, cards }) => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width < 640) setSlidesToShow(1);
      else if (width < 768) setSlidesToShow(2);
      else if (width < 1024) setSlidesToShow(3);
      else setSlidesToShow(4);
    };

    updateSlides(); 
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full max-w-7xl mx-auto my-12 px-4">
      <div className="flex justify-between items-center mb-6 px-4">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
        <Link href="/products">
          <span className="text-lg text-gray-600 hover:text-[#a91f64] font-medium">View More</span>
        </Link>
      </div>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div className="p-2" key={index}>
            <ProductCard
              image={card.image}
              text={card.text}
              price={card.price}
              id={card.id}
              category={card.category}
              inStock={card.inStock}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
