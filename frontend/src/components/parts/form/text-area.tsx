'use client';

import React, { TextareaHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

export const baseInputStyles =
  'px-3 py-1.5 w-full text-gray-700 bg-white border border-solid rounded transition ease-in-out m-0 focus:outline-none bg-clip-padding';
export const cleanIputStyles = 'border-gray-300  focus:border-blue-md';
export const errorInputStyles = 'border-red-error  focus:border-red-error';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  errors?: FieldError;
  className?: string;
}

const TextArea = React.forwardRef(
  (
    { className = '', errors, ...rest }: TextAreaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>,
  ) => {
    const classes = twMerge(
      baseInputStyles,
      errors?.message ? errorInputStyles : cleanIputStyles,
      className,
    );

    return (
      <textarea
        ref={ref}
        id={rest.name}
        aria-invalid={errors?.message ? 'true' : 'false'}
        className={classes}
        rows={3}
        {...rest}
      />
    );
  },
);

TextArea.displayName = 'TextArea';

export default TextArea;
