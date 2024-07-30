import '@testing-library/jest-dom';

import { axe } from 'jest-axe';

import { render, screen } from '@testing-library/react';
import Label from '../form/label';

describe('Label component', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('renders the label with the correct text', () => {
    render(<Label text="Email" htmlFor="email-input" />);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('axe accessibility should be happy', async () => {
    render(<Label text="Email" htmlFor="email-input" />);

    const labelElement = screen.getByText('Email');
    expect(await axe(labelElement)).toHaveNoViolations();
  });

  test('sets the htmlFor attribute correctly', () => {
    render(
      <>
        <Label text="Password" htmlFor="password-input" />
        <input type="password" id="password-input" />
      </>,
    );
    expect(screen.getByText('Password')).toHaveAttribute('for', 'password-input');
  });

  test('renders the label with an empty text', () => {
    const { container } = render(
      <div>
        <Label text="" htmlFor="empty-text-input" />
        <input type="text" id="empty-text-input" />
      </div>,
    );

    expect(container.querySelector('label')).toBeInTheDocument();
  });

  test('throws an error when htmlFor is an empty string', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    const renderLabel = () => {
      render(<Label text="Empty For" htmlFor="" />);
    };

    expect(renderLabel).toThrow('htmlFor cannot be an empty string as it breaks accessibility');
  });
});
