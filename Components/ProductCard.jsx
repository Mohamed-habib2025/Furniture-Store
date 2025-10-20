import { addToCart, removeFromCart } from '@/redux/Slices/CartSlice'
import { addToWishlist, removeFromWishlist } from '@/redux/Slices/WishlistSlice'
import Image from 'next/image'
import React from 'react'
import toast from 'react-hot-toast'
import { FaCheck, FaHeart, FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const ProductCard = ({ id, image, text, price, category, inStock }) => {

  const dispatch = useDispatch()
  const cartitems = useSelector((state) => state.cart.items)
  const isIncart = cartitems.some((item) => item.id === id)

  const wishlistitems = useSelector((state) => state.wishlist.items)
  const isInwishlist = wishlistitems.some((item) => item.id === id)

  const numberPrice = typeof price === "string" ?
    parseFloat(price.replace("$", "")) || 0 : Number(price) || 0;

  const handleToggleCart = () => {
    if (isIncart) {
      dispatch(removeFromCart(id));
      toast.success("Removed from cart", {
        duration: 3000,
        position: "top-center",
        icon: <FaCheck className='text-white' />,
        style: {
          background: "#ef4444",
          color: "#ffffff",
          fontSize: "16px",
          fontWeight: 600,
          padding: "10px 20px",
          borderRadius: "6px",
          transition: "opacity .3s ease"
        }
      })
    } else {
      dispatch(addToCart({ id, image, text, price: numberPrice, quantity: 1, category, inStock }))
      toast.success("Successfully Added to cart", {
        duration: 3000,
        position: "top-center",
        icon: <FaCheck className='text-white' />,
        style: {
          background: "#22c55e",
          color: "#ffffff",
          fontSize: "16px",
          fontWeight: 600,
          padding: "10px 20px",
          borderRadius: "6px",
          transition: "opacity .3s ease"
        }
      })
    }
  }

  const handleToggleWishlist = () => {
    if (isInwishlist) {
      dispatch(removeFromWishlist(id));
      toast.success("Removed from wishlist", {
        duration: 3000,
        position: "top-center",
        icon: <FaCheck className='text-white' />,
        style: {
          background: "#ef4444",
          color: "#ffffff",
          fontSize: "16px",
          fontWeight: 600,
          padding: "10px 20px",
          borderRadius: "6px",
          transition: "opacity .3s ease"
        }
      })
    } else {
      dispatch(addToWishlist({ id, image, text, price: numberPrice, quantity: 1, category, inStock }))
      toast.success("Successfully Added to wishlist", {
        duration: 3000,
        position: "top-center",
        icon: <FaCheck className='text-white' />,
        style: {
          background: "#22c55e",
          color: "#ffffff",
          fontSize: "16px",
          fontWeight: 600,
          padding: "10px 20px",
          borderRadius: "6px",
          transition: "opacity .3s ease"
        }
      })
    }
  }

  return (
    <div className='bg-white rounded-lg shadow-md overflow-visible flex flex-col h-[280px]'>
      <div className='relative w-full h-[200px]'>
        <Image
          src={image}
          alt=''
          fill
          className='object-cover'
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className='text-lg font-semibold text-gray-800 mx-4 pt-1 py-3 m-0'>
        {text}
      </h3>
      <div className='flex items-center justify-between px-4 pt-0 pb-4 mt-0'>
        <span className='text-xl font-bold text-gray-700'>${numberPrice.toFixed(2)}</span>
        <div className='flex gap-3'>
          <FaHeart
            className={` cursor-pointer duration-200 ${isInwishlist ? "text-red-500" : "text-gray-600 hover:text-red-500"}`}
            onClick={handleToggleWishlist}
          />
          <FaShoppingCart
            className={`cursor-pointer duration-200 ${isIncart ? "text-green-400" : "text-gray-600 hover:text-green-400"}`}
            onClick={handleToggleCart}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
