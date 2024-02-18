"use client"
import Image from 'next/image'
import React, { type FC, useEffect } from 'react'
import QuizImage from "assets/images/featured-category/category-1.jpeg"
import Button from 'components/button/Button'
import Radio from 'components/radio'
import useQuizTimer from 'hooks/useQuizTimer'
import { useRouter } from 'next/navigation'
import useQuizTakingStore from 'store/quizTaking'


const QuizDetails: FC = () => {
    const { quiz, userProgress, selectAnswer, goToNextQuestion, goToPreviousQuestion, resetAnswers, computeScore } = useQuizTakingStore()
    const { currentQuestionIndex, selectedAnswers } = userProgress
    const router = useRouter()
    const handleSubmission = (): void => {
        // submit to backend and get a response
        computeScore()
        router.push("/quiz/result")
    }
    useEffect(() => {
        resetAnswers()
    }, [resetAnswers])

    const { formattedTime } = useQuizTimer({ durationInSeconds: 10, onTimeElapsed: handleSubmission });

    const handleSelectedOption = (optionId: string): void => {
        selectAnswer(optionId)
    }
    const isLastQuestion = (quiz != null) && currentQuestionIndex === quiz.questions.length - 1
    const isFirstQuestion = currentQuestionIndex === 0
    return (
        <div className='text-grayscale-90 p-5'>
            <div className='flex justify-between'>
                <div>
                    <div className="text-[2rem] text-grayscale-90 font-poppins font-bold">History Quiz</div>
                    <div className="mb-8 text-grayscale-90 text-lg">Answer the question below</div>
                </div>

                <div className='text-3xl font-bold'>
                    Timer: {formattedTime}Mins
                </div>
            </div>


            <div className='flex gap-12'>
                <div>
                    <Image className='rounded-[1.875rem]' src={QuizImage} alt='quiz image' />
                </div>
                <div className='space-y-10 flex-1'>
                    <div className='font-semibold text-2xl'>Question {currentQuestionIndex + 1}/{quiz?.questions.length} </div>
                    <div className='text-xl'>{quiz?.questions[currentQuestionIndex].questionText}</div>
                </div>
            </div>

            <div className='mt-6 font-semibold text-2xl'>Choose answer</div>

            <div className='text-lg mt-6 flex flex-col gap-4 text-grayscale-90'>
                {quiz?.questions[currentQuestionIndex].options.map(((option, index) =>
                    <div key={index} className='flex items-center gap-7'>
                        <Radio onChange={() => { handleSelectedOption(option.id); }}
                            checked={selectedAnswers[currentQuestionIndex] === option.id}
                            size="small" />
                        <div>{option.text}</div>
                    </div>
                ))}
            </div>

            <div className='flex items-center mt-16'>
                {!isFirstQuestion &&
                    <Button onClick={goToPreviousQuestion} variant="tertiary">Previous</Button>
                }
                {isLastQuestion
                    ? <Button className='ml-auto' variant="tertiary" onClick={handleSubmission}>Submit Quiz</Button> :
                    <Button className='ml-auto' variant="tertiary" onClick={goToNextQuestion}>Next</Button>
                }
            </div>
        </div>
    )
}

export default QuizDetails