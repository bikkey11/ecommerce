import React, { useEffect, useState } from 'react'
// import { Flashproducts } from '../Data/product'
import { FaAngleRight } from "react-icons/fa";
import { getflashProduct } from "../Utils/server";
import { useNavigate } from 'react-router-dom';








const FlashSale = () => {
    const [Flashproducts, setFlashProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getflashProduct().then((res) => {
            setFlashProducts(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])




    return (

        <div className='mx-10'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-Poppins font-bold text-indigo-900'>
                    Flash Zone
                </h1>
                <div className='flex gap-6 mx-2'>
                    <span className='text-lg text-red-700 font-light '>On Sale Now </span>
                    <span className='text-lg'>Ending in </span>
                </div>
                <div className='h-[2px] w-full bg-slate-300 my-4' />
                <div>
                    <div className='grid grid-cols-4 gap-3'>
                        {Flashproducts.map((product, index) => (
                            <div onClick={() => {
                                navigate(`/productDetail/${product.title}`)

                            }}

                                key={index} className='flex flex-col h-34 sm:h-44 overflow-hidden rounded-md hover:shadow-2xl hover:border-4 cursor-pointer justify-between'>
                                <img className='h-24 sm:h-32' src={product.thumbnail} alt="" />
                                <div className='flex flex-col justify-start items-start p-1'>
                                    <span className='text-xs text-blue-600 font-Poppins uppercase'>{product.title}</span>
                                    <div className='flex gap-2'>
                                        <span className='text-xs text-blue-800 font-Poppins font-bold'>$ {Math.ceil(product.price - (product.price * product.discountPercentage / 100))}</span>
                                        <span className='text-xs font-Poppins text-teal-500 line-through'>$ {product.price}</span>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
                <div className='flex justify-end items-center font-Poppins font-semibold text-red-600 gap-1 hover:underline-offset-2 hover:underline'>
                    <span className='  cursor-pointer '>Shop more</span>
                    <FaAngleRight />
                </div>

            </div>

        </div>
    )
}

export default FlashSale