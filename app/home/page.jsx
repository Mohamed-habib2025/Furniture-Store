import Categories from '@/Components/Categories'
import NewArrivals from '@/Components/NewArrivals'
import SliderComponent from '@/Components/SliderComponent'
import TopSellers from '@/Components/TopSellers'
import React from 'react'

const HomePage = () => {
  return (
    <div className='w-full overflow-hidden'>
      <SliderComponent />
      <Categories />
      <NewArrivals />
      <TopSellers />
    </div>
  )
}

export default HomePage
