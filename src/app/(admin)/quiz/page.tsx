"use client"
import Category from 'app/(admin)/dashboard/FeaturedCategories/Category/Category'
import React from 'react'
import Category3 from "assets/images/featured-category/category-3.jpeg"
import Button from 'components/button/Button'

const categories = [
    { imageUrl: Category3, title: "History", id: "1" }
]


const Page = () => {

    return (
        <div>
            <div className="text-[2rem] text-grayscale-90 font-poppins font-bold">Select Topic</div>
            <div className="mb-8 text-grayscale-90 text-lg">Featured Category</div>

            <div className='grid grid-cols-4 gap-4'>
                {categories.map(category =>
                    <Category key={category.id} image={category.imageUrl} title={category.title} />
                )}
            </div>
            <div className='flex justify-end items-center mt-16'>
                <Button variant="tertiary">More</Button>
            </div>
        </div>
    )
}

export default Page