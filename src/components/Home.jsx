import React from 'react'
import { heroText } from '../utils'
import { herobg, heromob, herotab } from '../assets'

function Home() {
    return (
        <div className=' w-full h-[100vh] flex lg:text-start text-center lg:p-[10.5rem] p-[1.5rem]'>
            <div className='flex lg:flex-row flex-col lg:gap-0 gap-[2rem] lg:items-end items-center lg:justify-between justify-end w-full'>
                <div className='text-[white] pb-0 grid gap-[1rem] '>
                    <h2 className='subheading-fs--100 font-thin ff-primary-100 primary-color--200'>{heroText[0].h2}</h2>
                    <h1 className='heading-fs--100 ff-primary-300'>{heroText[0].h1}</h1>
                    <p className=' paragraph-fs primary-color--200 ff-primary-200 sm:max-w-[28rem] max-w-[30rem]'>{heroText[0].p}</p>
                </div>

                <div className='button--hover lg:w-[274px] w-[205px] h-[205px] lg:h-[274px] border-[none]  heading-fs--400 relative ff-primary-300 bg-white rounded-full cursor-pointer text-black flex justify-center items-center ' >
                    EXPLORE
                    <div className=' w-[205px] h-[205px] bg-white rounded-full z-[-1] opacity-[.5] absolute' />
                </div>
            </div >

        </div >
    )
}

export default Home