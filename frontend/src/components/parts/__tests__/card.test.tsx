import '@testing-library/jest-dom';

import { axe } from 'jest-axe';

import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card, {
  activeCardStyles,
  baseCardStyles,
  hoverCardStyles,
  inactiveCardStyles,
} from '../card';

describe('Card Component', () => {
  it('renders with default styles when inactive', () => {
    render(<Card>Test Card</Card>);
    const card = screen.getByRole('presentation');
    expect(card).toHaveClass(baseCardStyles);
    expect(card).toHaveClass(inactiveCardStyles);
  });

  it('renders with active styles when active prop is true', () => {
    render(<Card active={true}>Test Card</Card>);
    const card = screen.getByRole('presentation');
    expect(card).toHaveClass(baseCardStyles);
    expect(card).toHaveClass(activeCardStyles);
  });

  it('renders with additional className', () => {
    render(<Card className="custom-class">Test Card</Card>);
    const card = screen.getByRole('presentation');
    expect(card).toHaveClass('custom-class');
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Card onClick={handleClick}>Test Card</Card>);
    const card = screen.getByRole('button');
    fireEvent.click(card);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('calls onClick when Enter key is pressed', () => {
    const handleClick = jest.fn();
    render(<Card onClick={handleClick}>Test Card</Card>);
    const card = screen.getByRole('button');
    fireEvent.keyDown(card, { key: 'Enter', keyCode: 13 });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when other keys are pressed', () => {
    const handleClick = jest.fn();
    render(<Card onClick={handleClick}>Test Card</Card>);
    const card = screen.getByRole('button');
    fireEvent.keyDown(card, { key: 'Space', keyCode: 32 });
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies aria attributes when onClick is provided', () => {
    render(
      <Card onClick={() => {}} active={true}>
        Test Card
      </Card>,
    );
    const card = screen.getByRole('button');
    expect(card).toHaveAttribute('aria-pressed', 'true');
    expect(card).toHaveAttribute('aria-live', 'polite');
  });

  it('renders children correctly', () => {
    render(<Card>Test Card</Card>);
    const card = screen.getByRole('presentation');
    expect(card).toHaveTextContent('Test Card');
  });

  it('should pass accessibility test when inactive', async () => {
    const { container } = render(<Card>Test Card</Card>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should pass accessibility test when hover', async () => {
    const { container } = render(<Card id="test-card-id">Test Card</Card>);
    const element = container.querySelector('#test-card-id') as HTMLElement;

    await userEvent.hover(element);

    // test for accessibility
    const results = await axe(container);
    expect(results).toHaveNoViolations();

    // confirm it has hover styling
    expect(element).toHaveClass(hoverCardStyles);
  });

  it('should pass accessibility test when active', async () => {
    const { container } = render(
      <Card id="test-card-id" active>
        Test Card
      </Card>,
    );
    const element = container.querySelector('#test-card-id') as HTMLElement;

    // confirm it has hover styling
    expect(element).toHaveClass(activeCardStyles);

    // test for accessibility
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
