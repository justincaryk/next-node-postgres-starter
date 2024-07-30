import { ClassNameValue, twMerge } from 'tailwind-merge';

interface ProgressProps {
  score: 0 | 1 | 2 | 3 | 4;
}

export const scoreStyle: ClassNameValue[] = [
  'bg-gray-400',
  'bg-red-error',
  'bg-orange-pop',
  'bg-green-md',
  'bg-blue-light',
];

export default function ProgressBar({ score }: ProgressProps) {
  const baseStyle: ClassNameValue = 'h-2 w-full';

  const getSegmentStyle = (segmentIndex: number): string => {
    if (segmentIndex > score) {
      return twMerge(baseStyle, scoreStyle[0]);
    }

    return twMerge(baseStyle, scoreStyle[score]);
  };

  return (
    <div
      className="w-full h-2 flex flex-row"
      role="progressbar"
      aria-valuenow={score}
      aria-valuemin={0}
      aria-valuemax={4}
      aria-label={`Progress: ${score} out of 4`}
    >
      <div className={getSegmentStyle(1)} data-testid="progress-bar-segment" />
      <div className={getSegmentStyle(2)} data-testid="progress-bar-segment" />
      <div className={getSegmentStyle(3)} data-testid="progress-bar-segment" />
      <div className={getSegmentStyle(4)} data-testid="progress-bar-segment" />
    </div>
  );
}
