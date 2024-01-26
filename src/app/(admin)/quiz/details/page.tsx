import Image from 'next/image'
import React from 'react'
import QuizImage from "assets/images/featured-category/category-1.jpeg"
import Button from 'components/button/Button'

const QuizDetails = () => {
    return (
        <div className='text-grayscale-90'>
            <div className="text-[33px] text-grayscale-90 font-poppins font-bold">History Quiz</div>
            <div className="mb-8 text-grayscale-90 text-lg">Read the following instructions</div>

            <div className='flex gap-12'>
                <div>
                    <Image className='rounded-[30px]' src={QuizImage} alt='quiz image' />
                </div>
                <div className='space-y-10'>
                    <div className='flex items-center gap-10'>
                        <div className='font-semibold text-2xl'>Date: </div>
                        <div className='text-xl'>28/07/2021</div>
                    </div>
                    <div className='flex items-center gap-10'>
                        <div className='font-semibold text-2xl'>Time Limit: </div>
                        <div className='text-xl'>30 Mins</div>
                    </div>
                    <div className='flex items-center gap-10'>
                        <div className='font-semibold text-2xl'>Attempts: </div>
                        <div className='text-xl'>Once</div>
                    </div>
                    <div className='flex items-center gap-10'>
                        <div className='font-semibold text-2xl'>Points: </div>
                        <div className='text-xl'>200 Points</div>
                    </div>
                </div>
            </div>

            <div className='mt-6 font-semibold text-2xl'>Instructions</div>

            <div className='text-lg mt-6 flex flex-col gap-4'>
                <p>This quiz consists of 5 multiple-choice questions. To be successful with the quizzes, it’s important to conversant with the topics. Keep the following in mind:</p>

                <p>  Timing - You need to complete each of your attempts in one sitting, as you are allotted 30 minutes to each attempt.
                    Answers - You may review your answer-choices and compare them to the correct answers after your final attempt.</p>

                <p>To start, click the &quot;Start&quot; button. When finished, click the &quot;Submit&quot; button.</p>
            </div>

            <div className='flex justify-end items-center mt-16'>
                <Button variant="tertiary">Start</Button>
            </div>
        </div>
    )
}

export default QuizDetails