import '@testing-library/jest-dom';

import { axe } from 'jest-axe';
import React from 'react';
import { FieldError } from 'react-hook-form';

import { render, screen } from '@testing-library/react';
import FormField from '../form/form-field';

// jest.mock('./components', () => ({
//   Input: jest.fn(({ errors, name, ...rest }) => (
//     <input
//       data-testid="input"
//       {...rest}
//       name={name}
//       aria-invalid={errors?.message ? 'true' : 'false'}
//     />
//   )),
//   Label: jest.fn(({ text, htmlFor }) => <label htmlFor={htmlFor}>{text}</label>),
// }));

describe('FormField Component', () => {
  const baseProps = {
    name: 'email',
    label: 'Email',
    errors: undefined,
  };

  it('should render the label when provided', () => {
    render(<FormField {...baseProps} />);

    const labelElement = screen.getByText('Email');
    expect(labelElement).toBeInTheDocument();
  });

  it('axe accessibility should be happy', async () => {
    render(<FormField {...baseProps} />);

    const labelElement = screen.getByText('Email');
    expect(await axe(labelElement)).toHaveNoViolations();
  });

  it('should not render the label when not provided', () => {
    render(<FormField {...baseProps} label={''} />);

    const labelElement = screen.queryByText('Email');
    expect(labelElement).toBeNull();
  });

  it('should render the input element', () => {
    render(<FormField {...baseProps} />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('name', 'email');
  });

  it('should render the error message when errors are provided', () => {
    const errorProps = {
      ...baseProps,
      errors: { message: 'Error message' } as FieldError,
    };
    render(<FormField {...errorProps} />);

    const errorMessage = screen.getByRole('alert');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Error message');
  });

  it('does not render the error message when no errors are provided', () => {
    render(<FormField {...baseProps} />);

    const errorMessage = screen.getByRole('alert');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toBeEmptyDOMElement();
  });
});
