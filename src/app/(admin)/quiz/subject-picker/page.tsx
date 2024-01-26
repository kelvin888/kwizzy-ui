"use client"
import Category from 'app/(admin)/dashboard/FeaturedCategories/Category/Category'
import React from 'react'
import Category3 from "assets/images/featured-category/category-3.jpeg"
import Button from 'components/button/Button'
import useQuizStore from 'store/quizStore'; // Update the import path


const Page = () => {
    const { quiz, goToNextQuestion } = useQuizStore()

    console.log("values", quiz, goToNextQuestion)

    return (
        <div>
            <div className="text-[33px] text-grayscale-90 font-poppins font-bold">Select Topic</div>
            <div className="mb-8 text-grayscale-90 text-lg">Featured Category</div>

            <div className='grid grid-cols-4 gap-4'>
                <Category image={Category3} title="History" />
                <Category image={Category3} title="History" />
                <Category image={Category3} title="History" />
                <Category image={Category3} title="History" />
                <Category image={Category3} title="History" />
                <Category image={Category3} title="History" />
                <Category image={Category3} title="History" />
                <Category image={Category3} title="History" />
                <Category image={Category3} title="History" />
                <Category image={Category3} title="History" />
                <Category image={Category3} title="History" />
                <Category image={Category3} title="History" />

            </div>
            <div className='flex justify-end items-center mt-16'>
                <Button variant="tertiary">More</Button>
            </div>
        </div>
    )
}

export default Page