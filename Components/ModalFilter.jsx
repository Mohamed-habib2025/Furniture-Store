import React from "react";
import { FaTimes } from "react-icons/fa";
import {
  CategoryFilters,
  PriceFilters,
  AvailabilityFilters,
  MaterialFilters,
  RoomTypeFilters,
  StyleFilters
} from "@/constants/filtersData";

const ModalFilter = ({ setOpenModal, filters, handleFilterChange }) => {
  const filterSections = [
    { title: "Category", type: "category", items: CategoryFilters },
    { title: "Price Range", type: "priceRange", items: PriceFilters },
    { title: "Availability", type: "availability", items: AvailabilityFilters },
    { title: "Material", type: "material", items: MaterialFilters },
    { title: "Room Type", type: "roomType", items: RoomTypeFilters },
    { title: "Style", type: "style", items: StyleFilters },
  ];

  return (
    <div
      onClick={() => setOpenModal(false)}
      className="fixed inset-0 bg-gray-900/70 z-50 flex items-center justify-center p-4 min-[774px]:hidden"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg px-6 w-full max-w-md max-h-[80vh] overflow-y-auto shadow-lg z-30"
      >
        <div className=" sticky top-0 bg-white flex items-center justify-between py-4">
          <h3 className="text-xl font-semibold text-gray-800 max-[774px]:text-lg">
            Filters
          </h3>
          <button
            onClick={() => setOpenModal(false)}
            className="text-gray-600 hover:text-[#a91f64] cursor-pointer"
          >
            <FaTimes />
          </button>
        </div>

        <div className="space-y-6 max-[774px]:space-y-4">
          {filterSections.map(({ title, type, items }) => (
            <div key={title}>
              <h4 className="text-base font-medium text-gray-700 max-[774px]:text-sm">
                {title}
              </h4>
              {items.map((item) => (
                <label
                  key={item}
                  className="flex items-center mt-2 text-base max-[774px]:text-sm"
                >
                  <input
                    type="checkbox"
                    className="mr-2 h-4 w-4 cursor-pointer"
                    checked={filters[type].includes(item)}
                    onChange={() => handleFilterChange(type, item)}
                  />
                  {item}
                </label>
              ))}
            </div>
          ))}
        </div>

        <div className="sticky bottom-0 bg-white w-full">
          <button
            onClick={() => setOpenModal(false)}
            className="my-6 w-full bg-[#a91f64] text-white px-4 py-2 rounded-md text-base font-medium max-[774px]:text-sm cursor-pointer"
          >
            Apply Filters
          </button>
        </div>

      </div>
    </div>
  );
};

export default ModalFilter;
