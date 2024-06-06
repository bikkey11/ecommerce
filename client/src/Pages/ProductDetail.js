import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import { FaAngleRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt, FaMinus, FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getProductById } from "../Utils/server";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { title } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getProductById(title).then((res) => {
      setProduct(res.data);
      setImage(res.data.thumbnail);
    });
  }, []);

  const [image, setImage] = useState();
  const [quantity, setQuantity] = useState(2);

  // fo rating logic
  const fullStars = Math.floor(product.rating);
  const starArr = [];

  for (let i = 1; i <= fullStars; i++) {
    starArr.push(1);
  }
  const partialStar = product.rating - fullStars;
  starArr.push(partialStar);

  const quantityInc = () => {
    if(quantity<product.stock){
    setQuantity(quantity + 1);

    }
  }
  const quantitydec = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <>
      <NavBar />
      <div className="m-6 px-6">
        <div className="flex items-center text-gray-600 text-sm font-Poppins gap-2 ">
          <span className="cursor-pointer hover:text-base">
            {product.category}
          </span>
          {product.brand ? (
            <>
              <FaAngleRight />
              <span className="cursor-pointer hover:text-base">
                {product.brand}
              </span>
            </>
          ) : (
            <></>
          )}
          <FaAngleRight />
          <span className="cursor-pointer hover:text-base">
            {product.title}
          </span>
        </div>
        <div className="flex justify-center gap-8 ">
          <div>
            <img src={image} alt="" />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-base font-Poppins text-teal-700">
              {product.title}
            </span>
            <div className="flex text-red-600 items-center gap-1">
              {starArr.map((star,index) => {
                if (star < 1) {
                  return (
                    <div key={index}>
                      <FaStarHalfAlt />
                    </div>
                  );
                }
                return (
                  <div>
                    <FaStar />
                  </div>
                );
              })}
              <span className="px-2">{product.rating}</span>
            </div>
            <div className="flex gap-1">
              <span className="font-Montserrat text-xs font-bold">
                Brand: {product.brand}
              </span>
              <div className="w-[1px] bg-gray-500 h-4"></div>
              <span className="font-Montserrat text-xs font-bold cursor-pointer">
                More {product.category} from {product.brand}
              </span>
            </div>
            <div>
              <h2 className="font-Montserrat text-sm font-bold">
                Description: {product.description}{" "}
              </h2>
            </div>
            <div className="flex items-center">
              <h2 className="font-Montserrat text-sm font-bold">Total Price:</h2>
              <span className=" font-Poppins px-2 text-sm text-red-500">$ {Math.floor((quantity * product.price) - (product.discountPercentage / 100) * product.price)}</span>
              <span className="line-through font-Poppins px-2 text-xs text-red-300">$ {quantity * product.price}</span>
            </div>
            <div className="flex justify-between pt-4">
              <div className="flex items-center">
                <FaMinus onClick={quantitydec}
                 className="cursor-pointer p-1 bg-red-400 text-slate-300"></FaMinus>
                <span className=" font-Poppins px-2">{quantity}</span>
                <FaPlus onClick={quantityInc}
                className="cursor-pointer p-1 bg-red-400 text-slate-300"></FaPlus>
              </div>
              <div
                onClick={() => {
                  dispatch(addToCart({ product, quantity }));
                }}
                className="bg-red-500 cursor-pointer rounded-full py-1 px-2 text-sm font-Poppins text-slate-300 hover:text-slate-400 hover:bg-red-600 "
              >
                Add to Cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
