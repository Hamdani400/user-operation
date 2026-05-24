import { render, screen } from "@testing-library/react";

import Loading from "@/app/users/loading";

describe("Users Loading", () => {
  it("renders loading skeleton", () => {
    const { container } = render(<Loading />);

    expect(container.querySelector(".animate-pulse")).toBeInTheDocument();
  });
});
