// QuizCreation.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QuizCreation from './QuizCreation';

describe('Quiz creation Component', () => {

    test('renders QuizCreation component', () => {
        // render(<QuizCreation />);
        expect(screen.getByTestId('quiz-title-input')).toBeInTheDocument();
        expect(screen.getByTestId("quiz-time-input")).toBeInTheDocument()

        //add question(s) to the quiz
        //question  = question plus options. one of the options is the answer

        //cho
    });

    test('adds a new question when "Add Question" button is clicked', () => {
        // render(<QuizCreation />);
    });
});
