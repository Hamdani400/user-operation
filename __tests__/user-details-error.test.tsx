import { render, screen } from "@testing-library/react";

import UsersError from "@/app/users/[id]/error";

describe("User Details Error", () => {
  it("renders error state", () => {
    render(<UsersError error={new Error("Failed to fetch user")} />);

    expect(screen.getByText(/failed to load user/i)).toBeInTheDocument();

    expect(screen.getByText(/failed to fetch user/i)).toBeInTheDocument();
  });
});
