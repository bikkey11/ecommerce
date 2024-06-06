import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='flex flex-col px-4 my-4 py-4 gap-6'>
            <div className='flex justify-between  '>
                <div className='flex flex-col gap-6'>
                    <h1 className='font-Poppins font-bold text-xl'>CONTACT US</h1>
                    <div className='flex flex-col gap-2'>
                        <span className='font-Montserrat font-bold text-xs'>Customer Care</span>
                        <span className='font-Montserrat font-bold text-xs'>FAQs</span>
                        <span className='font-Montserrat font-bold text-xs'>Return and Refund Policy</span>
                        <span className='font-Montserrat font-bold text-xs'>Privacy Policy</span>
                        <span className='font-Montserrat font-bold text-xs'>Terms and Conditions</span>
                        <span className='font-Montserrat font-bold text-xs'>Raise a ticket</span>

                    </div>

                </div>
                <div className='flex flex-col gap-6'>
                    <h1 className='font-Poppins font-bold text-xl'>PURANOBAZAR</h1>
                    <div className='flex flex-col gap-2'>
                        <span className='font-Montserrat font-bold text-xs'>About Us</span>
                        <span className='font-Montserrat font-bold text-xs'>Careers</span>
                        <span className='font-Montserrat font-bold text-xs'>Advertise on PB</span>
                        <span className='font-Montserrat font-bold text-xs'>Sell on PB</span>

                    </div>

                </div>
            </div>
            <div className='flex gap-4 justify-center'>
                <span className='font-Montserrat font-extrabold text-sm'>Connect with us:</span>
                <div className='flex items-center text-blue-500 gap-3 text-base'>
                    <FaFacebook/>
                    <FaTwitter/>
                    <FaInstagram/>
                </div>
                <span className='font-Montserrat font-extrabold text-sm'>PuranoBazar Pvt. Ltd. Sampang Marga, Dharan</span>

                
            </div>
        </div>
    )
}

export default Footer