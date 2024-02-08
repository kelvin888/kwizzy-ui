import React from 'react'
import Button from 'components/button/Button'
import TextArea from 'components/form/TextArea'
import TextInput from 'components/form/TextInput'
import Field from 'components/form/field'
import Radio from 'components/radio'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'

export type QuizCreationData = {
    name: string;
    topic: string;
    difficultyLevel: string;
};

const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }),
    password: Joi.string().required(),
});

const difficultyLevels = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "hard" },
]

const topics = [
    { value: "javascript", label: "Javascript" },
    { value: "bible", label: "Bible" },
]

const QuizCreation = () => {
    const { register, handleSubmit, formState, control } = useForm<QuizCreationData>({
        resolver: joiResolver(schema),
    });
    return (
        <form className=" text-grayscale-90 font-poppins font-bold min-h-[50rem]">


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
                            <TextInput required />
                        </Field.Group>
                    </div>

                    <div>Questions</div>
                    <div className='bg-white p-3'>
                        What is Javascript?
                    </div>

                    <Field.Group>
                        <TextArea required rows={2} />
                    </Field.Group>
                </div >

                <div className='min-h-[50rem] p-5 relative flex-1 flex flex-col gap-5'>
                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center gap-5'>
                            <div className='rounded-full h-10 w-10 bg-grayscale-50 text-white flex items-center justify-center text-2xl'>1</div>
                            <div className='text-2xl'>Question</div>
                        </div>

                        <div>
                            What’s the difference between JavaScript and Java?
                        </div>
                        <div className='flex w-full gap-5 items-center'>
                            <Radio />
                            <TextInput className='w-full' />
                        </div>
                        <div className='flex w-full gap-5 items-center'>
                            <Radio />
                            <TextInput className='w-full' />
                        </div>
                        <div className='flex w-full gap-5 items-center'>
                            <Radio />
                            <TextInput className='w-full' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center gap-5'>
                            <div className='rounded-full h-10 w-10 bg-grayscale-50 text-white flex items-center justify-center text-2xl'>1</div>
                            <div className='text-2xl'>Question</div>
                        </div>

                        <div>
                            What’s the difference between JavaScript and Java?
                        </div>
                        <div className='flex w-full gap-5 items-center'>
                            <Radio />
                            <TextInput className='w-full' />
                        </div>
                        <div className='flex w-full gap-5 items-center'>
                            <Radio />
                            <TextInput className='w-full' />
                        </div>
                        <div className='flex w-full gap-5 items-center'>
                            <Radio />
                            <TextInput className='w-full' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center gap-5'>
                            <div className='rounded-full h-10 w-10 bg-grayscale-50 text-white flex items-center justify-center text-2xl'>1</div>
                            <div className='text-2xl'>Question</div>
                        </div>

                        <div>
                            What’s the difference between JavaScript and Java?
                        </div>
                        <div className='flex w-full gap-5 items-center'>
                            <Radio />
                            <TextInput className='w-full' />
                        </div>
                        <div className='flex w-full gap-5 items-center'>
                            <Radio />
                            <TextInput className='w-full' />
                        </div>
                        <div className='flex w-full gap-5 items-center'>
                            <Radio />
                            <TextInput className='w-full' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center gap-5'>
                            <div className='rounded-full h-10 w-10 bg-grayscale-50 text-white flex items-center justify-center text-2xl'>1</div>
                            <div className='text-2xl'>Question</div>
                        </div>

                        <div>
                            What’s the difference between JavaScript and Java?
                        </div>
                        <div className='flex w-full gap-5 items-center'>
                            <Radio />
                            <TextInput className='w-full' />
                        </div>
                        <div className='flex w-full gap-5 items-center'>
                            <Radio />
                            <TextInput className='w-full' />
                        </div>
                        <div className='flex w-full gap-5 items-center'>
                            <Radio />
                            <TextInput className='w-full' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center gap-5'>
                            <div className='rounded-full h-10 w-10 bg-grayscale-50 text-white flex items-center justify-center text-2xl'>1</div>
                            <div className='text-2xl'>Question</div>
                        </div>

                        <div>
                            What’s the difference between JavaScript and Java?
                        </div>
                        <div className='flex w-full gap-5 items-center'>
                            <Radio />
                            <TextInput className='w-full' />
                        </div>
                        <div className='flex w-full gap-5 items-center'>
                            <Radio />
                            <TextInput className='w-full' />
                        </div>
                        <div className='flex w-full gap-5 items-center'>
                            <Radio />
                            <TextInput className='w-full' />
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='w-full flex'>
                            <Button className='ml-auto' variant="primary" type='submit' isLoading={false}>Submit</Button>
                        </div>
                    </div>

                </div>
            </div >
        </form >
    )
}

export default QuizCreation