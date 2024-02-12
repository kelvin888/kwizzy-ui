import React, { FC } from 'react'
import Button from 'components/button/Button'
import TextArea from 'components/form/TextArea'
import TextInput from 'components/form/TextInput'
import Field from 'components/form/field'
import Radio from 'components/radio'
import Joi from 'joi'
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import useQuizCreationStore from 'store/quizCreation'
import { Plus } from 'lucide-react'
import { v4 as uuidv4 } from 'uuid';



const schema = Joi.object({
    name: Joi.string().required(),
    questions: Joi.array().items(
        Joi.object({
            questionText: Joi.string().required().messages({
                'string.empty': 'Question cannot be empty',
                'any.required': 'Question is required'
            }),
            options: Joi.array().items(
                Joi.object({
                    id: Joi.string().required(),
                    text: Joi.string().required()
                }).required().messages({
                    'object.base': 'Option cannot be empty',
                    'any.required': 'At least one option is required'
                })
            ).min(2).required()
        })
    ).min(1).required(),
});



type Props = {
    showModal: boolean
    closeModal: () => void
}

const QuizCreation: FC<Props> = ({ showModal, closeModal }) => {

    const { addQuestion, questions, setQuizName, quizName, updateQuestion, updateOption } = useQuizCreationStore()

    const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        // console.log(questions);
        // Perform submission logic here
    };

    const handleAddQuestionClick = () => {
        addQuestion("emptyQuestion");
    };


    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuizName(e.target.value)
    }

    const handleQuestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>, questionId: string) => {
        updateQuestion(questionId, e.target.value)
    }



    return (
        <Dialog open={showModal} onOpenChange={closeModal}>
            <DialogContent className="sm:max-w-[85%] overflow-hidden">
                <form className="text-grayscale-90 font-poppins font-bold" onSubmit={onSubmit}>
                    <div
                        className="flex min-h-full"
                    >
                        <div className='border-r border-grayscale-40 bg-grayscale-20 p-6 w-[22rem] flex flex-col gap-5'>
                            <div>
                                <h2 className='text-2xl'>Create a quiz</h2>
                            </div>

                            <div>
                                <Field.Group>
                                    <Field.Label required>Quiz name</Field.Label>
                                    <TextInput onChange={handleNameChange} value={quizName} />
                                    <Field.Error>
                                        .
                                    </Field.Error>
                                </Field.Group>
                            </div>

                            <div>Questions</div>
                            {questions.map((question, index) =>
                                <div key={uuidv4()} className='bg-white p-3'>
                                    {question.questionText}
                                </div>
                            )}

                            <Button onClick={handleAddQuestionClick}>
                                <Plus />
                                Add Question
                            </Button>

                        </div >

                        <div className='p-5 relative flex-1 flex flex-col gap-5 overflow-y-auto h-[45rem] max-h-[90vh]'>
                            {questions.map((question, questionIndex) =>
                                <div key={question.id} className='flex flex-col gap-5'>
                                    <div className='flex items-center gap-5'>
                                        <div className='rounded-full h-10 w-10 bg-grayscale-50 text-white flex items-center justify-center text-2xl'>{questionIndex + 1}</div>
                                        <div className='text-2xl'>Question</div>
                                    </div>

                                    <Field.Group>
                                        <TextArea
                                            className='ring-1 ring-grayscale-50'
                                            placeholder='Type your question here'
                                            rows={2}
                                            onChange={(e) => handleQuestionChange(e, question.id)}
                                            value={question.questionText}
                                        />
                                        <Field.Error>
                                            .
                                        </Field.Error>
                                    </Field.Group>
                                    <div className='pl-5'>
                                        {question.options.map((option) =>
                                            <Field.Group key={option.id} className='flex w-full gap-5 items-center'>
                                                <TextInput className='w-full' placeholder='Add option' onChange={(e) => updateOption(question.id, option.id, e.target.value)} />
                                                <Field.Error className='w-full'>
                                                    .
                                                </Field.Error>
                                            </Field.Group>
                                        )}
                                    </div>
                                </div>
                            )}




                            <div className='flex justify-between'>
                                <div className='w-full flex'>
                                    <Button className='ml-auto' variant="primary" type='submit' isLoading={false}>Submit</Button>
                                </div>
                            </div>

                        </div>
                    </div >
                </form >
            </DialogContent>
        </Dialog>
    )
}

export default QuizCreation