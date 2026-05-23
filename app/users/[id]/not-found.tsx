import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="
        flex
        min-h-[70vh]
        flex-col
        items-center
        justify-center
        p-6
        text-center
      "
    >
      <h1
        className="
          text-3xl
          font-bold
          text-gray-900
        "
      >
        User Not Found
      </h1>

      <p className="mt-3 text-gray-500">The requested user does not exist.</p>

      <Link
        href="/users"
        className="
          mt-6
          rounded-xl
          bg-white
          px-5
          py-3
          font-medium
          shadow-md
          text-gray-600
        "
      >
        Back to Users
      </Link>
    </main>
  );
}
