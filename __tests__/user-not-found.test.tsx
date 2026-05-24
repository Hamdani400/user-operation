import { render, screen } from "@testing-library/react";

import NotFound from "@/app/users/[id]/not-found";

describe("User Not Found", () => {
  it("renders not found page", () => {
    render(<NotFound />);

    expect(screen.getByText(/user not found/i)).toBeInTheDocument();

    expect(screen.getByText(/does not exist/i)).toBeInTheDocument();
  });
});
