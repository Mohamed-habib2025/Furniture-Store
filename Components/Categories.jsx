"use client"
import React from 'react'
import { categories } from "../public/data/data.json"
import Image from 'next/image'
import Link from 'next/link'

const Categories = () => {
  return (
    <div className='mx-auto my-7 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3'>
      {categories.map((category, index) => (
        <div key={index} className='group relative flex h-80 w-full flex-col justify-end overflow-hidden rounded-2xl'>
          <Image
            src={category.image}
            alt=''
            fill
            style={{ objectFit: "cover" }}
            className='z-0 transition-transform duration-300 group-hover:scale-110'
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className='absolute inset-0 bg-black/30'></div>
          <div className='relative z-10 pb-6 text-center'>
            <Link href="/products">
              <button
                className='rounded-full bg-white px-6 py-2 text-sm font-semibold 
                text-black shadow-md cursor-pointer hover:bg-[#a91f64] hover:text-white duration-300'
              >
                {category.buttonText}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Categories
