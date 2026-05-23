"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <main className="p-6">
      <div
        className="
          rounded-2xl
          bg-white
          p-8
          text-center
          shadow-lg
        "
      >
        <h2
          className="
            text-lg
            font-semibold
            text-red-500
          "
        >
          Failed to load user
        </h2>

        <p className="mt-2 text-gray-500">{error.message}</p>
      </div>
    </main>
  );
}
