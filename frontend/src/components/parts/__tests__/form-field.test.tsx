import '@testing-library/jest-dom';

import { axe } from 'jest-axe';
import React from 'react';
import { FieldError } from 'react-hook-form';

import { render, screen } from '@testing-library/react';
import FormField from '../form/form-field';

describe('FormField Component', () => {
  const baseProps = {
    name: 'name',
    label: 'Name',
    errors: undefined,
  };

  it('should render the label when provided', () => {
    render(<FormField type="text" {...baseProps} />);

    const labelElement = screen.getByText(baseProps.label);
    expect(labelElement).toBeInTheDocument();
  });

  it('axe accessibility should be happy', async () => {
    render(<FormField type="text" {...baseProps} />);

    const labelElement = screen.getByText(baseProps.label);
    expect(await axe(labelElement)).toHaveNoViolations();
  });

  it('should not render the label when not provided', () => {
    render(<FormField type="text" {...baseProps} label={''} />);

    const labelElement = screen.queryByText(baseProps.label);
    expect(labelElement).toBeNull();
  });

  it('should render the input element', () => {
    render(<FormField type="text" {...baseProps} />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('name', baseProps.name);
  });

  it('should render the error message when errors are provided', () => {
    const errorProps = {
      ...baseProps,
      errors: { message: 'Error message' } as FieldError,
    };
    render(<FormField type="text" {...errorProps} />);

    const errorMessage = screen.getByRole('alert');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Error message');
  });

  it('does not render the error message when no errors are provided', () => {
    render(<FormField type="text" {...baseProps} />);

    const errorMessage = screen.getByRole('alert');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toBeEmptyDOMElement();
  });
});
