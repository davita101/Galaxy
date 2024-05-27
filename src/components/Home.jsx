import React from 'react'
import { heroText } from '../utils'
import { herobg, heromob, herotab } from '../assets'

function Home() {
    return (
        <div className=' w-full h-full'>
            <div className='flex flex-wrap items-end justify-center'>
                <div className='text-[white] pt-[25.6rem] pb-0 p-[10.2rem]'>
                    <h2 className='subheading-fs--100 font-thin ff-primary-100 primary-color--200'>{heroText[0].h2}</h2>
                    <h1 className='heading-fs--100 ff-primary-300'>{heroText[0].h1}</h1>
                    <p className='paragraph-fs primary-color--200 ff-primary-200 max-w-[28rem]'>{heroText[0].p}</p>
                </div>

                <div className='button--hover w-[274px] h-[274px] border-[none]  heading-fs--400 relative ff-primary-300 bg-white rounded-full cursor-pointer text-black flex justify-center items-center ' >
                    EXPLORE
                    <div className=' w-[274px] h-[274px]   bg-white rounded-full z-[-1] opacity-[.5] absolute' />
                </div>
            </div>

        </div>
    )
}

export default Home