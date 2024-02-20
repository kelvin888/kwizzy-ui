'use client'
import Quiz from 'app/(admin)/dashboard/FeaturedCategories/Quiz/Quiz'
import React, { type FC, useState } from 'react'
import Button from 'components/button/Button'
import { Plus } from 'lucide-react'
import QuizCreation from './QuizCreation/QuizCreation'
import { useQuery } from '@tanstack/react-query'
import quizService from 'services/quizService'
import { quizKeys } from 'constants/queryKeys'
import { type QuizType } from "types/quiz";


const Page: FC = () => {
    const { data: quizzes } = useQuery({
        queryKey: [quizKeys.FIND_ALL],
        queryFn: quizService.getAllQuizes
    });


    const [showcreateQuizModal, setshowcreateQuizModal] = useState(false)

    const closeModal = (): void => {
        setshowcreateQuizModal(false)
    }


    return (
        <div className='p-5 flex flex-col gap-5' data-cy="quiz-container" data-testid="quiz-container">
            <div className='border-b pb-5'>
                <div className='flex'>
                    <div>
                        <div className="text-[2rem] text-grayscale-90 font-poppins font-bold">My Quizzes</div>
                        <div className="mb-8 text-grayscale-90 text-lg">Pick any of your quizzes below or create a new one</div>
                    </div>

                    <Button className='ml-auto rounded-[30px]' onClick={() => { setshowcreateQuizModal(true) }}><Plus /> Add New</Button>
                </div>


                <div className='grid lg:grid-cols-3 2xl:grid-cols-4 gap-4'>
                    {quizzes?.data.map((quiz: QuizType) =>
                        <Quiz key={quiz.id} quiz={quiz} />
                    )}
                </div>
                <div className='flex justify-end items-center mt-16'>
                    <Button variant="tertiary">More</Button>
                </div>
            </div>
            <div>  <div className="text-[2rem] text-grayscale-90 font-poppins font-bold">Explore</div>
                <div className="mb-8 text-grayscale-90 text-lg">Wanna take a quiz, checkout quizzes from other users below</div>

                <div className='grid lg:grid-cols-3 2xl:grid-cols-4 gap-4'>
                    {/* {categories.map(category =>
                        <Quiz key={category.id} quiz={quiz} />
                    )} */}
                </div>

            </div>
            <QuizCreation showModal={showcreateQuizModal} closeModal={closeModal} />
        </div>
    )
}

export default Page