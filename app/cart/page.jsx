"use client"
import { removeFromCart, updateQuantity } from '@/redux/Slices/CartSlice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const CartPage = () => {

  const dispatch = useDispatch()
  const cartitems = useSelector((state) => state.cart.items)

  const handleUpdateQuantity = (id, delta) => {
    const item = cartitems.find((item) => item.id === id)
    if (item) {
      const newQuantity = Math.max(1, item.quantity + delta);
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  }

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  }

  const subtototal = cartitems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  const totalItem = cartitems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className='w-full max-w-7xl mx-auto my-12 px-4'>
      <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>
        Shopping Bag
      </h1>
      <p className='text-gray-600 mb-6'>{totalItem} item in the bag </p>
      <div className='flex flex-col lg:flex-row gap-6'>

        <div className='w-full lg:w-2/3'>
          <div className='bg-white rounded-lg shadow-md p-4 sm:p-6'>
            {cartitems.length === 0 ? (
              <div className='text-center py-4'>
                <p className='text-gray-700'>Your cart is empty</p>
                <Link href="/products" className='mt-4 inline-block bg-[#a91f64] text-white px-4 py-2
                  rounded-md hover:bg-[#8a1b54] text-sm sm:text-base'
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <>
                <div className='hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4
                  text-gray-700 font-semibold mb-4
                '>
                  <div>Product</div>
                  <div>Price</div>
                  <div>Quantity</div>
                  <div>Total Price</div>
                </div>

                {cartitems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`flex flex-col sm:grid sm:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4
                      items-start sm:items-center py-4 ${index < cartitems.length - 1 ? "border-b border-gray-400" : ""
                      }`}
                  >
                    <div className='flex items-center gap-4 w-full'>
                      <div className='relative w-12 h-12 sm:w-16 sm:h-16 flex shrink-0'>
                        <Image src={item.image} alt='' fill style={{ objectFit: "cover" }} className='rounded' />
                      </div>

                      <div className='flex-1'>
                        <p className='text-gray-800 font-medium text-sm sm:text-base'>
                          {item.text}
                        </p>
                        <p className='text-xs sm:text-sm text-gray-500'>{item.category}</p>
                      </div>
                    </div>

                    <div className='text-gray-700 text-sm sm:text-base flex justify-between w-full sm:block pl-2.5'>
                      <span className='sm:hidden font-semibold'>Price:</span>$
                      {item.price.toFixed(2)}
                    </div>

                    <div className='flex items-center w-full sm:w-auto'>
                      <span className='sm:hidden font-semibold mr-44 sm:mr-2'>
                        Quntity
                      </span>

                      <button className='w-6 h-6 pb-1 flex items-center justify-center bg-transparent border-2 border-gray-400
                      rounded-lg hover:bg-gray-300 text-black text-2xl cursor-pointer'
                        onClick={() => handleUpdateQuantity(item.id, -1)}
                      >
                        -
                      </button>

                      <span className='w-7 sm:w-8 text-center text-sm sm:text-base'>
                        {item.quantity}
                      </span>

                      <button className='w-6 h-6 pb-1 flex items-center justify-center bg-transparent border-2 border-gray-400
                      rounded-lg hover:bg-gray-300 text-black text-xl cursor-pointer'
                        onClick={() => handleUpdateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>

                    <div className='text-gray-700 text-sm sm:text-base flex justify-between w-full sm:block pl-4'>
                      <span className='sm:hidden font-semibold'>Total: </span>$
                      {(item.price * item.quantity).toFixed(2)}
                    </div>

                    <div className='self-center sm:select-auto'>
                      <FaTrash
                        className='text-gray-500 hover:text-red-500 cursor-pointer text-xs sm:text-sm'
                        onClick={() => removeItem(item.id)}
                      />
                    </div>

                  </div>
                ))}
              </>
            )
            }
          </div>
        </div>

        <div className='w-full lg:w-1/3'>
          <div className='bg-white rounded-lg shadow-md p-4 sm:p-6'>
            <h3 className='text-xl font-semibold text-gray-800 mb-4'>
              Cart Summary
            </h3>

            <div className='mb-6'>
              <label className='block text-gray-700 font-medium mb-2'>
                Coupon code
              </label>
              <div className='flex gap-2'>
                <input type="text" placeholder='Enter Code'
                  className='w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base text-gray-700
                    focus:outline-none ring-0 '
                />
                <button className='bg-[#a91f64] text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md hover:bg-[#8a1b54] text-sm cursor-pointer'>
                  Apply
                </button>
              </div>
            </div>

            <div className='border-t pt-4'>
              <div className='flex justify-between text-gray-700 mb-2 text-sm sm:text-base'>
                <span>Total</span>
                <span>${subtototal.toFixed(2)}</span>
              </div>
              <button
                className='w-full mt-4 bg-[#a91f64] text-white px-4 py-2 rounded-md hover:bg-[#8a1b54] cursor-pointer
                disabled:bg-gray-300 disabled:cursor-not-allowed text-sm sm:text-base'
                disabled={cartitems.length === 0}
              >
                Procced To checkout
              </button>
            </div>

          </div>
        </div>


      </div>
    </div>
  )
}

export default CartPage
