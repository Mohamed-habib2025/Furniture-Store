import React from 'react'
import {
  CategoryFilters,
  PriceFilters,
  AvailabilityFilters,
  MaterialFilters,
  RoomTypeFilters,
  StyleFilters
} from "@/constants/filtersData";

const OptionsFilters = ({ filters, handleFilterChange }) => {

  return (
    <div className='space-y-6'>
      <div>
        <h4 className='text-lg font-medium text-gray-700'>Category</h4>
        {CategoryFilters.map((cat) => (
          <label key={cat} className='block mt-2'>
            <input type="checkbox" className='mr-2 cursor-pointer'
              checked={filters.category.includes(cat)}
              onChange={() => handleFilterChange("category", cat)}
            />
            {cat}
          </label>
        ))}
      </div>

      <div>
        <h4 className='text-lg font-medium text-gray-700'>Price Range</h4>
        {PriceFilters.map((rang) => (
          <label key={rang} className='block mt-2'>
            <input type="checkbox" className='mr-2 cursor-pointer'
              checked={filters.priceRange.includes(rang)}
              onChange={() => handleFilterChange("priceRange", rang)}
            />
            {rang}
          </label>
        ))}
      </div>

      <div>
        <h4 className='text-lg font-medium text-gray-700'>Availability</h4>
        {AvailabilityFilters.map((avil) => (
          <label key={avil} className='block mt-2'>
            <input type="checkbox" className='mr-2 cursor-pointer'
              checked={filters.availability.includes(avil)}
              onChange={() => handleFilterChange("availability", avil)}
            />
            {avil}
          </label>
        ))}
      </div>

      <div>
        <h4 className='text-lg font-medium text-gray-700'>Material</h4>
        {MaterialFilters.map((mat) => (
          <label key={mat} className='block mt-2'>
            <input type="checkbox" className='mr-2 cursor-pointer'
              checked={filters.material.includes(mat)}
              onChange={() => handleFilterChange("material", mat)}
            />
            {mat}
          </label>
        ))}
      </div>

      <div>
        <h4 className='text-lg font-medium text-gray-700'>Room Type</h4>
        {RoomTypeFilters.map((type) => (
          <label key={type} className='block mt-2'>
            <input type="checkbox" className='mr-2 cursor-pointer'
              checked={filters.roomType.includes(type)}
              onChange={() => handleFilterChange("roomType", type)}
            />
            {type}
          </label>
        ))}
      </div>

      <div>
        <h4 className='text-lg font-medium text-gray-700'>Style</h4>
        {StyleFilters.map((style) => (
          <label key={style} className='block mt-2'>
            <input type="checkbox" className='mr-2 cursor-pointer'
              checked={filters.style.includes(style)}
              onChange={() => handleFilterChange("style", style)}
            />
            {style}
          </label>
        ))}
      </div>

    </div>
  )
}

export default OptionsFilters
