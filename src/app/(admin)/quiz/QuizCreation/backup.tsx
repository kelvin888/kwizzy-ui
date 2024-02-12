// {questions.map((question, index) => (
//     <div key={index}>
//         {/* Question text */}
//         <input {...register(`questions[${index}].questionText`)} />

//         {/* Options */}
//         {question.options.map((option, optionIndex) => (
//             <div key={optionIndex}>
//                 <input {...register(`questions[${index}].options[${optionIndex}]`)} />
//             </div>
//         ))}
//     </div>
// ))}

// {/* Error messages */}
// <div>
//     {errors.name && <span>{errors.name.message}</span>}
//     {errors.questions && errors.questions.map((questionError, index) => (
//         <div key={index}>
//             {questionError.questionText && <span>{questionError.questionText.message}</span>}
//             {questionError.options && questionError.options.map((optionError, optionIndex) => (
//                 <div key={optionIndex}>
//                     <span>{optionError.message}</span>
//                 </div>
//             ))}
//         </div>
//     ))}
// </div>