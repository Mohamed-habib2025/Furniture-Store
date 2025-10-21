"use client"
import React, { useState, useEffect } from "react";
import { products } from "../../data/data"
import ProductCard from '@/Components/ProductCard'
import BtnFilter from '@/Components/BtnFilter'
import OptionsFilters from '@/Components/OptionsFilters'
import Selectfilter from '@/Components/Selectfilter'
import "../globals.css"

const ProductsPage = () => {

  const [productsList, setProductsList] = useState(products);
  const [sortOrder, setSortOrder] = useState("default");

  const [filters, setfilters] = useState({
    category: [],
    priceRange: [],
    availability: [],
    material: [],
    roomType: [],
    style: []
  })

  const handleFilterChange = (filterType, value) => {
    setfilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value) ?
        prev[filterType].filter((v) => v !== value) :
        [...prev[filterType], value]
    }))
  }

  const priceRange = {
    "$0 - $100": (price) => price >= 0 && price <= 100,
    "$100 - $300": (price) => price >= 100 && price <= 300,
    "$300+": (price) => price > 300
  }

  useEffect(() => {

    const filtered = products.filter((product) => {
      return (
        (filters.category.length === 0 || filters.category.includes(product.category)) &&
        (filters.priceRange.length === 0 || filters.priceRange.some((range) => priceRange[range](product.price))) &&
        (filters.availability.length === 0 || filters.availability.includes(product.inStock ? "In Stock" : "Out of stock")) &&
        (filters.material.length === 0 || filters.material.includes(product.material)) &&
        (filters.roomType.length === 0 || filters.roomType.includes(product.roomType)) &&
        (filters.style.length === 0 || filters.style.includes(product.style))
      );
    });

    let sorted = [...filtered];
    if (sortOrder === "price-low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-high") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "name") {
      sorted.sort((a, b) => a.text.localeCompare(b.text));
    }

    setProductsList(sorted);
  }, [filters, sortOrder]);

  return (
    <div className='w-full max-w-7xl mx-auto my-5 px-4 max[774px]:my-8 max-[774px]:px-3'>
      <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-8 max-[774px]:text-xl 
          max-[774px]:mb-4 max-[774px]:top-0 max-[774px]:z-10 max-[774px]:pt-4'>
        Products
      </h1>

      <div className='flex flex-col md:flex-row gap-6 max-[774px]:gap-4'>
        <div className='hidden min-[774px]:block w-full md:w-1/4 bg-white rounded-lg shadow-md p-6'>
          <h3 className='text-xl font-semibold text-gray-800 mb-4'>
            Filter Options
          </h3>
          <OptionsFilters filters={filters} handleFilterChange={handleFilterChange} />

        </div>

        <div className='w-full md:w-3/4'>
          <div className='flex justify-between items-center mb-6 max-[774px]:mb-4'>
            <h2 className='text-xl font-semibold text-gray-800 max-[774px]:text-base'>
              Products List ({productsList.length})
            </h2>
            <div className='hidden min-[774px]:flex items-center gap-3'>
              <span className='text-gray-700 font-medium'>Sort By:</span>
              <Selectfilter sortOrder={sortOrder} setSortOrder={setSortOrder} />
            </div>
          </div>

          <div className='min-[774px]:hidden  bg-transparent z-10 p-2'>
            <div className='flex items-center justify-between gap-2'>
              <BtnFilter filters={filters} handleFilterChange={handleFilterChange} />

              <Selectfilter sortOrder={sortOrder} setSortOrder={setSortOrder} />
            </div>
          </div>


          <div className='grid grid-cols-1 gap-6 min-[774px]:grid-cols-2 md:grid-cols-3'>
            {productsList.length === 0 ? (
              <div className='col-span-full text-center py-10 text-gray-600 text-lg'>
                No products match your current filter options.
              </div>
            ) : (
              productsList.map((product) => (
                <div key={product.id} className='product-card'>
                  <ProductCard
                    id={product.id}
                    image={product.image}
                    text={product.text}
                    price={product.price}
                    category={product.category}
                    inStock={product.inStock}
                  />
                </div>
              ))
            )}
          </div>
        </div>

      </div>


    </div>
  )
}

export default ProductsPage
