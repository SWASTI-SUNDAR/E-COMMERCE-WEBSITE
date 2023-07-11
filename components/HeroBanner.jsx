import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack } from 'react-icons/bi';
const HeroBanner = () => {
    return (
     <div className='relative text-white text-[20px] w-full max-w-[1360px] mx-auto'>
        <Carousel
            autoPlay={false}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            renderArrowPrev={(clickHandler, hasPrev) =>(
                <div onClick={clickHandler}
                className='absolute right-[31px] md:right-[51px]
                bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10
                flex justify-center items-center cursor-pointer hover:opacity-90 '>

                   <BiArrowBack className='text-white text-sm md:text-lg' />
                </div>
            )}
            renderArrowNext={(clickHandler, hasPrev) =>(
                <div onClick={clickHandler}
                className='absolute right-0 bottom-0 w-[30px] md:w-[50px]
                h-[30px] md:h-[50px] bg-black z-10 flex justify-center items-center
                cursor-pointer hover:opacity-90  '>

             <BiArrowBack className='text-white text-sm md:text-lg rotate-180' />
                </div>
            )}
            
            >
            <div>
                <img src="/slide-1.png" className='md:aspect-auto aspect-[16/10] object-cover' />
                <div className='px-[15px] md:px-[30px] py-[10px] md:py-[25px] font-oswald
                bg-white text-black/[0.9] absolute bottom-[20px] left-0 md:bottom-[45px]
                text-[15px] md:text-[30px] cursor-pointer uppercase font-medium hover:opacity-90
                '>
                shop now
                </div>
            </div>
            <div>
                <img src="/slide-2.png" />
                <div className='px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald
                bg-white text-black/[0.9] absolute bottom-[20px] left-0 md:bottom-[45px]
                text-[15px] md:text-[30px] cursor-pointer uppercase font-medium hover:opacity-90
                '>
                shop now
                </div>
            </div>
            <div>
                <img src="/slide-3.png" />
                <div className='px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald
                bg-white text-black/[0.9] absolute bottom-[20px] left-0 md:bottom-[45px]
                text-[15px] md:text-[30px] cursor-pointer uppercase font-medium hover:opacity-90
                '>
                shop now
                </div>
            </div>
        </Carousel>
     </div>

    )
}

export default HeroBanner
