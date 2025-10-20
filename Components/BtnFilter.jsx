"use client"
import React, { useState } from 'react'
import ModalFilter from './ModalFilter'

const BtnFilter = ({ filters, handleFilterChange, setfilters }) => {
  const [OpenModal, setOpenModal] = useState(false);
  

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="bg-[#a91f64] text-white px-4 py-2 rounded-md text-sm font-medium flex-1 cursor-pointer"
      >
        Filters
      </button>

      {OpenModal && (
        <ModalFilter
          setOpenModal={setOpenModal}
          filters={filters}
          setfilters={setfilters}
          handleFilterChange={handleFilterChange}
        />
      )}
    </>
  );
};

export default BtnFilter;
