import React, { FC } from 'react'
type Props = {
    quizData: Quiz
}
const Quiz: FC<Props> = ({ quizData }) => {
    return (
        <div>{JSON.stringify(quizData)}</div>
    )
}

export default Quiz