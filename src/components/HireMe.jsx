import Link from 'next/link'
import React from 'react'
// import { CircularText } from './Icons'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex justify-center items-center overflow-hidden md:right-2 md:hidden md:left-auto md:top-2 md:bottom-auto md:absolute ' >
        <div className="w-48 h-[100px] flex justify-center items-center relative ">
            {/* <CircularText className={"fill-dark animate-spin-slow"} /> */}
            <Link href="mailto:brilliantmakanju5@gmail.com" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark transition ease-in-out  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light dark:border-light duration-300 md:w-12 md:h-12 md:text-[10px]  ' >Hire Me</Link>
        </div>
    </div>
  )
}

export default HireMe