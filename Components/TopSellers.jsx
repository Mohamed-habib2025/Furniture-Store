import React from 'react'
import { products } from "../data/data"
import CardCarousel from './CardCarousel'


const TopSellers = () => {

  const cards = products.slice(4, 12).map((item) => ({
    image: item.image,
    text: item.text,
    price: `$${item.price}`,
    id: item.id,
    category: item.category,
    inStock: item.inStock,
  }))


  return (
    <section id="top-sellers">
      <CardCarousel title="Top Sellers" cards={cards} />
    </section>
  )
}

export default TopSellers
