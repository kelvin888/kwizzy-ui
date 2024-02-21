import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from "../app/page";

class IntersectionObserver {
    readonly root: Element | null = null;
    readonly rootMargin: string = '';
    readonly thresholds: ReadonlyArray<number> = [];

    constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) { }

    observe() {
        return null;
    }

    unobserve() {
        return null;
    }

    disconnect() {
        return null;
    }
}

//@ts-ignore
global.IntersectionObserver = IntersectionObserver;

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