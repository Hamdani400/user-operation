import Card from "@/components/ui/card";
import UsersTable from "@/components/users/user-table";
import { getUsersWithActivity } from "@/lib/users";

export default async function Page() {
  const users = await getUsersWithActivity();

  console.log(users);

  return (
    <div className="w-full flex justify-center items-center h-screen">
      <Card className="w-1/2">
        <UsersTable users={users} />
      </Card>
    </div>
  );
}
