import React from 'react'
import CircleChecked from "assets/images/icons/circle-checked.svg"
import Image from 'next/image'

export const Record = () => {
    return (
        <div className='flex gap-4 items-start'>
            <div className='w-[60px] h-[60px] shadow-sm rounded-[15px] flex items-center justify-center'>
                <Image src={CircleChecked} alt='checked circle icon' width={36} height={36} />
            </div>
            <div className='text-grayscale-90'>
                <div className='font-poppins text-2xl font-bold'>200</div>
                <div className='text-sm mt-1'>Correct Answers</div>
            </div>
        </div>
    )
}
