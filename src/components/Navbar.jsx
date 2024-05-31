import React, { act, useEffect, useState } from 'react'
import { Logo } from '../assets'
import { navbar } from '../utils'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaX } from 'react-icons/fa6'


function Navbar() {
    const [active, setActive] = useState(0)
    const [Click, setClick] = useState(true)
    const [widther, setWidther] = useState('flex')

    const handleActive = (index) => {
        setActive(index)
    }
    if (Click) {
        setTimeout(() => {
            setWidther('w-[0]')
        }, 5000)
    }

    return (
        <div className='flex items-center justify-between lg:pl-[1rem] lg:pt-[2.5rem]  pl-[1rem] pt-[2.5rem] fixed w-full z-[99]'>
            <img src={Logo} alt="Website Logo" className='h-[3rem] w-[3rem]' />
            <div onClick={() => setClick(!Click)} className='fixed sm:hidden flex right-[1rem] z-[4] text-[2rem]'>
                {Click ? <FaBars className='text-white' /> : <FaX className='text-white' />}
            </div>
            <div className='h-[.1rem] w-[473px] lg:bg-white bg-transparent relative bg-[#979797] opacity-[0.6] left-[4rem] rounded-md z-[5]' />
            <div className='sm:flex hidden gap-[4rem]'>
                <ul className='flex gap-[3.12rem] ml-[2rem] p-[3rem] pb-0 bg--color lg:pr-[10rem]  lg:pl-[12rem]  backdrop-blur-md  z-[3] relative border-white border-opacity-[0.01] items-center justify-end'>
                    {navbar.map((item, index) => (
                        <Link key={index} to={item.link}>
                            <div onClick={() => handleActive(index)} className='sm:flex hidden flex-col justify-between items-end gap-[0.68rem] h-[4rem] subheading-fs--300 cursor-pointer z-[3] text-white'>
                                <div className='flex gap-[0.68rem]'>
                                    <span className='font-bold'>{item.num}</span>
                                    <li>{item.li}</li>
                                </div>
                                {active == index && <div className='bg-white w-full h-[.2rem] rounded-t-md ' />}
                            </div>
                        </Link>
                    ))}
                </ul>
            </div>
            {/* mobile version */}
            <div className="sm:hidden flex fixed right-0 top-0 ">
                <ul className={`${Click ? `translate-x-[250px] ${widther} ` : `translate-x-0 `} transition-all flex gap-[2rem] flex-col pb-[7rem] bg--color pl-[3rem] relative lg:pl-[12rem]  backdrop-blur-md  w-[15rem] h-[100vh] z-[3] border-white border-opacity-[0.01] items-start justify-center `}>
                    {navbar.map((item, index) => (
                        <Link key={index} to={item.link}>
                            <div onClick={() => { handleActive(index), setClick(true) }} className='flex flex-row w-[12rem] justify-between gap-[0.68rem] subheading--300 cursor-pointer z-[3] text-white'>
                                <div className='flex gap-[0.68rem]'>
                                    <span className='font-bold'>{item.num}</span>
                                    <li>{item.li}</li>
                                </div>
                                {active == index && <div className='bg-white w-[0.2rem] h-[full] rounded-t-md ' />}
                            </div>
                        </Link>
                    ))}
                </ul>
            </div>


        </div >
    )
}

export default Navbar