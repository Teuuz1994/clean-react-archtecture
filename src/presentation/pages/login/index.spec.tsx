import { render } from '@testing-library/react';

import Login from '.';

describe('LoginView', () => {
  it('Should not render spinner and error on start', () => {
    const { getByTestId } = render(<Login />);
    const errorWrapp = getByTestId('error-wrapp');
    expect(errorWrapp.childElementCount).toBe(0);
  });
});
