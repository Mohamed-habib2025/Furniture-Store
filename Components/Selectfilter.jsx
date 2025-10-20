import React from 'react';

const Selectfilter = ({ sortOrder, setSortOrder }) => {

  const handleSort = (order) => {
    setSortOrder(order);
  };

  return (
    <select
      className='border border-gray-300 rounded-md px-4 py-2 text-gray-700
      focus:outline-none focus:ring-2 focus:ring-[#a91f64] cursor-pointer'
      value={sortOrder}
      onChange={(e) => handleSort(e.target.value)}
    >
      <option value="default">Newest</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
      <option value="name">Name: A to Z</option>
    </select>
  );
};

export default Selectfilter;
