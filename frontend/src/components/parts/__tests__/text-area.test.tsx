import '@testing-library/jest-dom';

import { axe } from 'jest-axe';
import { FieldError } from 'react-hook-form';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextArea from '../form/text-area';

describe('TextArea component', () => {
  it('renders without crashing', () => {
    render(<TextArea name="test-textarea" />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('applies provided props correctly', () => {
    render(<TextArea name="test-textarea" placeholder="Enter your text" disabled />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('name', 'test-textarea');
    expect(textarea).toHaveAttribute('placeholder', 'Enter your text');
    expect(textarea).toBeDisabled();
  });

  it('responds to user input correctly', async () => {
    render(<TextArea name="test-textarea" />);
    const textarea = screen.getByRole('textbox');
    await userEvent.type(textarea, 'Hello, World!');
    expect(textarea).toHaveValue('Hello, World!');
  });

  it('displays error styling when errors prop is provided', () => {
    render(
      <TextArea
        name="test-textarea"
        errors={{ message: 'This field is required' } as FieldError}
      />,
    );
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('border-red-error');
    expect(textarea).toHaveAttribute('aria-invalid', 'true');
  });

  it('does not display error styling when errors prop is not provided', () => {
    render(<TextArea name="test-textarea" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('border-gray-300');
    expect(textarea).toHaveAttribute('aria-invalid', 'false');
  });

  it('merges custom className with base styles', () => {
    render(<TextArea name="test-textarea" className="custom-class" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('custom-class');
    expect(textarea).toHaveClass('border-gray-300');
  });

  // Accessibility
  it('has no accessibility violations', async () => {
    // this test fails without a label. we're passing one here because
    // <Checkbox /> should not be rendered directly, rather we expect that
    // <FormField type='checkbox' /> will be used, which always provides a <label>
    const { container } = render(
      <>
        <label htmlFor="accessible-textarea">accessible-textarea</label>
        <TextArea name="accessible-textarea" />
      </>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
