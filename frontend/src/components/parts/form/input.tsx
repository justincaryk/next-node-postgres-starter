'use client';

import React, { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

export const baseInputStyles =
  'h-10 px-3 py-1.5 w-full text-gray-700 bg-white border border-solid rounded transition ease-in-out m-0 focus:outline-none bg-clip-padding';
export const cleanIputStyles = 'border-gray-300  focus:border-blue-md';
export const errorInputStyles = 'border-red-error  focus:border-red-error';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errors?: FieldError;
  className?: string;
}

const Input = React.forwardRef(
  (
    { type, className = '', errors, ...rest }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    const classes = twMerge(
      baseInputStyles,
      errors?.message ? errorInputStyles : cleanIputStyles,
      className,
    );

    return (
      <input
        ref={ref}
        id={rest.name}
        type={type}
        aria-invalid={errors?.message ? 'true' : 'false'}
        className={classes}
        {...rest}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;
