import React, { SelectHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import { capitalize } from '@/utils/utils';
import { baseInputStyles, cleanIputStyles, errorInputStyles } from './input';

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string;
  options: {
    text: string;
    value?: string | number;
  }[];
  className?: string;
  errors?: FieldError;
}

const Dropdown = React.forwardRef(
  (
    { options, className, placeholder, errors, ...rest }: DropdownProps,
    ref: React.ForwardedRef<HTMLSelectElement>,
  ) => {
    const classes = twMerge(
      baseInputStyles,
      errors?.message ? errorInputStyles : cleanIputStyles,
      className,
    );

    return (
      <select
        ref={ref}
        id={rest.name}
        className={classes}
        aria-invalid={errors?.message ? 'true' : 'false'}
        {...rest}
        defaultValue={''}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options?.map((opt) => (
          <option
            className="block px-4 py-2 text-sm text-gray-700"
            value={opt.value}
            key={opt.value}
          >
            {capitalize(opt.text)}
          </option>
        ))}
      </select>
    );
  },
);

Dropdown.displayName = 'Dropdown';

export default Dropdown;
