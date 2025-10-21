import React from 'react'
import { products } from "../data/data"
import CardCarousel from './CardCarousel'

const NewArrivals = () => {

  const cards = products.slice(0, 8).map((item) => ({
    image: item.image,
    text: item.text,
    price: `$${item.price}`,
    id: item.id,
    category: item.category,
    inStock: item.inStock,
  }))


  return (
    <section id="new-arrivals">
      <CardCarousel title="New Arrivals" cards={cards} />
    </section>
  )
}

export default NewArrivals
