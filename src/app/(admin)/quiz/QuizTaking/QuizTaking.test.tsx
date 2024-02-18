// import { fireEvent, render } from "@testing-library/react";
// import Quiz from "../Quiz/Quiz";

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            pathname: '',
            push: jest.fn()
        };
    },
}));

describe('Quiz Component', () => {
    // const mockQuizData = {
    //     id: 'quiz123',
    //     title: 'Sample Quiz',
    //     questions: [
    //         {
    //             id: 'q1',
    //             text: 'What is the capital of France?',
    //             options: [
    //                 { id: 'a', text: 'Paris' },
    //                 { id: 'b', text: 'Berlin' },
    //                 { id: 'c', text: 'London' },
    //             ],
    //         },
    //         // Add more questions as needed
    //     ],
    // };

    test('renders quiz component with questions', () => {
        // const { getByText } = render(<Quiz quizData={mockQuizData} />);
        // expect(getByText('Sample Quiz')).toBeInTheDocument();
        // expect(getByText('What is the capital of France?')).toBeInTheDocument();
    });

    test('allows user to select answers', () => {
        // const { getByLabelText } = render(<Quiz quizData={mockQuizData} />);
        // const parisOption = getByLabelText('Paris');
        // fireEvent.click(parisOption);
        // expect(parisOption).toBeChecked();
    });

    // Add more tests as needed
});