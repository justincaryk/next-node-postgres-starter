import '@testing-library/jest-dom';

import { axe } from 'jest-axe';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from '../form/checkbox';

describe('Checkbox component', () => {
  it('renders without crashing', () => {
    render(<Checkbox text="Test Checkbox" id="test-checkbox" />);
    expect(screen.getByLabelText(/Test Checkbox/i)).toBeInTheDocument();
  });

  it('applies provided props correctly', () => {
    render(
      <Checkbox text="Test Checkbox" name="testCheckbox" disabled data-testid="test-checkbox" />,
    );
    const checkbox = screen.getByTestId('test-checkbox');
    expect(checkbox).toHaveAttribute('name', 'testCheckbox');
    expect(checkbox).toBeDisabled();
  });

  it('responds to user events correctly', async () => {
    render(<Checkbox text="Test Checkbox" id="test-checkbox" />);
    const checkbox = screen.getByLabelText(/Test Checkbox/i);

    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  //   it('displays error styling when errors prop is provided', () => {
  //     const { container } = render(
  //       <Checkbox
  //         text="Test Checkbox"
  //         id="test-checkbox"
  //         errors={{ message: 'This field is required' } as any}
  //       />,
  //     );
  //     // TODO: Update test after integrating error state styling
  //   });

  it('applies the correct `id` to input and `htmlFor` to label', () => {
    render(<Checkbox text="Test Checkbox" id="test-checkbox" data-testid="checkbox-data-testid" />);
    const checkbox = screen.getByTestId('checkbox-data-testid');
    const label = screen.getByText(/Test Checkbox/i);

    expect(checkbox).toHaveAttribute('id', 'test-checkbox');
    expect(label).toHaveAttribute('for', 'test-checkbox');
  });

  // Accessibility
  it('has no accessibility violations', async () => {
    const { container } = render(<Checkbox text="Accessible Checkbox" id="accessible-checkbox" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
