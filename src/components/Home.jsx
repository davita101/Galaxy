import React from 'react'
import { HeroBg } from '../assets'

function Home() {
    return (
        <div className='w-full h-full'>
            <div className='w-full h-[100vh]'>
                <img src={HeroBg} className='w-full h-[100vh]' alt="" />
            </div>
        </div>
    )
}

export default Home
