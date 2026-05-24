import { render, screen } from "@testing-library/react";

import UserDetailsCard from "@/components/users/user-details-card";

const mockUser = {
  name: "Leanne Graham",
  username: "Bret",
  email: "leanne@test.com",
  phone: "123456",
  website: "hildegard.org",

  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server",
    bs: "this is bs",
  },

  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998",
  },
};

const mockPosts = [
  {
    id: 1,
    title: "Test Post",
    body: "Test body",
  },
];

const mockTodos = [
  {
    id: 1,
    title: "Test Todo",
    completed: false,
  },
];

describe("UserDetailsCard", () => {
  it("renders user details", () => {
    render(
      <UserDetailsCard user={mockUser} posts={mockPosts} todos={mockTodos} />,
    );

    expect(screen.getByText("Leanne Graham")).toBeInTheDocument();

    expect(screen.getByText("Romaguera-Crona")).toBeInTheDocument();
  });

  it("renders posts and todos", () => {
    render(
      <UserDetailsCard user={mockUser} posts={mockPosts} todos={mockTodos} />,
    );

    expect(screen.getByText("Test Post")).toBeInTheDocument();

    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });
});
