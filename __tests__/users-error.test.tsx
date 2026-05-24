import { render, screen } from "@testing-library/react";

import UsersError from "@/app/users/error";

describe("Users Error", () => {
  it("renders error message", () => {
    render(<UsersError error={new Error("Failed to fetch users")} />);

    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();

    expect(screen.getByText(/failed to fetch users/i)).toBeInTheDocument();
  });
});
