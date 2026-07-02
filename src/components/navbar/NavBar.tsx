import React from 'react'
import { TfiUser } from "react-icons/tfi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuMessageCircleMore } from "react-icons/lu";




const NavBar = () => {
  return (
    <nav className='bg-(--primary) w-full h-20 border-solid border-b-2 border-(--border-color) flex justify-end'>
        <ul className='flex gap-3.5 items-center p-6'>
            <li>
              <LuMessageCircleMore className='w-6 h-6 text-white'/>  
            </li>
            <li>
                <IoIosNotificationsOutline className='w-6 h-6 text-white'/>
            </li>
            <li>
                <TfiUser className='w-6 h-6 text-white'/>
            </li>
        </ul>
        
    </nav>
  )
}

export default NavBar
