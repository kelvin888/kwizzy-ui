// import React, { FC } from 'react'
// import Button from 'components/button/Button'
// import TextArea from 'components/form/TextArea'
// import TextInput from 'components/form/TextInput'
// import Field from 'components/form/field'
// import Radio from 'components/radio'
// import Joi from 'joi'
// import {
//     Dialog,
//     DialogContent,
// } from "@/components/ui/dialog"
// import useQuizCreationStore from 'store/quizCreation'
// import { Plus } from 'lucide-react'
// import { v4 as uuidv4 } from 'uuid';
// import { joiResolver } from '@hookform/resolvers/joi'
// import { FieldError, useForm } from 'react-hook-form'



// const schema = Joi.object({
//     name: Joi.string().required().messages({
//         "string.empty": "Name cannot be empty",
//     }),
//     questions: Joi.array().items(
//         Joi.object({
//             questionText: Joi.string().required().messages({
//                 'string.empty': 'Question cannot be empty',
//                 'any.required': 'Question is required'
//             }),
//             options: Joi.array().items(
//                 Joi.object({
//                     text: Joi.string().required()
//                 }).messages({
//                     'string.empty': 'Option cannot be empty',
//                     'any.required': 'At least one option is required'
//                 })
//             )
//         })
//     ),
// });



// type Props = {
//     showModal: boolean
//     closeModal: () => void
// }

// const QuizCreation: FC<Props> = ({ showModal, closeModal }) => {

//     const { register, handleSubmit, formState: { errors }, watch } = useForm<QuizCreationData>({
//         resolver: joiResolver(schema),
//     });

//     const { addQuestion, questions } = useQuizCreationStore()

//     const onSubmit = (data: QuizCreationData) => {
//         console.log(data);
//         // Perform submission logic here
//     };

//     const handleAddQuestionClick = () => {
//         addQuestion("");
//     };



//     const values = watch()


//     return (
//         <Dialog open={showModal} onOpenChange={closeModal}>
//             <DialogContent className="sm:max-w-[85%] overflow-hidden">
//                 <form className="text-grayscale-90 font-poppins font-bold"
//                     onSubmit={handleSubmit(onSubmit)}>
//                     <div
//                         className="flex min-h-full"
//                     >
//                         <div className='border-r border-grayscale-40 bg-grayscale-20 p-6 w-[22rem] flex flex-col gap-5'>
//                             <div>
//                                 <h2 className='text-2xl'>Create a quiz</h2>
//                             </div>

//                             <div>
//                                 <Field.Group>
//                                     <Field.Label required>Quiz name</Field.Label>
//                                     <TextInput {...register("name")} />
//                                     <Field.Error data-cy="login-form-password-error-label">
//                                         {errors.name && <span>{(errors.name as FieldError).message}</span>}
//                                     </Field.Error>
//                                 </Field.Group>
//                             </div>

//                             <div>Questions</div>
//                             {questions.map((question, index) =>
//                                 <div key={question.id} className='bg-white p-3'>
//                                     {values.questions && values.questions[index].questionText}
//                                 </div>
//                             )}

//                             <Button onClick={handleAddQuestionClick}>
//                                 <Plus />
//                                 Add Question
//                             </Button>

//                         </div >

//                         <div className='p-5 relative flex-1 flex flex-col gap-5 overflow-y-auto h-[45rem] max-h-[90vh]'>
//                             {questions.map((question, questionIndex) =>
//                                 <div key={question.id} className='flex flex-col gap-5'>
//                                     <div className='flex items-center gap-5'>
//                                         <div className='rounded-full h-10 w-10 bg-grayscale-50 text-white flex items-center justify-center text-2xl'>{questionIndex + 1}</div>
//                                         <div className='text-2xl'>Question</div>
//                                     </div>

//                                     <Field.Group>
//                                         <TextArea
//                                             placeholder='Type your question here'
//                                             rows={2}
//                                             {...register(`questions[${questionIndex}].questionText`)}
//                                         />
//                                         <Field.Error data-cy="login-form-password-error-label">
//                                             {errors.questions && errors.questions[questionIndex]?.questionText && <span>{errors.questions[questionIndex].questionText.message}</span>}
//                                         </Field.Error>
//                                     </Field.Group>
//                                     <div className='pl-5 flex flex-col gap-3'>
//                                         {question.options.map((option, optionIndex) =>
//                                             <Field.Group key={option.id} className='flex w-full gap-5 items-center'>
//                                                 <TextInput
//                                                     className='w-full'
//                                                     placeholder='Add option'
//                                                     {...register(`questions[${questionIndex}].options[${optionIndex}].text`)}
//                                                 // onChange={(e) => handleOptionChange(question.id, option.id, e)}
//                                                 />
//                                                 <Field.Error className='w-full'>
//                                                     {errors.questions && errors.questions[questionIndex]?.options && errors.questions[questionIndex]?.options[optionIndex]?.text && <span>{errors.questions[questionIndex]?.options[optionIndex]?.text.message}</span>}
//                                                 </Field.Error>
//                                             </Field.Group>
//                                         )}
//                                     </div>
//                                 </div>
//                             )}




//                             <div className='flex justify-between'>
//                                 <div className='w-full flex'>
//                                     <Button className='ml-auto' variant="primary" type='submit' isLoading={false}>Submit</Button>
//                                 </div>
//                             </div>

//                         </div>
//                     </div >
//                 </form >
//             </DialogContent>
//         </Dialog>
//     )
// }

// export default QuizCreation