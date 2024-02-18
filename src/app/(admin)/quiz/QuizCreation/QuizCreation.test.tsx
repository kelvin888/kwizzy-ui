import { render, screen } from '@testing-library/react';
import QuizCreation from './QuizCreation';

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            pathname: '',
            push: jest.fn()
        };
    },
}));

describe('Quiz creation Component', () => {

    test('renders QuizCreation component', () => {
        // render(<QuizCreation closeModal={() => { }} showModal={false} />);
        // expect(screen.getByTestId('quiz-title-input')).toBeInTheDocument();
        // expect(screen.getByTestId("quiz-time-input")).toBeInTheDocument()

    });

    test('adds a new question when "Add Question" button is clicked', () => {
        // render(<QuizCreation />);
    });
});
