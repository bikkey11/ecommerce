import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { BiSolidDiscount, BiLogIn } from "react-icons/bi";
import { SiBrandfolder, SiGnuprivacyguard } from "react-icons/si";
import { LiaStoreSolid } from "react-icons/lia";
import { TbCategory } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const cartProducts = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gray-200">
      <div className="flex flex-col mx-14 px-10 py-3 gap-4">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <h1 className="font-Montserrat text-xs font-extrabold">
              Connect with us
            </h1>
            <div className="flex gap-1 text-xs">
              <FaFacebookF className="cursor-pointer"></FaFacebookF>
              <FaInstagram className="cursor-pointer"></FaInstagram>
              <FaTwitter className="cursor-pointer"></FaTwitter>
            </div>
          </div>
          <div className="flex font-Montserrat font-bold text-xs gap-4">
            <span className="cursor-pointer hover:text-sm">Merchant Login</span>
            <div className="bg-slate-700 h-5 w-[1px] "></div>
            <span className="cursor-pointer hover:text-sm">
              Sell on DhamakaDeal
            </span>
            <div className="bg-slate-700 h-5 w-[1px] "></div>
            <span className="cursor-pointer hover:text-sm">Support</span>
            <div className="bg-slate-700 h-5 w-[1px] "></div>
            <span className="cursor-pointer hover:text-sm">Order Tracking</span>
          </div>
        </div>
        <div className="flex justify-between items-center px-5">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="flex flex-col cursor-pointer"
          >
            <h1 className="font-bold font-Poppins text-2xl">PuranoBazar.com</h1>
            <span className="font-Montserrat text-xs font-black">
              Best choice Best Prices.
            </span>
          </div>
          <form action="">
            <div className="relative flex items-center text-gray-400 focus-within:text-gray-600 focus-within:font-Roborto ">
              <FaSearch className="w-3 h-3 absolute ml-3 " />
              <input
                type="text"
                className="ring-2 ring-blue-200 focus:ring-blue-300 rounded-2xl pl-10 pr-3 py-2 placeholder:font-Montserrat placeholder:text-sm placeholder:font-bold outline-none w-[760px]"
                placeholder="Search product here "
              />
            </div>
          </form>
          <div className="flex items-center gap-1 text-gray-700 cursor-pointer">
            <span className="font-light ">Cart</span>
            <div
              className="relative"
              onClick={() => {
                navigate("/cart");
              }}
            >
              <FaShoppingCart className="w-5 h-5" />
              <div className="h-5 w-5 bg-gray-300 rounded-full absolute -top-[9px] left-[7px] flex items-center justify-center text-xs  ">
                {cartProducts.cartTotalQuantity}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-6 text-gray-600 font-thin ml-[95px] ">
          <div className="flex items-center gap-2 cursor-pointer">
            <BiSolidDiscount />
            <span>Offers</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <SiBrandfolder />
            <span>Brands</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <LiaStoreSolid />
            <span>Stores</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <TbCategory />
            <span>Categories</span>
          </div>
         {user.isLoggedIn===false?(
             <div className="flex items-center gap-3">
             <div
               onClick={() => {
                 navigate("/signUp");
               }}
               className="flex items-center gap-2 cursor-pointer"
             >
               <SiGnuprivacyguard />
               <span>Sign Up</span>
             </div>
             <div className="bg-slate-700 h-6 w-[1px] "></div>
 
             <div
               onClick={() => {
                 navigate("/signIn");
               }}
               className="flex items-center gap-2 cursor-pointer"
             >
               <BiLogIn />
               <span>Sign In</span>
             </div>
           </div>
         ):(
            <div onClick={()=>navigate("/profile")}
            className="text-slate-200 h-5 w-5 bg-slate-400 flex justify-center items-center rounded-full cursor-pointer">{user.user.FirstName[0]}</div>
         )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
