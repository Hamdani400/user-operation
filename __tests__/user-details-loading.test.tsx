import { render } from "@testing-library/react";

import Loading from "@/app/users/[id]/loading";

describe("User Details Loading", () => {
  it("renders loading skeleton", () => {
    const { container } = render(<Loading />);

    expect(container.querySelector(".animate-pulse")).toBeInTheDocument();
  });
});
