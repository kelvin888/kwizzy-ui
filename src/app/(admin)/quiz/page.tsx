"use client"
import Category from 'app/(admin)/dashboard/FeaturedCategories/Category/Category'
import React, { useState } from 'react'
import Category3 from "assets/images/featured-category/category-3.jpeg"
import Button from 'components/button/Button'
import { Plus } from 'lucide-react'
import QuizCreation from './QuizCreation/QuizCreation'

const categories = [
    { imageUrl: Category3, title: "History", id: "1" },
    { imageUrl: Category3, title: "History", id: "1" },
    { imageUrl: Category3, title: "History", id: "1" },
    { imageUrl: Category3, title: "History", id: "1" },
]


const Page = () => {

    const [showcreateQuizModal, setshowcreateQuizModal] = useState(false)

    return (
        <div className='p-5 flex flex-col gap-5'>
            <div className='border-b pb-5'>
                <div className='flex'>
                    <div>
                        <div className="text-[2rem] text-grayscale-90 font-poppins font-bold">My Quizzes</div>
                        <div className="mb-8 text-grayscale-90 text-lg">Pick any of your quizzes below or create a new one</div>
                    </div>

                    <Button className='ml-auto rounded-[30px]' onClick={() => setshowcreateQuizModal(true)}><Plus /> Add New</Button>
                </div>


                <div className='grid grid-cols-4 gap-4'>
                    {categories.map(category =>
                        <Category key={category.id} image={category.imageUrl} title={category.title} />
                    )}
                </div>
                <div className='flex justify-end items-center mt-16'>
                    <Button variant="tertiary">More</Button>
                </div>
            </div>
            <div>  <div className="text-[2rem] text-grayscale-90 font-poppins font-bold">Explore</div>
                <div className="mb-8 text-grayscale-90 text-lg">Wanna take a quiz, checkout quizzes from other users below</div>

                <div className='grid grid-cols-4 gap-4'>
                    {categories.map(category =>
                        <Category key={category.id} image={category.imageUrl} title={category.title} />
                    )}
                </div>

            </div>
            <QuizCreation showModal={showcreateQuizModal} />
        </div>
    )
}

export default Page