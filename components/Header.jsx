import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper';
import Link from 'next/link';
import Menu from './Menu';

import { IoMdHeartEmpty } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';
import MenuMobile from './MenuMobile';
import cart from '@/pages/cart';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("traslate-y-0");
  const [lastScrolly, setLastScrolly] = useState(0);
  
//  console.log(window.scrollY);
  const controlNavbar = () => {
    if(window.scrollY > 200 && !mobileMenu){
      if(window.scrollY>lastScrolly){
        setShow("-translate-y-[80px]");
      }
      else{
        setShow("shadow-sm");
      }
  }else{
    setShow("translate-y-0");
  }
  setLastScrolly(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll",controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    }
  },[lastScrolly]);

  return (
    <header className={`w-full h-[50px] md:h-[80px] bg-white
    flex items-center justify-between z-20 sticky top-0 
    transition-transform duration-300 ${show}`}>
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <img src="/logo.svg" className='w-[40px] md:w-[60px]' />
        </Link>


        <Menu showCatMenu={showCatMenu} 
        setShowCatMenu={setShowCatMenu} />
        {mobileMenu &&(
          <MenuMobile showCatMenu={showCatMenu}
           setShowCatMenu={setShowCatMenu}
           setMobileMenu={setMobileMenu}
          />
        )} 
        <div className='flex items-center gap-2 text-black'>
          {/*icon start  */}
          <div className='w-8 md:w-12 h-8 md:h-8
       rounded-full flex justify-center items-center
       hover:bg-black/[0.05] cursor-pointer relative'>
            <IoMdHeartEmpty className='text-[19px] md:text-[24px]' />

            <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full
        bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] 
        flex justify-center items-center'>51</div>

          </div>
          {/*icon end  */}
          <Link href="/cart">
          <div className='w-8 md:w-12 h-8 md:h-8
            rounded-full flex justify-center items-center
            hover:bg-black/[0.05] cursor-pointer relative'>
            <BsCart className='text-[15px] md:text-[20px]' />

            <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full
             bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] 
             flex justify-center items-center'>5</div>

          </div>
          </Link>
          {/*icon end  */}
          {/*mobile icon start  */}
           <div  className='w-8 md:w-12 h-8 md:h-8 md:hidden 
           rounded-full flex justify-center items-center
           hover:bg-black/[0.05] cursor-pointer relative -mr-2 '>
                {
                mobileMenu ? (
                  <VscChromeClose className='text-[15px]'
                  onClick={()=>setMobileMenu(false)}
                  />
                ):(
                  <BiMenuAltRight className='text-[15px]'
                  onClick={()=>setMobileMenu(true)}
                  />
                )
                }      

           </div>
           {/*mobile icon end  */}
        </div>


      </Wrapper>
    </header>
  )
}

export default Header
