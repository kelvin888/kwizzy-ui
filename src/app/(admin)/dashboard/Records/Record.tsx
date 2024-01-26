import React, { FC } from 'react'
import Image from 'next/image'
type Props = {
    icon: string
    title: string
    value: string
}
export const Record: FC<Props> = ({ icon, title, value }) => {
    return (
        <div className='flex gap-4 items-start'>
            <div className='w-[70px] h-[70px] shadow-sm rounded-[15px] flex items-center justify-center'>
                <Image src={icon} alt='checked circle icon' width={36} height={36} />
            </div>
            <div className='text-grayscale-90'>
                <div className='font-poppins text-3xl font-bold'>{value}</div>
                <div className='text-base mt-1'>{title}</div>
            </div>
        </div>
    )
}
