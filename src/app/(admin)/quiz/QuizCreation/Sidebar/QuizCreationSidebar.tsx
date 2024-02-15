import Button from 'components/button/Button';
import TextInput from 'components/form/TextInput'
import Field from 'components/form/field'
import { Plus } from 'lucide-react';
import React, { FC } from 'react'
import { FieldError, FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';

type Props = {
    errors: FieldErrors<QuizCreationData>;
    questions: Question[];
    register: UseFormRegister<QuizCreationData>;
    handleAddQuestionClick: () => void;
    watch: UseFormWatch<QuizCreationData>
}

const QuizCreationSidebar: FC<Props> = ({ errors, questions, register, handleAddQuestionClick }) => {
    return (
        <div className='border-r border-grayscale-40 bg-grayscale-20 p-6 w-[22rem] flex flex-col gap-5'>
            <div>
                <h2 className='text-2xl'>Create a quiz</h2>
            </div>

            <div>
                <Field.Group>
                    <Field.Label required>Quiz name</Field.Label>
                    <TextInput {...register("title")} required />
                    <Field.Error>
                        {errors.title && <span>{(errors.title as FieldError).message}</span>}
                    </Field.Error>
                </Field.Group>
            </div>

            <div>Questions</div>
            {questions.map((question, index) =>
                <div key={`${question}${index}`} className='bg-white p-3'>
                    <TextInput className='w-full'
                        // {...register(`questions[${index}].questionText`)}
                        readOnly />
                </div>
            )}

            <Button onClick={handleAddQuestionClick}>
                <Plus />
                Add Question
            </Button>

        </div >)
}

export default QuizCreationSidebar