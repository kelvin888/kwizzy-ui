'use client'
import { useRouter } from 'next/navigation'
import React, { type FC } from 'react'
import Category3 from 'assets/images/featured-category/category-3.jpeg'
// import useQuizTakingStore from 'store/quizTaking'
import { type QuizType } from 'types/quiz'

interface Props {
    quiz: QuizType
}

const Category: FC<Props> = ({ quiz }) => {
    const router = useRouter()
    // const { setQuiz } = useQuizTakingStore()

    const handleCategoryClick = (): void => {
        // setQuiz(quiz)
        router.push('/quiz/details')
    }

    return (
        <div
            style={{ backgroundImage: `url(${Category3.src})` }}
            className={'relative rounded-[1.875rem] bg-cover bg-no-repeat h-[10.7rem] w-full 2xl:w-[14.6rem] overflow-hidden min-w-[16rem]'}
            onClick={handleCategoryClick}
        >
            <div className='absolute bottom-3 left-5 font-poppins text-white text-xl font-bold'>{quiz.title}</div>
        </div>
    )
}

export default Category
