import React, { type FC } from 'react'
import { type QuizType } from 'types/quiz'
interface Props {
    quizData: QuizType
}
const Quiz: FC<Props> = ({ quizData }) => {
    return (
        <div>{JSON.stringify(quizData)}</div>
    )
}

export default Quiz