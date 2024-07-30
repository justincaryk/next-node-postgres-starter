import React, { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  primary?: boolean;
  disabled?: boolean;
  asLink?: boolean;
  className?: string;
  loading?: boolean;
  children: string | React.ReactNode;
}

export default function Button({
  onClick,
  primary,
  loading,
  disabled,
  className = '',
  children,
}: Props) {
  const baseStyles = `w-full text-lg font-extra-bold px-6 py-2 border leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out`;
  const bgColor = primary ? 'bg-blue-light' : 'bg-white';
  const txtColor = primary ? 'text-black' : 'text-blue-dark';
  const hoverStyles = `${!loading ? (primary ? 'hover:bg-blue-md' : 'hover:bg-gray-200') : ''}`;
  const disabledStyles = disabled
    ? 'disabled:bg-gray-200 cursor-not-allowed hover:disabled:bg-gray-200'
    : '';
  const loadingStyles = loading ? 'cursor-not-allowed' : '';

  const classes = twMerge(
    baseStyles,
    bgColor,
    txtColor,
    disabledStyles,
    hoverStyles,
    loadingStyles,
    className,
  );

  return (
    <button
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (loading || disabled) {
          e.preventDefault();
          return null;
        }
        onClick?.(e);
      }}
      className={classes}
      {...(disabled ? { disabled: true } : {})}
    >
      {loading ? (
        <div
          className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
