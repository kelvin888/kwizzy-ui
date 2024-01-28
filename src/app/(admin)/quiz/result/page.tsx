"use client"
import Image from 'next/image'
import React from 'react'
import CelebrationIcon from "assets/images/celebration.svg"
import useQuizStore from 'store/quizStore'
// import FailureIcon from "assets/images/failure-illustration.svg"

const Page = () => {
    const { userProgress: { correctAnswersCount }, quiz } = useQuizStore()
    return (
        <div className='flex flex-col items-center'>
            <div className='text-6xl text-center'>Test Completed</div>
            <Image src={CelebrationIcon} alt='celebration' />
            {/* <Image src={FailureIcon} alt='celebration' /> */}
            <div className='text-4xl'>
                You scored {correctAnswersCount} out of {quiz?.questions.length}
            </div>
        </div>)
}

export default Page