"use client";

import Link from "next/link";
import { useMemo } from "react";

import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";

import { useUsersFilter } from "@/providers/users-filter-provider";
import { User } from "@/types/user";
import { SortType } from "@/types/user";
import { useRouter } from "next/navigation";

interface Props {
  users: User[];
}

export default function UsersTable({ users }: Props) {
  const { search, setSearch, sortBy, setSortBy } = useUsersFilter();

  const router = useRouter();
  const filteredUsers = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    const filtered = users.filter((user) => {
      return (
        user.name.toLowerCase().includes(keyword) ||
        user.email.toLowerCase().includes(keyword)
      );
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name-desc":
          return b.name.localeCompare(a.name);

        case "most-pending":
          return b.activity.pendingTodos - a.activity.pendingTodos;

        case "most-completed":
          return b.activity.completedTodos - a.activity.completedTodos;

        case "name-asc":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [users, search, sortBy]);

  return (
    <div className="space-y-4">
      <div
        className="
          flex
          flex-col
          gap-3
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <div className="relative w-full md:max-w-sm">
          <input
            type="text"
            placeholder="Search name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              rounded-xl
              border
              border-white/40
              bg-white/80
              px-4
              py-3
              text-sm
              outline-none
              text-gray-800
              backdrop-blur-sm
              transition
              placeholder:text-gray-400
              focus:border-blue-300
              focus:ring-4
              focus:ring-blue-100
            "
          />
        </div>

        <div
          className="
    flex
    flex-col
    gap-3
    md:flex-row
    md:items-center
    md:justify-between
  "
        >
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortType)}
            className="
      rounded-xl
      border
      border-white/40
      bg-white/80
      px-4
      py-3
      text-sm
      font-medium
      text-gray-700
      outline-none
      backdrop-blur-sm
      transition
      focus:border-blue-300
      focus:ring-4
      focus:ring-blue-100
    "
          >
            <option value="name-asc">Name A-Z</option>

            <option value="name-desc">Name Z-A</option>

            <option value="most-pending">Most Pending Todos</option>

            <option value="most-completed">Most Completed Todos</option>
          </select>
        </div>
      </div>

      <div className="overflow-hidden p-0">
        <div className="overflow-x-auto hidden md:block">
          <table className="w-full">
            <thead
              className="
                border-b
                bg-gray-50/80
                text-sm
                text-gray-500
              "
            >
              <tr>
                <th className="px-6 py-4 text-left font-medium">Name</th>

                <th className="px-6 py-4 text-left font-medium">Email</th>

                <th className="px-6 py-4 text-left font-medium">Website</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="
                      px-6
                      py-14
                      text-center
                      text-sm
                      text-gray-500
                    "
                  >
                    No users found.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    onClick={() => router.push(`/users/${user.id}`)}
                    className="
                    cursor-pointer
                      border-b
                      border-gray-100
                      transition
                      hover:bg-blue-50/40
                    "
                  >
                    <td className="px-6 py-5">
                      <div
                        className="
                            font-semibold
                            text-gray-900
                            max-w-[250]
                            truncate
                          "
                      >
                        {user.name}
                      </div>

                      <div className="mt-2 flex flex-wrap gap-2">
                        <Badge>Posts: {user.activity.totalPosts}</Badge>

                        <Badge
                          className="
                              bg-green-100
                              text-green-700
                            "
                        >
                          Done: {user.activity.completedTodos}
                        </Badge>

                        <Badge
                          className="
                              bg-orange-100
                              text-orange-700
                            "
                        >
                          Pending: {user.activity.pendingTodos}
                        </Badge>
                      </div>
                    </td>

                    <td
                      className="
                        px-6
                        py-5
                        text-gray-600
                      "
                    >
                      {user.email}
                    </td>

                    <td
                      className="
                        px-6
                        py-5
                        text-blue-600
                      "
                    >
                      {user.website}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="md:hidden">
          {filteredUsers.length === 0 ? (
            <tr>
              <td
                colSpan={3}
                className="
                      px-6
                      py-14
                      text-center
                      text-sm
                      text-gray-500
                    "
              >
                No users found.
              </td>
            </tr>
          ) : (
            <div className="overflow-auto max-h-[70vh]">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="mb-3 border py-5 px-2 rounded-md border-white/40 shadow-[0_2px_12px_rgba(15,23,42,0.06)]"
                >
                  <Link href={`/users/${user.id}`}>
                    <h1 className="text-lg text-gray-700 font-semibold">
                      {user.name}
                    </h1>
                    <p className="text-gray-500 text-sm">{user.email}</p>
                    <p className="text-gray-500 text-sm">{user.website}</p>
                    <div className="flex mt-2 flex-wrap gap-2">
                      <Badge>Posts: {user.activity.totalPosts}</Badge>

                      <Badge
                        className="
                                bg-green-100
                                text-green-700
                              "
                      >
                        Done: {user.activity.completedTodos}
                      </Badge>

                      <Badge
                        className="
                                bg-orange-100
                                text-orange-700
                              "
                      >
                        Pending: {user.activity.pendingTodos}
                      </Badge>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
