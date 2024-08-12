interface SuccessBannerProps {
  children: React.ReactNode;
}
export default function SuccessBanner({ children }: SuccessBannerProps) {
  return (
    <div
      className="p-4 w-full rounded bg-green-md text-black shadow-lg shadow-slate-400"
      role="alert"
      aria-atomic="true"
    >
      {children}
    </div>
  );
}
