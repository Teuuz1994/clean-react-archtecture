import {
  render,
  RenderResult,
  fireEvent,
  cleanup,
} from '@testing-library/react';
import * as faker from 'faker';

import { ValidationStub } from '@/presentation/test';

import Login from '.';

type SutTypes = {
  sut: RenderResult;
};

type SutParams = {
  validationError: string;
};

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub();
  validationStub.errorMessage = params?.validationError;
  const sut = render(<Login validation={validationStub} />);
  return {
    sut,
  };
};

describe('LoginView', () => {
  beforeEach(cleanup);

  it('Should start with initial state', () => {
    const validationError = faker.random.words();
    const { sut } = makeSut({ validationError });
    const errorWrapp = sut.getByTestId('error-wrapp');
    expect(errorWrapp.childElementCount).toBe(0);
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
    const emailStatus = sut.getByTestId('email-status');
    expect(emailStatus.title).toBe(validationError);
    expect(emailStatus.textContent).toBe('⛔');
    const passwordStatus = sut.getByTestId('password-status');
    expect(passwordStatus.title).toBe(validationError);
    expect(passwordStatus.textContent).toBe('⛔');
  });

  it('Should show email error if Validation fails', () => {
    const validationError = faker.random.words();
    const { sut } = makeSut({ validationError });
    const emailInput = sut.getByTestId('email');
    fireEvent.input(emailInput, {
      target: {
        value: faker.internet.email(),
      },
    });
    const emailStatus = sut.getByTestId('email-status');
    expect(emailStatus.title).toBe(validationError);
    expect(emailStatus.textContent).toBe('⛔');
  });

  it('Should show password error if Validation fails', () => {
    const validationError = faker.random.words();
    const { sut } = makeSut({ validationError });
    const passwordInput = sut.getByTestId('password');
    fireEvent.input(passwordInput, {
      target: {
        value: faker.internet.password(),
      },
    });
    const passwordStatus = sut.getByTestId('password-status');
    expect(passwordStatus.title).toBe(validationError);
    expect(passwordStatus.textContent).toBe('⛔');
  });

  it('Should show valid email state if Validation succeeds', () => {
    const { sut } = makeSut();
    const emailInput = sut.getByTestId('email');
    fireEvent.input(emailInput, {
      target: {
        value: faker.internet.email(),
      },
    });
    const emailStatus = sut.getByTestId('email-status');
    expect(emailStatus.title).toBe('Tudo certo!');
    expect(emailStatus.textContent).toBe('✅');
  });

  it('Should show valid password state if Validation succeeds', () => {
    const { sut } = makeSut();
    const passwordInput = sut.getByTestId('password');
    fireEvent.input(passwordInput, {
      target: {
        value: faker.internet.password(),
      },
    });
    const passwordStatus = sut.getByTestId('password-status');
    expect(passwordStatus.title).toBe('Tudo certo!');
    expect(passwordStatus.textContent).toBe('✅');
  });

  it('Should enable submit button if form is valid', () => {
    const { sut } = makeSut();
    const emailInput = sut.getByTestId('email');
    fireEvent.input(emailInput, {
      target: {
        value: faker.internet.email(),
      },
    });
    const passwordInput = sut.getByTestId('password');
    fireEvent.input(passwordInput, {
      target: {
        value: faker.internet.password(),
      },
    });
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement;
    expect(submitButton.disabled).toBe(false);
  });
});
