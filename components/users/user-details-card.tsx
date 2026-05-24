import { Building2, Globe, Mail, MapPin, Phone } from "lucide-react";
import StatCard from "@/components/ui/stat-card";
import Section from "@/components/ui/section";
import type { UserDetail } from "@/types/user";

interface UserDetailsCardProps {
  user: UserDetail;
  posts: any[];
  todos: any[];
}

export default function UserDetailsCard({
  user,
  posts,
  todos,
}: UserDetailsCardProps) {
  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-xl
      "
    >
      <div
        className="
          bg-linear-to-r
          from-blue-600
          to-indigo-600
          px-8
          py-10
          text-white
        "
      >
        <div
          className="
            flex
            flex-col
            gap-4
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div>
            <p
              className="
                mb-2
                text-sm
                font-medium
                uppercase
                tracking-widest
                text-blue-100
              "
            >
              User Profile
            </p>

            <h1
              className="
                text-4xl
                font-bold
              "
            >
              {user.name}
            </h1>

            <p
              className="
                mt-2
                text-lg
                text-blue-100
              "
            >
              @{user.username}
            </p>
          </div>

          <div
            className="
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              bg-white/20
              text-4xl
              font-bold
              backdrop-blur
            "
          >
            {user.name.charAt(0)}
          </div>
        </div>
      </div>

      <div
        className="
          grid
          gap-6
          p-8
          md:grid-cols-2
        "
      >
        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            p-6
          "
        >
          <h2
            className="
              mb-5
              text-lg
              font-semibold
              text-slate-800
            "
          >
            Contact Information
          </h2>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <Mail className="mt-1 text-blue-600" size={20} />

              <div>
                <p className="text-sm text-slate-500">Email</p>

                <p className="font-medium text-slate-800">{user.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="mt-1 text-blue-600" size={20} />

              <div>
                <p className="text-sm text-slate-500">Phone</p>

                <p className="font-medium text-slate-800">{user.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Globe className="mt-1 text-blue-600" size={20} />

              <div>
                <p className="text-sm text-slate-500">Website</p>

                <p className="font-medium text-slate-800">{user.website}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            p-6
          "
        >
          <h2
            className="
              mb-5
              text-lg
              font-semibold
              text-slate-800
            "
          >
            Company
          </h2>

          <div className="flex items-start gap-4">
            <Building2 className="mt-1 text-indigo-600" size={20} />

            <div>
              <p className="text-xl font-semibold text-slate-800">
                {user.company.name}
              </p>

              <p className="mt-2 italic text-slate-600">
                "{user.company.catchPhrase}"
              </p>

              <p className="mt-3 text-sm text-slate-500">{user.company.bs}</p>
            </div>
          </div>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            p-6
            md:col-span-2
          "
        >
          <h2
            className="
              mb-5
              text-lg
              font-semibold
              text-slate-800
            "
          >
            Address
          </h2>

          <div className="flex items-start gap-4">
            <MapPin className="mt-1 text-rose-600" size={20} />

            <div className="space-y-1">
              <p className="font-medium text-slate-800">
                {user.address.street}, {user.address.suite}
              </p>

              <p className="text-slate-600">
                {user.address.city}, {user.address.zipcode}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="
    grid
    gap-4
    md:grid-cols-3
    p-8
  "
      >
        <StatCard label="Posts" value={posts.length} />

        <StatCard
          label="Completed todo"
          value={todos.filter((todo) => todo.completed).length}
        />

        <StatCard
          label="Pending todo"
          value={todos.filter((todo) => !todo.completed).length}
        />
      </div>
      <div className="flex p-8 gap-4">
        <Section title="Recent Posts" className="w-1/2">
          <div className="space-y-4 md:col-span-2">
            {posts.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className="
            rounded-xl
            border
            border-gray-100
            bg-gray-50/60
            p-4
          "
              >
                <h3
                  className="
              font-semibold
              text-gray-900
            "
                >
                  {post.title}
                </h3>

                <p
                  className="
              mt-2
              text-sm
              leading-6
              text-gray-600
            "
                >
                  {post.body}
                </p>
              </div>
            ))}
          </div>
        </Section>
        <Section title="Recent Todos" className="w-1/2">
          <div className="space-y-3 md:col-span-2">
            {todos.slice(0, 6).map((todo) => (
              <div
                key={todo.id}
                className="
            flex
            items-start
            justify-between
            gap-4
            rounded-xl
            border
            border-gray-100
            bg-white/70
            p-4
          "
              >
                <p
                  className={`
              text-sm
              ${todo.completed ? "text-gray-400 line-through" : "text-gray-700"}
            `}
                >
                  {todo.title}
                </p>

                <span
                  className={`
              rounded-full
              px-2.5
              py-1
              text-xs
              font-medium
              ${
                todo.completed
                  ? "bg-green-100 text-green-700"
                  : "bg-orange-100 text-orange-700"
              }
            `}
                >
                  {todo.completed ? "Done" : "Pending"}
                </span>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
