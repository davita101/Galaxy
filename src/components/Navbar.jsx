import { useState } from 'react'
import { Logo } from '../assets'
import { navbar } from '../utils'

function NavBar() {
    const [active, setActive] = useState(0)

    const hanldeClickActive = (index) => {
        setActive(index)
    }
    console.log(active)
    return (
        <div className='flex items-center justify-center pl-[3.2rem] pt-[2.5rem] fixed w-full'>
            <img className='w-[3rem] h-[3rem]' src={Logo} alt="Atronomy Websiete Logo" />
            <div className="h-[.1rem] w-full relative bg-white opacity-[.5] left-[4rem] z-[5] rounded-md" />
            <ul className='flex gap-[3.12rem] p-[3rem] pb-0 bg--color pr-[12rem] pl-[10rem] backdrop-blur-md  z-[3] relative border-[#fff] border-opacity-[0.01] items-center justify-end'>
                {navbar.map((item, index) => (
                    <div onClick={() => hanldeClickActive(index)} key={index} className='flex flex-col justify-between items-end  text-white h-[4rem] cursor-pointer z-[3]  subheading-fs--300 '>
                        <div className='flex gap-[0.68rem]'>
                            <li className='font-bold'>{item.num}</li>
                            <li>{item.li}</li>
                        </div>
                        {active == index && <div className='bg-white w-full h-[.2rem] rounded-lg' />}

                    </div>
                ))}
            </ul>
        </div>
    )
}

export default NavBar 
