"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <main className="p-6">
      <div
        className="
          mx-auto
          max-w-xl
          rounded-3xl
          border
          border-red-200
          bg-white
          p-8
          text-center
          shadow-lg
        "
      >
        <h2
          className="
            mb-2
            text-2xl
            font-semibold
            text-red-500
          "
        >
          Something went wrong
        </h2>

        <p className="text-gray-500">{error.message}</p>
      </div>
    </main>
  );
}
