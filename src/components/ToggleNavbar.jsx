import React from 'react'

  

const ToggleNavbar = () => {
    
    return (
        <>
        <div className='md:flex md:flex-col z-[1] md:items-center md:z-auto md:static absolute w-full left-0 md:pl-0 justify-between items-center'>
        <div className='cursor-pointer text-3xl md:hidden pl-4 pt-7 z-[1] text-white'>
        <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
        </div>
            <ul className='nav-menu md:flex md:flex-col z-[1] md:items-center md:z-auto md:static absolute w-full left-0 md:pl-0 justify-between items-center opacity-0 top-[-400px] transition-all ease-in-out duration-700 bg-gray-400 font-medium text-white'>
                <li className='mx-4 mt-6 md:my-0'>Home</li>
                {/* <li className='mx-4 my-6 md:my-0'>About Us</li> */}
                <li className='mx-4 my-6 md:my-0'>Activities</li>
                <li className='mx-4 my-6 md:my-0'>Contact Us</li>
            </ul>
        </div>

        </>
    )
}

export default ToggleNavbar