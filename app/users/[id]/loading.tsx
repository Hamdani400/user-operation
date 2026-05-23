import Card from "@/components/ui/card";

export default function Loading() {
  return (
    <main
      className="
        mx-auto
        max-w-3xl
        p-6
      "
    >
      <Card>
        <div className="animate-pulse space-y-6">
          <div>
            <div className="h-8 w-56 rounded bg-gray-200" />

            <div className="mt-3 h-4 w-24 rounded bg-gray-200" />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {Array.from({
              length: 6,
            }).map((_, index) => (
              <div key={index} className="space-y-2">
                <div className="h-4 w-20 rounded bg-gray-200" />

                <div className="h-5 w-full rounded bg-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </Card>
    </main>
  );
}
