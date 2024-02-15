"use client"
import React from 'react'
import Category from './Quiz/Quiz'
import Category1 from "assets/images/featured-category/category-1.jpeg"
import Category2 from "assets/images/featured-category/category-2.jpeg"
import Category3 from "assets/images/featured-category/category-3.jpeg"
import Category4 from "assets/images/featured-category/category-4.jpeg"
import { useRouter } from 'next/navigation'

const FeaturedCategories = () => {
    const router = useRouter();

    const handleViewAll = () => {
        router.push("/quiz")
    }

    return (
        <div className='flex-1 2xl:w-[30rem]'>
            <div className='flex items-center justify-between mb-4 text-grayscale-90'>
                <div className='text-2xl font-poppins font-bold'>Featured Category</div>
                <div className='text-base font-poppins cursor-pointer text-nowrap' onClick={handleViewAll}>View All</div>
            </div>
            <div className='grid 2xl:grid-cols-2 gap-4'>
                {/* <Category image={Category1} title="History" />
                <Category image={Category2} title="History" />
                <Category image={Category3} title="History" />
                <Category image={Category4} title="History" /> */}
            </div>
        </div>
    )
}

export default FeaturedCategories