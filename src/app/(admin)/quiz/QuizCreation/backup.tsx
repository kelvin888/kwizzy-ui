// import React, { FC } from 'react'
// import Button from 'components/button/Button'
// import TextArea from 'components/form/TextArea'
// import TextInput from 'components/form/TextInput'
// import Field from 'components/form/field'
// import Radio from 'components/radio'
// import { FieldError, useForm } from 'react-hook-form'
// import { joiResolver } from '@hookform/resolvers/joi'
// import Joi from 'joi'
// import { Plus } from 'lucide-react'
// import { useQuizCreationStore, Question } from 'store/quizCreation'

// type Props = {
//     showModal: boolean
// }

// const QuizCreation: FC<Props> = ({ showModal }) => {
//     const { register, handleSubmit, formState: { errors } } = useForm({
//         resolver: joiResolver<QuizCreationData>(schema),
//     });

//     const { addQuestion, questions, quizTitle, setQuizTitle, addOptionToQuestion, updateQuestion } = useQuizCreationStore()

//     const onSubmit = (data: QuizCreationData) => {
//         console.log(data);
//         // Perform submission logic here
//     };

//     const handleNameBlur = (event: React.FocusEvent<HTMLInputElement>) => {
//         const title = event.target.value;
//         setQuizTitle(title);
//     };

//     const handleAddQuestionClick = () => {
//         addQuestion("Empty Question");
//     };

//     const handleQuestionTextChange = (index: number, event: React.ChangeEvent<HTMLTextAreaElement>) => {
//         updateQuestion(index, event.target.value);
//     };

//     const handleOptionTextChange = (questionIndex: number, optionIndex: number, event: React.ChangeEvent<HTMLInputElement>) => {
//         addOptionToQuestion(questionIndex, optionIndex, event.target.value);
//     };

//     return (
//         <Dialog open={showModal}>
//             <DialogContent className="sm:max-w-[85%] overflow-hidden">
//                 <form onSubmit={handleSubmit(onSubmit)} className=" text-grayscale-90 font-poppins font-bold">
//                     <div className="flex min-h-full">
//                         <div className='border-r border-grayscale-40 bg-grayscale-20 p-6 w-[22rem] flex flex-col gap-5'>
//                             <div>
//                                 <h2 className='text-2xl'>Create a quiz</h2>
//                             </div>

//                             <div>
//                                 <Field.Group>
//                                     <Field.Label required>Quiz name</Field.Label>
//                                     <TextInput {...register("name")} onBlur={handleNameBlur} required />
//                                     <Field.Error data-cy="login-form-password-error-label">
//                                         {errors.name && <span>{(errors.name as FieldError).message}</span>}
//                                     </Field.Error>
//                                 </Field.Group>
//                             </div>

//                             <div>Questions</div>
//                             {questions.map((question: Question, questionIndex: number) => (
//                                 <div key={question.id} className='bg-white p-3'>
//                                     <TextArea value={question.questionText} onChange={(event) => handleQuestionTextChange(questionIndex, event)} placeholder='Type your question here' required rows={2} />
//                                     <Field.Error data-cy="login-form-password-error-label">
//                                         {errors.question && <span>{(errors.question as FieldError).message}</span>}
//                                     </Field.Error>
//                                     {question.options.map((option, optionIndex) => (
//                                         <div key={`${question.id}-${optionIndex}`} className='flex w-full gap-5 items-center'>
//                                             <Radio />
//                                             <TextInput value={option.text} onChange={(event) => handleOptionTextChange(questionIndex, optionIndex, event)} className='w-full' placeholder='Add option' />
//                                         </div>
//                                     ))}
//                                     <Button onClick={() => addOptionToQuestion(questionIndex, '')}>
//                                         <Plus />
//                                         Add Option
//                                     </Button>
//                                 </div>
//                             ))}

//                             <Button onClick={handleAddQuestionClick}>
//                                 <Plus />
//                                 Add Question
//                             </Button>

//                         </div >

//                         <div className='p-5 relative flex-1 flex flex-col gap-5 overflow-y-auto h-[45rem] max-h-[90vh]'>
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
