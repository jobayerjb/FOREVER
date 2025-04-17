import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
      
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };














  useEffect(() => {
    applyFilter();
  }, [category, subCategory, products]); // Add 'products' to avoid stale state issues

  useEffect(() => {
    setFilterProducts(products);
  }, []);



  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter options */}

      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer  gap-2"
        >
          FILTERS
          <img
            className={`h-4 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/*  category filter */}
        <div
          className={`border border-grey-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIS</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700 ">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 "
                value={"Men"}
                onChange={toggleCategory}
              />
              MEN
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 "
                value={"Women"}
                onChange={toggleCategory}
              />
              WOMEN
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 "
                value={"Kids"}
                onChange={toggleCategory}
              />
              KIDS
            </p>
          </div>
        </div>
        {/* sub category filter */}
        <div
          className={`border border-grey-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700 ">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 "
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              TOPWEAR
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 "
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              BOTTOMWEAR
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 "
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />
              WINTERWEAR
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONs"}></Title>

          {/* product sort*/}
          <select className="border-2 border-grey-300 text-sm px-2">
            <option value="relevent">sort by: relevent</option>
            <option value="low-high">sort by: low to high</option>
            <option value="high-low">sort by: high to low</option>
          </select>
        </div>
        {/* product to show */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-2">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              description={item.description}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
