export default function Section({
  title,
  children,
  className,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${className}`}>
      <h2
        className={`
            mb-4
            text-lg
            font-semibold
            text-gray-900
            `}
      >
        {title}
      </h2>

      <div
        className="
          grid
          gap-5
          md:grid-cols-2
        "
      >
        {children}
      </div>
    </div>
  );
}
