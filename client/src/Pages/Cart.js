import React from "react";
import NavBar from "../Components/NavBar";
import { useSelector } from "react-redux";
import { FaMinus, FaPlus, FaRegHeart, Faremove } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
const Cart = () => {
  const state = useSelector((state) => state.cart);
  const cartItems = state.items;
  const cartTotalQuantity = state.cartTotalQuantity;
  return (
    <>
      <NavBar />
      <div className="flex  ml-[100px] my-5 ">
        <div className="flex flex-col gap-5 mt-5">
          {cartItems.map((item, index) => (
            <div key={index} className="flex gap-16">
              <div className="flex gap-5">
                <input type="checkbox" value="" className="mx-2" />
                <img className="w-20 h-24" src={item.product.thumbnail} alt="" />
              </div>
              <div className="font-Poppins text-xs flex flex-col gap-2 w-[280px] ">
                <span>{item.product.title} | {item.product.description}</span>
                <span className="text-slate-500">{item.product.category} | {item.product.brand ? item.product.brand : "No brand"}</span>
              </div>
              <div className="font-Poppins text-xs flex flex-col gap-1 " >
                <span className="text-red-500 text-sm">${Math.floor(item.product.price - (item.product.discountPercentage / 100) * item.product.price)}</span>
                <span className="line-through text-slate-400">${item.product.price}</span>
                <span>-{item.product.discountPercentage}%</span>
                <div className="flex gap-3">
                  <FaRegHeart className="cursor-pointer text-red-600 hover:bg-slate-400 p-1 text-lg" />
                  <MdDelete className="cursor-pointer text-slate-500 hover:bg-slate-400 p-1 text-lg" />
                </div>
              </div>
              <div className="flex px-3 gap-3 justify-center text-lg text-slate-500">
                <FaMinus className="hover:bg-slate-300 p-1 cursor-pointer" />
                <span className="text-slate-700 text-sm">{item.quantity}</span>
                <FaPlus className="hover:bg-slate-300 p-1 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
        <div className="ml-5 pl-10">
          <div className="flex flex-col gap-4 ">
            <h1 className=" text-lg font-semibold font-Poppins text-slate-800">Order Summary</h1>
            <div className="flex text-sm font-Poppins gap-10 text-slate-500">
              <span>Subtotal ({cartTotalQuantity} items)</span>
              <span>$ 1230</span>
            </div>
            <div className="flex text-sm font-Poppins gap-10 text-slate-500">
              <span>Shipping Fee ({cartTotalQuantity} items)</span>
              <span>$ 10</span>
            </div>
            <div className="flex text-sm font-Poppins gap-10 text-slate-500">
              <span>Shipping Fee Discount ({cartTotalQuantity} items)</span>
              <span>-$ 10</span>
            </div>

            <div className="flex gap-3">
            <input type="text" id="last_name" className="focus:text-slate-700 focus:font-Poppins font-Poppins text-slate-600 outline-none  border border-gray-300  text-sm rounded-lg block w-full p-2 " placeholder="Enter Voucher" required/>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800   text-sm px-5 py-2 ">APPLY</button>
            </div>
            <div className="flex text-sm font-Poppins gap-10 text-slate-500">
              <span>Total</span>
              <span>$ 10</span>
            </div>
            <button type="button" class="text-white bg-orange-600 hover:bg-orange-700   text-sm px-5 py-2 ">PROCEED TO CHECKOUT</button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
