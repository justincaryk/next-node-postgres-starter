import { twMerge } from 'tailwind-merge';

interface TitleProps {
  text: string;
  className?: string;
}
export default function PageSubtitle({ text, className = '' }: TitleProps) {
  const classes = twMerge('text-blue-dark text-muted', className);
  return <div className={classes}>{text}</div>;
}
