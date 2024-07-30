import { BaseHTMLAttributes, KeyboardEvent } from 'react';
import { twMerge } from 'tailwind-merge';

export const baseCardStyles =
  'rounded-lg px-4 py-2 cursor-pointer shadow-slate-500 border-none shadow-md';
export const hoverCardStyles = 'hover:shadow-orange-pop';
export const inactiveCardStyles = 'bg-blue-dark text-white';
export const activeCardStyles = 'bg-green-md text-black';

interface CardProps extends BaseHTMLAttributes<HTMLLIElement> {
  onClick?: () => void;
  active?: boolean;
  className?: string;
  id?: string;
  children?: string | React.ReactNode;
}

export default function Card({ onClick, id, active = false, className = '', children }: CardProps) {
  const classes = twMerge(
    baseCardStyles,
    active ? activeCardStyles : inactiveCardStyles,
    hoverCardStyles,
    className,
  );

  const onEnter = (e: KeyboardEvent<HTMLDivElement>) => {
    if (onClick) {
      if (e.key === '13' || e.keyCode === 13) {
        onClick?.();
      }
    }
  };

  return (
    <div
      className={classes}
      role={onClick ? 'button' : 'presentation'}
      id={id}
      // accessibility
      {...(onClick
        ? {
            onClick: onClick,
            tabIndex: 0,
            onKeyDown: onEnter,
            'aria-pressed': active,
            'aria-live': 'polite',
          }
        : {})}
    >
      {children}
    </div>
  );
}
