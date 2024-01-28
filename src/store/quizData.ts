interface Quiz {
    title: string;
    questions: QuizQuestion[];
  }
  
  interface QuizQuestion {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number;
  }
  
  const historyQuiz: Quiz = {
    title: "History Quiz",
    questions: [
      {
        text: "What is the capital of Nigeria",
        correctAnswer: 1,
        id: 1,
        options: [
          "Lagos",
          "Abuja"
        ],
      },
      {
        text: "What is the capital of Ghana",
        correctAnswer: 1,
        id: 2,
        options: [
          "Kumasi",
          "Accra"
        ],
      },
      {
        text: "Who is the president of Nigeria",
        correctAnswer: 0,
        id: 3,
        options: [
          "Tinubu",
          "P. OBI"
        ],
      },
      {
        text: "Who won the last African cup of nations",
        correctAnswer: 2,
        id: 3,
        options: [
          "Nigeria",
          "Ghana",
          "Ivory Coast",
          "Tunisia"
        ],
      }
    ]
  };
  
  export default historyQuiz;
  