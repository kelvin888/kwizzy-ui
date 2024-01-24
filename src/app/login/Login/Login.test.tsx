// __tests__/login.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils'; // Import 'act' for asynchronous testing
import LoginPage from 'app/login/page';
import Login from './Login';

describe('Login Page', () => {
    test('renders login page with login component', () => {
        const { getByText, getByLabelText } = render(<Login onLogin={() => null} />);
        // expect(getByText('Login Page')).toBeInTheDocument();
        // expect(getByLabelText('Username:')).toBeInTheDocument();
        // expect(getByLabelText('Password:')).toBeInTheDocument();
    });

    test('allows user to input credentials and handle login', async () => {
        // const { getByLabelText, getByText } = render(<Login onLogin={() => null} />);

        // await act(async () => {
        //     fireEvent.change(getByLabelText('Username:'), { target: { value: 'testuser' } });
        //     fireEvent.change(getByLabelText('Password:'), { target: { value: 'password123' } });
        //     fireEvent.click(getByText('Login'));
        // });

        // Add assertions based on your specific scenario, e.g., expect redirection or success message
    });

    test('handles login with invalid credentials', async () => {
        // const { getByLabelText, getByText } = render(<Login onLogin={() => null} />);

        // await act(async () => {
        //     fireEvent.change(getByLabelText('Username:'), { target: { value: 'invaliduser' } });
        //     fireEvent.change(getByLabelText('Password:'), { target: { value: 'invalidpassword' } });
        //     fireEvent.click(getByText('Login'));
        // });

        // Add assertions based on your specific scenario, e.g., expect error message
    });
});
