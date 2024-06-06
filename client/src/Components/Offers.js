import React, { useState, useEffect } from "react";
import { BiSolidOffer } from "react-icons/bi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import { getOfferProduct } from "../Utils/server";
import { useNavigate } from "react-router-dom";

const offers = [
  "https://isnr.org/wp-content/uploads/2017/11/blog-002.png",
  "https://png.pngtree.com/png-vector/20200917/ourmid/pngtree-simple-combo-offer-design-for-promotion-png-image_2347366.jpg",
  "https://png.pngtree.com/png-clipart/20230211/original/pngtree-free-delivery-truck-icon-png-image_8951758.png",
  "https://cdn-icons-png.flaticon.com/512/1041/1041885.png",
  "https://png.pngtree.com/png-clipart/20221216/original/pngtree-bogo-buy-one-get-one-free-sale-tag-sticker-design-png-image_8750154.png",
];

const OffersZone = () => {
  const [Offerzone, setOfferzone] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getOfferProduct()
      .then((res) => {
        setOfferzone(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="mt-4 mx-10 relative">
        <div className="text-indigo-900 font-Poppins">
          <div className=" flex  items-center gap-4  font-extrabold text-2xl ">
            <h1>Offer zone</h1>
            <BiSolidOffer className="text-red-600"></BiSolidOffer>
          </div>
          <p className="mt-2">Checkout the iconn for Offers</p>
        </div>

        <div className="review-container flex relative gap-4 overflow-hidden scroll-smooth cursor-pointer items-center justify-center mx-16">
          {offers.map((url, index) => (
            <div key={index} className=" m-2">
              <img
                src={url}
                className="w-48 h-[120px]  rounded-lg p-2"
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="absolute top-16 inset-0 flex items-center justify-between p-4">
          <AiOutlineLeft className="bg-gray-300 cursor-pointer hover:bg-white rounded-full p-1 h-5 w-5"></AiOutlineLeft>
          <AiOutlineRight className="bg-gray-300 cursor-pointer hover:bg-white rounded-full p-1 h-5 w-5"></AiOutlineRight>
        </div>
      </div>

      <div className="h-[2px] w-full bg-slate-300" />

      <div className="mx-10 my-4">
        <div className="grid grid-cols-4 gap-3">
          {Offerzone.map((product, index) => (
            <div
              onClick={() => {
                navigate(`/productDetail/${product.title}`);
              }}
              key={index}
              className="flex flex-col h-34 sm:h-56 overflow-hidden rounded-md hover:shadow-2xl hover:border-4 cursor-pointer justify-between"
            >
              <img className="h-24 sm:h-44" src={product.thumbnail} alt="" />
              <div className="flex flex-col justify-start items-start p-1">
                <span className="text-xs text-blue-600 font-Poppins uppercase">
                  {product.title}
                </span>
                <div className="flex gap-2">
                  <span className="text-xs text-blue-800 font-Poppins font-bold">
                    ${" "}
                    {Math.ceil(
                      product.price -
                        (product.price * product.discountPercentage) / 100
                    )}
                  </span>
                  <span className="text-xs font-Poppins text-teal-500 line-through">
                    $ {product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-3 flex justify-end items-center font-Poppins font-semibold text-red-600 gap-1 hover:underline-offset-2 hover:underline">
        <span className="  cursor-pointer ">Shop more</span>
        <FaAngleRight />
      </div>
    </div>
  );
};

export default OffersZone;
