import React, { InputHTMLAttributes, useRef } from 'react';
import { FieldError } from 'react-hook-form';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  errors?: FieldError;
  text: string;
}

const Checkbox = React.forwardRef(
  ({ errors, text, ...rest }: CheckboxProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <div className="flex items-center">
        <input
          ref={ref}
          type="checkbox"
          id={rest.id}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          {...rest}
        />
        <label htmlFor={rest.id} className="ms-2">
          {text}
        </label>
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
