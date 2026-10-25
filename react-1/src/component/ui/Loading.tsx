export const Spinner = ({
  className = " border-t-teal-600 border-b-teal-600",
  size = 'size-16',
}: Readonly<{ className?: string, size?: string }>) => {
  return (
    <>
      <div
        className={`${size} border-6 border-r-white bg-white border-white rounded-full animate-spin ${className}`}
      ></div>
      <span className="mt-4 text-teal-800 font-semibold text-lg">
        Loading...
      </span>
    </>
  );
};