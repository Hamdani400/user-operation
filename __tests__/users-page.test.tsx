import { getUserById } from "@/lib/api";

global.fetch = jest.fn();

describe("API", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns user data", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,

      json: async () => ({
        id: 1,
        name: "Leanne",
      }),
    });

    const result = await getUserById("1");

    expect(result.name).toBe("Leanne");
  });

  it("returns null for missing user", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,

      json: async () => ({}),
    });

    const result = await getUserById("999");

    expect(result).toBeNull();
  });

  it("throws on failed request", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 500,
    });

    await expect(getUserById("1")).rejects.toThrow("Failed to fetch user");
  });
});
