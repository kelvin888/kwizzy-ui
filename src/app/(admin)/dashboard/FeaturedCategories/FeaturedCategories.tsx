"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const FeaturedCategories = (): React.JSX.Element => {
    const router = useRouter();

    const handleViewAll = (): void => {
        router.push("/quiz")
    }

    return (
        <div className='flex-1 2xl:w-[30rem]'>
            <div className='flex items-center justify-between mb-4 text-grayscale-90'>
                <div className='text-2xl font-poppins font-bold'>Featured Category</div>
                <div className='text-base font-poppins cursor-pointer text-nowrap' onClick={handleViewAll}>View All</div>
            </div>
            <div className='grid 2xl:grid-cols-2 gap-4'>
            </div>
        </div>
    )
}

export default FeaturedCategories