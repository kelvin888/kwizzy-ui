import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Home from "../app/page"

describe('Rendering', () => {
    it('Shows a welcome message', () => {
        render(<Home />);
        const welcomeMessage = screen.getByTestId('welcome-text');

        expect(welcomeMessage).toBeInTheDocument();
        expect(welcomeMessage).toHaveTextContent('Welcome to the App!');

    });
});