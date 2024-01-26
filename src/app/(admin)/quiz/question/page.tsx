import Image from 'next/image'
import React from 'react'
import QuizImage from "assets/images/featured-category/category-1.jpeg"
import Button from 'components/button/Button'
import Radio from 'components/radio'

const QuizDetails = () => {
    return (
        <div className='text-grayscale-90'>
            <div className="text-[33px] text-grayscale-90 font-poppins font-bold">History Quiz</div>
            <div className="mb-8 text-grayscale-90 text-lg">Answer the question below</div>

            <div className='flex gap-12'>
                <div>
                    <Image className='rounded-[30px]' src={QuizImage} alt='quiz image' />
                </div>
                <div className='space-y-10 flex-1'>
                    <div className='font-semibold text-2xl'>Question 1/5 </div>
                    <div className='text-xl'>Guy Bailey, Roy Hackett and Paul Stephenson made history in 1963, as part of a protest against a bus company that refused to employ black and Asian drivers in which UK city?</div>
                </div>
            </div>

            <div className='mt-6 font-semibold text-2xl'>Choose answer</div>

            <div className='text-lg mt-6 flex flex-col gap-4 text-grayscale-90'>
                <div className='flex items-center gap-7'>
                    <Radio size="small" />
                    <div>London</div>
                </div>
                <div className='flex items-center gap-7'>
                    <Radio size="small" />
                    <div>Edinburgh</div>
                </div>
                <div className='flex items-center gap-7'>
                    <Radio size="small" />
                    <div>Liverpool</div>
                </div>
                <div className='flex items-center gap-7'>
                    <Radio size="small" />
                    <div>Canary Wharf</div>
                </div>
            </div>

            <div className='flex justify-between items-center mt-16'>
                <Button variant="tertiary">Previous</Button>
                <Button variant="tertiary">Next</Button>
            </div>
        </div>
    )
}

export default QuizDetails