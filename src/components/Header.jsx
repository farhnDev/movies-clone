// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo.png';
import HeaderItems from '../components/HeaderItems.jsx'
import { HiHome, HiStar, HiPlus, HiPlayCircle, HiTv, HiMagnifyingGlass} from "react-icons/hi2";
import {HiDotsVertical} from 'react-icons/hi';

export default function Header() {
    const [toggle,setToggle] = useState(false);
    
    const menu = [
        { name: 'HOME', icon: HiHome },
        { name: 'SEARCH', icon: HiMagnifyingGlass },
        { name: 'WATCHLIST', icon: HiPlus },
        { name: 'ORIGINAL', icon: HiStar },
        { name: 'MOVIE', icon: HiPlayCircle },
        { name: 'SERIES', icon: HiTv },
    ]
    {
        //* disinih pada bagian responsive nya saya batasin dari lg, karena supaya membuat responsive yang baik
    }
    return (
        <div className={'flex justify-between items-center p-2  xl:px-10'}>
            <div className={'flex gap-8 items-center justify-center'}>
                <img src={Logo} alt="logo" className={'w-[80px] lg:w-[115px] object-cover '} />
                <div className='gap-8 hidden lg:flex mt-5 '>
                    {menu.map((item) => (
                        <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className='flex gap-5 lg:hidden mt-4'>
                    {menu.map((item,index) => index<3&& (
                        <HeaderItems key={item.name} name={''} Icon={item.icon} />
                    ))}
                    <div className='lg:hidden ' onClick={() => setToggle(!toggle)}>
                        <HeaderItems name={''} Icon={HiDotsVertical}  />
                        {toggle ?
                        <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 px-5 py-4 rounded-sm">
                        {menu.map((item,index) => index>2&& (
                            <HeaderItems key={item.name} name={item.name} Icon={item.icon}/>
                            ))}
                        </div>
                        : null}
                    </div>
                </div>
            </div>
            <img src={'https://cdn-icons-png.flaticon.com/128/4322/4322991.png'} alt="" className={'w-[45px] h-[45px] mt-1'} />
        </div>
    )
}