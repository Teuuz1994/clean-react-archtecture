import { render, RenderResult } from '@testing-library/react';

import Login from '.';

type SutTypes = {
  sut: RenderResult;
};

const makeSut = (): SutTypes => {
  const sut = render(<Login />);
  return {
    sut,
  };
};

describe('LoginView', () => {
  it('Should start with initial state', () => {
    const { sut } = makeSut();
    const errorWrapp = sut.getByTestId('error-wrapp');
    expect(errorWrapp.childElementCount).toBe(0);
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
    const emailStatus = sut.getByTestId('email-status');
    expect(emailStatus.title).toBe('Campo obrigatório');
    expect(emailStatus.textContent).toBe('⛔');
    const passwordStatus = sut.getByTestId('password-status');
    expect(passwordStatus.title).toBe('Campo obrigatório');
    expect(passwordStatus.textContent).toBe('⛔');
  });
});
