import { act, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import React from 'react';

import { AuthContext } from 'common/context';

import { LoginForm } from './LoginForm';

function value() {
  return {
    isLoading: true,
    isAuthenticated: false,
    user: null,
    login: async (e: string, p: string) => e === 'my-user',
    logout: () => {},
  };
}

const LoginRender = () => {
  render(
    <AuthContext.Provider value={value()}>
      <LoginForm />
    </AuthContext.Provider>
  );
};

test('renders login and submit success', async () => {
  LoginRender();

  const emailInput = screen.getByLabelText('email') as HTMLInputElement;
  const passwordInput = screen.getByLabelText('password') as HTMLInputElement;
  const button = screen.getByText('Login');

  await user.type(emailInput, 'my-user');
  await user.type(passwordInput, 'my-pass');
  await act(async () => user.click(button));

  expect(emailInput.value).toBe('my-user');
  expect(passwordInput.value).toBe('my-pass');
  expect(button.innerHTML).toBe('loading1...');
});

test('renders login and submit fail', async () => {
  LoginRender();

  const emailInput = screen.getByLabelText('email') as HTMLInputElement;
  const passwordInput = screen.getByLabelText('password') as HTMLInputElement;
  const button = screen.getByText('Login');

  await user.type(emailInput, 'xx-user');
  await user.type(passwordInput, 'xx-pass');
  await act(async () => user.click(button));

  expect(emailInput.value).toBe('');
  expect(passwordInput.value).toBe('');
});
