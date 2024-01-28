import TextInput from 'components/form/TextInput'
import React from 'react'
import SearchIcon from "assets/images/icons/search.svg"
import ProfileIcon from "assets/images/profile.svg"
import Image from 'next/image'
const name = "Kelvin"
export const AdminHeader = () => {
    return (
        <div className='fixed top-0 z-20 bg-grayscale-20 flex h-[8.313rem] w-full items-center opacity-100 px-10'>
            <div className='text-grayscale-90 font-extrabold text-3xl'>Quiz Time</div>
            <div className='ml-36'>
                <TextInput iconBefore={<Image src={SearchIcon} alt='search icon' />} className='w-[22.25rem] pl-14 text-lg placeholder:text-lg text-grayscale-90' placeholder='Search' />
            </div>
            <div className='ml-auto flex items-center gap-4'>
                <Image src={ProfileIcon} alt='profile icon' />
                <span>{name}</span>
            </div>
        </div>
    )
}

