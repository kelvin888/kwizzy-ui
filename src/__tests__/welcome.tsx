import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Home from "../app/page"

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            pathname: '',
            push: jest.fn()
        };
    },
}));

describe('Rendering', () => {
    it('Shows a welcome message', () => {
        render(<Home />);
        const homeContainer = screen.getByTestId('home-container');

        expect(homeContainer).toBeInTheDocument();

    });
});