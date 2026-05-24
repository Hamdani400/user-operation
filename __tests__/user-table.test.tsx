import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import UsersTable from "@/components/users/user-table";

import { UsersFilterProvider } from "@/providers/users-filter-provider";

const mockUsers = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "leanne@test.com",
    website: "hildegard.org",

    activity: {
      totalPosts: 10,
      completedTodos: 7,
      pendingTodos: 3,
    },
  },

  {
    id: 2,
    name: "Ervin Howell",
    email: "ervin@test.com",
    website: "anastasia.net",

    activity: {
      totalPosts: 5,
      completedTodos: 1,
      pendingTodos: 9,
    },
  },
];

describe("UsersTable", () => {
  it("renders users with activity", () => {
    render(
      <UsersFilterProvider>
        <UsersTable users={mockUsers} />
      </UsersFilterProvider>,
    );

    expect(screen.getAllByText("Leanne Graham").length).toBeGreaterThan(0);

    expect(screen.getAllByText(/Posts:/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Done:/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Pending:/).length).toBeGreaterThan(0);
  });

  it("filters users by search", async () => {
    render(
      <UsersFilterProvider>
        <UsersTable users={mockUsers} />
      </UsersFilterProvider>,
    );

    const input = screen.getByPlaceholderText(/search name or email/i);

    await userEvent.type(input, "ervin");

    expect(screen.getAllByText("Ervin Howell").length).toBeGreaterThan(0);

    expect(screen.queryByText("Leanne Graham")).not.toBeInTheDocument();
  });

  it("sorts by most pending todos", async () => {
    render(
      <UsersFilterProvider>
        <UsersTable users={mockUsers} />
      </UsersFilterProvider>,
    );

    const select = screen.getByRole("combobox");

    await userEvent.selectOptions(select, "most-pending");

    const names = screen.getAllByRole("link");

    expect(names[0]).toHaveTextContent("Ervin Howell");
  });

  it("shows empty state", async () => {
    render(
      <UsersFilterProvider>
        <UsersTable users={mockUsers} />
      </UsersFilterProvider>,
    );

    const input = screen.getByPlaceholderText(/search name or email/i);

    await userEvent.type(input, "zzzzzzz");

    expect(screen.getAllByText(/no users found/i).length).toBeGreaterThan(0);
  });
});
