'use client';

import React, {
  InputHTMLAttributes,
  KeyboardEvent,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
  useImperativeHandle,
  useRef,
} from 'react';
import { FieldError } from 'react-hook-form';

import Checkbox from './checkbox';
import Dropdown from './dropdown';
import Input from './input';
import Label from './label';
import Password from './password';
import TextArea from './text-area';

interface BaseFormFieldProps {
  label?: string;
  errors?: FieldError;
  name: string;
}

interface InputFormFieldProps extends BaseFormFieldProps, InputHTMLAttributes<HTMLInputElement> {
  type: 'input' | 'password' | 'text' | 'date' | 'email' | 'checkbox';
  name: string;
}

interface TextAreaFormFieldProps
  extends BaseFormFieldProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  type: 'textarea';
  name: string;
}

interface SelectFormFieldProps extends BaseFormFieldProps, SelectHTMLAttributes<HTMLSelectElement> {
  type: 'select';
  name: string;
  placeholder: string;
  options: {
    text: string;
    value?: string | number;
  }[];
}

type FormFieldProps = InputFormFieldProps | SelectFormFieldProps | TextAreaFormFieldProps;

const FormField = React.forwardRef(
  ({ label, errors, name, ...rest }: FormFieldProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    // Expose the inputRef through the forwarded ref
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const handleLabelClick = () => {
      inputRef?.current?.focus();
    };

    const handleKeydown = (e: KeyboardEvent<HTMLLabelElement>) => {
      if (e.key === 'Enter' || e.keyCode === 10) {
        inputRef?.current?.focus();
      }
    };

    // checkboxes use an inline label pattern unlike the rest.
    if (rest.type === 'checkbox') {
      return (
        <div className="space-y-2">
          <Checkbox
            aria-describedby={name}
            text={label || ''}
            errors={errors}
            name={name}
            ref={ref as React.Ref<HTMLInputElement>}
            {...rest}
          />
        </div>
      );
    }

    return (
      <div className="space-y-2">
        {label ? (
          <Label text={label} htmlFor={name} onClick={handleLabelClick} onKeyDown={handleKeydown} />
        ) : null}
        {rest.type === 'password' ? (
          <Password
            errors={errors}
            name={name}
            {...rest}
            ref={ref as React.Ref<HTMLInputElement>}
            aria-describedby={name}
          />
        ) : null}

        {rest.type === 'textarea' ? (
          <TextArea
            name={name}
            errors={errors}
            {...rest}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            aria-describedby={name}
          />
        ) : null}

        {rest.type === 'select' ? (
          <Dropdown
            name={name}
            errors={errors}
            {...rest}
            ref={ref as React.Ref<HTMLSelectElement>}
            aria-describedby={name}
          />
        ) : null}

        {rest.type === 'text' ||
        rest.type === 'input' ||
        rest.type === 'date' ||
        rest.type === 'email' ? (
          <Input
            errors={errors}
            name={name}
            {...rest}
            ref={ref as React.Ref<HTMLInputElement>}
            aria-describedby={name}
          />
        ) : null}

        <div
          className="text-red-error "
          role="alert"
          aria-label={name}
          data-testid={`signin-input-error-${name}`}
        >
          {errors?.message}
        </div>
      </div>
    );
  },
);

FormField.displayName = 'FormField';
export default FormField;
