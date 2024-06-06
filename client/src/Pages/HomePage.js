import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import Offers from "../Images/Offers.jpg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import Review from '../Components/Review';
import OffersZone from '../Components/Offers';
import FlashSale from '../Components/FlashSale';
import WhatsHot from '../Components/WhatsHot';
import NewArrival from '../Components/NewArrival';
import Footer from '../Components/Footer';

const images = [
  "https://img.freepik.com/free-vector/black-friday-sale-banner-with-discount-offer-details_1017-41262.jpg?size=626&ext=jpg",
  "https://images.livemint.com/img/2022/03/05/1600x900/iPhone_13_1646469167438_1646469167644.jpg",
  "https://www.samsungplaza.com.np/public/blog/DB6299423DB1D60-Samsung-dashain%20offer.png"
]
const popularBrands = [
  "https://www.freepnglogos.com/uploads/classic-samsung-logo-png-0.png",
  "https://1000logos.net/wp-content/uploads/2018/10/Xiaomi-Logo-2019.png",
  "https://www.newbusinessage.com/img/news/20171206012846_GoldStar_logo%20(1).jpg",
  "https://static.vecteezy.com/system/resources/previews/020/927/489/non_2x/infinix-brand-logo-phone-symbol-name-black-design-china-mobile-illustration-free-vector.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/91/Realme_logo.png",
  "https://download.logo.wine/logo/Dell_Technologies/Dell_Technologies-Logo.wine.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Nothing_Logo.webp/320px-Nothing_Logo.webp.png",
  "https://1000logos.net/wp-content/uploads/2016/09/Acer-Logo.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5ja6_iZHG_DaRbu4kaDjbh35ju79htyh4uEvysAbrQ&s",
  "https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png",
  "https://1000logos.net/wp-content/uploads/2018/10/Xiaomi-Logo-2019.png",




]

const HomePage = () => {
  const [curr, SetCurr] = useState(1);

  const prev = () => {
    SetCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1))
  }

  const next = () => {
    SetCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1))
  }


  const Carosel = ({ image, autoSlideInterval = 3000 }) => {

    useEffect(() => {
      const slideInterval = setInterval(next, autoSlideInterval)
      return () => clearInterval(slideInterval)
    }, [])

    return (
      <div className='relative'>
        <img className='w-[1280px] h-[480px] object-fill ' src={image} alt="" />
        <div className='absolute inset-0 flex items-center justify-between p-4'>
          <AiOutlineLeft onClick={prev} className='bg-gray-300 cursor-pointer hover:bg-white rounded-full p-1 h-5 w-5'></AiOutlineLeft>
          <AiOutlineRight onClick={next} className='bg-gray-300 cursor-pointer hover:bg-white rounded-full p-1 h-5 w-5'></AiOutlineRight>
        </div>
        <div className='absolute bottom-4 right-0 left-0'>
          <div className='flex items-center justify-center gap-2'>
            {images.map((_, i) => (
              <div key={i} className={`w-2 h-2 bg-gray-700  rounded-full ${curr === i ? "p-1" : "bg-opacity-50"}`} />
            ))}

          </div>
        </div>
      </div>
    )
  }

  const BrandCarosel = ({ image }) => {
    return (
      <div className=''>
        <img className='w-[140px] h-[42px] object-fill ' src={image} alt="" />

      </div>
    )
  }
  return (
    <>
      <NavBar />

      <div className=''>
        <img src={Offers} alt="h" className='h-screen w-full object-cover' />
        <div className='my-2 mx-10 flex justify-center transition-all ease-out ' >
          <Carosel image={images[curr]} />
        </div>
        <div className='mx-[120px] py-10 font-bold text-2xl text-blue-700'>
          <h1>Popular Brands</h1>
          <div className=' relative flex gap-4 mt-4 ' >
            {
              popularBrands.map((brand,index) => (
                <BrandCarosel key={index} image={brand} />
              ))
            }
            <div className='absolute inset-0 flex items-center justify-between p-4 -right-8 -left-8 '>
              <AiOutlineLeft onClick={prev} className='bg-gray-300 cursor-pointer hover:bg-white rounded-full p-1 h-5 w-5'></AiOutlineLeft>
              <AiOutlineRight onClick={next} className='bg-gray-300 cursor-pointer hover:bg-white rounded-full p-1 h-5 w-5'></AiOutlineRight>
            </div>


          </div>

        </div>
        <NewArrival/>
        <FlashSale/>
        <OffersZone/>
        <WhatsHot/>
      </div>
      <Footer/>


    </>
  )
}

export default HomePage