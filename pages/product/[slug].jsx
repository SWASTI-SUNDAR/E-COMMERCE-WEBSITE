import ProductDetailsCarousle from '@/components/ProductDetailsCarousle'
import RelatedProduct from '@/components/RelatedProduct';
import Wrapper from '@/components/Wrapper'
import React from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
const ProductDetails = () => {
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 
                lg:gap-[100px] '>
                    {/*left column */}

                    <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
                        <ProductDetailsCarousle />
                    </div>

                    {/*right column */}
                    <div className='flex-[1] py-3  '>
                        {/*product title */}
                        <div className='text-[34px] font-semibold mb-2 '>
                            Jordan Retro 6 G
                        </div>
                        {/*product subtitle */}
                        <div className='text-lg font-semibold mb-5'>
                            Men&apos;s Basketball Shoe
                        </div>
                        {/*product price  */}
                        <div className='text-lg font-semibold'>
                            MRP : 19,799
                        </div>
                        <div className='text-md font-medium text-black/[0.7]'>
                            Incl. of all taxes
                        </div>
                        <div className='text-md font-medium text-black/[0.7]'>
                            {`{Also Include of all applicable duties}`}
                        </div>

                        { /*product size */}
                        <div className='mt-10'>
                            { /*heading start */}
                            <div className='flex justify-between mb-2'>
                                <div className='text-md font-semibold'>
                                    Select Size
                                </div>
                                <div className='text-md font-medium text-black/[0.5] cursor-pointer '>
                                    Select Guide
                                </div>
                            </div>
                            { /*heasing end */}
                            { /*selection size  start */}
                            <div className='grid grid-cols-3 gap-2'>
                                <div className='border rounded-md text py-3 flex  justify-center
                              font-medium hover:border-black cursor-pointer'>
                                    UK-6
                                </div>
                                <div className='border rounded-md text py-3 flex  justify-center
                              font-medium hover:border-black cursor-pointer'>
                                    UK-7
                                </div>
                                <div className='border rounded-md text py-3 flex  justify-center
                              font-medium hover:border-black cursor-pointer'>
                                    UK-8
                                </div>
                                <div className='border rounded-md text py-3 flex  justify-center
                              font-medium hover:border-black cursor-pointer'>
                                    UK-9
                                </div>
                                <div className='border rounded-md text py-3 flex  justify-center
                              font-medium hover:border-black cursor-pointer'>
                                    UK-10
                                </div>
                                <div className='border rounded-md text py-3 flex  justify-center
                              font-medium hover:border-black cursor-pointer'>
                                    UK-11
                                </div>
                                <div className='border rounded-md text py-3 flex  justify-center
                              font-medium hover:border-black cursor-pointer'>
                                    UK-12
                                </div>
                                <div className='border rounded-md text py-3 flex  justify-center
                              font-medium hover:border-black cursor-not-allowed bg-black/[0.1] opacity-60 '>
                                    UK-13
                                </div>

                            </div>
                            { /*size selection end */}
                            { /*error massage start */}
                            <div className='text-red-600 mt-1'>
                                Size selection is required
                            </div>
                            { /*error massage end */}
                            { /*button */}
                          
                        </div>
                        <button className='w-full py-4 rounded-full bg-black text-white
                        text-lg font-medium transition-transform active:scale-95 mb-3
                        hover:opacity-75' >
                            Add to Cart
                            </button>
                            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>
                        {/*product description */}
                        <div >
                          <div className='text-lg mb-5 font-bold'>
                             Product Details
                          </div>
                          <div className='text-md mb-5'>
                              Lorem ipsum dolor sit amet consectetur 
                              adipisicing elit. Obcaecati quasi ad alia
                              s unde fugiat, assumenda molestiae rerum 
                              vel minima vitae ipsum suscipit inventore
                               tempora qui accusamus aut, quidem illum 
                               odio. Esse, error? Sit.
                               <br />
                               Lorem, ipsum dolor sit amet consectetu
                               r adipisicing elit. Cumque
                                voluptas rerum autem similique 
                                quaerat quis, blanditiis inventore
                                 dolore praesentium corrupti fuga perferendis?
                          </div>
                        </div>
                        {/*product description end */}
                    </div>
                  {/*right column end */}
                </div>
                <RelatedProduct/>
            </Wrapper>
        </div>
    )
}

export default ProductDetails
