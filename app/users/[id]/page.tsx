import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

import { getUserById, getPostsByUser, getTodosByUser } from "@/lib/api";
import UserDetailsCard from "@/components/users/user-details-card";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const user = await getUserById(id);

  if (!user) {
    return {
      title: "User Not Found",
    };
  }

  return {
    title: `${user.name} | User Details`,
    description: `${user.name} details page`,
  };
}

export default async function UserPage({ params }: Props) {
  const { id } = await params;

  const [user, posts, todos] = await Promise.all([
    getUserById(id),
    getPostsByUser(id),
    getTodosByUser(id),
  ]);

  if (!user) {
    notFound();
  }

  return (
    <main
      className="
        min-h-screen
        px-4
        py-10
      "
    >
      <div
        className="
          mx-auto
          max-w-4xl
        "
      >
        <Link
          href="/users"
          className="
            mb-8
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-slate-200
            bg-white
            p-4
            text-sm
            font-medium
            text-slate-700
            shadow-sm
            transition
            hover:-translate-y-0.5
            hover:border-slate-300
            hover:shadow-md
          "
        >
          <ArrowLeft size={16} />
        </Link>

        <UserDetailsCard user={user} todos={todos} posts={posts} />
      </div>
    </main>
  );
}
