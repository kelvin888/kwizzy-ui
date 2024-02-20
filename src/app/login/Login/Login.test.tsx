import React from 'react';
import { waitFor, fireEvent, render } from '@testing-library/react';
import Login from './Login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            pathname: '',
            push: jest.fn()
        };
    },
}));


jest.mock("react-toastify", () => ({
    toast: {
        success: jest.fn(),
        error: jest.fn()
    },
}));

describe('Login Component', () => {
    it('renders login form fields', () => {
        const queryClient = new QueryClient()
        const { getByTestId } = render(<QueryClientProvider client={queryClient}><Login /></QueryClientProvider>);
        expect(getByTestId('login-username')).toBeInTheDocument();
        expect(getByTestId('login-password')).toBeInTheDocument();
    });

    it('allows user to input credentials', async () => {
        const queryClient = new QueryClient()
        const { getByTestId } = render(<QueryClientProvider client={queryClient}><Login /></QueryClientProvider>);
        const usernameInput = getByTestId('login-username');
        const passwordInput = getByTestId('login-password');

        fireEvent.change(usernameInput, { target: { value: 'testuser@gmail.com' } });
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

        expect(usernameInput).toHaveValue('testuser@gmail.com');
        expect(passwordInput).toHaveValue('testpassword');
    });

    it('submits the form with user input', async () => {
        const queryClient = new QueryClient()
        const { getByTestId } = render(<QueryClientProvider client={queryClient}><Login /></QueryClientProvider>);
        const usernameInput = getByTestId('login-username');
        const passwordInput = getByTestId('login-password');
        const submitButton = getByTestId('login-button');

        fireEvent.change(usernameInput, { target: { value: 'testuser@gmail.com' } });
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

        fireEvent.click(submitButton);

        // Add assertions for form submission handling, such as redirecting to the quiz page
        await waitFor(() => {
            // Add an assertion for the expected behavior after form submission, e.g., redirecting to the quiz page
        });
    });

    it('displays error message for invalid email format', async () => {
        const queryClient = new QueryClient()
        const { getByTestId, getByText } = render(<QueryClientProvider client={queryClient}><Login /></QueryClientProvider>);
        const usernameInput = getByTestId('login-username');
        const submitButton = getByTestId('login-button');

        fireEvent.change(usernameInput, { target: { value: 'invalidemailformat' } });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(getByText(/"email" must be a valid email/i)).toBeInTheDocument();
        });
    });

    it('displays error message for empty password', async () => {
        const queryClient = new QueryClient()
        const { getByTestId, getByText } = render(<QueryClientProvider client={queryClient}><Login /></QueryClientProvider>);
        const passwordInput = getByTestId('login-password');
        const submitButton = getByTestId('login-button');

        fireEvent.change(passwordInput, { target: { value: '' } });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(getByText(/"password" is not allowed to be empty/i)).toBeInTheDocument()
        });
    });

    it('displays success message after successful login', async () => {
        // Mock successful login response using jest.fn()
        // Render the component
        // Submit the form
        // Assert that the success message is displayed
    });
});
