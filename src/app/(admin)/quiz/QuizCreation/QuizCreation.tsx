import React, { FC } from 'react'
import Button from 'components/button/Button'
import TextArea from 'components/form/TextArea'
import TextInput from 'components/form/TextInput'
import Field from 'components/form/field'
import Joi from 'joi'
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import { Plus } from 'lucide-react'
import { v4 as uuidv4 } from 'uuid';
import { joiResolver } from '@hookform/resolvers/joi'
import { FieldError, useFieldArray, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import quizService from 'services/quizService'
import { AxiosError } from "axios"
import { toast } from 'react-toastify'
import { handleError } from 'utils/getAxiosErrorMessage'
import { useRouter } from 'next/navigation'
import { queryClient } from 'api/client'
import { quizKeys } from 'constants/queryKeys'


const schema = Joi.object({
    title: Joi.string().required().messages({
        "string.empty": "Title cannot be empty",
    }),
    questions: Joi.array().items(
        Joi.object({
            id: Joi.string().required(),
            questionText: Joi.string().required().messages({
                'string.empty': 'Question cannot be empty',
                'any.required': 'Question is required'
            }),
            options: Joi.array().items(
                Joi.object({
                    id: Joi.string().required(),
                    text: Joi.string().required()
                }).messages({
                    'string.empty': 'Option cannot be empty',
                    'any.required': 'At least one option is required'
                })
            )
        })
    ),
});


type Props = {
    showModal: boolean
    closeModal: () => void
}

const QuizCreation: FC<Props> = ({ showModal, closeModal }) => {

    const router = useRouter()

    const { control, register, handleSubmit, formState: { errors, isValid }, watch, setValue } = useForm<QuizCreationData>({
        resolver: joiResolver(schema),
        defaultValues: {
            title: '',
            questions: [{ questionText: '', id: uuidv4(), options: [{ text: '', id: uuidv4() }] }]
        }
    });

    const { fields, append } = useFieldArray({
        control,
        name: "questions"
    });

    const onSubmit = (data: QuizCreationData) => {
        console.log(data);
        // Perform submission logic here
        createQuiz(data)
    };

    const handleAddQuestionClick = () => {
        append({ questionText: '', id: uuidv4(), options: [{ text: '', id: uuidv4() }] })
    };

    const handleAddOptionClick = (questionIndex: number) => {
        const newOption = { text: '', id: uuidv4() };
        setValue(
            `questions.${questionIndex}.options`,
            [...((values.questions && values.questions[questionIndex]?.options) || []) as Option[], newOption]
        );

    };

    const { mutate: createQuiz, isPending } = useMutation({
        mutationFn: quizService.createQuiz,
        onSuccess: (response) => {
            toast.success("New Quiz created");
            router.push("/quiz")
            closeModal()
            queryClient.invalidateQueries({ queryKey: [quizKeys.FIND_ALL] })
        },
        onError(error: AxiosError) {
            toast(handleError(error), { type: "error" });
        },
    });

    const values = watch()

    return (
        <Dialog open={showModal} onOpenChange={closeModal}>
            <DialogContent className="sm:max-w-[85%] overflow-hidden">
                <form className="text-grayscale-90 font-poppins font-bold"
                    onSubmit={handleSubmit(onSubmit)}>
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
                                    <TextInput {...register("title")} />
                                    <Field.Error data-cy="login-form-password-error-label">
                                        {errors.title && <span>{(errors.title as FieldError).message}</span>}
                                    </Field.Error>
                                </Field.Group>
                            </div>

                            <div>Questions</div>
                            {values.questions && values.questions.map((question) =>
                                <div key={question.id} className='bg-white p-3'>
                                    {question.questionText}
                                </div>
                            )}

                            <Button variant="plain" onClick={handleAddQuestionClick}>
                                <Plus />
                                Add Question
                            </Button>

                        </div >

                        <div className='p-5 relative flex-1 flex flex-col gap-5 overflow-y-auto h-[45rem] max-h-[90vh]'>
                            {fields.map((question, questionIndex) =>
                                <div key={question.id} className='flex flex-col gap-5'>
                                    <div className='flex items-center gap-5'>
                                        <div className='rounded-full h-10 w-10 bg-grayscale-50 text-white flex items-center justify-center text-2xl'>{questionIndex + 1}</div>
                                        <div className='text-2xl'>Question</div>
                                    </div>

                                    <Field.Group>
                                        <TextArea
                                            placeholder='Type your question here'
                                            rows={2}
                                            {...register(`questions.${questionIndex}.questionText`)}
                                        />
                                        <Field.Error data-cy="login-form-password-error-label">
                                            {<span>{errors.questions?.length && errors?.questions[questionIndex]?.questionText?.message}</span>}
                                        </Field.Error>
                                    </Field.Group>
                                    <div className='pl-5 flex flex-col gap-3'>
                                        {values?.questions?.[questionIndex]?.options?.map((option, optionIndex) =>
                                            <Field.Group key={option.id} className='flex w-full gap-5 items-center'>
                                                <TextInput
                                                    className='w-full'
                                                    placeholder='Add option'
                                                    {...register(`questions.${questionIndex}.options.${optionIndex}.text`)}
                                                />

                                                <Field.Error className='w-full'>
                                                    {errors?.questions?.[questionIndex]?.options?.[optionIndex]?.text?.message ?? ''}
                                                </Field.Error>
                                            </Field.Group>
                                        )}
                                        <Button variant="plain" className='w-[15rem]' onClick={() => handleAddOptionClick(questionIndex)}>
                                            <Plus />
                                            Add Option
                                        </Button>
                                    </div>
                                </div>
                            )}




                            <div className='flex justify-between'>
                                <div className='w-full flex'>
                                    <Button className='ml-auto' variant="primary" type='submit' isLoading={isPending}>Submit</Button>
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