"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaTruck, FaHeart, FaShoppingCart, FaTimes, FaBars } from "react-icons/fa"
import { useSelector } from 'react-redux'

const Navbar = () => {

  const [OpenMenu, setOpenMenu] = useState(false);
  const toglleMenu = () => setOpenMenu(!OpenMenu);

  const cartitems = useSelector((state) => state.cart.items)
  const cartitemscount = cartitems.reduce((total, item) => total + item.quantity, 0)

  const wishlistitems = useSelector((state) => state.wishlist.items)
  const wishlistitemscount = wishlistitems.length

  const Links = [
    { item: "Home", href: "/" },
    { item: "New Arrivals", href: "/#new-arrivals" },
    { item: "Top Sellers", href: "/#top-sellers" },
    { item: "Products", href: "/products" },
  ]

  return (
    <nav className='sticky top-0 min-[774px]:z-[9999] max-[774px]:z-10 bg-slate-50 px-6 py-4 flex items-center justify-between '>

      <h2 className="text-2xl font-bold">
        <span className="text-[#a91f64]">Furniture </span>
        <span className='text-gray-500 font-medium text-lg'>Store</span>
      </h2>

      <ul className='hidden md:flex gap-8 text-gray-700 font-medium'>
        {
          Links.map((link, index) => (
            <li key={index} className='hover:text-[#a01f64]'>
              <Link href={link.href}>
                {link.item}
              </Link>
            </li>
          ))
        }
      </ul>

      <div className='flex items-center gap-6 text-gray-700 text-xl'>

        <div className=' relative flex gap-3 md:gap-6 '>
          <FaTruck className='hover:text-[#a01f64]' />
          <Link href='/wishlist' className='relative'>
            <FaHeart className='hover:text-[#a01f64]' />
            {wishlistitemscount > 0 && <span
              className='absolute -top-3 -right-4 text-xs text-white bg-[#a91f64] rounded-full px-1.5 py-0.5'
            >
              {wishlistitemscount}
            </span>}
          </Link>
          <Link href='/cart'>
            <FaShoppingCart className='hover:text-[#a01f64]' />
            {cartitemscount > 0 && <span
              className='absolute -top-3 -right-4 text-xs text-white bg-[#a91f64] rounded-full px-1.5 py-0.5'
            >
              {cartitemscount}
            </span>}
          </Link>
        </div>

        <div className='md:hidden'>
          <button onClick={toglleMenu}>
            {OpenMenu ? (
              <FaTimes className='text-2xl hover:text-[#a91f64] cursor-pointer' />
            ) : (
              <FaBars className='text-2xl hover:text-[#a91f64] cursor-pointer' />
            )}
          </button>
        </div>
      </div>

      {OpenMenu && (
        <ul className='absolute top-full left-0 w-full bg-white flex flex-col items-center gap-4 py-4 text-gray-700 font-medium md:hidden shadow-md duration-300'>
          {
            Links.map((link, index) => (
              <li key={index} className='hover:text-[#a01f64]'>
                <Link href={link.href} onClick={toglleMenu}>
                  {link.item}
                </Link>
              </li>
            ))
          }
        </ul>
      )}

    </nav>
  )
}

export default Navbar
