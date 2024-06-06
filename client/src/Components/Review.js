import React from 'react';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
const reviews = [
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",



]

const Review = () => {
    let box = document.querySelector('.review-container');
    const prev = () => {
        let width = box.clientWidth;
        if (box.scrollLeft === 0) {
            box.scrollLeft = 2202.39990234375
        }
        else {
            box.scrollLeft = box.scrollLeft - width
        }
    }
    const next = () => {
        let width = box.clientWidth;
        if (box.scrollLeft === 2202.39990234375) {
            box.scrollLeft = 0
        }
        else {
            box.scrollLeft = box.scrollLeft + width

        }
    }

    return (
        <div className='bg-gradient-to-br from-indigo-600 to-cyan-600'>
            <div className='relative mx-8 '>
                <h1 className='px-4 text-3xl font-bold font-Poppins '>Reviews</h1>
                <span className='px-4 text-xl  font-Poppins'>Purchased product reviews</span>
                <div className="review-container flex relative gap-4 overflow-hidden scroll-smooth cursor-pointer">
                    {reviews.map((url) => (
                        <div className='min-w-[300px] h-[400px] m-2'>
                            <video class="w-full h-[400px] object-fill" autoplay loop muted>
                                <source
                                    src={url}
                                    type="video/mp4" />
                            </video>
                        </div>
                    ))}
                </div>
                <div className='absolute inset-0 flex items-center justify-between p-4'>
                    <AiOutlineLeft onClick={prev} className='bg-gray-300 cursor-pointer hover:bg-white rounded-full p-1 h-5 w-5'></AiOutlineLeft>
                    <AiOutlineRight onClick={next} className='bg-gray-300 cursor-pointer hover:bg-white rounded-full p-1 h-5 w-5'></AiOutlineRight>
                </div>
            </div>
        </div>

    )
}

export default Review