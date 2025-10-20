"use client"
import { addToCart } from '@/redux/Slices/CartSlice'
import { removeFromWishlist } from '@/redux/Slices/WishlistSlice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const WishlistPage = () => {

  const dispatch = useDispatch()
  const wishlist = useSelector((state) => state.wishlist.items)
  const cart = useSelector((state) => state.cart.items)

  const removeItem = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const addTocartHandler = (item) => {
    const cartItem = {
      ...item, quantity: 1,
    }
    dispatch(addToCart(cartItem));
  }

  return (
    <div className='w-full max-w-7xl mx-auto my-12 px-4'>
      <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>
        Wishlist
      </h1>
      <p className='text-gray-600 mb-6'>{wishlist.length} items in your wishlist </p>
      <div className='w-full'>
        <div className='bg-white rounded-lg shadow-md p-4 sm:p-6'>
          {wishlist.length === 0 ? (
            <div className='text-center py-6'>
              <p className='text-gray-700'>Your Wishlist is empty </p>
              <Link href="/products" className='mt-4 inline-block bg-[#a91f64] text-white px-4 py-2
                  rounded-md hover:bg-[#8a1b54] text-sm sm:text-base'
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <>
              <div className='hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr] gap-4
                  text-gray-700 font-semibold mb-4'>
                <div>Product</div>
                <div>Price</div>
                <div>Stock</div>
                <div>Actions</div>
              </div>

              {wishlist.map((item, index) => {
                const isInCart = cart.find(cartItem => cartItem.id === item.id);
                return (
                  <div key={index}
                    className={`flex flex-col sm:grid sm:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4
                    items-start sm:items-center py-4 ${index < wishlist.length - 1 ? "border-b border-gray-400" : ""
                      }`}
                  >
                    <div className='flex items-center gap-4 w-full'>
                      <div className='relative w-12 h-12 sm:w-16 sm:h-16 flex shrink-0'>
                        <Image src={item.image} alt='' fill style={{ objectFit: "cover" }} className='rounded' />
                      </div>

                      <div className='flex-1 sm:flex-none'>
                        <div className='flex items-center justify-between'>
                          <p className='text-gray-800 font-medium'>
                            {item.text}
                          </p>

                          <FaTrash className='text-gray-500 hover:text-red-500 cursor-pointer text-xs sm:hidden' />
                        </div>
                        <p className='text-sm text-gray-500'>
                          {item.category}
                        </p>
                      </div>
                    </div>

                    <div className='text-gray-700 sm:text-base flex flex-col w-full sm:block'>
                      <span className='sm:hidden font-medium text-gray-600'>Price:</span>$
                      {(typeof item.price === "number" && !isNaN(item.price)
                        ? item.price : 0).toFixed(2)}
                    </div>

                    <div className='text-gray-700 sm:text-base flex flex-col w-full sm:block'>
                      <span className='sm:hidden font-medium text-gray-600'>Stock:</span>
                      <span className={` sm:text-sm font-semibold ${item.inStock ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {item.inStock ? "in Stock" : "Out of Stock"}
                      </span>
                    </div>

                    <div className='flex flex-col gap-2 w-full sm:flex-row sm:items-center sm:gap-4'>
                      <div className='flex items-center gap-4'>
                        <button
                          disabled={!item.inStock || isInCart}
                          onClick={() => addTocartHandler(item)}
                          className='bg-[#a91f64] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md hover:bg-[#8a1b54]
                        disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base w-full sm:w-auto cursor-pointer'
                        >
                          {isInCart ? "Already in Cart" : "Add to Cart"}
                        </button>

                        <FaTrash className='hidden sm:block text-gray-500 hover:text-red-500 cursor-pointer '
                          onClick={() => removeItem(item.id)}
                        />
                      </div>
                    </div>

                  </div>
                )
              })

              }
            </>
          )
          }
        </div>
      </div>

    </div>
  )
}

export default WishlistPage
