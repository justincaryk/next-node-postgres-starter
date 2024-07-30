import '@testing-library/jest-dom';

import { axe, toHaveNoViolations } from 'jest-axe';

import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../form/button';

expect.extend(toHaveNoViolations);

describe('Button component', () => {
  test('renders the button with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('axe accessibility should be happy', async () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    expect(await axe(buttonElement)).toHaveNoViolations();
  });

  test('applies disabled styles when the disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByText('Disabled Button');
    expect(button).toBeDisabled();
  });

  test('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    fireEvent.click(screen.getByText('Clickable Button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call the onClick handler when disabled', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Disabled Button
      </Button>,
    );
    fireEvent.click(screen.getByText('Disabled Button'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
