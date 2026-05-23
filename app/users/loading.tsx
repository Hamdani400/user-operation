export default function Loading() {
  return (
    <main className="p-6">
      <div
        className="
          mx-auto
          max-w-5xl
          animate-pulse
          rounded-3xl
          bg-white/80
          p-6
          shadow-xl
        "
      >
        <div className="mb-6 h-8 w-48 rounded bg-gray-200" />

        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="
                grid
                grid-cols-3
                gap-4
              "
            >
              <div className="h-6 rounded bg-gray-200" />
              <div className="h-6 rounded bg-gray-200" />
              <div className="h-6 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
