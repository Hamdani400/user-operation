export default function StatCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div
      className="
        rounded-2xl
        bg-blue-50/70
        p-5
      "
    >
      <p
        className="
          text-sm
          text-gray-500
        "
      >
        {label}
      </p>

      <p
        className="
          mt-2
          text-3xl
          font-bold
          text-gray-900
        "
      >
        {value}
      </p>
    </div>
  );
}
