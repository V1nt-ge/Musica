import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHouse,faRadio,faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone,faHeart,faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faPerson,faMoneyBill,faDoorOpen,faBars } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {

  return (
    <>
        <div className='cart shadow-lg'>
            
             
            
            <h3>Categories</h3>
            <div className='icons mt-5'>
                <div className='mt-5 cursor-pointer text-gray-600 hover:text-gray-200 transition flex  items-center gap-1.5'>
                    <FontAwesomeIcon icon={faHouse}  className='text-blue-500'/>
                    <h3>Home</h3>
                </div>
                <div className='mt-5 cursor-pointer text-gray-600 hover:text-gray-200 flex items-center gap-1.5 transition'>
                    <FontAwesomeIcon icon={faRadio} className='text-blue-500' />
                    <h3> New Music</h3>
                </div>
                <div className='mt-5 cursor-pointer text-gray-600 hover:text-gray-200 flex items-center gap-1.5 transition'>
                    <FontAwesomeIcon icon={faMicrophone} className='text-blue-500' />
                    <h3>Radio Stations</h3>
                </div>
                <div className='mt-5 cursor-pointer text-gray-600 hover:text-gray-200 flex items-center gap-1.5 transition'>
                    <FontAwesomeIcon icon={faHeart} className='text-blue-500' />
                    <h3>Favourites</h3>
                </div>
                
                <div className='mt-5 cursor-pointer text-gray-600 hover:text-gray-200 flex items-center gap-1.5 transition'>
                    <FontAwesomeIcon icon={faHeadphones} className='text-blue-500' />
                    <h3>Artists</h3>
                </div>
                <div className='mt-5 cursor-pointer text-gray-600 hover:text-gray-200 flex items-center gap-1.5 transition'>
                    <FontAwesomeIcon icon={faRecordVinyl} className='text-blue-500' />
                    <h3>Albums</h3>
                </div>
              
                <div className="mt-5 cursor-pointer text-gray-600 hover:text-gray-200 flex items-center gap-1.5 transition">
                    <FontAwesomeIcon icon={faPerson} className='text-blue-500' />
                    <h3>Account</h3>
                       
                </div>
                <div className='mt-5 cursor-pointer text-gray-600 hover:text-gray-200 flex items-center gap-1.5 transition'>
                    <FontAwesomeIcon icon={faMoneyBill} className='text-blue-500' />
                    <h3>Subscriptions</h3>
                </div>
                <div className='mt-5 cursor-pointer text-gray-600 hover:text-gray-200  items-center gap-1.5 flex transition'>
                    <FontAwesomeIcon icon={faDoorOpen} className='text-blue-500' />
                    <h3>Log Out</h3>
                </div>
               
                

            </div>
        </div>
    </>
   
  )
}

export default Navbar;