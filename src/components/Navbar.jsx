import React from 'react'
import ToggleNavbar from './ToggleNavbar'
import logo from '../assets/Logos/IIC White Logo.png'

const Navbar = () => {
    return (
        <>
            <div className='bg-slate-950 border-b border-blue-600'>
                <div className='lg:hidden md:flex max-md:hidden'>
                    <ToggleNavbar />
                </div>
                <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                    <div className='flex h-20 justify-between items-center'>
                        <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-between z-0'>
                            <a href="" className='flex flex-shrink-0 items-center mr-4'>
                                <div className='w-[120px]'>
                                    <img src={logo} className='-rotate-90' />
                                </div>
                            </a>
                        </div>

                        <div className='flex md: gap-x-6'>
                            <button type='button' className='max-sm:hidden bg-black rounded-lg text-lg text-white px-5 py-3 ring-4 ring-slate-600 disabled'>Home</button>
                            {/* <button type='button' className='max-sm:hidden rounded-lg text-lg text-white px-5 py-3 hover:bg-gray-800 focus:ring-4 focus:ring-white-20'>About Us</button> */}
                            <button type='button' className='max-sm:hidden rounded-lg text-lg text-white px-5 py-3 hover:bg-gray-800 focus:ring-4 focus:ring-white-20'>Activities</button>
                            <button type='button' className='max-sm:hidden rounded-lg text-lg text-white px-5 py-3 hover:bg-gray-800 focus:ring-4 focus:ring-white-20'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;