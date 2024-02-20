"use client"
import Image from 'next/image'
import React from 'react'
import CelebrationIcon from "assets/images/celebration.svg"
import useQuizTakingStore from 'store/quizTaking'
// import FailureIcon from "assets/images/failure-illustration.svg"

const Page = (): React.JSX.Element => {
    const { userProgress: { correctAnswersCount }, quiz } = useQuizTakingStore()
    return (
        <div className='flex flex-col items-center p-5'>
            <div className='text-6xl text-center'>Test Completed</div>
            <Image src={CelebrationIcon} alt='celebration' />
            {/* <Image src={FailureIcon} alt='celebration' /> */}
            <div className='text-4xl'>
                You scored {correctAnswersCount} out of {quiz?.questions.length}
            </div>
        </div>)
}

export default Page