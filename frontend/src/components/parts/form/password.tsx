'use client';

import React, { InputHTMLAttributes, KeyboardEvent, useState } from 'react';
import { FieldError } from 'react-hook-form';

import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Input from './input';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errors?: FieldError;
}

const Password = React.forwardRef(
  ({ type, ...rest }: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const [revealed, setRevealed] = useState(false);

    const togglePasswordReveal = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent> | KeyboardEvent<HTMLButtonElement>,
    ) => {
      e.stopPropagation();
      setRevealed(!revealed);
    };

    return (
      <div className="w-full flex justify-end items-center relative">
        <Input
          type={revealed ? 'text' : type}
          ref={ref}
          {...rest}
          // ensure spellcheck services don't send password over plain text
          spellCheck={false}
        />
        {/* wrapped in a button element for accessibility */}
        <button
          className="w-8 absolute right-2 cursor-pointer opacity-50 border-none"
          title={revealed ? 'hide password' : 'show password'}
          role="switch"
          aria-checked={revealed}
          aria-live="polite"
          onClick={togglePasswordReveal}
          // do not let it submit the form
          type="button"
        >
          {revealed ? <EyeSlashIcon /> : <EyeIcon />}
        </button>
      </div>
    );
  },
);

Password.displayName = 'Password';

export default Password;
