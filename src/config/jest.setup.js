import { jest } from '@jest/globals';
import '@testing-library/jest-dom';
import 'react';
import 'react-dom';

// Mock IntersectionObserver
class IntersectionObserver {
    constructor() { }

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

global.IntersectionObserver = IntersectionObserver;

// Mock next/navigation module
jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            pathname: '',
            push: jest.fn(),
        };
    },
}));
