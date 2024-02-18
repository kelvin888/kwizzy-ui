import '@testing-library/jest-dom';
import 'react';
import 'react-dom';
import { jest } from '@jest/globals';

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            pathname: '',
            push: jest.fn(),
        };
    },
}));