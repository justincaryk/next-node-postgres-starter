import { LabelHTMLAttributes } from 'react';

import { isEmptyString } from '../../../utils/utils';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
  htmlFor: string;
  onClick?: () => void;
}

export default function Label({ text, htmlFor, onClick, ...rest }: LabelProps) {
  if (isEmptyString(htmlFor)) {
    throw new Error('htmlFor cannot be an empty string as it breaks accessibility');
  }

  return (
    <label
      {...(onClick
        ? {
            onClick: onClick,
            onKeyDown: onClick,
          }
        : {})}
      {...(!text ? { className: 'sr-only' } : {})}
      htmlFor={htmlFor}
      {...rest}
    >
      {text}
    </label>
  );
}
