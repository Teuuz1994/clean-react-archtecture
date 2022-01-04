import { render } from '@testing-library/react';

import Login from '.';

describe('LoginView', () => {
  it('Should start with initial state', () => {
    const { getByTestId } = render(<Login />);
    const errorWrapp = getByTestId('error-wrapp');
    expect(errorWrapp.childElementCount).toBe(0);
    const submitButton = getByTestId('submit') as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
  });
});
